import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'niz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class NizFooter implements OnInit {
  now = Date.now();

  constructor() {}

  ngOnInit(): void {}
}
