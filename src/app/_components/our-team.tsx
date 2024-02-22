import { Post } from "@/interfaces/post";
import { TeamPreview } from "./team-preview";

type Props = {
  posts: Post[];
};

export function OurTeam({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Our team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <TeamPreview
            key={post.slug}
            coverImage={post.coverImage}
            author={post.author}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
