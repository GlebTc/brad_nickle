import Link from 'next/link';

const UsefulLinksText = () => {
  const componentName = 'USEFUL_LINKS_TEXT';
  return (
    <p className={`${componentName}_MAIN_CONTAINER my-2 px-4 text-justify`}>
      Visit these useful links for more information about personal and business
      accounting in Canada. If you have questions or would like personalized
      information and advice,{' '}
      <Link
        href='/contact-us'
        aria-label='Contact Brad Nickle CPA Hamilton'
        title='Contact Brad Nickle CPA Hamilton'
        className='text-links-light'
      >
        call Brad Nickle CPA Professional Corporation's office today
      </Link>
      .
    </p>
  );
};

export default UsefulLinksText;
