import Image from 'next/image';
import business_services_bg_img from '@/public/assets/business_services_bg_img.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import BookAppointment from '@/src/components/reusable/BookAppointment';
import BusinessServicesText from './BusinessServicesText';
import BusinessServicesDescription from './BusinessServicesDescription';

export const metadata = {
  title: 'Business Services in Hamilton',
};

const BusinessServices = () => {
  const componentName = 'BUSINESS_SERVICES';

  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <Image
        width={1200}
        height={1000}
        quality={50}
        placeholder='blur'
        priority
        src={business_services_bg_img}
        alt='Business Services Page | Brad Nickle CPA Hamilton'
        title='Business Services Page | Brad Nickle CPA Hamilton'
      />
      <SecondHeading message='ACCOUNTING SERVICES IN HAMILTON: GIVE YOUR BUSINESS A SOLID FOUNDATION' />
      <BusinessServicesText />
      <BusinessServicesDescription />
      <BookAppointment />
    </div>
  );
};

export default BusinessServices;
