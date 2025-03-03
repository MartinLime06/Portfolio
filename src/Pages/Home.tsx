import React from 'react';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Work from '../Components/Work';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import Contact from '../Components/Contact';
import Services from '../Components/Services';


const Home: React.FC = () => {
    return (
        <div className='bg-black text-white'>
                <div className='relative left-50 bg-white h-30 w-300 rotate-35 opacity-20 rounded-full shadow-2xl shadow-white z-10 blur-2xl'></div>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-[50vh] z-50' id='header'>
                <div className='flex flex-col items-center'>
                    <p className=''>BASED IN NORWAY</p>
                    <h1 className='text-7xl font-bold p-2'>Martin Tangen</h1>
                    <h1 className='text-7xl font-bold p-2 mb-2'>Junior <span className='text-sky-500'>Web Developer</span></h1>
                    <p className='text-zinc-500'>Hei jeg er Martin Tangen, jeg lager høyt funksjonele nettsider og web apper</p>
                </div>
                <div className='m-5'>
                    <Link to='work'><button className='bg-sky-500/40 px-10 py-4 rounded-lg cursor-pointer hover:bg-sky-800'>Mitt Arbeid  <FontAwesomeIcon icon={faChevronRight} /></button></Link>
                    <a href='/CV.docx' className='my-4 mx-10 cursor-pointer hover:opacity-75'><FontAwesomeIcon icon={faDownload} className='text-sky-500'/> Last Ned CV</a>
                </div>
            </div>
            <About />
            <Work />
            <Services />
            <Contact />

        </div>
    );
};

export default Home;