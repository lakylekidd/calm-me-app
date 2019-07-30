import { Component, OnInit, Input } from '@angular/core';
import { ITipItem } from '../services/tips.service';

@Component({
  selector: 'app-tip-item',
  templateUrl: './tip-item.component.html',
  styleUrls: ['./tip-item.component.css']
})
export class TipItemComponent implements OnInit {

  @Input() public tip: ITipItem;

  constructor() { }

  ngOnInit() {

  }

}
