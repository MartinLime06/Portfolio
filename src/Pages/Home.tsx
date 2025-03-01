import React from 'react';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Work from '../Components/Work';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faDownload } from '@fortawesome/free-solid-svg-icons';


const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-screen' id='header'>
                <div className='flex flex-col items-center'>
                    <p className=''>BASED IN NORWAY</p>
                    <h1 className='text-7xl font-bold p-5'>Full Stack <span className='text-sky-500'>Web Developer</span></h1>
                    <p className='text-zinc-500'>Hei jeg er Martin Tangen, jeg lager høyt funksjonele nettsider og web apper</p>
                </div>
                <div className='m-5'>
                    <button className='bg-zinc-900 px-10 py-4 rounded-lg border-1 border-gray-500 cursor-pointer hover:bg-zinc-800 animate-pulse'>Mitt Arbeid  <FontAwesomeIcon icon={faChevronRight} /></button>
                    <a href='../assets/react.svg' className='my-4 mx-10 cursor-pointer hover:opacity-75'><FontAwesomeIcon icon={faDownload} className='text-sky-500'/> Last Ned CV</a>
                </div>
            </div>
            <About />
            <Work />
        </div>
    );
};

export default Home;