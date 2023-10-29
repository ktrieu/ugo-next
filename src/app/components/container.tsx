import { ReactNode } from "react";
import { NAVBAR_HEIGHT } from "./navbar";

type ContainerProps = {
  children: ReactNode;
};

export const ResponsiveContainer = (props: ContainerProps) => {
  return (
    <div className="max-w-screen-lg mx-6 lg:mx-auto">{props.children}</div>
  );
};

export const FullHeightHero = (props: ContainerProps) => {
  return (
    <div className={`h-[calc(100vh-${NAVBAR_HEIGHT})] flex items-center`}>
      <div className="mx-auto">{props.children}</div>
    </div>
  );
};
