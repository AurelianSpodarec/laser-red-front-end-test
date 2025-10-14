import Link from "next/link";

import { WebsiteRoutes } from "@/config/routes";
import { configBrand } from "@/config/brand";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
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
              <Link className="text-h2-lg font-semibold block" href={`tel:${configBrand.phone.raw}`}>{configBrand.phone.display}</Link>
              <Link className="text-h2-lg font-semibold block" href={`mailto:${configBrand.email.main}`}>{configBrand.email.main}</Link>
            </div>
            <p className="text-[#DADAE2] text-[26px] mb-12">Solution Way, Lincoln, Lincolnshire, LN1 VGA</p>
            <ButtonWrap>
              <Link href="#">Get in touch</Link>
            </ButtonWrap>
          </div>

          <nav className="flex flex-col">
            <Link href={WebsiteRoutes.SOLUTIONS}>Solutions</Link>
            <Link href={WebsiteRoutes.INDUSTRIES}>Industries</Link>
            <Link href={WebsiteRoutes.TECHNOLOGY}>Technology</Link>
            <Link href={WebsiteRoutes.RESOURCES}>Resources</Link>
            <Link href={WebsiteRoutes.COMPANY}>Company</Link>
            <Link href={WebsiteRoutes.CAREERS}>Careers</Link>
            <Link href={WebsiteRoutes.RESOURCES}>Resoruces</Link>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-sm">
            <span className="block">&copy; {new Date().getFullYear()} {configBrand.name} Limited</span>
            <span className="hidden lg:inline"> - </span><span className="block">Registered in {configBrand.company.registeredCountry}: Company Reg. No. {configBrand.company.registrationNumber}</span>
            <span className="hidden lg:inline"> - </span><Link href={WebsiteRoutes.PRIVACY}>Privacy Notice</Link> - <Link href={WebsiteRoutes.COOKIES}>Cookie Notice</Link> - <Link href={WebsiteRoutes.TOS}>Terms of Service</Link>
          </div>
          <div>
            <img src="/icons/logo-laser.svg" title="Website by Laser Red" alt="" />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default WebFooter;
