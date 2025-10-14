import MenuLink from "./MenuLink";
import dataMenu from "../../dataMenu";

function Drawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <aside className={`fixed top-0 right-0 w-4/5 h-full bg-[#2d2d3b] overflow-y-auto z-50 flex flex-col transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}>
 

    </aside>
  );
}

export default Drawer
