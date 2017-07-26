import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location }  from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { PostsComponent } from '../posts/posts.component';
import { WpPost, WpService} from 'ngx-wordpress';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
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
export class PostComponent implements OnInit {
  //slug: string;

    post: WpPost;

    @Input() set data(data) {
        // create WpPost from data
        this.post = new WpPost(data);
    }


  @Input() slug:string;



  constructor(
      public wp: WpService
      /*private route: ActivatedRoute,
      private router: Router*/

      //public post: WpPost

      //slug=0

  ){}

  ngOnInit() : void {
        this.slug = null;
     /* this.wp.model().posts().get(4).subscribe((res: ModelResponse) => {
          // Handle the response here

      });*/

      // console.log("Triggered postID", this.post);
    console.log("Testing.... this post : ", this.post);
  }
  selectedSlug() {
     if(this.slug == null) {
         this.slug = "4";
     }

    return this.slug;

  }


}
