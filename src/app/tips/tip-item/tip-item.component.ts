import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ITipItem } from '../services/tips.service';

@Component({
  selector: 'app-tip-item',
  templateUrl: './tip-item.component.html',
  styleUrls: ['./tip-item.component.css']
})
export class TipItemComponent implements OnInit, OnChanges {

  @Input() public tip: ITipItem;
  @Output() refresh: EventEmitter<boolean> = new EventEmitter();
  loading: boolean;


  constructor() { }

  ngOnInit() {
    this.loading = true;
  }

  ngOnChanges(): void {
    this.loading = false;
  }

  loadNext = () => {
    this.refresh.emit();
    this.loading = true;
  }

}
