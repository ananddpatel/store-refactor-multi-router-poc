import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { AppRoutingModule } from './app-routes';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './first/redux/reducers/first.index';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FirstModule,
    SecondModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 5 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
