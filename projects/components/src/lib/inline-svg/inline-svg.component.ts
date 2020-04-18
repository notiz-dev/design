import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'niz-inline-svg',
  template: '',
  encapsulation: ViewEncapsulation.None
})
export class InlineSvgComponent implements OnInit {

  @Input() svgSource: string;

  constructor(
    private host: ElementRef,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.svgSource, {responseType: 'text'}).subscribe((svg) => this.host.nativeElement.innerHTML = svg);
  }

}
