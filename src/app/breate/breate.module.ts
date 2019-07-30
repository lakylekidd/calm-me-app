import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreateComponent } from './breate.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BreateComponent }
    ])
  ],
  declarations: [BreateComponent],
  exports: [BreateComponent]
})
export class BreateModule {

 }
