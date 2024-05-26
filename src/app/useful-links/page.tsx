import Image from 'next/image';
import useful_links_bg_img from '@/public/assets/useful_links_bg_img.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import BookAppointment from '@/src/components/reusable/BookAppointment';
import UsefulLinksText from './UsefulLinksText';
import Links from './Links';

export const metadata = {
  title: 'Useful Links Services in Hamilton',
};

const UsefulLinks = () => {
  const componentName = 'USEFUL_LINKS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <Image
        width={1200}
        height={1000}
        quality={50}
        placeholder='blur'
        priority
        src={useful_links_bg_img}
        alt='Useful Links Page | Brad Nickle CPA Hamilton'
        title='Useful Links Page | Brad Nickle CPA Hamilton'
      />
      <SecondHeading message='USEFUL INFORMATION ABOUT PERSONAL AND BUSINESS ACCOUNTING' />
      <UsefulLinksText />
      <Links />
      <BookAppointment />
    </div>
  );
};

export default UsefulLinks;
