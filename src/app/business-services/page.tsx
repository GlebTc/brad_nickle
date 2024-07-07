import Image from 'next/image';
import business_services_bg_img from '@/public/assets/business_services_bg_img.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import BookAppointment from '@/src/components/reusable/BookAppointment';
import BusinessServicesText from './BusinessServicesText';
import BusinessServicesDescription from './BusinessServicesDescription';

export const metadata = {
  title: 'Business Services | Brad Nickle CPA Professional Corporation',
  description:
    'Brad Nickle CPA offers comprehensive business services in Hamilton, Ontario. From accounting to financial planning, we provide the support your business needs to thrive.',
  keywords: [
    'business services',
    'accounting services',
    'financial planning',
    'Brad Nickle CPA',
    'Hamilton business services',
    'Ontario business support',
    'business accounting',
    'tax planning',
    'financial consulting',
    'business growth',
  ],
  openGraph: {
    title: 'Business Services | Brad Nickle CPA Professional Corporation',
    description:
      'Brad Nickle CPA offers comprehensive business services in Hamilton, Ontario. From accounting to financial planning, we provide the support your business needs to thrive.',
    url: 'https://bradnicklecpa.com/business-services',
    type: 'website',
  },
  twitter: {
    title: 'Business Services | Brad Nickle CPA Professional Corporation',
    card: 'summary_large_image',
    description:
      'Brad Nickle CPA offers comprehensive business services in Hamilton, Ontario. From accounting to financial planning, we provide the support your business needs to thrive.',
  },
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
