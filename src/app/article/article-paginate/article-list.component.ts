import { Component, Input } from "@angular/core";
import { IArticle } from "app/models/article.model";

@Component({
	selector: "app-article-list",
	templateUrl: "./article-list.component.html",
	styleUrls: [ "./article-list.component.scss" ]
})
export class ArticleListComponent {
	@Input() private readonly articles: IArticle[];
	@Input() private readonly handleClick: Function;
	constructor() {}
}
