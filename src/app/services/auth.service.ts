import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { IUser } from "app/models/user.model";
import { Observable, BehaviorSubject } from "rxjs";
import { Http } from "@angular/http";
import { map } from "rxjs/operator/map";

const USER_DATA_ID = "USER_DATA";

@Injectable()
export class AuthService extends BaseService {
	private currentUserSubject: BehaviorSubject<IUser>;
	public currentUser: Observable<IUser>;

	constructor(private readonly http: Http) {
		super();

		this.currentUserSubject = new BehaviorSubject<IUser>(
			this.getUserData()
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	login = (email: string, password: string) => {
		return this.http
			.post(`${this.apiBaseUrl}/auth`, {
				email,
				password
			})
			.toPromise()
			.then((res) => {
				// Check if we got a response
				if (res.status === 200) {
					// Get the JWK
					//const jwk = res.json().jwk;
					console.log(res);
				}
			})
			.catch((err) => {
				console.log("Error: ", err);
			});

		// return this.http
		// 	.post<any>(`${this.apiBaseUrl}/users/authenticate`, {
		// 		username: email,
		// 		password
		// 	})
		// 	.pipe(
		// 		map((user) => {
		// 			// login successful if there's a jwt token in the response
		// 			if (user && user.token) {
		// 				// store user details and jwt token in local storage to keep user logged in between page refreshes
		// 				localStorage.setItem(
		// 					"currentUser",
		// 					JSON.stringify(user)
		// 				);
		// 				this.currentUserSubject.next(user);
		// 			}

		// 			return user;
		// 		})
		// 	);
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
		this.saveToLocal(USER_DATA_ID, userData);
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
	private getUserData = (): IUser => {
		return JSON.parse(this.getFromLocal(USER_DATA_ID));
	};
}
