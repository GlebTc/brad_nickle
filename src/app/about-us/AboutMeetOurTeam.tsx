import React from 'react'

const AboutMeetOurTeam = () => {
    const componentName = 'MEET_OUT_TEAM';
  return (
    <div className={`${componentName}_MAIN_CONTAINER bg-sky-900 w-full flex flex-col justify-start text-center py-6 text-white shadow-lg shadow-gray-900 h-full`}>
    <div className="MEET_OUR_TEAM_TITLE pb-2">
      <h2 className="uppercase">meet our team</h2>
    </div>
    <div className="TEAM_MEMBERS_CONTAINER m-3 border-2 border-white flex flex-col md:flex-row">
      <div className="DAVID_CONTAINER flex-1 p-5">
        <div className="TEAM_MEMBER_NAME pb-2">
          <h2 className="uppercase">David Nickle</h2>
        </div>
        <p>
          Founded the business over 30 years ago as a part-time enterprise.
        </p>
      </div>
      <div className="BRADLEY_CONTAINER flex-1 p-5">
        <div className="TEAM_MEMBER_NAME pb-2">
          <h2 className="uppercase">Bradley Nickle</h2>
        </div>
        <p>
          Became a full-time employee in 2006 upon completion of his B.A. in
          Accounting. Successfully completed his CPA designation in 2021.
        </p>
      </div>
    </div>
    <div className="OUR_CLIENTS_TEXT p-4 ">
      <p>
        “We're proud that today the business has grown to support hundreds
        of clients. An important milestone was completing over 3,000 tax
        returns in a year. Since Bradley joined the company, the business
        has experienced rapid growth and we are better able to serve
        clients.”
      </p>
      <p className="text-xs text-[var(--contact-color)]">
        David & Bradley Nickle
      </p>
    </div>
    <div className="OUR_ASSOCIATE_TEAM_TITLE pb-2">
      <h2 className="uppercase">our associate team</h2>
      <p>
        Our associate team provides administrative, bookkeeping and
        accounting support services for clients.
      </p>
      <p>
        Our associate team is made up of Stephanie Nickle, Danielle Borycki,
        Kevin Short, and Sandy Green.
      </p>
    </div>
  </div>
  )
}

export default AboutMeetOurTeam