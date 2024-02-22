import Link from "next/link";
import NewsImage from "./news-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  description: string;
  author: string;
  storyImage: string;
  storyLink: string;
  publishedAt: string;
};

export function NewsPreview({
  title,
  storyImage,
  description,
  author,
  storyLink,
  publishedAt,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <NewsImage storyLink={storyLink} title={title} src={storyImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={storyLink} className="hover:underline">
          {title}
        </Link>
      </h3>
      <h4>{author}</h4>
      <div className="text-lg mb-4">
        <DateFormatter dateString={publishedAt} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
    </div>
  );
}
