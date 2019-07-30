import { Component, OnInit } from "@angular/core";
import { ILoginModel } from "app/models/user.model";
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styles: []
})
export class LoginComponent implements OnInit {
	form: ILoginModel = { email: "", password: "" };
	submitted: boolean = false;

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router
	) {}

	// Only for debugging. Will be removed from production
	get diagnostic() {
		return JSON.stringify(this.form);
	}

	ngOnInit() {}

	onSubmit = () => {
		this.submitted = true;
		this.authService.login(this.form).then((success) => {
			if (success) {
				// Redirect to Main Page
				this.router.navigate([ "/main" ]);
			}
		});
	};
}
