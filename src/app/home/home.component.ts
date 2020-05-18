import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tags: string[] = ['Git', 'Quick Tip', 'Angular', 'Nest', 'Prisma'];

  constructor() {}

  ngOnInit(): void {}
}
