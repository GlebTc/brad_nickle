import { IoCall, IoMailSharp, IoClose } from 'react-icons/io5';
import { FaFax } from 'react-icons/fa';
import menuItems from '@/src/util/menuItems.json';
import Link from 'next/link';

const MobileMenu = ({
  mobileMenu,
  handleMobileMenu,
}: {
  mobileMenu: boolean;
  handleMobileMenu: any;
}) => {
  const componentName = 'MOBILE_MENU';
  return (
    <div className={`${componentName}_MAIN_CONTAINER z-[50] md:hidden`}>
      <div
        className={`${componentName}_SCREEN_OVERLAY fixed top-0 w-screen h-screen ${
          mobileMenu ? 'left-0' : 'left-[-110%]'
        } bg-gray-900/50 ease-in duration-[var(--main-duration)]`}
      ></div>
      <div
        className={`fixed top-0 ${
          mobileMenu ? 'left-0' : 'left-[-100%]'
        } w-[75%] h-screen bg-[#ecf0f3] ease-in duration-[var(--main-duration)]`}
      >
        <div className='flex w-full items-start justify-between border-b border-gray-400 p-5'>
          <div className='TITLE_DIV w-full  flex flex-col items-left sm:pr-4 text-blue-900'>
            <h1 className='sm:w-full'>Brad Nickle CPA</h1>
            <h1 className='sm:w-full'>Professional Corporation</h1>
            <h1 className='sm:w-full'>Accounting & Business</h1>
            <h1 className='sm:w-full'>Services (formerly)</h1>
          </div>
          <div
            onClick={handleMobileMenu}
            className='button'
          >
            <IoClose size={25} />
          </div>
        </div>
        <div>
          <div className='SIDE_NAV_MENU_ITEMS px-5 flex flex-col'>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='border-b-2 border-[#ecf0f3] mb-1 hover:border-sky-950/90 duration-[var(--main-duration)]'
                onClick={handleMobileMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className='CONTACT_CONTAINER p-4 w-full bg-gray-300'>
            <h2 className='text-lg mb-3 font-[600]'>
              Brad Nickle CPA Professional Corporation
            </h2>
            <p className='mb-3'>664 Fennell Ave. E Hamilton, ON, L8V 1V1</p>
            <div className='CONTACT_INFO'>
              <ul className='sm:text-xl md:text-2xl lg:text-3xl flex flex-col items-start'>
                <li className='PHONE_CONTACT_CONTAINER flex items-center gap-2'>
                  <IoCall />
                  <Link
                    href='tel:9055759001'
                    className='text-sky-950/90 font-bold hover:text-sky-800/90 duration-[var(--main-duration)]'
                    aria-label='Call Brad Nickle CPA at (905) 575-9001'
                    title='Call Brad Nickle CPA at (905) 575-9001'
                  >
                    <p>(905) 575-9001</p>
                  </Link>
                </li>
                <li className='TOLL_FREE_PHONE_CONTACT_CONTAINER flex items-center gap-2'>
                  <IoCall />
                  <p>
                    Toll Free{' '}
                    <Link
                      href='tel:18778772440'
                      className='text-sky-950/90 font-bold hover:text-sky-800/90 duration-[var(--main-duration)]'
                      aria-label='Call Brad Nickle CPA at 1 (877) 877-2440'
                      title='Call Brad Nickle CPA at 1 (877) 877-2440'
                    >
                      (877) 877-2440
                    </Link>
                  </p>
                </li>
                <li className='FAX_CONTACT_CONTAINER flex items-center gap-2'>
                  <FaFax />
                  <Link
                    href='tel:9053835554'
                    className='text-sky-950/90 font-bold hover:text-sky-800/90 duration-[var(--main-duration)]'
                    aria-label='Fax Brad Nickle CPA at (905) 383-5554'
                    title='Fax Brad Nickle CPA at (905) 383-5554'
                  >
                    <p>(905) 383-5554</p>
                  </Link>
                </li>
                <li className='EMAIL_CONTACT_CONTAINER flex items-center gap-2'>
                  <IoMailSharp />
                  <Link
                    href='mailto:bradnickle@bellnet.ca'
                    className='text-sky-950/90 font-bold hover:text-sky-800/90 duration-[var(--main-duration)]'
                    aria-label='Email Brad Nickle CPA at bradnickle@bellnet.ca'
                    title='Email Brad Nickle CPA at bradnickle@bellnet.ca'
                  >
                    <p>bradnickle@bellnet.ca</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
