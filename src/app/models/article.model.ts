export interface IArticle {
	id: number;
	featured?: boolean | undefined;
	title: string;
	content: string;
	publishDate: Date;
	imageUrl: string;
}
