import CardBase from "@/components/CardBase";
import Container from "@/components/Container";
import Section from "@/components/Section";

function SectionCTA2() {
  return (
    <Section spacing="none">
      <div style={{ backgroundImage: 'url("/images/man-datacenter.jpg")' }} className="rounded-bl-lg rounded-br-lg">

        <Container className="container mx-auto max-w-[1400px] h-[900px] lg-h-auto lg:py-[190px] flex lg:block">
          <div className="flex justify-end p-4 pb-8 lg:p-2.5 mt-auto">
            <CardBase item={{
              icon: "/icons/icon-5.svg",
              title: "Integer justo quam, faucibus nec metus",
              desc: "Ut a erat dolor. Nullam tortor diam, pretium vel massa non, volutpat condimentum nisi.",
              button: {
                label: "Contact our team",
                url: "#"
              }
            }} />
          </div>
        </Container>

      </div>
    </Section>
  );
}

export default SectionCTA2
