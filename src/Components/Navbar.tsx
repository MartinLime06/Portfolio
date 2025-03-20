import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="max-sm:hidden flex justify-center items-center scroll-smooth animate-ease-out lg:p-10 text-xs lg:text-sm">
          <div className='relative flex justify-center items-center top-1 bg-black px-10 py-5 rounded-full border-1 border-gray-500/10 z-100 gap-2'>
            <button><Link to='header' className='hover:opacity-75 hover:bg-neutral-700 rounded-lg cursor-pointer px-5 py-2'>Hjem</Link></button>
            <button><Link to='about' className='hover:opacity-75 hover:bg-neutral-700 rounded-lg cursor-pointer px-5 py-2'>Om Meg</Link></button>
            <button><Link to='work' className='hover:opacity-75 hover:bg-neutral-700 rounded-lg cursor-pointer px-5 py-2'>Arbeid</Link></button>
            <button><Link to='services' className='hover:opacity-75 hover:bg-neutral-700 rounded-lg cursor-pointer px-5 py-2'>Tjenester</Link></button>
            <button><Link to='contact' className='hover:opacity-75 hover:bg-neutral-700 cursor-pointer rounded-lg px-5 py-2'>Kontakt</Link></button>
          </div>
       </div>
    );
};

export default Navbar;