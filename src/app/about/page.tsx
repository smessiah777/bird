import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { OurTeam } from "@/app/_components/our-team";
import { getAllPosts } from "../../lib/api";
import Image from "next/image";

export default function Index() {
  const allPosts = getAllPosts();
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />

        <Image
          src="/assets/about/team.jpg"
          alt="Meet the team"
          width={1300}
          height={630}
        />

        {morePosts.length > 0 && <OurTeam posts={morePosts} />}
      </Container>
    </main>
  );
}
