import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {

    overlay: boolean = false;

    constructor() { }
    
    toggleOverlay() {
      this.overlay = !this.overlay;
    }

    ngOnInit() {
    }

}
