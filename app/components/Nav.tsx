import Image from 'next/image'
import Link from 'next/link'
import ToggleMenu from './ToggleMenu'
import { logo } from '@/app/assets/icons/index'

const NavBar = () => {

  return (
    <nav className="fixed h-[8svh] md:h-[7svh] w-full fontsize-md z-40 font-interceptor-bold">
      <div className="card"/>
      <div className="flex h-full w-full items-center justify-evenly">
        <Link href="/" className="rounded-full z-10">
          <Image 
            src={logo}
            alt="Mariano Villa's logo"
            width={45}
            height={45}
            className="unselectable rounded-full"
          />
        </Link>
        <ToggleMenu />
      </div>
    </nav>
  )
}

export default NavBar