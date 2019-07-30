import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styles: []
})
export class NavComponent implements OnInit {
	overlay: boolean = false;

	constructor(private readonly router: Router) {}

	toggleOverlay() {
		this.overlay = !this.overlay;
	}

	handleLoginClick = () => {
		this.router.navigate([ "/auth/login" ]);
	};

	handleRegisterClick = () => {
		this.router.navigate([ "/auth/register" ]);
	};

	ngOnInit() {}
}
