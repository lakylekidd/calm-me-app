import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { IUser, ILoginModel, IRegisterModel } from "app/models/user.model";
import { Observable, BehaviorSubject, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { retry, catchError, map } from "rxjs/operators";
import { decode, JwtPayload } from "app/auth/helpers/jwt";

const USER_DATA_ID = "USER_DATA";

@Injectable()
export class AuthService extends BaseService {
	private currentUserSubject: BehaviorSubject<JwtPayload>;
	public currentUser: Observable<JwtPayload>;

	public get currentUserValue(): JwtPayload {
		return this.currentUserSubject.value;
	}

	// Http Headers
	httpOptions = {
		headers: new HttpHeaders({
			"Content-Type": "application/json"
		})
	};

	constructor(private readonly http: HttpClient) {
		super();

		this.currentUserSubject = new BehaviorSubject<JwtPayload>(
			this.getUserData()
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	login = (loginData: ILoginModel) => {
		return this.http
			.post(`${this.apiBaseUrl}/auth`, JSON.stringify(loginData), {
				...this.httpOptions,
				responseType: "text"
			})
			.pipe(retry(1), catchError(this.errorHandler))
			.pipe(
				map((res) => {
					// Check if we got a response
					if (res) {
						// Process it
						const result = decode(res);
						this.saveUserData(result);
						this.saveToLocal("TOKEN", res);
						this.currentUserSubject.next(result);
						return true;
					}
					return false;
				})
			);
	};

	register = (registerData: IRegisterModel) => {
		return this.http
			.post(`${this.apiBaseUrl}/users`, registerData, this.httpOptions)
			.pipe(retry(1), catchError(this.errorHandler))
			.pipe(
				map((res) => {
					// Check if we got a response
					if (res) {
						return true;
					}
					return false;
				})
			);
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
