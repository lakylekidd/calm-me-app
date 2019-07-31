import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExercisesComponent } from "./exercises/exercises.component";
import { MeditateComponent } from "./meditate/meditate.component";
import { MainComponent } from "./main/main.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
	{
		path: "main",
		component: MainComponent,
		children: [
			{ path: "", component: WelcomeComponent },
			{ path: "meditate", component: MeditateComponent },
			{ path: "exercises", component: ExercisesComponent },
			{ path: "tips", loadChildren: "./tips/tips.module#TipsModule" }
		]
	},
	{ path: "breathe", loadChildren: "./breate/breate.module#BreateModule" },
	{
		path: "calendar",
		loadChildren: "./calendar/calendar.module#CalendarModule"
	},
	{ path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
	{ path: "", redirectTo: "main", pathMatch: "full" }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
