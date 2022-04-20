import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { useMoralis } from 'react-moralis';
import Image from '../../../components/Image';
import Blockies from 'react-blockies'
import TextShort from '../../../components/TextShort';

console.log(process.env)
export default function OverSummary() {

  const { user, account } = useMoralis();
  return (
    <div className='bg-white rounded-xl mb-5'>
      <Link to='/account' className='block font-bold text-xl uppercase py-3 px-6 border-t-[3px] border-primary lg:max-w-max'>
        Account : summary
      </Link>
      <div className='border rounded-xl shadow-lg  p-6'>
        <div className='p-5 flex items-center gap-4 border-b mb-3'>
          <div className="w-20 h-20 rounded-full border-2 border-primary/60 overflow-hidden">
            {!!user?.get('avatar') ?
              <Image src={user.get('avatar')} />
              :<Blockies seed={`${account}`} scale={10}/>
            }

          </div>
          <p className='text-xl font-bold  text-primary flex gap-2'>
            Account: <TextShort text={account} className="w-32"/>
          </p>
        </div>
        <div className='flex flex-col lg:flex-row items-stretch justify-between gap-2 mb-3'>
          <div className='border rounded-xl p-3 min-w-[300px] grow'>
            <p className='font-bold  mb-2'>
              Total Deposited
            </p>
            <p className='text-2xl text-gray-700 mb-2'>
              {/* {totalDeposit}&nbsp; */}
              <span className='text-sm font-bold'>AET</span>
            </p>
          </div>
          <div className='border rounded-xl p-3 min-w-[300px] grow'>
            <p className='font-bold  mb-2'>
              Total Change
            </p>
            <p className='text-2xl  text-primary mb-2'>
              {/* {numeral(change).format('0.0%')} */}
            </p>
          </div>
          <div className='border rounded-xl p-3 grow lg:max-w-[400px] text-white relative
         bg-lime-600 '>
            <p className='font-bol  mb-2'>
              Rewards
            </p>
            <p className='text-2xl mb-2'>
              {/* {totalChange}&nbsp; */}
              <span className='text-sm font-bold'>AET</span>
            </p>
            <img src="/images/dashboard/bg_card.svg" loading='lazy' alt="" className='absolute inset-x-0 bottom-0' />
          </div>
        </div>

        <div className='flex gap-3 justify-center lg:justify-start'>
          <a
          href={process.env.REACT_APP_ETHERSCAN_ADDRESS+account}
          rel="noreferrer"
          className='btn btn-outline btn-sm text-gray-400'
           target={'_blank'}>
            EtherScan
            <Icon icon={'eva:diagonal-arrow-right-up-fill'} className="w-5 h-5 " />
          </a>
        </div>
      </div>
    </div>
  )
}