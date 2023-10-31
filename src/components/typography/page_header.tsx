import { ReactNode } from "react";

type PageHeaderProps = {
  title: ReactNode;
  subtitle?: ReactNode;
};

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className="mb-12 mt-12">
      <h1 className="text-6xl text-primary mb-3">{props.title}</h1>
      {props.subtitle && <h3 className="text-3xl">{props.subtitle}</h3>}
    </div>
  );
};

type SectionHeaderProps = {
  children: ReactNode;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="mb-12 mt-12">
      <h3 className="text-3xl text-primary">{props.children}</h3>
    </div>
  );
};
