import Container from "@/components/layout/Container";
import Image from "@/components/atoms/Image";
import Row from "@/components/layout/Row";
import Section from "@/components/layout/Section";
import StatCard from "@/components/StatCard";

function SectionStats() {
  return (
    <Section spacing="lg">
      <Container>
        <Row className="flex-col-reverse lg:flex-row gap-12 lg:gap-44" alignItems="center">

          <div className="w-full lg:w-1/2">
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

          <div className="w-full lg:w-1/2">
            <Image src="/images/it-team-server-room_20251014.jpg" className="lg:h-[650px] w-full object-cover" />
          </div>

        </Row>
      </Container>
    </Section>
  );
}

export default SectionStats
