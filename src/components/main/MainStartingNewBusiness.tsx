import Link from 'next/link';

const MainStartingNewBusiness = () => {
  const componentName = 'STARTING_NEW_BUSINESS';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER relative top-[-20px] max-w-[80%] mx-auto bg-[var(--main-color)] text-sky-900 p-4 text-center rounded-md`}
    >
      <p className='mb-2'>Starting a new business?</p>
      <p className='mb-4'>
        Start your business on the right foot with our professional services for
        start-ups.
      </p>
      <Link
        href='/business-services'
        title={`Brad Nickle CPA | Navigate to Business Services`}
        aria-label={`Brad Nickle CPA | Navigate to Business Services`}
        className='border-2 p-2 px-4 border-sky-900 hover:bg-sky-950/90 hover:text-white duration-[var(--main-duration)] rounded-md'
      >
        Business Services
      </Link>
    </div>
  );
};

export default MainStartingNewBusiness;
