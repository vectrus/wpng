import { Component, OnInit , Input} from '@angular/core';
import { WordPressModule , WpService, WpPost, CollectionResponse} from 'ngx-wordpress';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  post: WpPost;

  categories: number;
  @Input() slug:string;

  @Input() set data(data) {
    // create WpPost from data
    this.post = new WpPost(data);
  }

  constructor( public wp: WpService) {

    console.log('Started services component', this.post);
    //noinspection TypeScriptValidateTypes,TypeScriptUnresolvedVariable

      this.categories = 5


  }

  ngOnInit() {

      }

  showPortFolio(postId) {
    //console.log("Triggered postID", postId);
    this.slug = postId;
  }
}
