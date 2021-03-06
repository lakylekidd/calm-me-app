import { Component, Input, Inject, NgZone } from "@angular/core";
import { IArticleService } from "../article.module";
import { IArticle } from "app/models/article.model";
import { Router } from "@angular/router";
import { ArticleService } from "app/services/article.service";

@Component({
	selector: "app-article-paginate",
	templateUrl: "./article-paginate.component.html",
	styleUrls: [ "./article-paginate.component.scss" ]
})
export class ArticlePaginateComponent {
	private featured: IArticle;
	private articles: IArticle[];

	constructor(
		private readonly articleService: ArticleService,
		private readonly ngZone: NgZone,
		private readonly router: Router
	) {
		this.featured = this.articleService.getFeatured();
		this.articles = this.articleService.getArticles();
	}

	redirectToArticlePage = (id: number) => {
		this.ngZone.run(() =>
			this.router.navigate([ "/main/article" ], {
				queryParams: { id: id }
			})
		);
	};
}
