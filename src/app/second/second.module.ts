import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { CompSecondComponent } from './comp-second/comp-second.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from '@a-effects/post.effect';
import { StoreModule } from '@ngrx/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonplaceholderService } from '../first/services/jsonplaceholder.service';
import { postReducers } from '@a-redux/index';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('posts', postReducers),
    EffectsModule.forFeature([PostEffects])
  ],
  declarations: [CompSecondComponent],
  providers: [JsonplaceholderService]
})
export class SecondModule {}
