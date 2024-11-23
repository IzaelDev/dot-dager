import Link from "next/link";
import Image from "next/image";
import { menu } from "@/app/assets/icons/index";


const ToggleMenu = () => {
  return (
    <div className="flex h-full w-full z-40 gap-8 text-[1.2em] font-thin ml-[2.5svw] items-center">
      <ul className="flex gap-8 justify-start hero-text z-50 max-md:hidden">
        <li className="hover:scale-105">
          <Link href="/About">About</Link>
        </li>
        <li className="hover:scale-105">
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="flex md:hidden h-max w-full justify-end mr-2">
        <input type="checkbox" id="check" className="hidden"/>
        <label htmlFor="check" className="checkBtn mr-2">
          <Image 
            src={menu}
            alt="Menu icon"
            width={35}
            height={35}
            className="unselectable"
          />
        </label>
        <label htmlFor="check" className="fixed toggleLyt h-[100svh] w-[100svw] top-0 left-0 bg-black opacity-50 front hidden"/>
        <div className="toggleMn right-0 delayedTransition absolute h-[100svh] w-[266px] top-0 box-border front opacity-100">
          <ul className="relative flex flex-col h-full w-[266px] bg-[#131b2c] text-slate-300 text-[16px] font-bold">
            <li className="grid h-28 w-full grid-cols-3">
              <div className="col-start-1 col-end-2 bg-[#111827] toggleShadowLeft"/>
              <div className="col-start-2 col-end-4 bg-gradient-to-bl from-[#192b50] via-[#111827] to-[#111827] toggleShadowRight"/>
            </li>
            <li className="h-20 bg-[#131b2c] toggleMenuBorder">
              <Link href="/About">
                <div className="h-full w-full flex justify-center items-center delayedTransition hover:scale-105">About</div>
              </Link>
            </li>
            <li className="h-20 bg-[#131b2c] toggleMenuBorder">
              <Link href="/Contact">
                <div className="h-full w-full flex justify-center items-center delayedTransition hover:scale-105">Contact</div>
              </Link>
            </li>
            <li className="h-20 bg-[#131b2c] toggleMenuBorder">
              <Link href="/Store">
                <div className="h-full w-full flex justify-center items-center delayedTransition hover:scale-105">Store</div>
              </Link>
            </li>
            <li className="h-20 bg-[#131b2c] border-t-[1px] border-[#202d4a]"/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ToggleMenu