import CardBase, { ICardItem } from "@/components/CardBase";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Section from "@/components/Section";

export const dataCards: ICardItem[] = [
  {
    icon: "/icons/icon-4.svg",
    title: "ROI in 18-24 Months",
    desc: "Aliquam luctus velit in aliquam tempus.",
    button: {
      label: "Learn more",
      kind: "text",
      href: "#",
      size: "none"
    }
  },
  {
    icon: "/icons/icon-2.svg",
    title: "UK Build",
    desc: "Suspendisse vitae dignissim mi.",
    button: {
      label: "Learn more",
      kind: "text",
      href: "#",
      size: "none"
    }
  },
  {
    icon: "/icons/icon-3.svg",
    title: "Competitive Edge",
    desc: "Mauris luctus quam ut tellus facilisis feugiat.",
    button: {
      label: "Learn more",
      kind: "text",
      href: "#",
      size: "none"
    }
  },
  {
    icon: "/icons/icon-6.svg",
    title: "Increase Efficiency",
    desc: "Nullam pulvinar ante nec eros euismod egestas.",
    button: {
      label: "Learn more",
      kind: "text",
      href: "#",
      size: "none"
    }
  }
];

function Section3() {
  return (
    <Section spacing="none">
      <Container>

        <Grid className="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {dataCards.map((item, index) => (
            <CardBase key={index} item={item} />
          ))}
        </Grid>

      </Container>
    </Section>
  );
}

export default Section3
