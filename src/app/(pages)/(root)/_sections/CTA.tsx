import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
// import Link from "next/link";

function SectionCTA() {
  return (
    <Section spacing={{ bottom: "none" }}>
      <div className="gradient-primary gradient-size gradient-animated py-10 lg:py-[110px] rounded-tl-lg rounded-tr-lg">
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
