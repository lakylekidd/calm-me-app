import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { ContentComponent } from './content/content.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    HeaderModule,
    ContentComponent,
    LogoComponent
  ],
  declarations: [
    ContentComponent,
    LogoComponent
  ]
})
export class LayoutModule { }
