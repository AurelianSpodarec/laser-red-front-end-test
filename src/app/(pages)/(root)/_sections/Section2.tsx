import Container from "@/components/layout/Container";
import Image from "@/components/atoms/Image";
import Row from "@/components/layout/Row";
import Section from "@/components/layout/Section";

function Section2() {
  return (
    <Section spacing="xl">
      <Container>
        <Row alignItems="center" className="flex-col lg:flex-row gap-4 md:gap-24 lg:gap-28">

          <div className="w-full lg:w-3/5">
            <Image src="/images/office-worker-at-computer_20251014.jpg" alt="" className="rounded-xl md:h-[480px] w-full object-cover" />
          </div>

          <div className="w-full lg:w-2/5">
            <h2 className="font-display font-bold text-[42px] leading-[1.10em] mb-6">Sed ut nisi quis felis varius molestie.</h2>
            <p className="text-[18px]">Cras fermentum risus ac interdum euismod. Aliquam dui neque, convallis eu pharetra porta, condimentum in quam. Donec dictum lacus ac lectus cursus eleifend. Aliquam vulputate ipsum eu tincidunt dictum. Aliquam pretium sollicitudin quam, convallis porttitor risus vehicula sed.</p>
            <p className="text-[18px]">Sed finibus dui sit amet turpis vehicula, at tincidunt urna sollicitudin. Integer justo quam, faucibus nec metus a, bibendum venenatis arcu. Integer interdum sapien tellus, vel imperdiet elit gravida non. Sed et placerat neque, at pellentesque eros.</p>
          </div>

        </Row>
      </Container>
    </Section>
  );
}

export default Section2
