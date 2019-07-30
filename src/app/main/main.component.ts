import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  isMainPage: boolean = false;
  
  constructor(private readonly router: Router) {
    this.subscribeRouteChange();
  }

  ngOnInit() {
  }

  subscribeRouteChange() {
    this.router.events.subscribe((val) => {
      if (this.router.url === "/main") {
        this.isMainPage = true;
      } else {
        this.isMainPage = false;
      }
    })
  }

}
