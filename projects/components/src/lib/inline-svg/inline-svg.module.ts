import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSvgComponent } from './inline-svg.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [InlineSvgComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [InlineSvgComponent]
})
export class NizInlineSvgModule {}
