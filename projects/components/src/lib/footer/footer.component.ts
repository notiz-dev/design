import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'niz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NizFooter implements OnInit {
  now = Date.now();

  @Input() copyrightUrl: string;
  @Input() createdWithSvgSources: string[];

  constructor() {}

  ngOnInit(): void {}
}
