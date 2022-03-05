import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SplashScreenComponent} from "./partials/splash-screen/splash-screen.component";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
