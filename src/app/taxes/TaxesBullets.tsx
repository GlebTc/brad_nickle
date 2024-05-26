import { AiOutlineRight } from 'react-icons/ai';

const TaxesBullets = () => {
  const componentName = 'TAXES_BULLETS';
  const taxesBulletsArray = [
    'Personal income tax return preparation',
    'Corporate income tax return preparation',
    'Small business tax return preparation',
    'T3 trust tax return preparation',
  ];
  return (
    <div className={`${componentName}_MAIN_CONTAINER py-2 px-4 `}>
      <p>We help individuals and businesses with their:</p>
      <ul className='grid gap-1 p-2'>
        {taxesBulletsArray.map((item, index) => (
          <li
            key={index}
            className='flex gap-1'
          >
            <div className='pt-[3px]'>
              <AiOutlineRight
                size={20}
                className='text-[var(--main-color)]'
              />
            </div>

            <p>{item}</p>
          </li>
        ))}
      </ul>
      <p className='text-justify'>During peak tax season we offer extended office hours in order to offer convenient, superior service for our clients. Contact us to get more information about our tax preparation services.</p>
    </div>
  );
};

export default TaxesBullets;
