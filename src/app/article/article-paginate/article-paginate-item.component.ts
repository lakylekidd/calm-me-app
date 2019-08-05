import { Component, Input } from "@angular/core";
import { IArticle } from "app/models/article.model";

@Component({
	selector: "app-article-paginate-item",
	templateUrl: "./article-paginate-item.component.html",
	styleUrls: [ "./article-paginate-item.component.scss" ]
})
export class ArticlePaginateItemComponent {
	@Input() private readonly article: IArticle;
	@Input() private readonly handleClick: Function;
	constructor() {}

	onClick = () => {
		this.handleClick(this.article.id);
	};
}
