import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MdSidenavModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,MdListModule } from '@angular/material';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { WordPressModule, WpPost} from 'ngx-wordpress';
import { AppRoutingModule } from './app-routing/app-routing.module';





import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent} from './home/home.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { OverOnsComponent } from './overons/overons.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    AppRoutingComponent,
    PortfolioComponent,
    ContactComponent,
    OverOnsComponent,
    PostsComponent,
    PostComponent,
    PageComponent,
    ServicesComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    WordPressModule.forRoot('http://dev.vectrus.nl/v2017'),
    HttpClientModule,
    HttpModule



  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {

   }
