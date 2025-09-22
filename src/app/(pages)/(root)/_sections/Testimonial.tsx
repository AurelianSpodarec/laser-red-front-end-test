import Container from "@/components/Container";
import Image from "@/components/Image";
import Section from "@/components/Section";

function SectionTestimonial() {
  return (
    <Section id="testimonial" spacing={{ top: "sm", bottom: "none" }} className="p-2.5">
      <Container>

        <figure className="relative gradient-primary gradient-size gradient-animated rounded-lg md:h-[510px]">
          <div style={{ backgroundImage: "url('/images/pattern.png')" }} className="bg-center bg-size-[200%] flex flex-col md:flex-row gap-16 h-full">

            <div className="flex flex-col h-full p-12">
              <blockquote>
                <p className="text-h2-md text-[#02252C]">
                  “unc non massa sit amet metus condimentum varius ac eget libero.
                  Vestibulum nec semper nulla. Aliquam at interdum lacus.”
                </p>
              </blockquote>
              <figcaption className="text-[#02252C] mt-auto">
                <cite className="block text-[16px] font-bold not-italic">Andrew Andrews</cite>
                <span className="block">Marketing Manager</span>
              </figcaption>
            </div>

            <div className="p-2.5">
              <Image
                className="h-full w-full md:w-auto object-cover md:min-w-[350px]"
                src="/images/testimonial.jpg"
                alt="Portrait of Andrew Andrews"
              />
            </div>
          </div>
        </figure>

      </Container>
    </Section >
  );
}

export default SectionTestimonial