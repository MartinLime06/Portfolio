function About() {
    return(
        <div id="about">
        <div className='ml-10 lg:ml-40'>
                <h1 className='font-sans text-5xl font-bold'>Kode erfaring</h1>
                <p className='opacity-75 mt-2'>Under er en liste over kodespråk og andre apper jeg har erfaring med</p>
            </div>
            <div className='flex flex-col justify-center items-center lg:mb-40'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 mb-10 mt-10 ml-5 lg:ml-20 lg:mr-20'>

            <div className='flex justify-start items-center gap-5 bg-zinc-900 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-cyan-300/20 shadow-md rounded-lg'>
                        <img src="/react-native.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>React</h2>
                        <p className='opacity-90 text-sm'>Javascript Biblotek</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-start items-center gap-5 bg-zinc-900 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-orange-900/50 rounded-lg'>
                        <img src="/git.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>Git</h2>
                        <p className='opacity-90 text-sm'>Versjons Kontroll</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-start items-center gap-5 bg-zinc-900 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-blue-400/20 rounded-lg'>
                        <img src="/tailwindcss.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>Tailwind</h2>
                        <p className='opacity-90 text-sm'>CSS/Styling</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-start items-center gap-5 bg-zinc-900 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-blue-500/20 rounded-lg'>
                        <img src="/typescript.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>TypeScript</h2>
                        <p className='opacity-90 text-sm'>Bedre versjon av Javascript</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-start items-center gap-5 bg-zinc-900 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-amber-500/20 rounded-lg'>
                        <img src="/python.svg" width="50" alt="Git logo" />
                    </div>
                    <div>
                        <h2 className='text-lg'>Python</h2>
                        <p className='opacity-90 text-sm'>For AI og windows scripts</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-start items-center gap-5 bg-zinc-900 rounded-2xl border-1 border-[#0f0f0f] hover:border-1 hover:border-gray-500 hover:bg-gray-300/20 w-100'>
                <div className='flex flex-row justify-center items-center gap-5 m-4'>
                    <div className='flex items-center justify-center p-2 bg-fuchsia-500/20 rounded-lg'>
                    <img width={50} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABe0lEQVR4nO2ZrUsEYRCHH7XaNFivCP4HIljMNovReEmjQRCzwSiYTIa7A0EQDdcEEVSsImKwKoh4JxjEkRdmQV5W771bbx2PeWDK7N7cPPx2uY8Fx3G6ZRxoAG1AjFVbdws7dqRhYGHpUPUUkSyJCvao6G6tlJMza6tI6n4uUhLiiRhDPBFjiCdiDPFEjCGeyCAmshR9nX4HboAVYDiacZnz+nk9tpHzflk9AHvARBki+8AqsAncam+5gMi9zlsHDrV3AYz0W6T6pRd+rb0C1wVEzqLzatqfLlMETeXlF0XWtL9QpsiM3iun0YzQe4qqlSAyCpwDH8Bkv0XCZdQErnThN2A2mvEI7ER1/I3Is847UeHQ2+5hv55FjoAtYCpnRjeXVibSBHaBRWCoDJFqwowi98hPuEgvidwBBzn9OT0WPkD/NBELiIsYQzwRY4gnYgzxRIwhnogxxBP5r4m0B+VhaL3AY+OyqpYiMqYy2R8FlqqlEmFHx3FI5xOIEq6rQyn8UQAAAABJRU5ErkJggg==" alt="php" />
                    </div>
                    <div>
                        <h2 className='text-lg'>PHP</h2>
                        <p className='opacity-90 text-sm'>For AI og windows scripts</p>
                    </div>
                </div>
            </div>

            </div>
            </div>
        </div>
    )
};

export default About;