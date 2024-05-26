import { AiOutlineRight } from 'react-icons/ai';

const BookkeepingBullets = () => {
  const componentName = 'BOOKKEEPING_BULLETS';
  const bookkeepingBulletsArray = [
    'Monthly, quarterly, semi-annual and annual financial statements',
    'Accounts receivable (invoicing and collections)',
    'Accounts payable (receipts and bill entry, supplier payments and business cheque preparation)',
    'Business consulting',
    'WSIB',
    'Source deductions',
    'HST remittances',
  ];
  return (
    <div className={`${componentName}_MAIN_CONTAINER py-4 sm:px-2`}>
      <ul className='grid gap-1 p-2'>
        {bookkeepingBulletsArray.map((item, index) => (
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
    </div>
  );
};

export default BookkeepingBullets;
