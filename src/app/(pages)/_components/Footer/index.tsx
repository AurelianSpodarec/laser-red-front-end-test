import Link from "next/link";

import { WebsiteRoutes } from "@/config/routes";
import { configBrand } from "@/config/brand";

import Section from "@/components/_layout/Section";
import Container from "@/components/_layout/Container";

import { ButtonWrap } from "@/components/atoms/Button/ButtonWrap";
import Image from "@/components/atoms/Image";

function WebFooter() {
  return (
    <Section
      tag="footer"
      layeredBackground="primary"
      layeredClassName="py-section-xs lg:py-section-lg"
    >
      <Container className="px-lg">
        <div className="flex flex-col lg:flex-row justify-between mb-10 lg:mb-[190px]">

          <div>
            <div className="mb-8">
              <Link className="text-h2-lg font-semibold block" href={`tel:${configBrand.phone.raw}`}>{configBrand.phone.display}</Link>
              <Link className="text-h2-lg font-semibold block" href={`mailto:${configBrand.email.main}`}>{configBrand.email.main}</Link>
            </div>
            <p className="text-[#DADAE2] text-[26px] mb-12">Solution Way, Lincoln, Lincolnshire, LN1 VGA</p>
            <ButtonWrap>
              <Link href="#">Get in touch</Link>
            </ButtonWrap>
          </div>

          <nav className="flex-col space-y-2 hidden lg:flex p-0 lg:pr-20">
            <Link href={WebsiteRoutes.SOLUTIONS}>Solutions</Link>
            <Link href={WebsiteRoutes.INDUSTRIES}>Industries</Link>
            <Link href={WebsiteRoutes.TECHNOLOGY}>Technology</Link>
            <Link href={WebsiteRoutes.RESOURCES}>Resources</Link>
            <Link href={WebsiteRoutes.COMPANY}>Company</Link>
            <Link href={WebsiteRoutes.CAREERS}>Careers</Link>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-sm lg:flex flex-wrap text-[#DADAE2] space-x-1 pr-0 lg:pr-4 mb-8 lg:mb-0">
            <span className="block mb-10 lg:mb-0">&copy; {new Date().getFullYear()} {configBrand.name} Limited - Registered in {configBrand.company.registeredCountry}: Company Reg. No. {configBrand.company.registrationNumber}</span>
            <span className="hidden lg:inline">-</span>
            <div className="flex flex-row flex-wrap mb-4 lg:mb-0 space-x-1">
              <Link className="underline whitespace-nowrap" href={WebsiteRoutes.PRIVACY}>Privacy Notice</Link>
              <span>-</span>
              <Link className="underline whitespace-nowrap" href={WebsiteRoutes.COOKIES}>Cookie Notice</Link>
              <span>-</span>
              <Link className="underline whitespace-nowrap" href={WebsiteRoutes.TOS}>Terms of Service</Link>
            </div>
          </div>
          <div className="p-0 lg:pr-20">
            <Image src="/icons/logo-laser.svg" title="Website by Laser Red" alt="" rounded={false} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default WebFooter;
