import { Injectable } from "@angular/core";

@Injectable()
export class BaseService {
	public apiBaseUrl: string = "http://localhost:8080/api/v1";

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
}
