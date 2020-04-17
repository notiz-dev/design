import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NizTabs } from './tabs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NizTabs],
  imports: [CommonModule, RouterModule],
  exports: [NizTabs],
})
export class NizTabsModule {}
