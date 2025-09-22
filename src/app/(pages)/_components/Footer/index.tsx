import Link from "next/link";

import Section from "@/components/Section";
import Container from "@/components/Container";
import { ButtonWrap } from "@/components/Button/ButtonWrap";

function WebFooter() {
  return (
    <Section
      tag="footer"
      layeredBackground="primary"
      layeredClassName="py-[100px]"
    >
      <Container>
        <div className="flex justify-between mb-[190px]">

          <div>
            <div className="mb-8">
              <a className="text-h2-lg font-semibold block" href="tel:">01234 123456</a>
              <a className="text-h2-lg font-semibold block" href="mailto:">hello@vega.co.uk</a>
            </div>
            <p className="text-[#DADAE2] text-[26px] mb-12">Solution Way, Lincoln, Lincolnshire, LN1 VGA</p>
            <ButtonWrap>
              <Link href="#">Get in touch</Link>
            </ButtonWrap>
          </div>

          <nav className="flex flex-col">
            <Link href="">Solutions</Link>
            <Link href="">Industries</Link>
            <Link href="">Technology</Link>
            <Link href="">Resources</Link>
            <Link href="">Company</Link>
            <Link href="">Careers</Link>
            <Link href="">Resoruces</Link>
          </nav>
        </div>

        <div className="flex justify-between">
          <span className="text-sm">&copy; {new Date().getFullYear()} Vega Limited - Registered in England: Company Reg. No. 1234567 - Privacy Notice - Cookie Notice - Terms of Service</span>
          <span><img src="/images/laser-logo.svg" /></span>
        </div>
      </Container>
    </Section>
  )
}

export default WebFooter;
