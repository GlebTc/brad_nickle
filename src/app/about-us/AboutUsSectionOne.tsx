import Link from 'next/link';

const AboutUsSectionOne = () => {
  const componentName = 'ABOUT_US_SECTION_ONE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER max-w-[95%] mx-auto text-justify my-4`}
    >
      <p className='text-sm'>
        Brad Nickle CPA Professional Corporation has been providing expert
        bookkeeping, accounting, income tax preparation and payroll preparation
        services to clients for over 30 years. Situated in Hamilton Ontario, our
        family-owned accounting and bookkeeping business has grown steadily
        through word of mouth, referrals, and repeat customers. We love to keep
        things organized for our clients and make them feel at ease. Providing
        support to our customers for dealing with complex government forms,
        regulations and notifications is our specialty. As a full-service
        company providing accounting, bookkeeping and other business services to
        our clients, we are open year-round (not just in tax season) and are
        always available for consultation.{' '}
        <Link
          title='Brad Nickle CPA | Navigate to Contact Us Page'
          aria-label='Brad Nickle CPA | Navigate to Contact Us Page'
          href='/contact-us'
          className='text-links'
        >
          Contact us today to book an appointment.
        </Link>
      </p>
    </div>
  );
};

export default AboutUsSectionOne;
