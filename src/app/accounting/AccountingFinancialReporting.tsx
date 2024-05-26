import { AiOutlineRight } from 'react-icons/ai';

const AccountingFinancialReporting = () => {
  const componentName = 'ACCOUTING_FINANCIAL_REPORTING';
  const accountingGovernmentTaxationBulletsArray = [
    'Profit and loss statements',
    'Income statements',
    'Trading account',
    'Balance sheet and net worth',
    'General ledger',
  ];
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-4`}>
      <h2 className='uppercase py-5'>
      FINANCIAL REPORTING/STATEMENTS AND YEAR END
      </h2>
      <p>
      We provide our accounting clients with monthly, quarterly, semi-annual, and year-end financial statements and reports preparation, as well as business and taxation advice based on analysis of these reports:
      </p>
      <ul className='grid gap-1 p-2'>
        {accountingGovernmentTaxationBulletsArray.map((item, index) => (
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

export default AccountingFinancialReporting;
