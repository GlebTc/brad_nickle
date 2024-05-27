import Image from 'next/image';
import building from '@/public/assets/building.webp';
import SecondHeading from '@/src/components/reusable/SecondHeading';
import BookAppointment from '@/src/components/reusable/BookAppointment';
import ContactText from './ContactText';

export const metadata = {
  title: 'Contact Us',
};

const ContactUs = () => {
  const componentName = 'CONTACT_US_LINKS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <Image
        width={1200}
        height={1000}
        quality={50}
        placeholder='blur'
        priority
        src={building}
        alt='Useful Links Page | Brad Nickle CPA Hamilton'
        title='Useful Links Page | Brad Nickle CPA Hamilton'
      />
      <SecondHeading message='PROVIDING ACCOUNTING CONSULTATIONS AND SERVICES IN HAMILTON' />
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.9989865294024!2d-79.8506204!3d43.23048089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9bc994a31b27%3A0xbefd2193d2d64f98!2s664%20Fennell%20Ave%20E%2C%20Hamilton%2C%20ON%20L8V%201V1!5e0!3m2!1sen!2sca!4v1692058567297!5m2!1sen!2sca'
        width='100%'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
        className='my-4'
      ></iframe>
      <ContactText />
      <BookAppointment />
    </div>
  );
};

export default ContactUs;
