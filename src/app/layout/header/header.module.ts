import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    LogoComponent,
    NavComponent,
    UserInfoComponent
  ],
  exports: [ 
    HeaderComponent,
    LogoComponent,
    NavComponent
  ]
})
export class HeaderModule { }
