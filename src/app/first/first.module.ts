import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { CompFirstComponent } from './comp-first/comp-first.component';
import { SharedModule } from '../shared/shared.module';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/reducers/first.index';
import { JsonplaceholderService } from './services/jsonplaceholder.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FirstRoutingModule,
    SharedModule,
    StoreModule.forFeature('counter', reducers)
  ],
  declarations: [CompFirstComponent, FirstChildComponent, SecondChildComponent],
  providers: [JsonplaceholderService]
})
export class FirstModule {}
