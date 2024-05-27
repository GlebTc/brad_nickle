import Image from 'next/image';
import bookkeeping_bg_img from '@/public/assets/bookkeeping_bg_img.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import BookkeepingText from './BookkeepingText';
import BookkeepingBullets from './BookkeepingBullets';
import BookAppointment from '@/src/components/reusable/BookAppointment';

export const metadata = {
  title: 'Bookkeeping Services',
};

const Bookkeeping = () => {
  const componentName = 'BOOKKEEPING';
  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <Image
        width={1200}
        height={1000}
        quality={50}
        placeholder='blur'
        priority
        src={bookkeeping_bg_img}
        alt='Bookekeeping Page | Brad Nickle CPA Hamilton'
        title='Bookekeeping Page | Brad Nickle CPA Hamilton'
      />
      <SecondHeading message='WE CAN HELP WITH YOUR BOOKKEEPING IN HAMILTON' />
      <BookkeepingText />
      <BookkeepingBullets />
      <BookAppointment />
    </div>
  );
};

export default Bookkeeping;
