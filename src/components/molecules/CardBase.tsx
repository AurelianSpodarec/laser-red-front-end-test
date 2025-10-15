import React from "react"
import Image from "../atoms/Image"
import { ButtonWrap } from "../atoms/Button/ButtonWrap"
import { IButton } from "../atoms/Button/IButton"

export interface ICardItem {
  icon: string
  title: string
  desc?: string
  button: IButton
}

// TODO: Add more variants for different cases; hence the commented out mb-120
function CardBase({ item, className }: { item: ICardItem, className: string }) {
  return (
    <div className={`flex flex-col border-2 border-white rounded-lg p-lg bg-[#062C34] ${className}`}>
      <div className="mb-10 md:mb-20">
        {/* mb-120 */}
        <Image src={item.icon} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <div>
          {item.title && <h3 className="text-[26px] mb-sm tracking-[-1.20] font-bold font-heading">{item.title}</h3>}
          {item.desc && <p className="text-[16px] tracking-[0.16px] mb-xl">{item.desc}</p>}
        </div>
        <div className="mt-auto">
          {item.button && <ButtonWrap {...item.button} />}
        </div>
      </div>
    </div>
  )
}

export default CardBase
