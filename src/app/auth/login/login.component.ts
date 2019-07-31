import { Component, OnInit, NgZone } from "@angular/core";
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
		this.authService.login(this.form).subscribe((res) => {
			this.ngZone.run(() => this.router.navigateByUrl("/main"));
		});
	};
}
