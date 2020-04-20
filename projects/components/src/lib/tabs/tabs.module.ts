import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NizTabs } from './tabs.component';
import { RouterModule } from '@angular/router';
import { NizInlineSvgModule } from '../inline-svg/inline-svg.module';

@NgModule({
  declarations: [NizTabs],
  imports: [CommonModule, RouterModule, NizInlineSvgModule],
  exports: [NizTabs],
})
export class NizTabsModule {}
