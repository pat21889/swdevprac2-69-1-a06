import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <nav className="fixed inset-x-0 top-0 z-30 h-12 overflow-hidden border-b border-white/10 bg-navy-blue shadow-sm">
      <div className="flex h-full w-full items-stretch justify-between px-16">
        <span className="flex items-center text-lg font-semibold tracking-wide text-white">
          Venue Explorer
        </span>
        <div className="flex h-full items-stretch gap-5">
          <TopMenuItem title="Booking" pageRef="/booking" />
          <span className="flex items-center">
            <Image
              src="/img/logo.png"
              alt="Venue Explorer logo"
              width={36}
              height={36}
              className="rounded-md ring-1 ring-white/25"
            />
          </span>
        </div>
      </div>
    </nav>
  );
}
