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
		private readonly router: Router,
		private ngZone: NgZone
	) {}

	// Only for debugging. Will be removed from production
	get diagnostic() {
		return JSON.stringify(this.form);
	}

	ngOnInit() {}

	onSubmit = () => {
		this.submitted = true;
		this.authService.register(this.form).subscribe((res) => {
			console.log("Log in called", res);
			this.ngZone.run(() => this.router.navigateByUrl("/issues-list"));
		});
		// .then((success) => {
		// 	if (success) {
		// 		// Redirect to Main Page
		// 		this.router.navigate([ "/auth/registration-confirmed" ]);
		// 	}
		// });
	};
}
