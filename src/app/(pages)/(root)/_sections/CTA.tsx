import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";

function SectionCTA() {
  return (
    <Section className="p-2.5" spacing={{ bottom: "none" }}>
      <div className="gradient-primary gradient-size gradient-animated py-[110px] rounded-tl-lg rounded-tr-lg">
        <Container>
          <span className="text-h0 inline-block text-[#062C34]">Experience the Vega advantage</span>
          <Link href="#" className="inline-block text-[#062C34] text-[42px] font-bold">Book a demonstration</Link>
        </Container>
      </div>
    </Section>

  );
}

export default SectionCTA