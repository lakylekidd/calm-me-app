import { Component, OnInit } from "@angular/core";
import { ArticleService } from "app/services/article.service";

@Component({
	selector: "app-meditate",
	templateUrl: "./meditate.component.html",
	styles: []
})
export class MeditateComponent implements OnInit {
	constructor(private readonly articleService: ArticleService) {}

	ngOnInit() {}
}
