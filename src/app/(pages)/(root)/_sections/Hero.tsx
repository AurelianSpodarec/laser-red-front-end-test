import Link from "next/link";
import Section from "@/components/_layout/Section";

import Image from "@/components/atoms/Image";
import { ButtonWrap } from "@/components/atoms/Button/ButtonWrap";

function SectionHero() {
  return (
    <Section id="hero" layeredBackground="primary">
      <div className="flex flex-col lg:flex-row items-end">

        <div className="w-full lg:w-1/2 mt-[150px]">
          <div className="mt-auto p-md lg:p-xl">
            <h1 className="headline-xl mb-6 lg:mb-10">A <span className="gradient-primary gradient-size gradient-animated gradient-text">new world</span> of solutions.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <ButtonWrap asChild>
              <Link href="/about">Book a demo</Link>
            </ButtonWrap>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <Image src="/images/team-brainstorming-whiteboard_20251014.jpg" alt="" className="rounded-br-lg rounded-bl-lg lg:rounded-tr-lg lg:rounded-br-lg rounded-none" />
        </div>

      </div>
    </Section>
  );
}

export default SectionHero
