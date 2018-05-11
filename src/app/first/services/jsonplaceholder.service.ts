import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonplaceholderService {
  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .map(d => d);
  }
}
