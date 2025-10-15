import Link from "next/link";

import Container from "@/components/_layout/Container";
import Row from "@/components/_layout/Row";
import Section from "@/components/_layout/Section";

import { ButtonWrap } from "@/components/atoms/Button/ButtonWrap";

import StatCard from "@/components/molecules/CardStat";
import ImageContainer from "@/components/molecules/ImageContainer";

function Section4() {
  return (
    <Section id="section4" spacing={{ top: "sm", bottom: "2xl" }}>
      <Container>
        <Row className="flex-col lg:flex-row gap-12 md:gap-24 lg:gap-44 items-center" alignItems="center">

          <div className="w-full lg:w-1/2">
            <ImageContainer
              src="/images/it-professional-data-center-tablet_20251014.jpg"
              overlay
              overlayPosition="center"
            >
              <StatCard
                className="max-w-[300px] m-sm"
                item={{
                  metric: "175%",
                  title: "Proin pulvinar metus.",
                  desc: "Hendrerit semper quis auctor lacus.",
                }}
              />
            </ImageContainer>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="px-sm">

              <h2 className="text-h2-md">Ut nec nunc tincidunt, mattis leo nec.</h2>
              <p>Etiam facilisis tortor nec porttitor vestibulum. Donec nec urna ac est suscipit mattis. Nam pharetra felis libero, eget consequat dui faucibus in.</p>
              <p>Vivamus laoreet eget dolor sed sodales. Etiam molestie laoreet augue, vitae molestie quam pretium at. Donec maximus diam in dolor convallis cursus. Donec imperdiet vulputate nunc, et viverra metus sagittis ut. Aenean imperdiet convallis sodales. Ut enim leo, hendrerit sit amet tempor nec, auctor eget eros. Proin vitae tellus diam. In laoreet, tellus quis lacinia interdum, ligula mauris aliquet massa, et rhoncus mi dui eget velit.</p>
              <ButtonWrap variant="primary">
                <Link href="#">View Case Study</Link>
              </ButtonWrap>

            </div>
          </div>

        </Row>
      </Container>
    </Section>
  );
}

export default Section4
