"use client";

import { ReactNode, useState } from "react";
import { Cube, Gavel, Icon, Money, Question } from "@phosphor-icons/react";

type CoreValue = {
  icon: Icon;
  name: string;
  text: ReactNode;
};

const VALUES: CoreValue[] = [
  {
    icon: Gavel,
    name: "Bureaucracy",
    text: <p>At UGO II, it begins and ends with bureaucracy.</p>,
  },
  {
    icon: Money,
    name: "Not-For-Cost Model",
    text: (
      <p>
        While many companies claim to be not-for-profit, UGO II is the world's
        first not-for-cost company. In the name of efficiency, we strive to
        avoid spending any money whatsoever on our business, and so far we have
        mostly succeeded.
      </p>
    ),
  },
  {
    icon: Cube,
    name: "Our Product Is",
    text: (
      <p>
        Our company motto reminds us not to limit ourselves to any one product,
        or indeed, to having products at all. At UGO II, our product is, no
        follow-up required.
      </p>
    ),
  },
  {
    icon: Question,
    name: "Who Can Say For Sure?",
    text: (
      <p>
        In business, the only thing that never changes is change. Our core value
        of "who can say for sure?" reminds us that sometimes, as the fast-paced
        world of business morphs into new and exciting forms, the best answer is
        no answer.
      </p>
    ),
  },
  {
    icon: Gavel,
    name: "Bureaucracy",
    text: <p>At UGO II, it begins and ends with bureaucracy.</p>,
  },
];

type CoreValueButtonProps = {
  value: CoreValue;
  onClick: () => void;
  selected: boolean;
};

const CoreValueButton = (props: CoreValueButtonProps) => {
  return (
    <button
      className="w-full p-3 border-primary border-4 hover:bg-primary hover:text-secondary font-sans"
      onClick={props.onClick}
    >
      {props.value.name}
    </button>
  );
};

type CoreValueDescProps = {
  value: CoreValue;
  selected: boolean;
};

const CoreValueDesc = (props: CoreValueDescProps) => {
  const ValueIcon = props.value.icon;
  return (
    <div className={!props.selected ? "hidden" : ""}>
      <div className="text-primary mb-6">
        <ValueIcon size={128} />
      </div>
      {props.value.text}
    </div>
  );
};

export const CoreValues = () => {
  const [selectedValue, setSelectedValue] = useState<number>(0);

  return (
    <div className="flex gap-12 items-stretch w-full flex-wrap lg:flex-nowrap">
      <div className="flex-1 flex flex-col justify-stretch gap-3">
        {VALUES.map((value, idx) => (
          <CoreValueButton
            key={idx}
            value={value}
            onClick={() => setSelectedValue(idx)}
            selected={selectedValue === idx}
          />
        ))}
      </div>
      <div className="flex-1 flex">
        {VALUES.map((value, idx) => (
          <CoreValueDesc
            key={idx}
            value={value}
            selected={selectedValue === idx}
          />
        ))}
      </div>
    </div>
  );
};
