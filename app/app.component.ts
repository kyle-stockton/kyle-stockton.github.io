import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <img class="headshot" routerLink="/" 
	  src="../images/StocktonKyle_headshot.jpg" />
    <h1>{{title}}</h1>
	<nav>
	  <a routerLink="/resume">Resume</a>
	  <a routerLink="/blog">Blog</a>
	</nav>
	<router-outlet></router-outlet>
  `,
//  styleUrls: [ '../style/StyleSheet.min.css' ]
})
export class AppComponent {
  title = 'Kyle Stockton';
}