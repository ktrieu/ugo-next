import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const ResponsiveContainer = (props: ContainerProps) => {
  return (
    <div className="my-3 max-w-screen-lg mx-6 lg:mx-auto">{props.children}</div>
  );
};
