import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "./article/article.component";
import { ArticlePaginateComponent } from "./article-paginate/article-paginate.component";
import { ArticlePaginateItemComponent } from "./article-paginate/article-paginate-item.component";
import { ArticleListComponent } from "./article-paginate/article-list.component";
import { FeatureArticleComponent } from "./article-paginate/feature-article.component";

export interface IArticleService {
	getArticles();
	getFeatured();
}

@NgModule({
	imports: [ CommonModule ],
	providers: [],
	declarations: [
		ArticleComponent,
		ArticlePaginateComponent,
		ArticlePaginateItemComponent,
		ArticleListComponent,
		FeatureArticleComponent
	],
	exports: [
		ArticleComponent,
		ArticlePaginateComponent,
		ArticlePaginateItemComponent,
		ArticleListComponent
	]
})
export class ArticleModule {}
