import { ReactNode } from "react";

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
    <div className="flex items-center h-[calc(100vh-var(--navbar-height))]">
      <div className="mx-auto">{props.children}</div>
    </div>
  );
};
