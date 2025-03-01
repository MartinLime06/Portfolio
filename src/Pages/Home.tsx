import React from 'react';
import Navbar from '../Components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';


const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-screen'>
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
            <div className='flex items-center justify-center gap-10 m-10'>
            <div className='flex justify-center items-center gap-5 bg-zinc-800 rounded-lg'>
                <div className='flex flex-row justify-center items-center gap-5 m-5'>
                    <div>
                    <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div>
                        <h2 className='text-lg'>React</h2>
                        <p>Jeg bruker pimært react typescript</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5 bg-zinc-800 rounded-lg'>
                <div className='flex flex-row justify-center items-center gap-5 m-5'>
                    <div className='px-5 py-4 bg-orange-800 rounded-lg'>
                    <FontAwesomeIcon icon={faGitAlt} />
                    </div>
                    <div>
                        <h2 className='text-lg'>Git</h2>
                        <p>Jeg bruker git for versjons kontroll</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;