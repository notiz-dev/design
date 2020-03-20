
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { AppComponent } from "./app.component";
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule],
  exports: [AppModule]
})
export class AppElementsModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const component = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define("my-component", component);
  }
}
