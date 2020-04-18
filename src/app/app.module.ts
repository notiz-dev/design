import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  NizTabsModule,
  NizToolbarModule,
  NizFooterModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
