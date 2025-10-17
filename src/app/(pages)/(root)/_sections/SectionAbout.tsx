import Link from "next/link";

import Section from "@/components/_layout/Section";
import Container from "@/components/_layout/Container";
import Row from "@/components/_layout/Row";

import Image from "@/components/atoms/Image";
import { ButtonWrap } from "@/components/atoms/Button/ButtonWrap";

import StatCard from "@/components/molecules/CardStat";

function SectionAbout() {
  return (
    <Section id="section-about" className="pt-section-sm pb-section-lg md:pb-section-xl">
      <Container>
        <Row alignItems="center" className="flex-col grid-cols-2 lg:flex-row lg:gap-28 lg:h-[500px]">

          <div className="w-full mb-16 lg:mb-0">
            <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">

              <div>
                <Image
                  src="/images/tech-professional-server-room_20251014.jpg"
                  alt="Woman"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="flex lg:flex-col gap-lg">
                <div className="flex-1">
                  <Image
                    src="/images/it-specialist-data-center_20251014.jpg"
                    alt="Man"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <StatCard
                    className="h-full w-full lg:max-w-[300px]"
                    item={{
                      metric: "30+",
                      title: "Duis fringilla congue",
                      desc: "Sed at nulla nulla",
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="w-full">
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
