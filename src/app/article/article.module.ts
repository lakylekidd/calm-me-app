import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticlePaginateComponent } from "./article-paginate/article-paginate.component";
import { ArticlePaginateItemComponent } from "./article-paginate/article-paginate-item.component";
import { ArticleListComponent } from "./article-paginate/article-list.component";
import { FeatureArticleComponent } from "./article-paginate/feature-article.component";
import { TrimTextPipe } from "./pipes/trim-text.pipe";

export interface IArticleService {
	getArticles();
	getFeatured();
}

@NgModule({
	imports: [ CommonModule ],
	providers: [ TrimTextPipe ],
	declarations: [
		TrimTextPipe,
		ArticlePaginateComponent,
		ArticlePaginateItemComponent,
		ArticleListComponent,
		FeatureArticleComponent
	],
	exports: [
		ArticlePaginateComponent,
		ArticlePaginateItemComponent,
		ArticleListComponent
	]
})
export class ArticleModule {}
