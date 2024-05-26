import React from 'react';

const BusinessServicesDescription = () => {
  const componentName = 'BUSINESS_SERVICES_DESCRIPTION';
  const businessServicesArray = [
    {
      title: 'PAYROLL',
      text: 'Ensure you are compliant with government payroll regulations, your employee data is secure, and your government remittances are always on time. Our payroll services allow you to focus on growing your business rather than focusing on administrative tasks.',
    },
    {
      title: 'MINUTE BOOK PREPARATIONS',
      text: "When a company is incorporated, setting up a minute book is typically part of the process. A minute book is a record of the company's most important rules, and it usually dictates who holds certain positions within the company. An investor's solicitor may request your minute book for review to ensure your company is valid. Banks may also review your minute book before they loan the company money. We offer complete minute book preparation services to streamline the incorporation process.",
    },
    {
      title: 'NEW BUSINESS INCORPORATION',
      text: 'By incorporating your business, it becomes a separate legal entity that carries on apart from the individual who created it. It can continue indefinitely until it accomplishes its objective or goes bankrupt - it does not depend on the life of an individual. We can help guide you through the incorporation process.',
    },
    {
      title: 'MASTER BUSINESS LICENCES',
      text: 'For those who do not wish to incorporate their business, we offer master business licence services. This type of licence does not distinguish any separation between you and your business. It does not provide your business with name protection, so other businesses can choose to use the same name. A master business licence must also be renewed every 5 years. It is, however, slightly less expensive to register a master business licence than it is to incorporate your business.',
    },
  ];
  return (
    <div className={`${componentName}_MAIN_CONTAINER bg-sky-950/90 text-white`}>
      <ul className='divide-y-2 px-4'>
        {businessServicesArray.map((item, index) => (
          <li key={index} className='py-4'>
            <h3 className='text-2xl font-bold'>{item.title}</h3>
            <p className='text-lg'>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessServicesDescription;
