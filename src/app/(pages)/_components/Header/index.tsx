'use client'

import Link from "next/link";

function WebHeader() {
  return (
    <header className="fixed top-0 w-full flex items-center h-[90px] px-[50px] mt-4">
      <Link href="/" className="mr-16">
        <img src="/images/vega-logo.png" alt="Vega - Go to homepage" />
      </Link>
      <nav className="flex items-center space-x-8" aria-label="Main navigation">
        <Link href="#" className="text-white font-display font-semibold text-[18px] leading-[28px] tracking-[0.27px]">Solutions</Link>
        <Link href="#" className="text-white font-display font-semibold text-[18px] leading-[28px] tracking-[0.27px]">Software</Link>
        <Link href="#" className="text-white font-display font-semibold text-[18px] leading-[28px] tracking-[0.27px]">Services</Link>
        <Link href="#" className="text-white font-display font-semibold text-[18px] leading-[28px] tracking-[0.27px]">Case Studies</Link>
        <Link href="#" className="text-white font-display font-semibold text-[18px] leading-[28px] tracking-[0.27px]">Company</Link>
      </nav>
      <div className="flex items-center ml-auto">
        <button
          type="button"
          aria-label="Search site"
        >
          Search
        </button>
        <Link href="#" className="py-2.5 text-[16px] font-semibold rounded-full px-8 gradient text-[#111] ">Contact</Link>
      </div>
    </header>
  );
}

export default WebHeader
