import { Component } from '@angular/core';
import { Tab } from '@notiz/ngx-design';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabs: Tab[] = [
    {
      url: '/',
      image: 'assets/img/notiz.svg',
      routeActive: false,
    },
    {
      url: '/search/',
      image: 'assets/img/search.svg',
      routeActive: true,
    },
    {
      url: '/blog/',
      image: 'assets/img/blog.svg',
      routeActive: true,
    },
    {
      url: '/lings/',
      image: 'assets/img/links.svg',
      routeActive: true,
    },
    {
      url: '/tags/',
      image: 'assets/img/tags.svg',
      routeActive: true,
    }
  ];
}
