import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { AppRoutingModule } from './app-routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FirstModule, SecondModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
