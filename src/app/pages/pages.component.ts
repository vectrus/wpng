import { Component, OnInit } from '@angular/core';
import {  WpService, WpPost, ModelResponse, CollectionResponse} from 'ngx-wordpress';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  category: string;
  WPid: string;
  post: WpPost;

  constructor() {
    this.WPid = '25';
    //this.category = this.post.get('categories');


  }

  ngOnInit() {
  }

}

