import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/services/auth.service";

@Component({
	selector: "app-logout",
	templateUrl: "./logout.component.html",
	styleUrls: [ "./logout.component.css" ]
})
export class LogoutComponent {
	constructor(private readonly authService: AuthService) {
		this.authService.logout();
	}
}
