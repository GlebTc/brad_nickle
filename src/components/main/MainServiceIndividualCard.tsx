import Link from 'next/link';

interface MainServiceIndividualCardProps {
  title: string;
  text: string;
  button: string;
  href: string;
}

const MainServiceIndividualCard = ({
  title,
  text,
  button,
  href,
}: MainServiceIndividualCardProps) => {
  const componentName = 'MAIN_SERVICE_INDIVIDUAL_CARD';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER bg-white h-full flex flex-col gap-4 items-center justify-between p-4`}
    >
      <div className='w-full text-center'>
        <h2 className='uppercase text-base font-[600] mb-4'>{title}</h2>
        <p>{text}</p>
      </div>
      <Link
        className='border-2 p-2 px-4 border-sky-900 hover:bg-white bg-sky-900 text-white hover:text-sky-900 duration-[var(--main-duration)] rounded-md min-w-[80%] text-center'
        href={href}
      >
        {button}
      </Link>
    </div>
  );
};

export default MainServiceIndividualCard;
