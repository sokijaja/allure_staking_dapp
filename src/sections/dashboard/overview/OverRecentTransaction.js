import { Link } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { useERC20Transfers } from "react-moralis";
import TextShort from '../../../components/TextShort';

const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric',
};

export default function OverRecentTransaction() {


  const { data: aetTransaction } = useERC20Transfers();
  const { user, account } = useMoralis();
  return (
    <div className='border rounded-xl shadow-lg mb-5 bg-white p-6 '>
      <p className='text-2xl font-bold text-primary py-5'>
        Portfolio: Overview
      </p>
      <div className="bg-lime-50 border border-lime-100 rounded-xl p-5 mb-5 ">
        <span className='font-bold'>
          {aetTransaction?.result.length
            ? 'Your transactions'
            : 'You do not have any transactions yet.'
          }&nbsp;&nbsp;
        </span>
        <Link to="#" className="hover:underline hover:text-blue-400">Click here to buy $AET.</Link>
      </div>
      <div className='overflow-x-auto'>
        <div className='mb-5 '>
          <div className='grid grid-cols-4 p-4 border-b'>
            <div className='font-bold px-3'>
              To
            </div>
            <div className='font-bold px-3 col-span-2'>
              Value
            </div>
            <div className='font-bold px-3'>
              Age
            </div>
          </div>
          { 
            (aetTransaction?.result.slice(0, 8) || []).map((item, index) => {
              const { to_address, value, block_timestamp } = item;
              const time = new Date(block_timestamp)
              return (
                <Link to={`#${to_address}`} className='grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-100' key={index}>
                  <div className='px-3 overflow-clip text-ellipsis'>
                    <TextShort text={to_address} className="min-w-[90%]" />
                  </div>
                  <div className='px-3 overflow-hidden text-gray-700 col-span-2'>
                    {value/1000000000000000000}{' '}
                  </div>
                  <div className='px-3 overflow-hidden'>
                    {Intl.DateTimeFormat('default', options).format(time)}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <p className=''>
        <span>Click here to see</span>
        <a 
        href={process.env.REACT_APP_ETHERSCAN_ADDRESS+account+"#tokentxns"}
        rel="noreferrer"
        target={'_blank'}
        className='btn btn-link text-gray-800 hover:underline'>
          More transactions on etherscan
        </a>
      </p>

    </div>
  )
}

