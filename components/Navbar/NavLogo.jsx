import Link from "next/link"
import logo from '@/public/logo.png';
import Image from "next/image";
import { siteInfo } from "@/config/siteInfo";

const NavLogo = () => {
  return (
    <Link className='flex items-center' href='/'>
    <Image className='h-102' src={logo} alt='Nav Logo' />
    {/* <span className='hidden md:block text-white text-2xl font-bold ml-2'>
      {siteInfo.company_name}
    </span> */}
  </Link>
  )
}

export default NavLogo