import { Component } from '@angular/core';
import { Tab, FooterSection } from '@notiz/ngx-design';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabs: Tab[] = [
    {
      url: '/',
      logo: true,
      text: 'notiz',
      image: 'assets/img/notiz.svg',
      routeActive: false,
      hideOnMobile: true,
    },
    {
      url: '/search/',
      text: 'search',
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
      hideOnDesktop: true,
    },
    {
      url: '/tags/',
      image: 'assets/img/tags.svg',
      routeActive: true,
    },
  ];

  themeTab: Tab = {
    image: 'assets/img/adjust.svg',
  };

  copyrightUrl = 'legal/privacy-policy';

  createdWithSvgSources = [
    'assets/img/angular.svg',
    'assets/img/scully.svg',
    'assets/img/tailwindcss.svg',
    'assets/img/firebase.svg',
  ];

  footerSections: FooterSection[] = [
    {
      title: 'notiz.dev',
      links: [
        {
          title: '@notiz_dev',
          url: 'https://twitter.com/notiz_dev',
          svg: 'assets/img/twitter-white.svg',
          external: true,
        },
        {
          title: ' @notiz-dev',
          url: 'https://github.com/notiz-dev',
          svg: 'assets/img/github-white.svg',
          external: true,
        },
        {
          title: 'hi@notiz.dev',
          url: 'mailto:hi@notiz.dev',
          svg: 'assets/img/mail.svg',
          external: true,
        },
      ],
    },
    {
      title: 'more',
      links: [
        {
          title: 'all posts',
          url: '/search/',
          svg: 'assets/img/blog-white.svg',
        },
        {
          title: 'authors',
          url: '/search/',
          svg: 'assets/img/author.svg',
        },
        {
          title: 'tags',
          url: '/search/',
          svg: 'assets/img/tags-white.svg',
        },
      ],
    },
  ];

  bla() {
    console.log('click theme');
  }
}
