import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompSecondComponent } from './comp-second/comp-second.component';

const routes: Routes = [
  { path: 'second-comp', component: CompSecondComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule {}
