import { ButtonWrap } from "@/components/Button/ButtonWrap";
import Container from "@/components/Container";
import ImageContainer from "@/components/ImageContainer";
import Row from "@/components/Row";
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import Link from "next/link";

function Section4() {
  return (
    <Section spacing={{ top: "sm", bottom: "2xl" }}>
      <Container>
        <Row className="gap-12 md:gap-44 flex-col md:flex-row items-center" alignItems="center">

          <div className="w-full md:w-1/2">
            <ImageContainer
              src="/images/stat-image.jpg"
              overlay
              overlayPosition="center"
            >
              <StatCard
                item={{
                  metric: "175%",
                  title: "Proin pulvinar metus.",
                  desc: "Hendrerit semper quis auctor lacus.",
                }}
              />
            </ImageContainer>
          </div>

          <div className="w-full md:w-1/2">
            <div className="px-4.5">

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