import { Component, OnInit , Input} from '@angular/core';
import { WordPressModule , WpService, WpPost, CollectionResponse} from 'ngx-wordpress';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  post: WpPost;

  categories: number;
  @Input() slug:string;



  @Input() set data(data) {
    // create WpPost from data
    this.post = new WpPost(data);
  }

  constructor( public wp: WpService) {

    console.log('Started portfolio component', this.post);
    //noinspection TypeScriptValidateTypes,TypeScriptUnresolvedVariable

      this.categories = 2


  }

  ngOnInit() {

      }

  showPortFolio(postId) {
    //console.log("Triggered postID", postId);
    this.slug = postId;
  }
}
