import Image from "next/image";
import { dager } from "@/app/assets/images/index";

const hero = () => {
  return (
    <section className="h-[100svh] w-full">
      <div className="absolute h-full bg-div w-full opacity-60 z-10"/>
      <div className="absolute h-full w-full opacity-60 bg-slate-900 z-20"/>
      <div className="grid grid-cols-10 h-full w-full">
        <Image 
          src={dager}
          quality={100}
          alt="Mariano's face"
          className="h-full w-auto -scale-x-100 col-start-6 col-end-11 z-0"
        />
      </div>

    </section>
  )
}

export default hero