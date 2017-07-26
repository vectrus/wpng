import { Component, OnInit, Input } from '@angular/core';
import {MdSidenavModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Vectrus Internet';
  logo  = 'assets/images/vectrus-logo-255.png';
  innerHeight: any;
  innerWidth: any;
  showmenu = 'block';

  toggleMenu() {
    if(this.showmenu == 'block') {
      this.showmenu = 'none';
    }
    else {
      this.showmenu = 'block';
    }
  }

  ngOnInit() {
    window.onresize = this.onWindowLoadOrResize;
    this.onWindowLoadOrResize();

    this.innerHeight = (window.screen.height) + "px";
    this.innerWidth = (window.screen.width) + "px";
    console.log("Screen res : " , this.innerHeight, this.innerWidth);
  }
  private onWindowLoadOrResize() {

    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);

    if(this.innerWidth <= 768 ) {
      this.showmenu = 'none';
    }
    else {
      this.showmenu = 'none';
    }
  }
}


