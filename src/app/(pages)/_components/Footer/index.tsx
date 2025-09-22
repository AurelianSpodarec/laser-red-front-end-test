import Container from "@/components/Container";
import Link from "next/link";

function WebFooter() {
  return (
    <footer className="bg-[#07272E] p-2.5">
      <div className=" bg-[#02252C] py-[100px] rounded">
        <Container>
          <div className="flex mb-[190px] justify-between">

            <div>
              <div className="mb-8">
                <a className="text-[50px] font-semibold block" href="tel:">01234 123456</a>
                <a className="text-[50px] font-semibold block" href="mailto:">hello@vega.co.uk</a>
              </div>
              <p className="text-[#DADAE2] text-[26px] mb-12">Solution Way, Lincoln, Lincolnshire, LN1 VGA</p>
              <a href="/contact" className="bg-[#00CBEC] py-2.5 text-[16px] font-semibold rounded-full inline-block px-8 text-[#111] ">Get in touch</a>
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
            <span className="text-sm">© 2025 Vega Limited - Registered in England: Company Reg. No. 1234567 - Privacy Notice - Cookie Notice - Terms of Service</span>
            <span><img src="/images/laser-logo.svg" /></span>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default WebFooter;
