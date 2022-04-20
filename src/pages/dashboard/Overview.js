import { useMoralis } from 'react-moralis';

import { OverBuy, OverPortfolio, OverSummary, OverRecentTransaction } from '../../sections/dashboard/overview';
import DATA from '../../data/data';



export default function Overview() {
  const { user } = useMoralis();
  return (
    <>
      <OverBuy />
      {user && 
        <>
          <OverSummary />

          <OverPortfolio />

          <OverRecentTransaction />
        </>
      }

    </>

  )
}