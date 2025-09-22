import React from "react"

interface StatItem {
  metric: string | number
  title: string
  desc: string
}

interface StatCardProps {
  item: StatItem
}

function StatCard({ item }: StatCardProps) {
  return (
    <div className="bg-[#00CBEC] rounded-lg p-8 text-left text-[#111] w-full max-w-[300px]">
      <span className="text-[83px] text-[#11111] tracking-[-4.15] leading-none block mb-[70px]">
        {item.metric}
      </span>
      <div className="mt-auto flex flex-col">
        <span className="font-bold">{item.title}</span>
        <span>{item.desc}</span>
      </div>
    </div>
  )
}

export default StatCard
