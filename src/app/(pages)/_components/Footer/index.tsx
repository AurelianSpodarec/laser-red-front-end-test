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
      spacing="none"
    >
      <Container>
        <div className="flex flex-col lg:flex-row justify-between mb-[190px]">

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

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-sm">
            <span className="block">&copy; {new Date().getFullYear()} Vega Limited</span>
            <span className="hidden lg:inline">-</span><span className="block">Registered in England: Company Reg. No. 1234567</span>
            <span className="hidden lg:inline">-</span><Link href="">Privacy Notice</Link> - <Link href="">Cookie Notice</Link> - <Link href="">Terms of Service</Link>
          </div>
          <div>
            <img src="/icons/logo-laser.svg" alt="Website by Laser Red" />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default WebFooter;
