import Image from 'next/image';
import accounting_bg_img from '@/public/assets/accounting_bg_img.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import AccountingText from './AccountingText';
import AccountingBullets from './AccountingBullets';
import AccountingGovernmentTaxation from './AccountingGovernmentTaxation';
import AccountingFinancialReporting from './AccountingFinancialReporting';
import BookAppointment from '@/src/components/reusable/BookAppointment';

export const metadata = {
  title: 'Accounting Services | Brad Nickle CPA Professional Corporation',
  description:
    'Brad Nickle CPA provides professional accounting services in Hamilton, Ontario. Our services include consultations, government taxation, and financial reporting to help manage your business finances effectively.',
  keywords: [
    'accounting services',
    'professional accounting',
    'accounting consultations',
    'government taxation',
    'financial reporting',
    'Brad Nickle CPA',
    'Hamilton accounting',
    'Ontario accounting services',
    'business accounting',
    'tax accounting',
  ],
  openGraph: {
    title: 'Accounting Services | Brad Nickle CPA Professional Corporation',
    description:
      'Brad Nickle CPA provides professional accounting services in Hamilton, Ontario. Our services include consultations, government taxation, and financial reporting to help manage your business finances effectively.',
    url: 'https://bradnicklecpa.com/accounting',
    type: 'website',
  },
  twitter: {
    title: 'Accounting Services | Brad Nickle CPA Professional Corporation',
    card: 'summary_large_image',
    description:
      'Brad Nickle CPA provides professional accounting services in Hamilton, Ontario. Our services include consultations, government taxation, and financial reporting to help manage your business finances effectively.',
  },
};

const Accounting = () => {
  const componentName = 'ACCOUTING';
  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <Image
        width={1200}
        height={1000}
        quality={50}
        placeholder='blur'
        priority
        src={accounting_bg_img}
        alt='Accounting Page | Brad Nickle CPA Hamilton'
        title='Accounting Page | Brad Nickle CPA Hamilton'
      />
      <SecondHeading message='PROVIDING ACCOUNTING CONSULTATIONS AND SERVICES IN HAMILTON' />
      <AccountingText />
      <AccountingBullets />
      <div
        className={`${componentName}_GOVERNMENT_TAXATION_AND_FINANCIAL_REPORTING_CONTAINER bg-sky-950/90 text-white md:flex p-4 gap-4`}
      >
        <AccountingGovernmentTaxation />
        <AccountingFinancialReporting />
      </div>
      <BookAppointment />
    </div>
  );
};

export default Accounting;
