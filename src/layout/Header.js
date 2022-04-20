
import { useState } from 'react';
import { Icon } from "@iconify/react";
import {
  useMoralis
} from 'react-moralis';
import DropdownMenu from "../components/DropdownMenu";
import Sidebar from './Sidebar';
import Drawer from '../components/Drawer';
import TextShort from '../components/TextShort';

export default function Header() {

  const [drawer, setDrawer] = useState(false);

  const { authenticate, isAuthenticated, user, account, logout } = useMoralis();


  const login = async () => {

    if (!isAuthenticated) {

      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

  return (
    <div className="bg-white z-10  shadow-lg sticky top-0">
      <div className="container py-2 px-5 max-w-6xl">
        <div className=" flex gap-5 justify-end items-center">

          <button className='btn btn-circle btn-ghost lg:hidden'
            onClick={() => setDrawer(true)}
          >
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
          </button>

          <div className="grow" />
          {user
            ? <DropdownMenu
              summary={
                <TextShort text={account} />
              }
              className="btn btn-ghost hover:bg-primary/20 text-clip overflow-clip"
            >
              <div className=" shadow rounded-lg bg-white  max-w-sm p-3 mt-3">
                <span className="text-center  border-b">
                  <TextShort text={account} />
                </span>
                <button className="btn btn-ghost btn-sm w-full hover:bg-primary/10 gap-3"
                  onClick={logOut}
                >
                  Logout
                  <Icon icon={'fa6-solid:person-walking-dashed-line-arrow-right'} />
                </button>
              </div>

            </DropdownMenu>
            : <button className={`btn btn-primary gap-3 text-white `}
              onClick={login}
            >
              <img src="/images/dashboard/ic_wallet.svg" alt="" width={25} height={25} />
              Connect
            </button>
          }
        </div>
      </div>
      <Drawer open={drawer} onClose={() => setDrawer(false)} >
        <Sidebar />
      </Drawer>

    </div>
  );
}