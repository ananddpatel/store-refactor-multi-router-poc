import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FirstRoutingModule } from '../first/first-routing.module';
import { SecondRoutingModule } from '../second/second-routing.module';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule, FirstRoutingModule, SecondRoutingModule],
  declarations: [SidenavComponent, HeaderComponent, CardComponent],
  exports: [SidenavComponent, HeaderComponent, CardComponent]
})
export class SharedModule {}
