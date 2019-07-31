import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { IUser, ILoginModel, IRegisterModel } from "app/models/user.model";
import { Observable, BehaviorSubject } from "rxjs";
import { Http } from "@angular/http";
import { map } from "rxjs/operator/map";
import { decode, JwtPayload } from "app/auth/helpers/jwt";

const USER_DATA_ID = "USER_DATA";

@Injectable()
export class AuthService extends BaseService {
	private currentUserSubject: BehaviorSubject<JwtPayload>;
	public currentUser: Observable<JwtPayload>;

	public get currentUserValue(): JwtPayload {
		return this.currentUserSubject.value;
	}

	constructor(private readonly http: Http) {
		super();

		this.currentUserSubject = new BehaviorSubject<JwtPayload>(
			this.getUserData()
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	login = (loginData: ILoginModel) => {
		return this.http
			.post(`${this.apiBaseUrl}/auth`, loginData)
			.toPromise()
			.then((res) => {
				// Check if we got a response
				if (res.status === 200) {
					// Get the JWK
					const jwk = res.text();
					// Process it
					const result = decode(jwk);
					this.saveUserData(result);
					this.saveToLocal("TOKEN", jwk);
					this.currentUserSubject.next(result);
					return true;
				}
				return false;
			})
			.catch((err) => {
				console.log("Error: ", err);
			});
	};

	register = (registerData: IRegisterModel) => {
		return this.http
			.post(`${this.apiBaseUrl}/users`, registerData)
			.toPromise()
			.then((res) => {
				// Check if we got a response
				if (res.status === 201) {
					return true;
				}
				return false;
			})
			.catch((err) => {
				console.log("Error: ", err);
			});
	};

	logout() {
		// Remove user from local storage to log user out
		this.removeUserData();
		this.currentUserSubject.next(null);
	}

	/**
	 * Saves the user data in the local storage
	 */
	private saveUserData = (userData) => {
		this.saveToLocal(USER_DATA_ID, JSON.stringify(userData));
	};
	/**
	 * Removes the user data from local storage
	 */
	private removeUserData = () => {
		this.removeFromLocal(USER_DATA_ID);
	};
	/**
	 * Gets the user data from local storage
	 */
	private getUserData = (): JwtPayload => {
		const data = this.getFromLocal(USER_DATA_ID);
		return JSON.parse(data);
	};
}
