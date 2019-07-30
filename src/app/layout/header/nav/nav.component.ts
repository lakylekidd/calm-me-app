import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/services/auth.service";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styles: []
})
export class NavComponent implements OnInit {
	overlay: boolean = false;

	constructor(private readonly authService: AuthService) {}

	toggleOverlay() {
		this.overlay = !this.overlay;
	}

	handleLoginClick = () => {
		this.authService.login("", "");
	};

	ngOnInit() {}
}
