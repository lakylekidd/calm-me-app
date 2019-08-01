import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "./header/header.module";
import { ContentComponent } from "./content/content.component";

@NgModule({
	imports: [ CommonModule, HeaderModule ],
	exports: [ HeaderModule, ContentComponent ],
	declarations: [ ContentComponent ]
})
export class LayoutModule {}
