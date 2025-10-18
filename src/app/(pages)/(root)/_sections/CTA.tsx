import Link from "next/link";

import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";

// TODO: Finish responsivnes
function SectionCTA() {
  return (
    <Section id="cta" className="pb-section-xs md:pb-0">
      <div className="gradient-primary gradient-size gradient-animated p-sm lg:p-lg lg:py-[110px] rounded-lg md:rounded-bl-none md:rounded-br-none">
        <Container>
          <div className="flex flex-col">
            <h2 className="text-display inline-block text-[#062C34]">Experience the Vega advantage</h2>
            <Link href="#" className="inline-block text-[#062C34] text-[42px] font-bold">Book a demonstration</Link>
          </div>
        </Container>
      </div>
    </Section>

  );
}

export default SectionCTA
