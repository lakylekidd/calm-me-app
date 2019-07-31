export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
}

export interface ILoginModel {
	email: string;
	password: string;
}

export interface IRegisterModel {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	passwordconfirm: string;
}
