import React from "react"
import Link from "next/link"
import Image from "./Image"
import { ButtonWrap } from "./Button/ButtonWrap"

export interface ICardItem {
  icon: string
  title: string
  desc?: string
  link: string
}

function CardBase({ item }: { item: ICardItem }) {
  return (
    <div className="border border-white rounded-lg p-8 flex flex-col bg-[#062C34] max-w-[440px]">
      <div className="mb-[80px]">
        {/* mb-120 */}
        <Image src={item.icon} alt="" />
      </div>
      <div className="mt-auto">
        <h3 className="text-[26px] mb-[16px] tracking-[-1.20] font-bold font-heading">
          {item.title}
        </h3>
        {item.desc &&
          <p className="text-[16px] tracking-[0.16px] mb-[50px]">{item.desc}</p>
        }
        {/* <Link href="">{item.link}</Link> */}
        <ButtonWrap variant="primary">
          <Link href="#">{item.link}</Link>
        </ButtonWrap>
      </div>
    </div>
  )
}

export default CardBase
