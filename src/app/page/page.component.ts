import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location }  from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import {  WpService, WpPost, ModelResponse, CollectionResponse} from 'ngx-wordpress';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('100ms ease-in')),
    ]),


  ]
})
export class PageComponent implements OnInit {
  //slug: string;
  post: WpPost;

  @Input() slug:string;



  constructor(

      /*private route: ActivatedRoute,
       private router: Router*/
      public wp: WpService,
      //public Page: WpPost
      //public Page: WpPost
      //slug=0

  ){}

  ngOnInit() : void {
    this.slug = null;
     /*this.wp.model().posts().get(4).subscribe((res: ModelResponse) => {
     // Handle the response here
     });*/


    console.log("Testing.... this post : ");
  }
  selectedSlug() {
    if(this.slug == null) {
      this.slug = "2";
    }

    return this.slug;
  }

}
