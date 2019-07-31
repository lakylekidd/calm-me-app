import {
	NgModule,
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { TipsComponent } from "./tips.component";
import { RouterModule } from "@angular/router";
import { TipsService } from "./services/tips.service";
import { TipItemComponent } from "./tip-item/tip-item.component";

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([ { path: "", component: TipsComponent } ])
	],
	providers: [ TipsService ],
	declarations: [ TipsComponent, TipItemComponent ],
	//schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
	exports: [ TipsComponent, TipItemComponent ]
})
export class TipsModule {}
