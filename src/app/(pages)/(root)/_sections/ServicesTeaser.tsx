import { ButtonWrap } from "@/components/Button/ButtonWrap";
import CardBase from "@/components/CardBase";
import Container from "@/components/Container";
import Row from "@/components/Row";
import Section from "@/components/Section";
import Link from "next/link";

function SectionServicesTeaser() {
  return (
    <Section background="secondary" spacing="lg">
      <Container>
        <Row alignItems="center" className="flex-col lg:flex-row gap-12 lg:gap-36">

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CardBase
                item={{
                  icon: "/icons/icon-1.svg",
                  title: "Duis fringilla congue turpis",
                  button: {
                    label: "Learn more",
                    url: "#"
                  }
                }}
              />
              <CardBase
                item={{
                  icon: "/icons/icon-7.svg",
                  title: "Nunc scelerisque elementum",
                  button: {
                    label: "Learn more",
                    url: "#"
                  }
                }}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="p-4">
              <h2 className="text-h2-lg">Ut enim leo, hendrerit sit amet tempor nec</h2>
              <p>Vestibulum quam felis, bibendum sed tempor vel, cursus eu dolor. Aliquam luctus velit in aliquam tempus. Suspendisse vitae dignissim mi. Mauris luctus quam ut tellus facilisis feugiat.</p>
              <ButtonWrap variant="secondary">
                <Link href="#">View Our Services</Link>
              </ButtonWrap>
            </div>
          </div>

        </Row>
      </Container>
    </Section>
  );
}

export default SectionServicesTeaser
