import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppComponent }     from './app.component';
import { IntroComponent }   from './intro.component';
import { ResumeComponent }  from './resume.component';
import { BlogComponent }    from './blog.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
	IntroComponent,
    ResumeComponent,
	BlogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
