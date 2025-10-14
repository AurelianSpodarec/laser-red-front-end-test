'use client'

import { useState } from "react";
import Link from "next/link";

import dataMenu from "./dataMenu";
import MobileDrawer from "./Mobile";
import MenuItem from "./MenuItem";

import HamburgerButton from "./Mobile/HamburgerButton";
import { ButtonWrap } from "@/components/Button/ButtonWrap";
import Overlay from "./Mobile/Overlay";

function WebHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 w-full flex items-center h-[90px] px-10 lg:px-12 mt-4 z-50">

        <Link href="/" className="mr-8 lg:mr-16 w-[140px] lg:w-[170px]">
          <img src="/icons/logo-vega.png" alt="" />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
          {dataMenu.map((item) => {
            return <MenuItem key={item.link} item={item} />
          })}
        </nav>

        <div className="flex items-center ml-auto">
          {/* <button type="button" aria-label="Search site">
            Search
          </button> */}

          {/* <Link href="#" className="py-2.5 text-[16px] font-semibold rounded-full px-8 gradient text-[#111] ">Contact</Link> */}
          <ButtonWrap asChild variant="gradient" className="hidden lg:flex">
            <Link href="#">Contact</Link>
          </ButtonWrap>
        </div>

        <HamburgerButton open={open} setOpen={setOpen} />
      </header>

      <MobileDrawer open={open} onClick={() => setOpen(false)} />
      <Overlay open={open} onClick={() => setOpen(false)} />
    </>
  );
}

export default WebHeader
