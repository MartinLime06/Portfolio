function About() {
    return(
        <div>
        <div className='ml-10 lg:ml-40' id='about'>
                <h1 className='font-sans text-5xl font-bold'>Kode erfaring</h1>
                <p className='opacity-75 mt-2'>Under er en liste over kodespråk og andre apper jeg har erfaring med</p>
            </div>
            <div className='flex flex-col justify-center items-center lg:mb-40'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 mb-10 mt-10 ml-5 lg:ml-20 lg:mr-20'>
            <div className='flex justify-start items-center gap-5 bg-zinc-800 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-cyan-300/20 shadow-md rounded-lg'>
                        <img src="/react-native.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>React</h2>
                        <p className='opacity-90 text-sm'>Jeg bruker git for versjons kontroll</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-start items-center gap-5 bg-zinc-800 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-orange-900/50 rounded-lg'>
                        <img src="/git.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>Git</h2>
                        <p className='opacity-90 text-sm'>Jeg bruker git for versjons kontroll</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-start items-center gap-5 bg-zinc-800 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-blue-400/20 rounded-lg'>
                        <img src="/tailwindcss.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>Tailwind</h2>
                        <p className='opacity-90 text-sm'>Jeg bruker git for versjons kontroll</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-start items-center gap-5 bg-zinc-800 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-blue-500/20 rounded-lg'>
                        <img src="/typescript.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>TypeScript</h2>
                        <p className='opacity-90 text-sm'>Jeg bruker git for versjons kontroll</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-start items-center gap-5 bg-zinc-800 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-amber-500/20 rounded-lg'>
                        <img src="/python.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>Python</h2>
                        <p className='opacity-90 text-sm'>Jeg bruker git for versjons kontroll</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
};

export default About;