import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

ManageStake.prototype = {
  data: PropTypes.object,
}

export default function ManageStake({ data }) {
  const { withdrawAmount, withdrawPeriod } = data;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  const handleWithdraw =()=>{
    console.log('withdraw')
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 '>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full h-full lg:max-w-md rounded-xl bg-white p-6 shadow-lg border flex flex-col gap-5'
      >
        <p className='text-primary text-2xl font-bold '>
          Stake $AET to Earn Rewards
        </p>
        <div className=''>
          <p className='text-xl font-bold mb-1'>
            Stake amount
            <span className='font-normal'>(min. 500 $AET)</span>
          </p>
          <input className='input border-gray-300 focus:border-primary w-full' type="number" min={500} placeholder={500}
            {...register('amount')}
          />
        </div>
        <div className=''>
          <p className='text-xl font-bold mb-1'>
            Stake period
            <span className='font-normal'>(min. 3 months)</span>
          </p>
          <div className='flex gap-3 items-center'>
            <input className='input border-gray-300 focus:border-primary grow' type="number" min={3} placeholder={3}
              {...register('period')}
            />
            <p className='font-bold text-xl'>Months</p>
          </div>
        </div>
        <button type='submit' className='btn btn-primary mx-auto lg:ml-0 w-32 text-white '>
          Stake
        </button>
        <p className=''>
          <span >Click here to see </span>
          <Link to="#" className='text-black underline hover:text-primary'>
            more transactions on etherscan.
          </Link>
        </p>
      </form>

      <div className='grow h-full  rounded-xl bg-white p-6 shadow-lg border flex flex-col gap-5'>
        <p className='text-primary text-2xl font-bold '>
          Staked AET
        </p>
        <div className="bg-lime-50 border border-lime-100 rounded-xl p-5 ">
          <span>You currently do not have any staked AET</span>&nbsp;
          <Link to="#" className="underline hover:text-green-500">Click here to buy $AET.</Link>
        </div>
        <div className="bg-lime-50 border border-lime-100 rounded-xl p-5 ">
          <span>Your withdrawal is complete.</span>&nbsp;
          <Link to="#" className="underline hover:text-green-500">Check your wallet $AET.</Link>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 ">
          <span>Staked tokens are not due for withdrawal.</span>&nbsp;
        </div>
        <div className='border p-5 rounded-xl'>
          <div className='flex gap-3 justify-between mb-5'>
            <div className=''>
              <p className='font-bold mb-3'>
                Amount Staked
              </p>
              <p className='text-primary '>
                <span className='text-3xl'>
                  {withdrawAmount}&nbsp;
                </span>
                <span className=' font-bold'>
                  AET
                </span>
              </p>
            </div>
            <div className=''>
              <p className='font-bold mb-3'>
                Time Remaining
              </p>
              <p className='text-primary '>
                <span className='text-3xl'>
                  {withdrawPeriod}&nbsp;
                </span>
                <span className=' font-bold'>
                  Months
                </span>
              </p>
            </div>
          </div>
          <button className='btn btn-primary w-full'
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
        </div>
       
      </div>
    </div>
  )
}

