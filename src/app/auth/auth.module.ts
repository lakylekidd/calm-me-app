import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "app/layout/layout.module";
import { LogoutComponent } from "./logout/logout.component";

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: "",
				component: AuthComponent,
				children: [
					{ path: "login", component: LoginComponent },
					{ path: "register", component: RegisterComponent },
					{ path: "logout", component: LogoutComponent },
					{ path: "", redirectTo: "login", pathMatch: "full" },
					{ path: "**", redirectTo: "login", pathMatch: "full" }
				]
			}
		])
	],
	declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent,
		LogoutComponent
	],
	exports: [ AuthComponent, LoginComponent, RegisterComponent ]
})
export class AuthModule {}
