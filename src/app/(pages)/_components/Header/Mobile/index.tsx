'use client'

import { useEffect } from "react";
import Link from "next/link";

import dataMenu from "../dataMenu";
import MenuItem from "../MenuItem";

import { ButtonWrap } from "@/components/Button/ButtonWrap";

function MobileDrawer({ open, onClick }: { open: boolean, onClick: () => void }) {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && open) {
        onClick();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open, onClick]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-30 flex flex-col bg-[#07272e] h-full w-full md:w-[400px] sm:right-0 sm:left-auto
        transform transition-transform duration-300 lg:duration-0 ease-in-out
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

export default MobileDrawer
