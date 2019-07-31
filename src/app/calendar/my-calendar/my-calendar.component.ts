import { Component, OnInit, HostListener } from "@angular/core";

@Component({
	selector: "app-my-calendar",
	templateUrl: "./my-calendar.component.html",
	styleUrls: [ "./my-calendar.component.scss" ]
})
export class MyCalendarComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	@HostListener("document:click", [ "$event" ])
	documentClick(event) {
		// console.log(event.target.tagName);
		// if (event.target.tagName.toLowerCase() !== "a") {
		// 	console.log("Is Tag");
		// 	event.preventDefault();
		// }
	}
}
