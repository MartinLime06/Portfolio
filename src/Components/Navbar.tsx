import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="flex justify-center items-center scroll-smooth animate-ease-out p-10 text-xs">
          <div className='fixed top-10 bg-black items-center px-10 py-5 rounded-full border-1 border-gray-500/10 shadow-sm shadow-neutral-500 z-100 gap-5'>
            <button><Link to='header' className='hover:opacity-75 cursor-pointer pr-5'>Hjem</Link></button>
            <button><Link to='about' className='hover:opacity-75 cursor-pointer pr-5'>Om Meg</Link></button>
            <button><Link to='work' className='hover:opacity-75 cursor-pointer pr-5'>Arbeid</Link></button>
            <button><Link to='services' className='hover:opacity-75 cursor-pointer pr-5'>Tjenester</Link></button>
            <button><Link to='contact' className='hover:opacity-75 cursor-pointer'>Kontakt</Link></button>
          </div>
       </div>
    );
};

export default Navbar;