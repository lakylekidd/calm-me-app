import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { JwtPayload } from "app/auth/helpers/jwt";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styles: []
})
export class NavComponent implements OnInit {
	overlay: boolean = false;
	authenticated: boolean = false;
	displayUserMenu: boolean = false;
	userData: JwtPayload;

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router
	) {}

	toggleOverlay() {
		this.overlay = !this.overlay;
	}

	handleLoginClick = () => {
		this.router.navigate([ "/auth/login" ]);
	};

	handleRegisterClick = () => {
		this.router.navigate([ "/auth/register" ]);
	};

	ngOnInit() {
		this.authService.currentUser.subscribe((v) => {
			this.authenticated = v !== null;
			this.userData = v;
		});
	}
}
