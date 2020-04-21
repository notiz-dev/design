import { Component, OnInit, Input } from '@angular/core';

export interface Tab{
  url: string;
  routeActive: boolean;
  image: string;
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
}

@Component({
  selector: 'niz-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class NizTabs implements OnInit {

  @Input() tabs: Tab[];

  constructor() {}

  ngOnInit(): void {}
}
