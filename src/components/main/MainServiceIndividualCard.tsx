import Link from 'next/link';

interface MainServiceIndividualCardProps {
  title: string;
  text: string;
  button: string;
  href: string;
  button_label: string;
}

const MainServiceIndividualCard = ({
  title,
  text,
  button,
  href,
  button_label,
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
        className='border-2 p-2 px-4 border-sky-950/90 hover:bg-white bg-sky-950/90 text-white hover:text-sky-950/90 duration-[var(--main-duration)] rounded-md min-w-[80%] text-center'
        href={href}
        aria-label={`Navigate to ${button_label}`}
        title={`Navigate to ${button_label}`}
      >
        {button}
      </Link>
    </div>
  );
};

export default MainServiceIndividualCard;
