'use client'

import { useEffect, useState } from "react";
import Link from "next/link";

import dataMenu, { IMenuItem } from "./dataMenu";

import HamburgerButton from "./HamburgerButton";
import { ButtonWrap } from "@/components/Button/ButtonWrap";

function MobileDropdown({ open, onClick }: { open: boolean, onClick: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-30 flex flex-col bg-[#07272e] h-full w-full
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col flex-1 overflow-hidden pt-30 px-8">
        <nav className="flex-1 overflow-y-scroll flex flex-col text-center space-y-6 py-4">
          {dataMenu.map((item) => (
            <MenuItem key={item.link} item={item} onClick={onClick} />
          ))}
        </nav>
      </div>

      <div className="p-8 bg-[#07272e] border-t border-[#0a3841]">
        <ButtonWrap asChild variant="gradient" block>
          <Link href="#">Contact</Link>
        </ButtonWrap>
      </div>
    </div>
  );
}

function MenuItem({ item, onClick }: { item: IMenuItem, onClick?: () => void }) {
  return (
    <Link href={item.link} onClick={onClick} className="text-white font-display font-semibold text-[18px] leading-[28px] tracking-[0.27px]">{item.name}</Link>
  )
}

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
          <button
            type="button"
            aria-label="Search site"
          >
            Search
          </button>

          {/* <Link href="#" className="py-2.5 text-[16px] font-semibold rounded-full px-8 gradient text-[#111] ">Contact</Link> */}
          <ButtonWrap asChild variant="gradient" className="hidden lg:block">
            <Link href="#">Contact</Link>
          </ButtonWrap>
        </div>

        <HamburgerButton open={open} setOpen={setOpen} />
      </header>

      <MobileDropdown open={open} onClick={() => setOpen(false)} />
    </>
  );
}

export default WebHeader
