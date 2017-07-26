import { Component, OnInit, Input } from '@angular/core';
import {  WpService, WpPost, ModelResponse, CollectionResponse} from 'ngx-wordpress';
import {PostComponent} from "../post/post.component";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  //directives: ['PostComponent']
})
export class PostsComponent implements OnInit {

  post: WpPost;


  @Input() set data(data) {
    // create WpPost from data
    this.post = new WpPost(data);
  }

  @Input() slug:string;

  constructor(

      private wp: WpService
      //public Post: WpPost
      //private selectedSlug: string


  ) {
  }

  ngOnInit() {
   // this.wp.model().posts().get(4).subscribe(res => this.post = res.data)
  }

  showPost(postId) {

      this.slug = postId;
  }

}
