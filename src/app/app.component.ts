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
      hideOnMobile: true
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
      url: '/links/',
      image: 'assets/img/links.svg',
      routeActive: true,
      hideOnDesktop: true
    },
    {
      url: '/tags/',
      image: 'assets/img/tags.svg',
      routeActive: true,
    }
  ];

  copyrightUrl = 'legal/privacy-policy';

  createdWithSvgSources = ['assets/img/scully.svg', 'assets/img/angular.svg', 'assets/img/tailwindcss.svg', 'assets/img/firebase.svg'];
}
