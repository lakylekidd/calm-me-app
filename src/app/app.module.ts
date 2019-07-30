import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BreateModule } from './breate/breate.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LayoutModule,
    BreateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
