import CardBase, { ICardItem } from "@/components/CardBase";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Section from "@/components/Section";

export const dataCards: ICardItem[] = [
  {
    icon: "/images/icons/icon-4.svg",
    title: "ROI in 18-24 Months",
    desc: "Aliquam luctus velit in aliquam tempus.",
    link: "Learn more"
  },
  {
    icon: "/images/icons/icon-2.svg",
    title: "UK Build",
    desc: "Suspendisse vitae dignissim mi.",
    link: "Learn more"
  },
  {
    icon: "/images/icons/icon-3.svg",
    title: "Competitive Edge",
    desc: "Mauris luctus quam ut tellus facilisis feugiat.",
    link: "Learn more"
  },
  {
    icon: "/images/icons/icon-6.svg",
    title: "Increase Efficiency",
    desc: "Nullam pulvinar ante nec eros euismod egestas.",
    link: "Learn more"
  }
];

function Section3() {
  return (
    <Section spacing="none">
      <Container>

        <Grid className="grid-cols-1 md:grid-cols-4 gap-8">
          {dataCards.map((item, index) => (
            <CardBase key={index} item={item} />
          ))}
        </Grid>

      </Container>
    </Section>
  );
}

export default Section3