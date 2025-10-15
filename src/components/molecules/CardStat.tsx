import React from "react"

interface IStatItem {
  metric: string | number
  title: string
  desc: string
}

interface ICardStatProps {
  item: IStatItem
  className?: string
}

function CardStat({ item, className }: ICardStatProps) {
  return (
    <div className={`flex flex-col bg-[#00CBEC] rounded-lg p-sm lg:p-lg text-left w-full text-[#111] ${className}`}>
      <span className="text-[60px] lg:text-[80px] text-[#11111] tracking-[-4.15] leading-none block mb-lg md:mb-xxl">
        {item.metric}
      </span>
      <div className="flex flex-col mt-auto">
        <span className="font-onset tracking-[-0.4px] font-bold">{item.title}</span>
        <span className="font-onset tracking-[-0.4px]">{item.desc}</span>
      </div>
    </div>
  )
}

export default CardStat
