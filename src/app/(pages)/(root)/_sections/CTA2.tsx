import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import CardBase from "@/components/molecules/CardBase";

function SectionCTA2() {
  return (
    <Section id="cta2" spacing="none">
      <div style={{ backgroundImage: 'url("/images/it-technician-server-maintenance_20251014.jpg")' }} className="rounded-bl-lg rounded-br-lg">
        <Container>

          <div className="flex flex-col md:block h-[900px] md:h-auto md:py-[190px]">
            <div className="flex justify-end items-end p-4 pb-8 md:p-2.5 mt-auto">
              <CardBase
                item={{
                  icon: "/icons/icon-5.svg",
                  title: "Integer justo quam, faucibus nec metus",
                  desc: "Ut a erat dolor. Nullam tortor diam, pretium vel massa non, volutpat condimentum nisi.",
                  button: {
                    label: "Contact our team",
                    url: "#",
                  },
                }}
              />
            </div>
          </div>

        </Container>
      </div>
    </Section>
  );
}

export default SectionCTA2
