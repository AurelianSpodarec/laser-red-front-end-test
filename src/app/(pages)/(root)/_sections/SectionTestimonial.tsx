import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import SingleTestimonial from "@/components/SingleTestimonial";

function SectionTestimonial() {
  return (
    <Section id="testimonial" spacing={{ top: "sm", bottom: "none" }}>
      <Container>

        <SingleTestimonial
          quote="“unc non massa sit amet metus condimentum varius ac eget libero. Vestibulum nec semper nulla. Aliquam at interdum lacus.”"
          author="Andrew Andrews"
          role="Marketing Manager"
          image={{
            src: "/images/tech-expert-digital-interface_20251014.jpg",
            alt: "Portrait of Andrew Andrews",
          }}
          className="lg:h-[510px]"
        />

      </Container>
    </Section >
  );
}

export default SectionTestimonial
