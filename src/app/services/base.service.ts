import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()
export class BaseService {
	// public apiBaseUrl: string = "http://localhost:8080/api/v1";
	public apiBaseUrl: string = 'https://calm-me-api.herokuapp.com/api/v1';

	constructor() {}

	saveToLocal = (key, data) => {
		localStorage.setItem(key, data);
	};

	getFromLocal = (key) => {
		return localStorage.getItem(key);
	};

	removeFromLocal = (key) => {
		localStorage.removeItem(key);
	};

	// Error handling
	errorHandler = (error) => {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			// Get client-side error
			errorMessage = error.error.message;
		} else {
			// Get server-side error
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		console.log(error);
		return throwError(errorMessage);
	};
}
