import LogoIcon from '../icons/LogoIcon';
import SunIcon from '../icons/SunIcon';

const Navbar = () => {
  return (
    <nav className=' bg-neutral-0 min-h-screen max-w-5xl mx-auto mt-8'>
      <div className='flex flex-row   border items-center justify-between  rounded-2xl p-2'>
        <div>
          <LogoIcon />
        </div>
        <div>
          <SunIcon color='#000' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
