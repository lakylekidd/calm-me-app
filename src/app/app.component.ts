import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMainPage: boolean = false;

  constructor(private readonly router: Router) {
    this.subscribeRouteChange();
  }

  subscribeRouteChange() {
    this.router.events.subscribe((val) => {
      if (this.router.url === "/") {
        this.isMainPage = true;
      } else {
        this.isMainPage = false;
      }
    })
  }
}
