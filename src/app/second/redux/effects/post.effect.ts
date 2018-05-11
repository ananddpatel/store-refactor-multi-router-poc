import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as pa from '../actions/post.actions';
import { JsonplaceholderService } from '../../../first/services/jsonplaceholder.service';

@Injectable()
export class PostEffects {
  @Effect()
  $loadPosts: Observable<Action> = this.actions$
    .ofType(pa.LOAD_POSTS)
    .map(toPayload)
    .mergeMap(payload => {
      return this.api.getPosts().map((data: any) => {
        console.log(data);
        return new pa.LoadPostsSuccess(data);
      });
    });

  constructor(private api: JsonplaceholderService, private actions$: Actions) {}
}
