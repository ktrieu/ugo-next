import { ResponsiveContainer } from "@/components/container";
import { PageHeader, SectionHeader } from "@/components/typography/page_header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UGO II | About",
  description: "About UGO II.",
};

const AboutPage = () => {
  return (
    <ResponsiveContainer>
      <PageHeader
        title="About UGO II"
        subtitle="The world's greatest company, explained."
      />
      <p>
        Ever since UGO II was founded in 2020, we have been dedicated to one
        goal: continuing to exist, without regard to restrictions like
        profitability, practicality, or physical laws.
      </p>
      <p>
        It's this dedication that has made UGO II more powerful than all but
        three nations (the USA, China, and Moldova).
      </p>
      <p>
        But, here at UGO II, we're not just guided by blind power (though it is
        an essential part of company policy), but by our core values.
      </p>
      <SectionHeader>Core Values</SectionHeader>
      <p>TBA</p>
      <SectionHeader>Headquarters</SectionHeader>
    </ResponsiveContainer>
  );
};

export default AboutPage;
