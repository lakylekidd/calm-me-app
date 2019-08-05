import { Component, OnInit } from "@angular/core";
import { ArticleService } from "app/services/article.service";
import { ActivatedRoute } from "@angular/router";
import { IArticle } from "app/models/article.model";

@Component({
	selector: "app-article",
	templateUrl: "./article.component.html",
	styleUrls: [ "./article.component.less" ]
})
export class ArticleComponent implements OnInit {
	article: IArticle;
	constructor(
		private readonly articleService: ArticleService,
		private readonly route: ActivatedRoute
	) {
		const id: number = parseInt(
			this.route.snapshot.queryParamMap.get("id")
		);
		this.article = this.articleService.getArticle(id);
	}

	ngOnInit() {}
}
