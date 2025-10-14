interface IHamburgerButtonProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function HamburgerButton({ open, setOpen }: IHamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="relative size-6 cursor-pointer flex-none select-none"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <div className="relative h-full w-full">
        <span className={`${open ? "rotate-[-45deg] top-1/2 -translate-y-1/2" : "top-[4px]"} transition duration-150 will-change-transform absolute left-0 block h-0.5 w-full bg-white`} />
        <span className={`${open ? "rotate-[-135deg] top-1/2 -translate-y-1/2" : "top-1/2 -translate-y-1/2"} transition duration-150 will-change-transform absolute left-0 block h-0.5 w-full bg-white`} />
        <span className={`${open ? "rotate-[-135deg] top-1/2 -translate-y-1/2" : "bottom-[4px]"} transition duration-150 will-change-transform absolute left-0 block h-0.5 w-full bg-white`} />
      </div>
    </button>
  )
}

export default HamburgerButton
