import MainServiceIndividualCard from './MainServiceIndividualCard';

const MainServiceCards = () => {
  const componentName = 'SERVICES_CARDS';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER bg-gray-400 h-full p-4 grid md:grid-cols-3 gap-4`}
    >
      <MainServiceIndividualCard
        title='Solution for Businesses'
        text='Ensure your books are managed properly to gain credibility with your financial institution.'
        button='Bookkeeping Services'
        href='/bookkeeping'
        button_label='Bookkeeping Services'
      />
      <MainServiceIndividualCard
        title='Get Ahead'
        text='We can analyze your finances and help you maximize your tax return.'
        button='Tax Filing Services'
        href='/income-tax-preparation'
        button_label='Income Tax Preparation'
      />
      <MainServiceIndividualCard
        title='Book An Appointment'
        text='Contact us today to learn more about the accounting services we provide.'
        button='Acccounting Services'
        href='/accounting'
        button_label='Accounting Services'
      />
    </div>
  );
};

export default MainServiceCards;
