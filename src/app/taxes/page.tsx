import Image from 'next/image';
import taxes_bg_img from '@/public/assets/taxes_bg_img.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import BookAppointment from '@/src/components/reusable/BookAppointment';
import TaxesText from './TaxesText';
import TaxesBullets from './TaxesBullets';

export const metadata = {
  title: 'Taxes Services',
};

const Taxes = () => {
  const componentName = 'BOOKKEEPING';
  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <Image
        width={1200}
        height={1000}
        quality={50}
        placeholder='blur'
        priority
        src={taxes_bg_img}
        alt='Taxes Page | Brad Nickle CPA Hamilton'
        title='Taxes Page | Brad Nickle CPA Hamilton'
      />
      <SecondHeading message='HAMILTON ACCOUNTANTS OFFERING TAX FILING SERVICES' />
      <TaxesText />
      <TaxesBullets />
      <BookAppointment />
    </div>
  );
};

export default Taxes;
