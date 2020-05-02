import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  NizTabsModule,
  NizToolbarModule,
  NizFooterModule,
  NizInlineSvgModule,
  NizTabModule,
} from '@notiz/ngx-design';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NizTabsModule,
    NizToolbarModule,
    NizFooterModule,
    NizInlineSvgModule,
    NizTabModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
