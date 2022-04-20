import { Link, useLocation } from 'react-router-dom';

const MENU = [
  {
    path: '/dashboard/overview',
    name: 'Overview',
    icon: 'fa:dashboard',
  },
  {
    path: '/dashboard/manage',
    name: 'Manage',
    icon: 'fa6-solid:wallet',
  },
]
export default function Sidebar() {
  const { pathname } = useLocation();
  
  return (
    <div className={`overflow-x-hidden overflow-y-auto 
    z-40 transition-all min-w-[280px] py-5 bg-white lg:sticky top-0 h-[100vh]
    `}>
      <div className='border-b  py-5 flex items-center justify-center'>
        <Link to="/" className='text-center'>
          <img src="/logo.svg" className='h-12 max-h-20 max-w-none ' alt="logo" loading='lazy' />
        </Link>
      </div>
      <div className='pl-3 py-2 flex flex-col '>
        {
          MENU.map((item, index) =>
            <Link to={item.path} key={index}
              className={`
              flex items-center px-5 py-4  border-primary rounded-bl rounded-tl w-full 
               transition-all font-bold text-lg hover:underline
              ${pathname === item.path ?'bg-gray-100 border-l-4':'hover:pl-7 '}
              `}
            >
                {item.name}
            </Link>
          )
        }
      </div>
    </div>
  )
}