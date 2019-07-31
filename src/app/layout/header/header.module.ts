import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { LogoComponent } from "./logo/logo.component";
import { NavComponent } from "./nav/nav.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { RouterModule } from "@angular/router";
import {
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA
} from "@angular/compiler/src/core";

@NgModule({
	imports: [ CommonModule, RouterModule ],
	declarations: [
		HeaderComponent,
		LogoComponent,
		NavComponent,
		UserInfoComponent
	],
	exports: [ HeaderComponent, LogoComponent, NavComponent ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class HeaderModule {}
