import Link from "next/link";
import Image from "next/image";
import { ResponsiveContainer } from "@/app/container";

import desktopLogo from "public/logo_navbar_desktop.svg";

type NavbarItem = {
  text: string;
  href: string;
};

const NAVBAR_ITEMS: NavbarItem[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Catalogue",
    href: "/catalogue",
  },
];

const DesktopNavbar = () => {
  return (
    <ResponsiveContainer>
      <nav className="flex items-center content-between py-6 gap-12">
        <>
          <div className="flex-1">
            <Link className="mr-auto" href="/">
              <Image src={desktopLogo} alt="The UGO II logo." />
            </Link>
          </div>
          {NAVBAR_ITEMS.map((item) => (
            <Link href={item.href} className="hover:underline">
              <h1 className="text-3xl">{item.text}</h1>
            </Link>
          ))}
        </>
      </nav>
    </ResponsiveContainer>
  );
};

export const Navbar = () => {
  return <DesktopNavbar />;
};
