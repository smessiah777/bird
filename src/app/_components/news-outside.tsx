import { TArticle } from "@/interfaces/article";
import { NewsPreview } from "./news-preview";

export default async function NewsOutside() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_api_key}`;
  const res = await fetch(url);
  const news = await res.json();

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        News from outside
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {news.articles.slice(0, 2).map((article: TArticle) => (
          <NewsPreview
            key={article.publishedAt}
            title={article.title}
            storyImage={article.urlToImage}
            author={article.author}
            storyLink={article.url}
            description={article.description}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
    </section>
  );
}
