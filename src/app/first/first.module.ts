import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { CompFirstComponent } from './comp-first/comp-first.component';
import { SharedModule } from '../shared/shared.module';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

@NgModule({
  imports: [CommonModule, FirstRoutingModule, SharedModule],
  declarations: [CompFirstComponent, FirstChildComponent, SecondChildComponent]
})
export class FirstModule {}
