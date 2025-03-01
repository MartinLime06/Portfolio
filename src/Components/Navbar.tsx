import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="flex justify-center items-center m-5 scroll-smooth animate-ease-out">
          <div className='flex justify-center items-center border-gray-500 px-10 py-5 bg-zinc-900 rounded-lg border-1 gap-5'>
            <button><Link to='header' className='hover:opacity-75 cursor-pointer'>Home</Link></button>
            <button><Link to='about' className='hover:opacity-75 cursor-pointer'>Om Meg</Link></button>
            <button><Link to='work' className='hover:opacity-75 cursor-pointer'>Arbeid</Link></button>
            <button><Link to='contact' className='hover:opacity-75 cursor-pointer'>Kontakt</Link></button>
          </div>
       </div>
    );
};

export default Navbar;