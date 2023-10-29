import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const ResponsiveContainer = (props: ContainerProps) => {
  return <div className="my-3 mx-auto max-w-screen-lg">{props.children}</div>;
};
