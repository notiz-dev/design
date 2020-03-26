import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NizTabsModule } from '@notiz/ngx-design';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NizTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
