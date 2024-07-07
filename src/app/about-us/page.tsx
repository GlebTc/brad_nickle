import Image from 'next/image';
import about_us_img from '@/public/assets/about_us_bg_img.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import AboutUsSectionOne from './AboutUsSectionOne';
import AboutMeetOurTeam from './AboutMeetOurTeam';

export const metadata = {
  title: 'About Us | Brad Nickle CPA Professional Corporation',
  description:
    'Learn more about Brad Nickle CPA Professional Corporation. Discover our expert accounting services, our team, and our commitment to serving Hamilton, Ontario and surrounding areas.',
  keywords: [
    'about Brad Nickle CPA',
    'accounting services Hamilton',
    'bookkeeping services Hamilton',
    'tax services Hamilton',
    'Brad Nickle CPA team',
    'Hamilton Ontario CPA',
    'accountant Hamilton',
    'professional accounting Hamilton',
    'expert bookkeeping Hamilton',
    'tax preparation Hamilton',
  ],
  openGraph: {
    title: 'About Us | Brad Nickle CPA Professional Corporation',
    description:
      'Learn more about Brad Nickle CPA Professional Corporation. Discover our expert accounting services, our team, and our commitment to serving Hamilton, Ontario and surrounding areas.',
    url: 'https://bradnicklecpa.com/about',
    type: 'website',
  },
  twitter: {
    title: 'About Us | Brad Nickle CPA Professional Corporation',
    card: 'summary_large_image',
    description:
      'Learn more about Brad Nickle CPA Professional Corporation. Discover our expert accounting services, our team, and our commitment to serving Hamilton, Ontario and surrounding areas.',
  },
};

const About = () => {
  const componentName = 'ABOUT';
  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <Image
        width={1200}
        height={1000}
        quality={50}
        placeholder='blur'
        priority
        src={about_us_img}
        alt='About Us Page | Brad Nickle CPA Hamilton'
        title='About Us Page | Brad Nickle CPA Hamilton'
      />
      <SecondHeading message='EXPERT ACCOUNTING SERVICES IN HAMILTON' />
      <AboutUsSectionOne />
      <AboutMeetOurTeam />
    </div>
  );
};

export default About;
