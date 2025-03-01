import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="flex justify-center items-center m-5 scroll-smooth">
          <div className='flex justify-center items-center border-gray-500 px-10 py-5 bg-zinc-900 rounded-lg border-1 gap-5'>
            <button><Link to='/' className='hover:opacity-75'>Home</Link></button>
            <button><Link to='/about' className='hover:opacity-75'>Om Meg</Link></button>
            <button><Link to='/projects' className='hover:opacity-75'>Arbeid</Link></button>
            <button><Link to='/contact' className='hover:opacity-75'>Kontakt</Link></button>
          </div>
       </div>
    );
};

export default Navbar;