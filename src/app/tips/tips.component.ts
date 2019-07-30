import { Component, OnInit } from '@angular/core';
import { TipsService, ITipItem } from './services/tips.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  tip: ITipItem;

  constructor(private readonly tipService: TipsService) {
    this.tip = this.tipService.getRandomTip();
  }

  ngOnInit() {
    
  }

}
