import Link from "next/link";

function CardBase() {
  return (
    <div>
      <div>Icon</div>
      <span>Headers</span>
      <Link href="">Link</Link>
    </div>
  )
}

function StatCard({ metric, title, desc }: any) {
  return (
    <div>
      <span>{metric}</span>
      <span>{title}</span>
      <span>{desc}</span>
    </div>
  )
}

function WebRoot() {
  return (
    <>
      <section id="hero" className="p-2.5 bg-[#07272E] pb-[110px]">
        <div className="flex flex-col md:flex-row bg-[#062329] rounded-lg">
          <div className="w-1/2 flex">
            <div className="mt-auto p-10">
              <h1 className="font-display font-bold text-h1 leading-[78px] leading-none tracking-[-3.9px] text-white">A <span className="text-gradient">new world</span> of solutions.</h1>
              <p className="text-white py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Link href="#" className="inline-block font-semibold rounded-full text-[#111] text-[18px] gradient py-2 px-6">Book a demo</Link>
            </div>
          </div>
          <div className="w-1/2">
            <img className="rounded-tr-lg rounded-br-lg" src="/images/hero-desktop.jpg" />
          </div>
        </div>
      </section>

      <section className="bg-[#07272E] pb-[130px]">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row  items-center gap-28">
            <div className="w-3/5">
              <img src="/images/lady-computer.jpg" className="rounded-xl h-[480px] w-full object-cover" />
            </div>
            <div className="w-2/5">
              <h2 className="font-display font-bold text-[42px] leading-[1.10em] mb-6">Sed ut nisi quis felis varius molestie.</h2>
              <p>Cras fermentum risus ac interdum euismod. Aliquam dui neque, convallis eu pharetra porta, condimentum in quam. Donec dictum lacus ac lectus cursus eleifend. Aliquam vulputate ipsum eu tincidunt dictum. Aliquam pretium sollicitudin quam, convallis porttitor risus vehicula sed.</p>
              <p>Sed finibus dui sit amet turpis vehicula, at tincidunt urna sollicitudin. Integer justo quam, faucibus nec metus a, bibendum venenatis arcu. Integer interdum sapien tellus, vel imperdiet elit gravida non. Sed et placerat neque, at pellentesque eros.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07272E] pb-[130px]">
        <div className="container mx-auto max-w-[1400px]">
          <div>
            <div>Icon</div>
            <h3>ROI in 18-24 Months</h3>
            <p>Aliquam luctus velit in aliquam tempus.</p>
            <Link href="#">Learn more</Link>
          </div>
        </div>
      </section>


      <section className="bg-[#07272E] pb-[60px]">
        <div className="container mx-auto max-w-[1400px]">
          <figure>
            <blockquote>
              <p>
                “Unc non massa sit amet metus condimentum varius ac eget libero.
                Vestibulum nec semper nulla. Aliquam at interdum lacus.”
              </p>
            </blockquote>

            <figcaption>
              <img src="https://autrix.co.uk/wp-content/uploads/2025/08/Robot-Working-1.webp" alt="Portrait of Andrew Andrews" />
              <div>
                <span>Andrew Andrews</span>
                <p>Marketing Manager</p>
              </div>
            </figcaption>
          </figure>

        </div>
      </section>

      <section className="bg-[#07272E] pb-[190px]">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex">
            <div className="w-1/2">

              <div>
                <img src="" />
                <div>
                  <span>175%</span>

                  <span>Proin pulvinar metus.</span>
                  <p>Hendrerit semper quis auctor lacus.</p>
                </div>
              </div>

            </div>
            <div className="w-1/2">
              <h2 className="font-display">Ut nec nunc tincidunt, mattis leo nec.</h2>
              <p>Etiam facilisis tortor nec porttitor vestibulum. Donec nec urna ac est suscipit mattis. Nam pharetra felis libero, eget consequat dui faucibus in.</p>
              <p>Vivamus laoreet eget dolor sed sodales. Etiam molestie laoreet augue, vitae molestie quam pretium at. Donec maximus diam in dolor convallis cursus. Donec imperdiet vulputate nunc, et viverra metus sagittis ut. Aenean imperdiet convallis sodales. Ut enim leo, hendrerit sit amet tempor nec, auctor eget eros. Proin vitae tellus diam. In laoreet, tellus quis lacinia interdum, ligula mauris aliquet massa, et rhoncus mi dui eget velit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07272E] p-2.5">
        <div className="gradient py-[95px] rounded-lg">
          <div className="container mx-auto max-w-[1400px]">
            <span className="font-bold text-[120px] leading-[115px] tracking-[-4.2px] font-onest inline-block text-[#062C34]">Experience the Vega advantage</span>
            <Link href="#" className="inline-block text-[#062C34] text-[42px] font-bold">Book a demonstration</Link>
          </div>
        </div>
      </section>

      <section className="py-[190px]" style={{ backgroundImage: 'url("/images/man-datacenter.jpg")' }}>
        <div className="container mx-auto max-w-[1400px]">
          <div>
            Card
          </div>
        </div>
      </section>

      <section className="bg-[#02252C] py-[95px]">
        <div className="container mx-auto max-w-[1400px]">

          <div className="flex">
            <div className="w-1/2">
              <div className="grid grid-cols-2">

              </div>
            </div>
            <div className="w-1/2">
              <h2>Ut enim leo, hendrerit sit amet tempor nec</h2>
              <p>Vestibulum quam felis, bibendum sed tempor vel, cursus eu dolor. Aliquam luctus velit in aliquam tempus. Suspendisse vitae dignissim mi. Mauris luctus quam ut tellus facilisis feugiat.</p>
              <Link href="" className="py-2.5 text-[16px] font-semibold rounded-full px-8 gradient text-[#111]">View our services</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-[#07272E] py-[75px]">
        <div className="container mx-auto max-w-[1400px]">

          <div className="flex">
            <div className="w-1/2">
              <h2>Nunc scelerisque elementum dui efficitur</h2>
              <p>Sed at nulla nulla. Duis et ultricies felis. Nulla non tortor nec tellus fermentum fringilla. Pellentesque aliquam sed elit ac commodo.</p>
              <div>

              </div>
            </div>
            <div className="w-1/2">
              <img src="" />
            </div>
          </div>

        </div>
      </section>


      <section className="bg-[#07272E] pb-[120px]">
        <div className="container mx-auto max-w-[1400px]">

          <div className="flex">
            <div className="w-1/2">
              <img src="" />
            </div>
            <div className="w-1/2">
              <h2>Aliquam luctus velit?</h2>
              <p>Suspendisse vitae dignissim mi. Mauris luctus quam ut tellus facilisis feugiat. Nullam pulvinar ante nec eros euismod egestas. Nunc non massa sit amet metus condimentum varius ac eget libero. Vestibulum nec semper nulla. Aliquam at interdum lacus.</p>
            </div>
          </div>

        </div>
      </section>

      <footer className="bg-[#07272E] py-[100px] p-2.5">
        <div className=" bg-[#02252C]  rounded-lg">
          <div className="container mx-auto max-w-[1400px]">
            <div>
              <div className="flex flex-col">
                <a className="text-[50px] font-semibold" href="tel:">01234 123456</a>
                <a className="text-[50px] font-semibold" href="mailto:">hello@vega.co.uk</a>
                <p className="text-[#DADAE2] text-[26px]">Solution Way, Lincoln, Lincolnshire, LN1 VGA</p>
                <a href="/contact" className="bg-[#00CBEC] py-2.5 text-[16px] font-semibold rounded-full px-8 text-[#111] ">Get in touch</a>
              </div>
              <nav>
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
          </div>
        </div>
      </footer>
    </>
  );
}

export default WebRoot
