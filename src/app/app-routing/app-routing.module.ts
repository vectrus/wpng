import { NgModule,  Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { PagesComponent} from '../pages/pages.component';
import { PortfolioComponent} from '../portfolio/portfolio.component';
import { ContactComponent} from '../contact/contact.component';
import { OverOnsComponent} from '../overons/overons.component';
import { PostComponent } from '../post/post.component';
import {PostsComponent} from "../posts/posts.component";
import {ServicesComponent} from "../services/services.component";


const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent
  },
  {
    path: 'pages/:id',
    component: PagesComponent
  },
  {
    path: 'home/:id',
    component: PostsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {

    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'overons',
    component: OverOnsComponent
  },
   {

    path: 'contact',
    component: ContactComponent
  },
  { path: 'homepage', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
