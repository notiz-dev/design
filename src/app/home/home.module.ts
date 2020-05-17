import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NizChipModule } from '@notiz/ngx-design';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NizChipModule],
})
export class HomeModule {}
