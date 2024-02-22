"use client";

import { TArticle } from "@/interfaces/article";
import { NewsPreview } from "./news-preview";
import { queryClient } from "@/lib/reactQuery";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
export function NewsOutsideClient() {
  const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_KEY_NEWS}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(`this is the query ${data.articles}`);

  return (
    <QueryClientProvider client={queryClient}>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {data?.articles?.slice(0, 2).map((article: TArticle) => (
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
    </QueryClientProvider>
  );
}
