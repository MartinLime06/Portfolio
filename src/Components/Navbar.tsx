import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="flex justify-end items-center scroll-smooth animate-ease-out">
          <div className='flex justify-center items-center px-10 py-5 rounded-lg gap-5'>
            <button><Link to='header' className='hover:opacity-75 cursor-pointer'>Hjem</Link></button>
            <button><Link to='about' className='hover:opacity-75 cursor-pointer'>Om Meg</Link></button>
            <button><Link to='work' className='hover:opacity-75 cursor-pointer'>Arbeid</Link></button>
            <button><Link to='contact' className='hover:opacity-75 cursor-pointer'>Kontakt</Link></button>
          </div>
       </div>
    );
};

export default Navbar;