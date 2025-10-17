import Link from "next/link";

import Container from "@/components/_layout/Container";
import Row from "@/components/_layout/Row";
import Section from "@/components/_layout/Section";

import { ButtonWrap } from "@/components/atoms/Button/ButtonWrap";
import CardBase from "@/components/molecules/CardBase";

function SectionServicesTeaser() {
  return (
    <Section id="section-services-teaser" background="secondary" className="py-section-xs md:py-section-lg">
      <Container>
        <Row alignItems="center" className="flex-col xl:flex-row gap-12 xl:gap-36">

          <div className="w-full xl:w-1/2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-lg">
              <CardBase
                className="border-none w-full xl:max-w-[440px]"
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
                className="border-none w-full xl:max-w-[440px]"
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

          <div className="w-full xl:w-1/2">
            <div className="p-sm">
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
