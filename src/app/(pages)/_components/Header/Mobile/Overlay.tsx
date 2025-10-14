'use client'

function Overlay({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-200 lg:duration-0 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />
  );
}

export default Overlay
