import { Component, OnInit, Input } from "@angular/core";
import { ICalDay } from "../models";

@Component({
	selector: "cal-days",
	templateUrl: "./cal-days.component.html",
	styleUrls: [ "./cal-days.component.scss" ]
})
export class CalDaysComponent implements OnInit {
	@Input() days: ICalDay[];

	constructor() {}

	ngOnInit() {}
}
