import { Component, OnInit, NgZone } from "@angular/core";
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";
import { IRegisterModel } from "app/models/user.model";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styles: []
})
export class RegisterComponent implements OnInit {
	form: IRegisterModel = {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		passwordconfirm: ""
	};
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
		this.authService.register(this.form).subscribe((res) => {
			this.router.navigateByUrl("/auth/registration-confirmed");
		});
	};
}
