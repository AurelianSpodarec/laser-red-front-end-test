import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
// import Link from "next/link";

// TODO: Finish responsivnes
function SectionCTA() {
  return (
    <Section id="cta" className="pb-section-xs md:pb-0">
      <div className="gradient-primary gradient-size gradient-animated py-10 lg:py-[110px] rounded-lg md:rounded-bl-none md:rounded-br-none">
        <Container>
          <div className="px-10">
            <h2 className="text-h0 inline-block text-[#062C34]">Experience the Vega advantage</h2>
            {/* <Link href="#" className="inline-block text-[#062C34] text-[42px] font-bold">Book a demonstration</Link> */}
          </div>
        </Container>
      </div>
    </Section>

  );
}

export default SectionCTA
