import { useMoralis } from 'react-moralis';
import { ManageConnect,  ManageSummary, ManageStake } from '../../sections/dashboard/manage';
import DATA from '../../data/data';



export default function Manage() {
  const { user } = useMoralis();
  return (
    <>
      <ManageConnect data={DATA} />
      {user &&
      <>
      <ManageSummary data={DATA} />

      <ManageStake data={DATA} />
      </>
     }
     
    </>

  )
}