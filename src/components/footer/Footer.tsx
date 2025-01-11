import { IoCall, IoMailSharp } from 'react-icons/io5';
import { FaFax } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const componentName = 'FOOTER';
  const currentYear = new Date().getFullYear();
  return (
    <div className='FOOTER_MAIN_CONTAINER h-180 bg-[#333333] text-white px-4 w-full'>
      <div className='CONTACT_CONTAINER border-b border-gray-300 py-4 w-full'>
        <h2 className='text-lg mb-3 font-[600]'>
          Brad Nickle CPA Professional Corporation
        </h2>
        <p className='mb-3'>664 Fennell Ave. E Hamilton, ON, L8V 1V1</p>
        <div className='CONTACT_INFO'>
          <ul className='sm:text-xl md:text-2xl lg:text-3xl flex flex-col gap-2'>
            <li className='PHONE_CONTACT_CONTAINER flex items-center gap-4'>
              <IoCall />
              <Link
                href='tel:9055759001'
                className='text-links-dark'
                aria-label='Call Brad Nickle CPA Professional Corporation at (905) 575-9001'
                title='Call Brad Nickle CPA Professional Corporation at (905) 575-9001'
              >
                <p>(905) 575-9001</p>
              </Link>
            </li>
            <li className='TOLL_FREE_PHONE_CONTACT_CONTAINER flex items-center gap-4'>
              <IoCall />

              <div className='TEXT_CONTAINER flex justify-start items-start pl-1'>
                <p>
                  Toll Free{' '}
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
            <li className='FAX_CONTACT_CONTAINER flex items-center gap-4'>
              <FaFax />

              <Link
                href='tel:9053835554'
                className='text-links-dark'
                aria-label='Fax Brad Nickle CPA Professional Corporation at (905) 383-5554'
                title='Fax Brad Nickle CPA Professional Corporation at (905) 383-5554'
              >
                <p>(905) 383-5554</p>
              </Link>
            </li>
            <li className='EMAIL_CONTACT_CONTAINER flex items-center gap-4'>
              <IoMailSharp />

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
      <div className='HOURS_CONTAINER border-b border-gray-300 w-full py-4 flex flex-col gap-2'>
        <h2 className='text-lg font-[600] uppercase'>Hours</h2>
        <div className='flex gap-8'>
          <p>Mon - Fri</p>
          <p>09:00 AM - 05:00 PM</p>
        </div>
        <p>Extended hours available during tax season</p>
      </div>
      <div className={`${componentName}_COPYRIGHT_CONTAINER text-[#90cdf4] text-center`}>
        <div aria-label='© 2025 Web Development Hamilton. All rights reserved. | www.webdevelopmenthamilton.com | Web Development Hamilton'>
          <h2>
            &copy; {currentYear} Web Development Hamilton. All rights reserved.
          </h2>
        </div>
        <h2>
          We build {` `}
          <Link
            href='https://www.webdevelopmenthamilton.com'
            aria-label='© 2025 Web Development Hamilton. All rights reserved. | www.webdevelopmenthamilton.com | Web Development Hamilton'
            title='© 2025 Web Development Hamilton. All rights reserved. | www.webdevelopmenthamilton.com | Web Development Hamilton'
            className='text-blue-100 font-bold hover:text-blue-400 duration-700'
          >
            Small Business Websites
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
