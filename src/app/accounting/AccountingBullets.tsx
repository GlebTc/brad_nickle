import { AiOutlineRight } from 'react-icons/ai';

const AccountingBullets = () => {
  const componentName = 'ACCOUNTING_BULLETS';
  const accountingBulletsArray = [
    {
      title: 'Entrepreneurs and New Business Start-ups',
      text: 'We offer new business start-up and business planning advice, government registration and form preparation, and daily bookkeeping',
    },
    {
      title: 'Established Businesses',
      text: 'We provide financial statements, business performance analysis, tax planning, payroll, expansion, and incorporation',
    },
    {
      title: 'Mature Businesses',
      text: 'We offer advice on selling the company, succession planning, and exit/tax strategies',
    },
  ];
  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <ul className='grid gap-1 p-2 md:grid-cols-3 my-4'>
        {accountingBulletsArray.map((item, index) => (
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

            <div>
              <p>{item.title}</p>
              <p className='text-[var(--main-color)]'>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountingBullets;
