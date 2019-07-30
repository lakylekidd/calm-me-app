import * as JWT from "jwt-decode";

export interface JwtPayload {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
}

/**
 * Decodes a token
 * @param token the token
 */
export const decode = (token: string): JwtPayload => {
	const jwt = JWT(token);
	console.log(jwt);
	return jwt as JwtPayload;
};
