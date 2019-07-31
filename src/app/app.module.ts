import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

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
import { ArticleModule, IArticleService } from "./article/article.module";
import { ArticleService } from "./services/article.service";
import { ArticleComponent } from './meditate/article/article.component';

@NgModule({
	declarations: [
		AppComponent,
		MeditateComponent,
		ExercisesComponent,
		MainComponent,
		WelcomeComponent,
		ArticleComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		LayoutModule,
		BreateModule,
		TipsModule,
		CalendarModule,
		ArticleModule
	],
	providers: [
		AuthService,
		ArticleService,
		{ provide: "IArticleService", useClass: ArticleService }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
