import React from "react"
import Image from "../atoms/Image"
import { ButtonWrap } from "../atoms/Button/ButtonWrap"

export interface ICardItem {
  icon: string
  title: string
  desc?: string
  button: {
    label: string;
    url: string;
  }
}

function CardBase({ item }: { item: ICardItem }) {
  return (
    <div className="border-2 border-white rounded-lg p-8 flex flex-col bg-[#062C34] max-w-[440px]">
      <div className="mb-[40px] md:mb-[80px]">
        {/* mb-120 */}
        <Image src={item.icon} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <div>
          {item.title &&
            <h3 className="text-[26px] mb-[16px] tracking-[-1.20] font-bold font-heading">{item.title}</h3>
          }

          {item.desc &&
            <p className="text-[16px] tracking-[0.16px] mb-[50px]">{item.desc}</p>
          }
        </div>

        <div className="mt-auto">
          {item.button &&
            <ButtonWrap {...item.button} />
          }
        </div>
      </div>
    </div>
  )
}

export default CardBase
