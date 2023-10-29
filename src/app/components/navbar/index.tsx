import Link from "next/link";
import Image from "next/image";
import { ResponsiveContainer } from "@/app/components/container";

import desktopLogo from "public/logo_navbar_desktop.svg";
import { NAVBAR_ITEMS } from "./items";
import { MobileNavbar } from "./mobile";

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
            <Link href={item.href} className="hover:underline" key={item.href}>
              <h1 className="text-3xl">{item.text}</h1>
            </Link>
          ))}
        </>
      </nav>
    </ResponsiveContainer>
  );
};

export const Navbar = () => {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};
