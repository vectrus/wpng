import { Component, OnInit, Input, AfterViewInit, Directive, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WordPressModule, WpPost, WpService, ModelResponse } from 'ngx-wordpress'
//import {MdListModule} from '@angular/material';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post: WpPost;


  @Input() set data(data) {
    // create WpPost from data
    this.post = new WpPost(data);
  }

  @Input() slug:string;

  constructor(
      private wp: WpService,
      private route: ActivatedRoute,
      private router: Router,

  ){}


  ngOnInit() {
   /* this.wp.model().posts().get(215).subscribe((res: ModelResponse) => {
      // Handle the response here
    });*/
  }

  showPost(postId) {
    //console.log("Triggered postID", postId);
    this.slug = postId;
  }

}
