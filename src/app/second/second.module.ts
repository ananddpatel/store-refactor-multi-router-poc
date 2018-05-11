import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { CompSecondComponent } from './comp-second/comp-second.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SecondRoutingModule, SharedModule],
  declarations: [CompSecondComponent]
})
export class SecondModule {}
