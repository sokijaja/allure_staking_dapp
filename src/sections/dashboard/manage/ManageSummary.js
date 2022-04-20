import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import Image from '../../../components/Image';

OverSummary.prototype = {
  data: PropTypes.object,
}

export default function OverSummary({ data }) {
  const { token, avatar,  change, totalChange, totalDeposit } = data;
  return (
    <div className='bg-white rounded-xl mb-5'>
      <Link to='/account' className='block font-bold text-xl py-3 px-6 border-t-[3px] border-primary lg:max-w-max'>
        Account : Summary
      </Link>
      <div className='border rounded-xl shadow-lg  p-6'>
        <div className='p-5 flex items-center gap-4 border-b mb-3'>
          <Image src={avatar} className="w-20 h-20 rounded-full border-2 border-primary/60" />
          <p className='text-xl font-bold  text-primary'>
            Acct: {token}
          </p>
        </div>
        <div className='flex flex-col lg:flex-row items-stretch justify-between gap-2 mb-3'>
          <div className='border rounded-xl p-3 min-w-[300px]'>
            <p className='font-bold  mb-2'>
              Total Deposited
            </p>
            <p className='text-2xl text-gray-700 mb-2'>
              {totalDeposit}&nbsp;
              <span className='text-sm font-bold'>EAT</span>
            </p>
          </div>
          <div className='border rounded-xl p-3  min-w-[300px]'>
            <p className='font-bold  mb-2'>
              Total Change
            </p>
            <p className='text-2xl  text-primary mb-2'>
              {numeral(change).format('0.0%')}
            </p>
          </div>
          <div className='border rounded-xl p-3 grow lg:max-w-[400px] text-white relative
         bg-lime-600 '>
            <p className='font-bol  mb-2'>
              Rewards
            </p>
            <p className='text-2xl mb-2'>
              {totalChange}&nbsp;
              <span className='text-sm font-bold'>EAT</span>
            </p>
            <img src="/images/dashboard/bg_card.svg" loading='lazy' alt="" className='absolute inset-x-0 bottom-0' />
          </div>
        </div>

        <p className=''>
          <span >Open the </span>
          <Link to="#" className='text-black underline hover:text-primary'>
            Etherscan.
          </Link>
        </p>
      </div>
    </div>
  )
}