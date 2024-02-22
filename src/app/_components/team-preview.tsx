import { type Author } from "@/interfaces/author";
import CoverImage from "./cover-image";

type Props = {
  coverImage: string;
  excerpt: string;
  author: Author;
};

export function TeamPreview({ excerpt, author }: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={author.name} src={author.picture} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">{author.name}</h3>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
