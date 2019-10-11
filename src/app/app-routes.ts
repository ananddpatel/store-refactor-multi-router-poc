import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompFirstComponent } from './first/comp-first/comp-first.component';
import { FirstChildComponent } from './first/first-child/first-child.component';
import { SecondChildComponent } from './first/second-child/second-child.component';
import { CompSecondComponent } from './second/comp-second/comp-second.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
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
          },
          {
            path: 'first-comp/second-comp',
            component: CompSecondComponent
          }
        ]
      },
      { path: 'first-comp', pathMatch: 'full', redirectTo: '' }
    ]
  },
  { path: 'second-comp', component: CompSecondComponent },
  { path: '**', redirectTo: '' }
];

// const routes: Routes = [
//   {
//     path: '',
//     component: CompFirstComponent,
//     children: [
//       {
//         path: 'first-comp/first-child',
//         component: FirstChildComponent
//       },
//       {
//         path: 'first-comp/second-child',
//         component: SecondChildComponent
//       },
//       {
//         path: 'first-comp/second-comp',
//         component: CompSecondComponent
//       }
//     ]
//   },
//   { path: 'first-comp', pathMatch: 'full', redirectTo: '' }
// ];

// const routes: Routes = [
//   { path: 'second-comp', component: CompSecondComponent }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [AppComponent];
