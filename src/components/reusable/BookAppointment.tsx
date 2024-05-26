import Link from 'next/link';

const BookAppointment = () => {
  const componentName = 'BOOK_AN_APPOINTMENT';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER bg-white h-full py-6 px-4 flex flex-col justify-center items-center border-t-2 border-sky-900`}
    >
      <h2 className='uppercase text-sky-900 font-[600] mb-4'>
        book an appointment
      </h2>
      <p className='mb-4 text-center'>
        Contact us today to learn more about the accounting services we provide.
      </p>
      <Link
        className='border-2 p-4 px-4 border-sky-900 hover:bg-white bg-sky-950/90 text-white hover:text-sky-900 duration-[var(--main-duration)] rounded-md min-w-[70%] text-center'
        href={`/contact-us`}
        aria-label='Book an appointment with Brad Nickle CPA Hamilton'
        title='Book an appointment with Brad Nickle CPA Hamilton'
      >
        CALL US
      </Link>
    </div>
  );
};

export default BookAppointment;
