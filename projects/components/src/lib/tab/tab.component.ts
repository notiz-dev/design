import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Tab } from '../utils/symbols';

@Component({
  selector: 'niz-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class NizTab implements OnInit {
  @Input() tab: Tab;

  @HostBinding('class') get classes() {
    return 'flex justify-center items-center xs:flex-1 md:flex md:h-24 md:flex-none hover:text-blue hover:bg-blue-opacity-10 focus:outline-none';
  }

  @HostBinding('class.xs:hidden') get hideOnMobile() {
    return this.tab.hideOnMobile;
  }
  @HostBinding('class.md:hidden') get hideOnDesktop() {
    return this.tab.hideOnDesktop;
  }

  constructor() {}

  ngOnInit(): void {}
}
