import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompFirstComponent } from './comp-first/comp-first.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

const routes: Routes = [
  {
    path: '',
    component: CompFirstComponent,
    children: [
      {
        path: 'first-comp/first-child',
        component: FirstChildComponent
      },
      {
        path: 'first-comp/second-child',
        component: SecondChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule {}
