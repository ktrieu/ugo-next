"use client";

import { ReactNode, useState } from "react";
import {
  Cube,
  Gavel,
  Icon,
  Money,
  Question,
  CaretDown,
  CaretRight,
} from "@phosphor-icons/react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";

type CoreValue = {
  id: string;
  icon: Icon;
  name: string;
  text: ReactNode;
};

const VALUES: CoreValue[] = [
  {
    id: "bureaucracy-1",
    icon: Gavel,
    name: "Bureaucracy",
    text: (
      <>
        <p>
          At UGO II, our core values are protected by a resilient shell of
          bureaucracy.
        </p>
        <p>Don't believe us? Just join one of our patented scrums.</p>
      </>
    ),
  },
  {
    id: "not-for-cost",
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
    id: "our-product-is",
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
    id: "who-can-say",
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
    id: "bureaucracy-2",
    icon: Gavel,
    name: "Bureaucracy",
    text: (
      <>
        <p>
          At UGO II, our core values are protected by a resilient shell of
          bureaucracy.
        </p>
        <p>Don't believe us? Just join one of our patented scrums.</p>
      </>
    ),
  },
];

type ValueAccordionItemProps = {
  item: CoreValue;
  selected: boolean;
};

const ValueAccordionItem = (props: ValueAccordionItemProps) => {
  const ValueIcon = props.item.icon;

  const triggerClass = classNames("w-full text-left text-2xl p-3");

  return (
    <Accordion.Item
      value={props.item.id}
      className="border-primary border-4 mb-3"
    >
      <Accordion.Header>
        <Accordion.Trigger className={triggerClass}>
          <div className="flex items-center">
            {props.selected ? (
              <CaretDown weight="bold" className="mr-3" />
            ) : (
              <CaretRight weight="bold" className="mr-3" />
            )}
            <h1>{props.item.name}</h1>
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="p-3">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="text-primary mb-6 mr-auto lg:mr-6 lg:mb-0">
            <ValueIcon size={64} />
          </div>
          <div className="flex-1">{props.item.text}</div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export const CoreValues = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <Accordion.Root
      type="single"
      value={selected}
      onValueChange={(value) => setSelected(value)}
      collapsible
    >
      {VALUES.map((value) => (
        <ValueAccordionItem
          item={value}
          selected={selected === value.id}
          key={value.id}
        />
      ))}
    </Accordion.Root>
  );
};
