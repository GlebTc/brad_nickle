'use client';
import { useState } from 'react';
import { IoCall, IoMailSharp, IoMenu } from 'react-icons/io5';
import Link from 'next/link';
import MobileMenu from './mobile/MobileMenu';

const NavbarHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const componentName = 'NAVBAR_HEADER';
  return (
    <div className='relative h-[fit] flex flex-col sm:flex-row justify-between p-4 gap-2 text-sky-950/90'>
      <div
        className={`${componentName}_HEADING_CONTAINER h-full flex justify-center items-center`}
      >
        <Link
          href='/'
          className={`${componentName}_HEADING_CONTENT_CONTAINER flex flex-col items-center sm:items-start`}
          aria-label='Brad Nickle CPA | Home'
          title='Brad Nickle CPA | Home'
        >
          <h1>Brad Nickle CPA</h1>
          <h1>Professional Corporation</h1>
          <h1>Accounting & Business</h1>
          <h1>Services (formerly)</h1>
        </Link>
      </div>
      <div
        className={`${componentName}_CONTACT_CONTAINER flex flex-col justify-center items-center`}
      >
        <div
          className={`${componentName}_CONTACT_CONTENT_CONTAINER flex flex-col sm:gap-2`}
        >
          <Link
            href='tel:(905) 575-9001'
            title='Call Brad Nickle CPA at (905) 575-9001'
            aria-label='Call Brad Nickle CPA at (905) 575-9001'
            className={`${componentName}_PHONE_CONTAINER flex items-center gap-4 border-b-2 border-white hover:border-[var(--main-color)] duration-[var(--main-duration)] md:pb-2`}
          >
            <IoCall className='text-[var(--main-color)] icons' />
            <h1>(905) 575-9001</h1>
          </Link>
          <Link
            href='mailto:bradnickle@bellnet.ca'
            title='Email Brad Nickle CPA at bradnickle@bellnet.ca'
            aria-label='Email Brad Nickle CPA at bradnickle@bellnet.ca'
            className={`${componentName}_EMAIL_CONTAINER flex items-center gap-4 border-b-2 border-white hover:border-[var(--main-color)] duration-[var(--main-duration)] md:pb-2`}
          >
            <IoMailSharp className='text-[var(--main-color)] icons' />
            <h1>bradnickle@bellnet.ca</h1>
          </Link>
        </div>
      </div>
      <div
        className={`${componentName}_MOBILE_MENU_BUTTON_CONTAINER md:hidden absolute top-5 right-5 button`}
        onClick={handleMobileMenu}
      >
        <IoMenu size={25} />
      </div>
      <MobileMenu
        mobileMenu={mobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
    </div>
  );
};

export default NavbarHeader;
