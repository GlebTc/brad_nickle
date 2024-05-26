import { MdOutlineMedicalServices } from 'react-icons/md';
import { FaCarSide, FaHammer, FaCoins, FaTruck } from 'react-icons/fa';

const MainClients = () => {
  const componentName = 'MAIN_CLIENTS';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER bg-sky-950/90 w-full flex flex-col justify-start text-center p-4 text-white  h-full`}
    >
      <h2 className='uppercase pb-2'>Our Clients</h2>

      <p className='p-2'>
        We provide accounting, bookkeeping and income tax preparation services
        to all types of consumer and commercial clients. We also have extensive
        expertise with the following client segments:
      </p>

      <div className='OUR_CLIENTS_CONTAINERS flex flex-wrap'>
        <div className='ICONS_DIV w-full flex flex-col items-center py-4'>
          <MdOutlineMedicalServices size={40} />
          <p>Medical and healthcare professionals</p>
        </div>
        <div className='ICONS_DIV  w-full flex flex-col items-center py-4'>
          <FaCarSide size={40} />
          <p>Car dealerships</p>
        </div>
        <div className='ICONS_DIV  w-full flex flex-col items-center py-4'>
          <FaHammer size={40} />
          <p>Tradesmen / women</p>
        </div>
        <div className='ICONS_DIV  w-full flex flex-col items-center py-4'>
          <FaCoins size={40} />
          <p>Commission sales people</p>
        </div>
        <div className='ICONS_DIV  w-full flex flex-col items-center py-4'>
          <FaTruck size={40} />
          <p>Truck drivers</p>
        </div>
      </div>
    </div>
  );
};

export default MainClients;
