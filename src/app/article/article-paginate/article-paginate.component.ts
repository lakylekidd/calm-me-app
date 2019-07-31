import { Component, Input, Inject } from "@angular/core";
import { IArticleService } from "../article.module";
import { IArticle } from "app/models/article.model";

@Component({
	selector: "app-article-paginate",
	templateUrl: "./article-paginate.component.html",
	styleUrls: [ "./article-paginate.component.scss" ]
})
export class ArticlePaginateComponent {
	private featured: IArticle;
	private articles: IArticle[];

	constructor(
		@Inject("IArticleService")
		private readonly articleService: IArticleService
	) {
		this.featured = this.articleService.getFeatured();
		this.articles = this.articleService.getArticles();
	}
}
