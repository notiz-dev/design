import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { CardComponent, CardModule } from "projects/components/src/public-api";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CardModule,BrowserModule],
  exports: [CardModule]
})
export class AppElementsModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const component = createCustomElement(CardComponent, {
      injector: this.injector
    });
    customElements.define("niz-card", component);
  }
}
