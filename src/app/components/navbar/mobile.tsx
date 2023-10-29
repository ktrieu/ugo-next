"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr/index";

import { ResponsiveContainer } from "@/app/components/container";
import desktopLogo from "public/logo_navbar_desktop.svg";
import { NAVBAR_ITEMS } from "./items";

export const MobileNavbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <ResponsiveContainer>
      <div className="flex items-center content-between py-6">
        <div className="flex-1">
          <Link className="mr-auto" href="/">
            <Image src={desktopLogo} alt="The UGO II logo." />
          </Link>
        </div>
        <div onClick={() => setExpanded((expanded) => !expanded)}>
          <List size="48" />
        </div>
      </div>
      <nav>
        {expanded && (
          <ul className="flex flex-col gap-6 mb-6">
            {NAVBAR_ITEMS.map((item) => (
              <li>
                <Link href={item.href} className="hover:underline">
                  <h1 className="text-3xl">{item.text}</h1>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </ResponsiveContainer>
  );
};
