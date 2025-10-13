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
        <Row alignItems="center" className="flex-col grid-cols-2 md:flex-row md:gap-28 lg:h-[500px]">

          <div className="w-full mb-16 lg:mb-0">
            <div className="flex flex-col md:flex-row gap-8 min-h-[500px]">

              <div>
                <Image
                  src="/images/woman.jpg"
                  alt="Woman"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="flex lg:flex-col gap-8">
                <div className="flex-1">
                  <Image
                    src="/images/man.jpg"
                    alt="Man"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <StatCard
                    className="h-full"
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