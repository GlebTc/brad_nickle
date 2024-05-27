import { IoCall, IoMailSharp } from 'react-icons/io5';
import { FaFax } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const componentName = 'FOOTER';
  const currentYear = new Date().getFullYear();
  return (
    <div className='FOOTER_MAIN_CONTAINER h-180 bg-[#333333] flex flex-wrap text-white p-4 w-full max-w-[var(--max-width)] mx-auto'>
      <div className='CONTACT_CONTAINER mb-4 border-b border-gray-300 pb-4 w-full'>
        <h2 className='text-lg mb-3 font-[600]'>
          Brad Nickle CPA Professional Corporation
        </h2>
        <p className='mb-3'>664 Fennell Ave. E Hamilton, ON, L8V 1V1</p>
        <div className='CONTACT_INFO'>
          <ul className='sm:text-xl md:text-2xl lg:text-3xl flex flex-col items-start'>
            <li className='PHONE_CONTACT_CONTAINER flex-1 py-1 flex'>
              <div className='CALL_ICON_CONTAINER flex justify-start items-start p-1'>
                <IoCall />
              </div>
              <Link
                href='tel:9055759001'
                className='text-links-dark'
                aria-label='Call Brad Nickle CPA Professional Corporation at (905) 575-9001'
                title='Call Brad Nickle CPA Professional Corporation at (905) 575-9001'
              >
                <p>(905) 575-9001</p>
              </Link>
            </li>
            <li className='TOLL_FREE_PHONE_CONTACT_CONTAINER flex-1 py-1 flex'>
              <div className='CALL_ICON_CONTAINER flex justify-start items-start p-1'>
                <IoCall />
              </div>
              <div className='TEXT_CONTAINER flex justify-start items-start pl-1'>
                <p>
                  Toll Free1{' '}
                  <Link
                    href='tel:9055759001'
                    className='text-links-dark'
                    aria-label='Call Brad Nickle CPA Professional Corporation at 1 (877) 877-2440'
                    title='Call Brad Nickle CPA Professional Corporation at 1 (877) 877-2440'
                  >
                    (877) 877-2440
                  </Link>
                </p>
              </div>
            </li>
            <li className='TOLL_FREE_PHONE_CONTACT_CONTAINER flex-1 py-1 flex'>
              <div className='CALL_ICON_CONTAINER flex justify-start items-start p-1'>
                <FaFax />
              </div>
              <Link
                href='tel:9053835554'
                className='text-links-dark'
                aria-label='Call Brad Nickle CPA Professional Corporation at (905) 575-9001'
                title='Call Brad Nickle CPA Professional Corporation at (905) 575-9001'
              >
                <p>(905) 383-5554</p>
              </Link>
            </li>
            <li className='EMAIL_CONTACT_CONTAINER flex-1 py-1 flex'>
              <div className='CALL_ICON_CONTAINER flex justify-start items-start p-1'>
                <IoMailSharp />
              </div>
              <Link
                href='mailto:bradnickle@bellnet.ca'
                className='text-links-dark'
                aria-label='Email Brad Nickle CPA Professional Corporation at bradnickle@bellnet.ca'
                title='Email Brad Nickle CPA Professional Corporation at bradnickle@bellnet.ca'
              >
                <p>bradnickle@bellnet.ca</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='HOURS_CONTAINER mb-4 border-b border-gray-300 pb-4 w-full'>
        <h2 className='text-lg mb-3 font-[600] uppercase'>Hours</h2>
        <p className='mb-3'>
          Mon - Fri&nbsp; &nbsp; &nbsp; 09:00 AM - 05:00 PM
        </p>
        <p>Extended hours available during tax season</p>
      </div>
      <div
        // href="https://www.webdevelopmenthamilton.com"
        className='text-[#90cdf4] text-2xl font-bold text-center w-fit mx-auto'
        // hover:text-blue-100
        aria-label='© 2023 Web Development Hamilton. All rights reserved. | www.webdevelopmenthamilton.com | Web Development Hamilton'
      >
        <h2>
          &copy; {currentYear} Web Development Hamilton. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
