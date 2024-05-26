import Link from 'next/link';

const Links = () => {
  return (
    <div className='LINKS_DESCRIPTION_MAIN_CONTAINER bg-sky-950/90 w-full flex flex-col justify-center items-center p-4 py-16 text-white shadow-lg shadow-gray-900 h-full'>
      <div className='LINKS_TITLE_CONTAINER py-5'>
        <h2>LINKS</h2>
      </div>
      <div className='LINKS_CONTAINER flex flex-col items-center justify-center border-2 border-white p-5'>
        <Link
          href='https://www.canada.ca/en/revenue-agency.html'
          className='text-links'
          aria-label='Brad Nickle CPA | Link to CRA (Canada Revenue Agency)'
          title='Brad Nickle CPA | Link to CRA (Canada Revenue Agency)'
        >
          CRA (Canada Revenue Agency)
        </Link>
        <p>
          <Link
            href='https://www.canada.ca/en.html'
            className='text-links'
            aria-label='Brad Nickle CPA | Link to Government of Canada'
            title='Brad Nickle CPA | Link to Government of Canada'
          >
            Government of Canada
          </Link>
          , for locating:{' '}
        </p>
        <p>
          T776 - Real Estate Rentals Schedule | T777- Employment Expenses |
          T2125 - Business and Professional Activities |{' '}
        </p>
        <p>T2201 - Disability Tax Credit</p>
        <Link
          href='https://www.ontario.ca/page/serviceontario'
          className='text-links'
          aria-label='Brad Nickle CPA | Link to Service Ontario'
          title='Brad Nickle CPA | Link to Service Ontario'
        >
          Service Ontario
        </Link>
      </div>
    </div>
  );
};

export default Links;
