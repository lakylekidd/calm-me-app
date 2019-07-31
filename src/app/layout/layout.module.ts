import {
	NgModule,
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "./header/header.module";
import { ContentComponent } from "./content/content.component";

@NgModule({
	imports: [ CommonModule, HeaderModule ],
	exports: [ HeaderModule, ContentComponent ],
	declarations: [ ContentComponent ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class LayoutModule {}
