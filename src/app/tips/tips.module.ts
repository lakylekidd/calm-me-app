import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsComponent } from './tips.component';
import { RouterModule } from '@angular/router';
import { TipsService } from './services/tips.service';
import { TipItemComponent } from './tip-item/tip-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TipsComponent }
    ])
  ],
  providers: [
    TipsService
  ],
  declarations: [
    TipsComponent,
    TipItemComponent    
  ]
})
export class TipsModule { }
