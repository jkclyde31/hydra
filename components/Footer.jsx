import Image from 'next/image';
import logo from '@/public/images/logo.png';
import Link from 'next/link';
import { siteInfo } from '@/config/siteInfo';
import Button from './Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='inner-row flex flex-col justify-center items-center md:block animate-slide-up'>
      <div className='flex flex-col md:flex-row items-start justify-center md:justify-between  pb-[25px] md:pb-[70px] border-b border-[#423F52] text-center md:text-start pt-[25px]'>
        {/* Logo Section */}
        <div className='mb-8 md:mb-0'>
          <Image src={logo} alt="Hydra Logo" width={185} height={187} />
        </div>

        {/* Vertical Line */}
        <div className='hidden md:block w-px h-[196px] bg-[#423F52]'></div>

        {/* First Links Column */}
          <nav className='flex flex-col gap-4 font-bold text-[16px] w-full md:w-auto'>
            <Link href="/about" className='hover:text-[#C0B7E8] transition-colors'>ABOUT</Link>
            <Link href="/services" className='hover:text-[#C0B7E8] transition-colors'>SERVICES</Link>
            <Link href="/technologies" className='hover:text-[#C0B7E8] transition-colors'>TECHNOLOGIES</Link>
            <Link href="/how-to" className='hover:text-[#C0B7E8] transition-colors'>HOW TO</Link>
            <Link href="/join-hydra" className='hover:text-[#C0B7E8] transition-colors'>JOIN HYDRA</Link>
          </nav>
        

        {/* Vertical Line */}
        <div className='hidden md:block w-px h-[196px] bg-[#423F52]'></div>

        {/* Second Links Column */}
          <nav className='flex flex-col gap-4 font-bold text-[16px] w-full md:w-auto'>
            <Link href="/faq" className='hover:text-[#C0B7E8] transition-colors'>F.A.Q</Link>
            <Link href="/sitemap" className='hover:text-[#C0B7E8] transition-colors'>SITEMAP</Link>
            <Link href="/conditions" className='hover:text-[#C0B7E8] transition-colors'>CONDITIONS</Link>
            <Link href="/licenses" className='hover:text-[#C0B7E8] transition-colors'>LICENSES</Link>
          </nav>

        {/* Vertical Line */}
        <div className='hidden md:block w-px h-[196px] bg-[#423F52]'></div>

        {/* Social Media Section */}
        <div className='flex flex-col gap-4 pt-[25px] md:pt-0'>
          <h3 className='font-bold text-[16px] mb-[18px]'>SOCIALIZE WITH HYDRA</h3>
          <div className='flex gap-4'>
            <Link href={siteInfo.social_links.facebook} className='hover:opacity-80'>
              <div className='w-10 h-10 rounded-full bg-[#423F52] flex items-center justify-center'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
            <Link href={siteInfo.social_links.twitter} className='hover:opacity-80'>
              <div className='w-10 h-10 rounded-full bg-[#423F52] flex items-center justify-center'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
            </Link>
            <Link href={siteInfo.social_links.linkedin} className='hover:opacity-80'>
              <div className='w-10 h-10 rounded-full bg-[#423F52] flex items-center justify-center'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
            <Link href={siteInfo.social_links.youtube} className='hover:opacity-80'>
              <div className='w-10 h-10 rounded-full bg-[#423F52] flex items-center justify-center'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          </div>

          <Link href="/build-world" className='mt-4'>
            <Button
               width="w-[100%] "
               height="h-[48px]"
               color="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
               hoverColor="hover:bg-purple-600"
               className="rounded-[150px] font-bold text-[12px] "
               textColor="text-black"
            >
              Build Your World
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className='text-center text-sm mt-8 mb-8 text-gray-400'>
        {currentYear} © HYDRA LANDING PAGE  - ALL RIGHTS RESERVED 
      </div>
    </footer>
  );
};

export default Footer;