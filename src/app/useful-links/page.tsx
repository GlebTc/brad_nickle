import Image from 'next/image';
import useful_links_bg_img from '@/public/assets/useful_links_bg_img.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import BookAppointment from '@/src/components/reusable/BookAppointment';
import UsefulLinksText from './UsefulLinksText';
import Links from './Links';

export const metadata = {
  title: 'Useful Links | Brad Nickle CPA Professional Corporation',
  description:
    'Explore useful links and resources for personal and business accounting. Brad Nickle CPA provides valuable information to help you navigate your financial needs.',
  keywords: [
    'useful links',
    'accounting resources',
    'business accounting',
    'personal accounting',
    'Brad Nickle CPA',
    'Hamilton accounting services',
    'Ontario accounting resources',
    'financial resources',
    'tax resources',
    'bookkeeping resources',
  ],
  openGraph: {
    title: 'Useful Links | Brad Nickle CPA Professional Corporation',
    description:
      'Explore useful links and resources for personal and business accounting. Brad Nickle CPA provides valuable information to help you navigate your financial needs.',
    url: 'https://bradnicklecpa.com/useful-links',
    type: 'website',
  },
  twitter: {
    title: 'Useful Links | Brad Nickle CPA Professional Corporation',
    card: 'summary_large_image',
    description:
      'Explore useful links and resources for personal and business accounting. Brad Nickle CPA provides valuable information to help you navigate your financial needs.',
  },
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
