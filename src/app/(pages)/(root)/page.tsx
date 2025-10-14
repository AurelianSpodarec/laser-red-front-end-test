import SectionHero from "./_sections/Hero";
import Section2 from "./_sections/Section2";
import Section3 from "./_sections/Section3";
import SectionTestimonial from "./_sections/SectionTestimonial";
import Section4 from "./_sections/Section4";
import SectionCTA from "./_sections/CTA";
import SectionCTA2 from "./_sections/CTA2";
import SectionServicesTeaser from "./_sections/ServicesTeaser";
import SectionAbout from "./_sections/SectionAbout";
import SectionStats from "./_sections/SectionStats";

function WebRoot() {
  return (
    <>
      <SectionHero />
      <Section2 />
      <Section3 />
      <SectionTestimonial />
      <Section4 />
      <SectionCTA />
      <SectionCTA2 />
      <SectionServicesTeaser />
      <SectionStats />
      <SectionAbout />
    </>
  );
}

export default WebRoot
