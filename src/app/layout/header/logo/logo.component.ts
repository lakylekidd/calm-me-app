import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styles: []
})
export class LogoComponent implements OnInit {

  @Input() invert: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
