import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent }  from './intro.component';
import { ResumeComponent } from './resume.component';
import { BlogComponent }   from './blog.component';

const routes: Routes = [
  { path: '',       component: IntroComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog',   component: BlogComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}