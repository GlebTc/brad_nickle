import Image from 'next/image';
import home_image from '@/public/assets/home_bg_img.webp';
import MainStartingNewBusiness from './MainStartingNewBusiness';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import MainTextOne from './MainTextOne';
import MainClients from './MainClients';
import MainAddress from './MainAddress';
import MainServiceCards from './MainServiceCards';

const Main = () => {
  const componentName = 'MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative`}>
      <Image
        src={home_image}
        alt='Brad Nickle CPA | Main Page Image'
        title='Brad Nickle CPA | Main Page Image'
        width={1920}
        height={1080}
        quality={50}
        className={`${componentName}_IMAGE`}
      />
      <MainStartingNewBusiness />
      <SecondHeading message='BOOKKEEPING, INCOME TAX, ACCOUNTING & PAYROLL SERVICES IN HAMILTON' />
      <MainTextOne />
      <MainClients />
      <MainAddress />
      <MainServiceCards />
    </div>
  );
};

export default Main;
