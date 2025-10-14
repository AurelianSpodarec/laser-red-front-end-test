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
    <div className={`flex flex-col bg-[#00CBEC] rounded-lg p-4 lg:p-8 text-left text-[#111] w-full max-w-[300px] ${className}`}>
      <span className="text-[60px] lg:text-[83px] text-[#11111] tracking-[-4.15] leading-none block mb mb-8 lg:mb-[70px]">
        {item.metric}
      </span>
      <div className="mt-auto flex flex-col">
        <span className="font-onset tracking-[-0.4px] font-bold">{item.title}</span>
        <span className="font-onset tracking-[-0.4px]">{item.desc}</span>
      </div>
    </div>
  )
}

export default CardStat
