'use client'

import Link from "next/link"
import { IMenuItem } from "./dataMenu"

function MenuItem({ item, onClick }: { item: IMenuItem, onClick?: () => void }) {
  return (
    <Link href={item.link} onClick={onClick} className="text-white font-display font-semibold text-[18px] leading-[28px] tracking-[0.27px]">{item.name}</Link>
  )
}

export default MenuItem
