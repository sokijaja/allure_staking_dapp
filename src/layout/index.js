import { Outlet } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';


import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function MainLayout() {

  return (
    <div className='flex  min-h-screen'>

      <div className='hidden lg:block'>
        <Sidebar />
      </div>
      <div className={`grow flex flex-col bg-gray-500/5`}>
        <Header />
        <div className=' pt-20 grow px-5 text-gray-500 '>
          <Outlet />
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>

  )
}