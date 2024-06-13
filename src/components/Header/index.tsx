import { Link } from 'react-router-dom';
import logo  from "/Logo.png"
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import { MdMenu } from 'react-icons/md';
// import LogoIcon from '../../images/logo/logo-icon.svg';


const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-40 flex w-full  drop-shadow-1 bg-gradient-to-r  from-black via-green-950 to-black border-b-[1px] border-green-700 ">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-40 block rounded-sm  lg:hidden"
          >
          <MdMenu size={26}/>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={logo} className=' w-32' alt="Logo" />
          </Link>
        </div>

        <div className="hidden lg:block">
 <h1 className=' text-white font-semibold ' > Profit partner </h1>
        </div>

        <div className="flex items-center gap-5 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
