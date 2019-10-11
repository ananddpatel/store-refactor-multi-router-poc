import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { AppRoutingModule, routes } from './app-routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers } from '@a-redux/all-reducers-maps';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FirstModule,
    SecondModule,
    // AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 5 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
