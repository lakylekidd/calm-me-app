import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { MeditateComponent } from './meditate/meditate.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'meditate', component: MeditateComponent },
      { path: 'exercises', component: ExercisesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}