import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExercisesComponent } from "./exercises/exercises.component";
import { MeditateComponent } from "./meditate/meditate.component";
import { MainComponent } from "./main/main.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ArticleComponent } from "./meditate/article/article.component";

const routes: Routes = [
	{
		path: "main",
		component: MainComponent,
		children: [
			{ path: "", component: WelcomeComponent },
			{ path: "meditate", component: MeditateComponent },
			{ path: "article", component: ArticleComponent },
			{ path: "exercises", component: ExercisesComponent },
			{
				path: "tips",
				loadChildren: () =>
					import("./tips/tips.module").then((m) => m.TipsModule)
			}
		]
	},
	{
		path: "breathe",
		loadChildren: () =>
			import("./breate/breate.module").then((m) => m.BreateModule)
	},
	{
		path: "calendar",
		loadChildren: () =>
			import("./calendar/calendar.module").then((m) => m.CalendarModule)
	},
	{
		path: "auth",
		loadChildren: () =>
			import("./auth/auth.module").then((m) => m.AuthModule)
	},
	{ path: "", redirectTo: "main", pathMatch: "full" }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
