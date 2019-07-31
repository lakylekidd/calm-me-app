import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "cal-header",
	templateUrl: "./cal-header.component.html",
	styleUrls: [ "./cal-header.component.less" ]
})
export class CalHeaderComponent implements OnInit {
	@Input() month: number;

	constructor() {}

	ngOnInit() {}
}
