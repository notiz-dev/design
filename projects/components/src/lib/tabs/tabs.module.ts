import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NizTabs } from './tabs.component';

@NgModule({
  declarations: [NizTabs],
  imports: [CommonModule],
  exports: [NizTabs],
})
export class TabsModule {}
