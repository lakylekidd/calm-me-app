import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { BreateModule } from "./breate/breate.module";
import { LayoutModule } from "./layout/layout.module";
import { AppRoutingModule } from "./app-routing.module";
import { MeditateComponent } from "./meditate/meditate.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { TipsModule } from "./tips/tips.module";
import { MainComponent } from "./main/main.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AuthService } from "./services/auth.service";
import { CalendarModule } from "./calendar/calendar.module";
import { ArticleModule } from "./article/article.module";

@NgModule({
	declarations: [
		AppComponent,
		MeditateComponent,
		ExercisesComponent,
		MainComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		LayoutModule,
		BreateModule,
		TipsModule,
		CalendarModule,
		ArticleModule
	],
	providers: [ AuthService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
