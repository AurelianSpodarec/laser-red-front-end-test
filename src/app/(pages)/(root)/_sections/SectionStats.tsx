import Container from "@/components/Container";
import Image from "@/components/Image";
import Row from "@/components/Row";
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";

function SectionStats() {
  return (
    <Section spacing="lg">
      <Container>
        <Row className="flex-col-reverse md:flex-row gap-12 lg:gap-44" alignItems="center">

          <div className="w-full md:w-1/2">
            <h2 className="text-h2-md">Nunc scelerisque elementum dui efficitur</h2>
            <p>Sed at nulla nulla. Duis et ultricies felis. Nulla non tortor nec tellus fermentum fringilla. Pellentesque aliquam sed elit ac commodo.</p>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <StatCard
                item={{
                  metric: "99%",
                  title: "Etiam ut dignissim nunc.",
                  desc: "Etiam facilisis tortor nec porttitor vestibulum"
                }}
              />
              <StatCard
                item={{
                  metric: "30%",
                  title: "Vivamus laoreet",
                  desc: " Etiam molestie laoreet augue, vitae molestie"
                }}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Image src="/images/stats-image-computer.jpg" className="lg:h-[650px] w-full object-cover" />
          </div>

        </Row>
      </Container>
    </Section>
  );
}

export default SectionStats
