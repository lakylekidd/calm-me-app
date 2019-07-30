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
    this.loadNextTip();
  }

  loadNextTip = () => {
    this.tipService.getRandomTip().then(res => {
      this.tip = res;
    });
  }

  ngOnInit() {
    
  }

}
