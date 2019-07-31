import { Component, OnInit, HostListener } from "@angular/core";
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
	) {
		this.getScreenSize();
	}

	checkIfMobile = () => {
		if (this.scrWidth <= 1200) {
			this.displayUserMenu = true;
		}
	};

	toggleOverlay() {
		this.overlay = !this.overlay;
	}

	toggleUserMenu(e) {
		this.displayUserMenu = !this.displayUserMenu;
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

	// Declare height and width variables
	scrHeight: any;
	scrWidth: any;

	/**
	 * Will retrieve the window size and save it as a variable
	 * @param event 
	 */
	@HostListener("window:resize", [ "$event" ])
	getScreenSize(event?) {
		this.scrHeight = window.innerHeight;
		this.scrWidth = window.innerWidth;
		this.checkIfMobile();
	}

	/**
	 * Will check if the user clicked anywhere on the window
	 * @param event 
	 */
	@HostListener("document:click", [ "$event" ])
	documentClick(event) {
		if (event.target.id !== "user-data-toggler") {
			this.displayUserMenu = false;
		}
	}
}
