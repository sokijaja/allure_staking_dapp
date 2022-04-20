import { useState } from 'react';
import {
  useERC20Balances,
  useNativeBalance,
} from 'react-moralis';

export default function OverPortfolio() {

  const { data: ethBalence } = useNativeBalance({ chain: "0x4" });
  const { data: otherBalences } = useERC20Balances({ params: { chain: "0x4" } });
  var ethBal = ethBalence?.balance / 1000000000000000000;
  var aetBal = otherBalences?.find(_item => _item.symbol === "AET")?.balance / 1000000000000000000;
  return (
    <div className='border rounded-xl shadow-lg bg-white p-6 mb-5'>
      <p className='text-2xl font-bold text-primary py-5 border-b mb-3'>
        Portfolio: Overview
      </p>
      <div className='flex flex-col lg:flex-row items-stretch justify-between gap-2 mb-3'>
        <div className='border rounded-xl p-3 grow'>
          <p className='font-bold  mb-2 flex gap-3 items-center'>
            <img src="/images/common/allure-aet.svg" width={24} height={24} alt="" />
            Allure Energy Token
          </p>
          <p className='text-2xl pl-5 text-gray-700 '>
            {aetBal.toLocaleString(undefined, {maximumFractionDigits: 2})}&nbsp;AET
          </p>
        </div>
        <div className='border rounded-xl p-3 grow'>
          <p className='font-bold  mb-2 flex gap-3 items-center'>
            <img src="/images/common/ethereum-eth.svg" width={24} height={24} alt="" />
            Ethereum
          </p>
          <p className='text-2xl pl-5 text-gray-700 '>
            {ethBal.toFixed(4)} ETH
            
          </p>
        </div>
      </div>
    </div>
  )
}