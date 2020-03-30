import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NizToolbarModule, NizFooterModule } from '@notiz/ngx-design';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NizToolbarModule, NizFooterModule],
})
export class HomeModule {}
