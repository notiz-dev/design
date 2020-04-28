import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../utils/symbols';

@Component({
  selector: 'niz-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class NizTab implements OnInit {
  @Input() tab: Tab;

  constructor() {}

  ngOnInit(): void {}
}
