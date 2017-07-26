import { Component, OnInit } from '@angular/core';
import { WpService, WpPost, ModelResponse, CollectionResponse} from 'ngx-wordpress';
import { HttpModule, JsonpModule } from '@angular/http';
import { User } from './user.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public user: User; // our model

  constructor(
      //private http: HttpClient
      )

      {
        console.log("Started contactpage constructor");
      }

  ngOnInit() {
    this.user = {
      name: '',
      address: {
        street: '',
        postcode: '' // set default value to 8000
      }
    };
  }
  save(model: User, isValid: boolean) {
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);

    /*this.http.post('https://dev.vectrus.nl/v2017/', JSON.stringify(this.data))
        .subscribe();*/
  }
}
