import Link from "next/link";

function CardBase({ item }) {
  // size
  return (
    <div className="border border-white rounded-lg p-8 flex flex-col bg-[#062C34] max-w-[440px]">
      <div className="mb-[80px]">
        {/* mb-120px */}
        <img src={item.icon} />
      </div>
      <div className="mt-auto ">
        <h3 className="text-[26px] mb-[16px] tracking-[-1.20] font-bold font-heading">{item.title}</h3>
        <p className="text-[16px] tracking-[0.16px] mb-[50px]">{item.desc}</p>
        <Link href="">{item.link}</Link>
      </div>
    </div>
  )
}

function StatCard({ item }: any) {
  return (
    <div className="bg-[#00CBEC] rounded-lg p-8 text-left text-[#111] w-full max-w-[300px]">
      <span className="text-[83px] text-[#11111] tracking-[-4.15] leading-none block mb-[70px]">{item.metric}</span>
      <div className="mt-auto flex flex-col">
        <span className="font-bold">{item.title}</span>
        <span>{item.desc}</span>
      </div>
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
          <div className="grid grid-cols-4 gap-8">
            <CardBase
              item={{
                icon: "/images/icons/icon-4.svg",
                title: " ROI in 18-24 Months",
                desc: "Aliquam luctus velit in aliquam tempus.",
                link: "Learn more"
              }}
            />
            <CardBase
              item={{
                icon: "/images/icons/icon-2.svg",
                title: "UK Build",
                desc: "Suspendisse vitae dignissim mi.",
                link: "Learn more"
              }}
            />
            <CardBase
              item={{
                icon: "/images/icons/icon-3.svg",
                title: "Competitive Edge",
                desc: "Mauris luctus quam ut tellus facilisis feugiat.",
                link: "Learn more"
              }}
            />
            <CardBase
              item={{
                icon: "/images/icons/icon-6.svg",
                title: "Increase Efficiency",
                desc: "Nullam pulvinar ante nec eros euismod egestas.",
                link: "Learn more"
              }}
            />
          </div>
        </div>
      </section>


      <section className="bg-[#07272E] pb-[60px]">
        <div className="container mx-auto max-w-[1400px]">
          <figure className="relative gradient rounded-lg h-[510px]">
            <div style={{ backgroundImage: "url('/images/pattern.png')" }} className="bg-center bg-size-[200%] flex flex-row gap-16 h-full">

              <div className="flex flex-col h-full p-12">
                <blockquote>
                  <p className="font-bold text-[42px] tracking-[-2.1px] text-[#02252C]">
                    “Unc non massa sit amet metus condimentum varius ac eget libero.
                    Vestibulum nec semper nulla. Aliquam at interdum lacus.”
                  </p>
                </blockquote>
                <div className="text-[#02252C] mt-auto">
                  <span className="text-[16px] font-bold">Andrew Andrews</span>
                  <p>Marketing Manager</p>
                </div>
              </div>

              <figcaption className="p-2.5">
                <img className="h-full w-auto object-cover min-w-[350px]" src="/images/testimonial.jpg" alt="Portrait of Andrew Andrews" />
              </figcaption>
            </div>
          </figure>

        </div>
      </section>

      <section className="bg-[#07272E] pb-[190px]">
        <div className="container mx-auto max-w-[1400px]">


          <div className="flex flex-col md:flex-row  items-center gap-28">
            <div className="w-1/2">
              <div className="h-full relative">
                <img src="/images/stat-image.jpg" className="rounded-xl w-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <StatCard item={{
                    metric: "175%",
                    title: "Proin pulvinar metus.",
                    desc: "Hendrerit semper quis auctor lacus."
                  }} />
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="font-display text-h2">Ut nec nunc tincidunt, mattis leo nec.</h2>
              <p>Etiam facilisis tortor nec porttitor vestibulum. Donec nec urna ac est suscipit mattis. Nam pharetra felis libero, eget consequat dui faucibus in.</p>
              <p>Vivamus laoreet eget dolor sed sodales. Etiam molestie laoreet augue, vitae molestie quam pretium at. Donec maximus diam in dolor convallis cursus. Donec imperdiet vulputate nunc, et viverra metus sagittis ut. Aenean imperdiet convallis sodales. Ut enim leo, hendrerit sit amet tempor nec, auctor eget eros. Proin vitae tellus diam. In laoreet, tellus quis lacinia interdum, ligula mauris aliquet massa, et rhoncus mi dui eget velit.</p>
              <Link href="#" className="inline-block font-semibold rounded-full text-[#111] text-[18px] gradient py-2 px-6">View Case Study</Link>
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
          <div className="flex justify-end">
            <CardBase item={{
              icon: "/images/icons/icon-5.svg",
              title: "Integer justo quam, faucibus nec metus",
              desc: "Ut a erat dolor. Nullam tortor diam, pretium vel massa non, volutpat condimentum nisi.",
              link: "Contact our team"
            }} />
          </div>
        </div>
      </section>

      <section className="bg-[#02252C] py-[95px]">
        <div className="container mx-auto max-w-[1400px]">

          <div className="flex gap-36">
            <div className="w-1/2">
              <div className="grid grid-cols-2 gap-8">
                <CardBase item={{
                  icon: "/images/icons/icon-1.svg",
                  title: "Duis fringilla congue turpis",
                  link: "Learn more"
                }} />
                <CardBase item={{
                  icon: "/images/icons/icon-7.svg",
                  title: "Nunc scelerisque elementum",
                  link: "Learn more"
                }} />
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="font-display text-h2">Ut enim leo, hendrerit sit amet tempor nec</h2>
              <p>Vestibulum quam felis, bibendum sed tempor vel, cursus eu dolor. Aliquam luctus velit in aliquam tempus. Suspendisse vitae dignissim mi. Mauris luctus quam ut tellus facilisis feugiat.</p>
              <Link href="" className="inline-block py-2.5 text-[16px] font-semibold rounded-full px-8 gradient text-[#111]">View our services</Link>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-[#07272E] py-[75px]">
        <div className="container mx-auto max-w-[1400px]">

          <div className="flex">
            <div className="w-1/2">
              <h2 className="font-display text-h2">Nunc scelerisque elementum dui efficitur</h2>
              <p>Sed at nulla nulla. Duis et ultricies felis. Nulla non tortor nec tellus fermentum fringilla. Pellentesque aliquam sed elit ac commodo.</p>
              <div className="grid grid-cols-4 gap-6">
                <StatCard item={{
                  metric: "99%",
                  title: "Etiam ut dignissim nunc.",
                  desc: "Etiam facilisis tortor nec porttitor vestibulum"
                }} />
                <StatCard item={{
                  metric: "30%",
                  title: "Vivamus laoreet",
                  desc: " Etiam molestie laoreet augue, vitae molestie"
                }} />
              </div>
            </div>
            <div className="w-1/2">
              <img src="/images/stats-image-computer.jpg" className="w-full h-full" />
            </div>
          </div>

        </div>
      </section>


      <section className="bg-[#07272E] pb-[120px]">
        <div className="container mx-auto max-w-[1400px]">

          <div className="flex items-center gap-28">
            <div className="w-1/2">
              <div className="flex flex-row gap-8">
                <div>
                  <img src="/images/woman.jpg" />
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <img src="/images/man.jpg" />
                  </div>
                  <div>
                    <StatCard item={{
                      metric: "30+",
                      title: "Duis fringilla congue",
                      desc: "Sed at nulla nulla"
                    }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="font-display text-h2">Aliquam luctus velit?</h2>
              <p>Suspendisse vitae dignissim mi. Mauris luctus quam ut tellus facilisis feugiat. Nullam pulvinar ante nec eros euismod egestas. Nunc non massa sit amet metus condimentum varius ac eget libero. Vestibulum nec semper nulla. Aliquam at interdum lacus.</p>
              <button className="py-2.5 text-[16px] font-semibold rounded-full px-8 gradient text-[#111]">Learn more</button>
            </div>
          </div>

        </div>
      </section>

      <footer className="bg-[#07272E] p-2.5">
        <div className=" bg-[#02252C] py-[100px] rounded-lg">
          <div className="container mx-auto max-w-[1400px]">
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
          </div>
        </div>
      </footer>
    </>
  );
}

export default WebRoot
