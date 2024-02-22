import Link from "next/link";
import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Nav() {
  return (
    <nav className="bg-neutral-50 border-t border-neutral-200 mb-10">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-start items-center lg:pl-4 lg:w-1/2">
            <Link
              href="/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              About
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
