import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div><h1>top</h1></div>
    <router-outlet></router-outlet>
    <div><h1>bottom</h1></div>
  `
})
export class AppComponent {
  title = 'app';
}
