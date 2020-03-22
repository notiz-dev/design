import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { TabsModule, TabsComponent } from "components";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [TabsModule, BrowserModule]
})
export class AppElementsModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    customElements.define(
      "niz-tabs",
      createCustomElement(TabsComponent, {
        injector: this.injector
      })
    );
  }
}
