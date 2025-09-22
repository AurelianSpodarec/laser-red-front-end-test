import Container from "@/components/Container";
import Image from "@/components/Image";
import Row from "@/components/Row";
import Section from "@/components/Section";

function Section2() {
  return (
    <Section spacing="xl" className=" p-2.5">
      <Container>
        <Row alignItems="center" className="flex-col md:flex-row md:gap-28">

          <div className="w-full md:w-3/5">
            <Image src="/images/lady-computer.jpg" className="rounded-xl h-[480px] w-full object-cover" />
          </div>

          <div className="w-full md:w-2/5">
            <h2 className="font-display font-bold text-[42px] leading-[1.10em] mb-6">Sed ut nisi quis felis varius molestie.</h2>
            <p>Cras fermentum risus ac interdum euismod. Aliquam dui neque, convallis eu pharetra porta, condimentum in quam. Donec dictum lacus ac lectus cursus eleifend. Aliquam vulputate ipsum eu tincidunt dictum. Aliquam pretium sollicitudin quam, convallis porttitor risus vehicula sed.</p>
            <p>Sed finibus dui sit amet turpis vehicula, at tincidunt urna sollicitudin. Integer justo quam, faucibus nec metus a, bibendum venenatis arcu. Integer interdum sapien tellus, vel imperdiet elit gravida non. Sed et placerat neque, at pellentesque eros.</p>
          </div>

        </Row>
      </Container>
    </Section>
  );
}

export default Section2