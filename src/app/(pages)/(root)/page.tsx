import { Button } from "@/components/Button";
import { ButtonWrap } from "@/components/Button/ButtonWrap";
import CardBase from "@/components/CardBase";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Image from "@/components/Image";
import ImageContainer from "@/components/ImageContainer";
import Row from "@/components/Row";
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import Link from "next/link";



// Have background div that has all bg colors maybe, kind of like API for backgrounds maybe, so it can be used in section, but also footer, and a div etc
// coz right now if somee wants to use bg from section youd need to change that to footer and a div and thas a bit awkward unless we change the tag for sectoin 


function WebRoot() {
  return (
    <>
      <Section id="hero" className="p-2.5 pb-[110px]">
        <div className="bg-[#062329] rounded-lg">
          <Row className="flex-col md:flex-row" alignItems="end">
            <div className="w-1/2">
              <div className="mt-auto p-10">
                <h1 className="font-display font-bold text-h1 leading-[78px] leading-none tracking-[-3.9px] text-white">A <span className="text-gradient">new world</span> of solutions.</h1>
                <p className="text-white py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <ButtonWrap asChild>
                  <Link href="/about">Book a demo</Link>
                </ButtonWrap>
              </div>
            </div>
            <div className="w-1/2">
              <Image className="rounded-tr-lg rounded-br-lg" src="/images/hero-desktop.jpg" />
            </div>
          </Row>
        </div>
      </Section>

      <Section className="pb-[130px]">
        <Container>
          <Row
            alignItems="center"
            className="flex-col md:flex-row gap-28"
          >
            <div className="w-3/5">
              <Image src="/images/lady-computer.jpg" className="rounded-xl h-[480px] w-full object-cover" />
            </div>
            <div className="w-2/5">
              <h2 className="font-display font-bold text-[42px] leading-[1.10em] mb-6">Sed ut nisi quis felis varius molestie.</h2>
              <p>Cras fermentum risus ac interdum euismod. Aliquam dui neque, convallis eu pharetra porta, condimentum in quam. Donec dictum lacus ac lectus cursus eleifend. Aliquam vulputate ipsum eu tincidunt dictum. Aliquam pretium sollicitudin quam, convallis porttitor risus vehicula sed.</p>
              <p>Sed finibus dui sit amet turpis vehicula, at tincidunt urna sollicitudin. Integer justo quam, faucibus nec metus a, bibendum venenatis arcu. Integer interdum sapien tellus, vel imperdiet elit gravida non. Sed et placerat neque, at pellentesque eros.</p>
            </div>
          </Row>
        </Container>
      </Section>

      <Section className="pb-[130px]">
        <Container>

          <Grid className="grid-cols1 md:grid-cols-4 gap-8">
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
          </Grid>

        </Container>
      </Section>


      <Section id="testimonial" className="pb-[60px]">
        <Container>
          <figure className="relative gradient rounded-lg h-[510px]">
            <div
              style={{ backgroundImage: "url('/images/pattern.png')" }}
              className="bg-center bg-size-[200%] flex flex-col md:flex-row gap-16 h-full"
            >
              <div className="flex flex-col h-full p-12">
                <blockquote>
                  <p className="font-bold text-[42px] tracking-[-2.1px] text-[#02252C]">
                    “Unc non massa sit amet metus condimentum varius ac eget libero.
                    Vestibulum nec semper nulla. Aliquam at interdum lacus.”
                  </p>
                </blockquote>
                <figcaption className="text-[#02252C] mt-auto">
                  <cite className="block text-[16px] font-bold not-italic">Andrew Andrews</cite>
                  <span className="block">Marketing Manager</span>
                </figcaption>
              </div>

              <div className="p-2.5">
                <img
                  className="h-full w-auto object-cover min-w-[350px]"
                  src="/images/testimonial.jpg"
                  alt="Portrait of Andrew Andrews"
                />
              </div>
            </div>
          </figure>
        </Container>
      </Section>


      <Section className="pb-[190px]">
        <Container>

          <Row
            className="gap-28 md:flex-row items-center"
            direction="column"
            alignItems="center"
          >
            <div className="w-1/2">
              <ImageContainer
                src="/images/stat-image.jpg"
                overlay
                overlayPosition="center"
              >
                <StatCard
                  item={{
                    metric: "175%",
                    title: "Proin pulvinar metus.",
                    desc: "Hendrerit semper quis auctor lacus.",
                  }}
                />
              </ImageContainer>
            </div>
            <div className="w-1/2">
              <h2 className="font-display text-h2">Ut nec nunc tincidunt, mattis leo nec.</h2>
              <p>Etiam facilisis tortor nec porttitor vestibulum. Donec nec urna ac est suscipit mattis. Nam pharetra felis libero, eget consequat dui faucibus in.</p>
              <p>Vivamus laoreet eget dolor sed sodales. Etiam molestie laoreet augue, vitae molestie quam pretium at. Donec maximus diam in dolor convallis cursus. Donec imperdiet vulputate nunc, et viverra metus sagittis ut. Aenean imperdiet convallis sodales. Ut enim leo, hendrerit sit amet tempor nec, auctor eget eros. Proin vitae tellus diam. In laoreet, tellus quis lacinia interdum, ligula mauris aliquet massa, et rhoncus mi dui eget velit.</p>
              <Link href="#" className="inline-block font-semibold rounded-full text-[#111] text-[18px] gradient py-2 px-6">View Case Study</Link>
            </div>
          </Row>

        </Container>
      </Section>

      <Section className="p-2.5 pb-0">
        <div className="gradient py-[95px] rounded-tl-lg rounded-tr-lg">
          <Container>
            <span className="font-bold text-[50px] lg:text-[120px] leading-[115px] tracking-[-4.2px] font-onest inline-block text-[#062C34]">Experience the Vega advantage</span>
            <Link href="#" className="inline-block text-[#062C34] text-[42px] font-bold">Book a demonstration</Link>
          </Container>
        </div>
      </Section>

      <Section className="px-2.5">
        <div style={{ backgroundImage: 'url("/images/man-datacenter.jpg")' }} className="rounded-bl-lg rounded-br-lg">
          <Container className="container mx-auto max-w-[1400px] py-[190px] ">
            <div className="flex justify-end p-2.5">
              <CardBase item={{
                icon: "/images/icons/icon-5.svg",
                title: "Integer justo quam, faucibus nec metus",
                desc: "Ut a erat dolor. Nullam tortor diam, pretium vel massa non, volutpat condimentum nisi.",
                link: "Contact our team"
              }} />
            </div>
          </Container>
        </div>
      </Section>

      <Section background="secondary" className="py-[95px]">
        <Container>

          <Row alignItems="center" className="gap-36">
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
          </Row>

        </Container>
      </Section>

      <Section className="py-[75px]">
        <Container>

          <Row>
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
              <Image src="/images/stats-image-computer.jpg" className="w-full h-full" />
            </div>
          </Row>

        </Container>
      </Section>


      <Section className="pb-[120px]">
        <Container>

          <Row alignItems="center" className="gap-28">
            <div className="w-1/2">
              <div className="flex flex-row gap-8">
                <div>
                  <Image src="/images/woman.jpg" />
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <Image src="/images/man.jpg" />
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
          </Row>

        </Container>
      </Section>
    </>
  );
}

export default WebRoot
