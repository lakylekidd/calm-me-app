import { Injectable } from "@angular/core";
import { IArticle } from "app/models/article.model";
import { IArticleService } from "app/article/article.module";

const articles: IArticle[] = [
	{
		id: 1,
		imageUrl:
			"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		title: "Loving-kindness meditation",
		content: `
  <p>Loving-kindness meditation is also known as <a href="https://ggia.berkeley.edu/practice/loving_kindness_meditation#data-tab-why_you_should_try_it" target="_blank" rel="noopener">Metta meditation</a>. Its goal is to cultivate an attitude of love and kindness toward everything, even a person's enemies and sources of <a href="/articles/145855.php" title="Why stress happens and how to manage it" class="keywords">stress</a>.</p>
  <p>While breathing deeply, practitioners open their minds to receiving loving kindness. They then send messages of loving kindness to the world, to specific people, or to their loved ones.</p>
  <p>In most forms of this meditation, the key is to repeat the message many times, until the practitioner feels an attitude of loving kindness.</p>
  <p>Loving-kindness meditation is designed to promote <a href="http://onlinelibrary.wiley.com/doi/10.1002/jts.21832/full" target="_blank" rel="noopener">feelings of compassion and love</a>, both for others and oneself.</p>
  <p>It can help those affected by:</p>
  <ul><li>anger</li>


<li>frustration</li>


<li>resentment</li>


<li>interpersonal conflict</li>


</ul>
<p>This type of meditation may increase positive emotions and has been linked to reduced <a href="/kc/depression-causes-symptoms-treatments-8933" title="What is depression and what can I do about it?" class="keywords">depression</a>, <a href="/info/anxiety/" title="What is Anxiety?" class="keywords">anxiety</a>, and post-traumatic stress or <a href="/articles/156285.php" title="PTSD: What you need to know" class="keywords">PTSD</a>.</p>
  `,
		publishDate: new Date("20190516")
	},
	{
		id: 2,
		imageUrl:
			"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		title: "Body scan or progressive relaxation",
		content: `
    <p>Progressive relaxation, sometimes called body scan meditation, is meditation that encourages people to scan their bodies for areas of tension. The goal is to notice tension and to allow it to release.</p>
    <p>During a progressive relaxation session, practitioners start at one end of their body, usually their feet, and work through the whole.</p>
    <p>Some forms of progressive relaxation require people to tense and then relax muscles. Others encourage a person to visualize a wave, drifting over their body to release tension.</p>
    <p>Progressive relaxation can help to promote generalized feelings of calmness and relaxation. It may <a href="https://biblio.ugent.be/publication/7161849" target="_blank" rel="noopener">also help with chronic pain</a>. Because it slowly and steadily relaxes the body, some people use this form of meditation to help them sleep.</p>
    
    `,
		publishDate: new Date("20180619")
	},
	,
	{
		id: 3,
		featured: true,
		imageUrl:
			"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		title: "Mindfulness meditation",
		content: `
    <p>Mindfulness is a form of meditation that <a href="http://www.apa.org/monitor/2012/07-08/ce-corner.aspx" target="_blank" rel="noopener">urges practitioners to remain aware and present</a> in the moment.</p>
    <p>Rather than dwelling on the past or dreading the future, mindfulness encourages awareness of a person's existing surroundings. Crucial to this is a lack of judgment. So, rather than reflecting on the annoyance of a long wait, a practitioner will simply note the wait without judgment.</p>
    <p>Mindfulness meditation is something people can do almost anywhere. While waiting in line at the grocery store, for example, a person might calmly notice their surroundings, including the sights, sounds, and smells they experience.</p>
    <p>A form of mindfulness is involved in most kinds of meditation. Breath awareness encourages practitioners to be aware of their breathing, while progressive relaxation draws attention to areas of tension in the body.</p>
    <p>Because mindfulness is a theme common to many forms of meditation, it has been extensively studied.</p>
    <p><a href="http://www.apa.org/monitor/2012/07-08/ce-corner.aspx" target="_blank" rel="noopener">Research has found</a> that mindfulness can:</p>
    <ul><li>reduce fixation on negative emotions</li>


<li>improve focus</li>


<li>improve memory</li>


<li>lessen impulsive, emotional reactions</li>


<li>improve relationship satisfaction</li>


</ul>
<p>Some evidence suggests mindfulness may improve health. <a href="http://ajpregu.physiology.org/content/307/1/R93" target="_blank" rel="noopener">For example</a>, a study of African-American men with <a href="/articles/172179.php" title="Symptoms, causes, and treatment of chronic kidney disease" class="keywords">chronic kidney disease</a> found that mindfulness meditation could lower <a href="/articles/270644.php" title="What is a normal blood pressure?" class="keywords">blood pressure</a>.</p>
    `,
		publishDate: new Date("20180829")
	},
	{
		id: 4,
		imageUrl:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
		title: "Breath awareness meditation",
		content: `
    <p>Breath awareness is a type of mindful meditation that encourages mindful breathing.</p>
    <p>Practitioners breathe slowly and deeply, counting their breaths or otherwise focusing on their breaths. The goal is to <a href="https://ggia.berkeley.edu/practice/mindful_breathing" target="_blank" rel="noopener">focus only on breathing</a> and to ignore other thoughts that enter the mind.</p>
    <p>As a form of mindfulness meditation, breath awareness offers many of the same benefits as mindfulness. Those include reduced anxiety, improved concentration, and greater emotional flexibility.</p>

    `,
		publishDate: new Date("20170221")
	},
	{
		id: 5,
		imageUrl:
			"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
		title: "Kundalini yoga",
		content: `
    <p><a href="https://www.yogajournal.com/yoga-101/types-of-yoga/kundalini" target="_blank" rel="noopener">Kundalini yoga</a> is a physically active form of meditation that blends movements with deep breathing and mantras. People usually learn from a teacher or do a class. However, someone can learn the poses and mantras at home.</p>
    <p><a href="http://online.liebertpub.com/doi/abs/10.1089/acm.2008.0020" target="_blank" rel="noopener">Similarly to other forms of yoga</a>, kundalini <a href="/articles/286745.php" title="How does yoga work?" class="keywords">yoga</a> can improve physical strength and reduce pain. It may also improve mental health by reducing anxiety and depression.</p>
    <p>A 2008 study of veterans with chronic low-back pain, for instance, found that yoga reduced pain, increased energy, and improved overall mental health.</p>

    `,
		publishDate: new Date("20170221")
	},
	{
		id: 6,
		imageUrl:
			"https://www.tonyseel.com/wp-content/uploads/2019/04/water-image.jpg",
		title: "Zen meditation",
		content: `
    <p><a href="http://www.zen-buddhism.net/practice/zen-meditation.html" target="_blank" rel="noopener">Zen meditation, sometimes called Zazen</a> is a form of meditation that can be part of Buddhist practice. Many Zen practitioners study under a teacher because this kind of meditation involves specific steps and postures.</p>
    <p>The goal is to find a comfortable position, focus on breathing, and mindfully observe one's thoughts without judgment.</p>
    <p>Again, this form of meditation is similar to mindfulness meditation but requires more discipline and practice. People may prefer it if they are seeking both relaxation and a new spiritual path.</p>

    `,
		publishDate: new Date("20170221")
	},
	{
		id: 7,
		imageUrl:
			"https://images.freeimages.com/images/small-previews/2fe/butterfly-1390152.jpg",
		title: "Transcendental Meditation",
		content: `
    <p>Transcendental Meditation is a spiritual form of meditation where practitioners remain seated and breathe slowly. The goal is to transcend or rise above the person's current state of being.</p>
    <p>During a meditation session, practitioners focus on a mantra or a repeated word or series of words. A <a href="http://www.chopra.com/articles/5-types-of-meditation-decoded#sm.0005syqxv1brdd4p11k27d0qakfj7" target="_blank" rel="noopener">teacher determines the mantra</a> based on a complex set of factors, sometimes including the year the practitioner was born, and the year the teacher was trained.</p>
    <p>An alternative allows people to choose their mantra. This more contemporary version is not technically Transcendental Meditation, though it may look substantially similar. A practitioner might decide to repeat "I am not afraid of public speaking" while meditating.</p>
    <p>People who practice Transcendental Meditation report both spiritual experiences and heightened mindfulness.</p>
    
    `,
		publishDate: new Date("20170221")
	}
];

@Injectable({
	providedIn: "root"
})
export class ArticleService implements IArticleService {
	constructor() {}

	public getArticles = () => {
		return articles.filter((x) => !x.featured);
	};

	public getArticle = (id: number) => {
		return articles.find((x) => x.id === id);
	};

	public getFeatured = () => {
		return articles.find((x) => x && x.featured);
	};
}
