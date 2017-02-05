import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-intro',
  template: `
    <div class="greeting">
      My name is Kyle Stockton and I am an aspiring junior developer in the 
	  Portland, OR area. I specialize in C#, particularly ASP.NET and 
	  Unity3D, but I'm also familiar with JavaScript, Sass, SQL, HTML, and 
	  Clojure.<br />
      This site is brand new, so please check back later for new 
	  developments.<br />
      In the meantime, feel free to contact me at 
	  <a href="mailto:kylestockton@mail.com">kylestockton@mail.com</a>.<br />
      Thanks for visiting!<br />
    </div>
  `,
//  styleUrls: [ '../style/StyleSheet.min.css' ]
})
export class IntroComponent { }