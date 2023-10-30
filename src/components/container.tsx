import { ReactNode } from "react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ContainerProps = {
  children: ReactNode;
};

export const ResponsiveContainer = (props: ContainerProps) => {
  return (
    <div className="max-w-screen-lg mx-6 lg:mx-auto">{props.children}</div>
  );
};

export type FullHeightHeroProps = {
  children: ReactNode;
  background?: {
    src: StaticImport | string;
    alt: string;
  };
};

export const FullHeightHero = (props: FullHeightHeroProps) => {
  return (
    <div className="h-[calc(100vh-var(--navbar-height))] relative">
      {props.background && (
        <div className="absolute h-full w-full">
          <Image
            src={props.background.src}
            alt={props.background.alt}
            fill
            objectFit="cover"
          />
        </div>
      )}
      <div className="absolute flex items-center h-full w-full z-50">
        <div className="mx-auto">{props.children}</div>
      </div>
    </div>
  );
};
