import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "./article/article.component";
import { ArticlePaginateComponent } from "./article-paginate/article-paginate.component";
import { ArticlePaginateItemComponent } from "./article-paginate/article-paginate-item.component";

@NgModule({
	imports: [ CommonModule ],
	providers: [],
	declarations: [
		ArticleComponent,
		ArticlePaginateComponent,
		ArticlePaginateItemComponent
	],
	exports: [
		ArticleComponent,
		ArticlePaginateComponent,
		ArticlePaginateItemComponent
	]
})
export class ArticleModule {}
