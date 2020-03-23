import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NizTabs, NizToolbar, TabsModule, ToolbarModule } from 'components';
import { BrowserModule } from '@angular/platform-browser';

const modules = [TabsModule, ToolbarModule];

@NgModule({
  imports: [BrowserModule],
})
export class AppElementsModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      [NizTabs, 'niz-tabs'],
      [NizToolbar, 'niz-toolbar'],
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
