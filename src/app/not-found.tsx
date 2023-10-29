import Link from "next/link";

import { FullHeightHero, ResponsiveContainer } from "./components/container";

const NotFound = () => {
  return (
    <ResponsiveContainer>
      <FullHeightHero>
        <h1 className="text-9xl text-primary">404</h1>
        <h3 className="text-6xl mb-6">Page not found.</h3>
        <p>
          Unfortunately, UGO II has not yet expanded into the industry, product,
          service, or societal niche you were looking for. Try again at our{" "}
          <Link href="/" className="underline">
            home page.
          </Link>
        </p>
      </FullHeightHero>
    </ResponsiveContainer>
  );
};

export default NotFound;
