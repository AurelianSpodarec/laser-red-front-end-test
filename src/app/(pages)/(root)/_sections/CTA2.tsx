import CardBase from "@/components/CardBase";
import Container from "@/components/Container";
import Section from "@/components/Section";

function SectionCTA2() {
  return (
    <Section className="px-2.5" spacing="none">
      <div style={{ backgroundImage: 'url("/images/man-datacenter.jpg")' }} className="rounded-bl-lg rounded-br-lg">

        <Container className="container mx-auto max-w-[1400px] py-[190px] ">
          <div className="flex justify-end p-2.5">
            <CardBase item={{
              icon: "/images/icons/icon-5.svg",
              title: "Integer justo quam, faucibus nec metus",
              desc: "Ut a erat dolor. Nullam tortor diam, pretium vel massa non, volutpat condimentum nisi.",
              link: "Contact our team"
            }} />
          </div>
        </Container>

      </div>
    </Section>
  );
}

export default SectionCTA2