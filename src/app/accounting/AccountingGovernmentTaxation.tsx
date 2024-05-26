import { AiOutlineRight } from 'react-icons/ai';

const AccountingGovernmentTaxation = () => {
  const componentName = 'ACCOUNTING_GOVERNMENT_TAXATION';
  const accountingGovernmentTaxationBulletsArray = [
    'T2 returns',
    'WSIB (Workers Safety and Insurance Board)',
    'HST',
    'Payroll source deductions (record of employment, weekly, bi-weekly or monthly payments, group RRSP deductions, group insurance plan deductions, taxable benefits, T4s and T4 summaries)',
    'EHT (Employer Health Tax)',
    'CRA (Canada Revenue Agency) - arrangements and negotiations including installment payments and assessment notices',
    'Pre and post Revenue Canada assessment reviews and audits',
    'Registered charity and information returns',
  ];
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-4`}>
      <h2 className='uppercase py-5'>GOVERNMENT TAXATION AND FORM REMITTANCES</h2>
      <p>
        We specialize in supporting our clients and assisting them with the
        preparation of required forms for government requirements, such as:
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

export default AccountingGovernmentTaxation;
