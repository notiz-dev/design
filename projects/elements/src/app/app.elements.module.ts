import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { CardComponent, CardModule, ButtonComponent, ButtonModule } from "components";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [CardModule,ButtonModule, BrowserModule]
})
export class AppElementsModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    customElements.define(
      "niz-card",
      createCustomElement(CardComponent, {
        injector: this.injector
      })
    );
    
    customElements.define(
      "niz-button",
      createCustomElement(ButtonComponent, {
        injector: this.injector
      })
    );
  }
}
