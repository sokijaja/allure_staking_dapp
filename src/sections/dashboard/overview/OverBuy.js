import { Link } from 'react-router-dom';
import { useMoralis, useERC20Balances,} from 'react-moralis';
import { useEffect, useState } from 'react';

const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric',
};

console.log(process.env)
export default function OverBuy() {

  const { user } = useMoralis();
  const [balance, setBalance] = useState(0);
  const { data: otherBalences } = useERC20Balances({ params: { chain: "0x4" } });
  var aetBal = otherBalences?.find(_item => _item.symbol === "AET")?.balance / 1000000000000000000;


  useEffect(() => {
    if (user) {
      let totalBalence;
      (otherBalences || []).forEach(item => {
        if (item.symbol === 'AET')
          totalBalence += item.balance;
      })
      setBalance(totalBalence);
    }
  }, [user])

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between mb-6">
        <p className="text-2xl font-bold ">
          Welcome to the Allure,
        </p>
        <button className="btn btn-primary">
          BUY $AET
        </button>
      </div>
      {!user &&
        <div className="border rounded-xl shadow-lg bg-white p-6 mb-3">
          <div className="bg-lime-50 border border-lime-100 rounded-xl p-5 ">
            <span>Connect your wallet to track your AET tokens.</span>
            <Link to="#" className="">&nbsp;Connect wallet on {process.env.REACT_APP_NETWORK_NAME}.</Link>
          </div>
        </div>
      }

      {user &&
        <div className='bg-white rounded-lg px-10 py-8'>
          <p className='font-bold text-xl mb-6'>
            Wallet Balance
          </p>
          <p className='font-bold text-3xl text-primary mb-3'>
            {aetBal.toLocaleString(undefined, {maximumFractionDigits: 2})}&nbsp;AET
          </p>
          <p className='text-sm'>
            As of {Intl.DateTimeFormat('default', options).format(new Date())}
          </p>
        </div>
      }

    </>
  )
}