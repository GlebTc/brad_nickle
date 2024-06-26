import Image from 'next/image';
import about_us_img from '@/public/assets/about_us_bg_img.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import AboutUsSectionOne from './AboutUsSectionOne';
import AboutMeetOurTeam from './AboutMeetOurTeam';

export const metadata = {
  title: 'About Us',
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
