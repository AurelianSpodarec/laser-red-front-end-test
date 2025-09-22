import { ButtonWrap } from "@/components/Button/ButtonWrap";
import Container from "@/components/Container";
import Image from "@/components/Image";
import Row from "@/components/Row";
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import Link from "next/link";

function SectionAbout() {
  return (
    <Section spacing={{ top: "none", bottom: "xl" }}>
      <Container>
        <Row alignItems="center" className="flex-col md:flex-row md:gap-28">

          <div className="w-full md:w-1/2">
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <Image src="/images/woman.jpg" />
              </div>
              <div className="flex flex-row md:flex-col gap-8">
                <div className="w-1/2">
                  <Image src="/images/man.jpg" />
                </div>
                <div className="w-1/2">
                  <StatCard item={{
                    metric: "30+",
                    title: "Duis fringilla congue",
                    desc: "Sed at nulla nulla"
                  }} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-h2-md">Aliquam luctus velit?</h2>
            <p>Suspendisse vitae dignissim mi. Mauris luctus quam ut tellus facilisis feugiat. Nullam pulvinar ante nec eros euismod egestas. Nunc non massa sit amet metus condimentum varius ac eget libero. Vestibulum nec semper nulla. Aliquam at interdum lacus.</p>
            <ButtonWrap>
              <Link href="#">Learn more</Link>
            </ButtonWrap>
          </div>

        </Row>
      </Container>
    </Section>
  );
}

export default SectionAbout