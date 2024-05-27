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
    <div className={`${componentName}_MAIN_CONTAINER z-[50]`}>
      <div
        className={`${componentName}_SCREEN_OVERLAY fixed top-0 w-screen h-screen ${
          mobileMenu
            ? 'left-0'
            : 'left-[-110%]'
        } bg-gray-900/50 ease-in duration-[var(--main-duration)]`}
      ></div>
      <div
        className={
          mobileMenu
            ? 'fixed left-0 top-0 w-[75%] h-screen bg-[#ecf0f3] ease-in duration-[var(--main-duration)]'
            : 'fixed left-[-100%] top-0 w-[75%] h-screen bg-[#ecf0f3] ease-in duration-[var(--main-duration)]'
        }
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
                <li className='flex justify-center sm:justify-start sm:my-1'>
                  <div className='flex items-center '>
                    <IoCall />
                  </div>
                  <Link
                    href='tel:9055759001'
                    className='text-sky-950/90 font-bold hover:text-sky-800/90 duration-[var(--main-duration)] ml-1'
                    aria-label='Call Brad Nickle CPA at (905) 575-9001'
                    title='Call Brad Nickle CPA at (905) 575-9001'
                  >
                    (905) 575-9001
                  </Link>
                </li>
                <li className='flex justify-center sm:justify-start sm:my-1'>
                  <div className='flex items-center '>
                    <IoCall />
                  </div>
                  <span className='ml-1'>Toll Free</span>
                  <Link
                    href='tel:18778772440'
                    className='text-sky-950/90 font-bold hover:text-sky-800/90 duration-[var(--main-duration)] ml-1'
                    aria-label='Call Brad Nickle CPA at 1 (877) 877-2440'
                    title='Call Brad Nickle CPA at 1 (877) 877-2440'
                  >
                    1 (877) 877-2440
                  </Link>
                </li>
                <li className='flex justify-center sm:justify-start sm:my-1'>
                  <div className='flex items-center '>
                    <FaFax />
                  </div>
                  <Link
                    href='tel:9053835554'
                    className='text-sky-950/90 font-bold hover:text-sky-800/90 duration-[var(--main-duration)] ml-1'
                    aria-label='Fax Brad Nickle CPA at (905) 383-5554'
                    title='Fax Brad Nickle CPA at (905) 383-5554'
                  >
                    (905) 383-5554
                  </Link>
                </li>
                <li className='flex justify-center sm:justify-start sm:my-1'>
                  <div className='flex items-center '>
                    <IoMailSharp />
                  </div>
                  <Link
                    href='mailto:bradnickle@bellnet.ca'
                    className='text-sky-950/90 font-bold hover:text-sky-800/90 duration-[var(--main-duration)] ml-1'
                    aria-label='Email Brad Nickle CPA at bradnickle@bellnet.ca'
                    title='Email Brad Nickle CPA at bradnickle@bellnet.ca'
                  >
                    bradnickle@bellnet.ca
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
