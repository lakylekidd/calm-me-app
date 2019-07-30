import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { MeditateComponent } from './meditate/meditate.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'meditate', component: MeditateComponent },
      { path: 'exercises', component: ExercisesComponent },
    ]
  },
  { path: 'breathe', loadChildren: './breate/breate.module#BreateModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}