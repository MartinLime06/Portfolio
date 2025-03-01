import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Work() {
  return (
  <div id="work">
    <div className="flex justify-between items-center">
    <h1 className="font-sans text-5xl font-bold lg:mr-30 lg:ml-30 lg:p-10">Mitt Arbeid</h1>
    <button className='bg-zinc-900 px-10 py-4 rounded-lg border-1 border-gray-500 cursor-pointer hover:bg-zinc-800 animate-pulse lg:mr-40'><a href="https://github.com/MartinLime06" target="_blank">Alle Projekter  <FontAwesomeIcon icon={faChevronRight} /></a></button>
    </div>
    <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:mr-40 lg:ml-40 lg:p-5">

        <div className="bg-neutral-800 flex flex-col p-3 rounded-xl w-150">
            <div className="flex justify-center items-center">
            <img className="w-140 rounded-xl" src="/dashboard.png" alt="React logo" width="50" />
            </div>
            <div>
            <h2 className="text-3xl p-5">Dashboard</h2>
            <div className="flex justify-space p-2">
            <div className="flex gap-2 flex-wrap basis-2/3">
                <button className="rounded-lg bg-zinc-800 px-4 py-2 opacity-75 hover:opacity-100 border-1 border-zinc-600 h-12">Typescript</button>
                <button className="rounded-lg bg-zinc-800 px-4 py-2 opacity-75 hover:opacity-100 border-1 border-zinc-600 h-12">Vite</button>
                <button className="rounded-lg bg-zinc-800 px-4 py-2 opacity-75 hover:opacity-100 border-1 border-zinc-600 h-12">TailwindCSS</button>
            </div>
            <div className="basis-1/3 flex justify-end items-center">
                <button className="bg-sky-500 py-4 px-5 rounded-lg cursor-pointer hover:bg-sky-600"><FontAwesomeIcon className="dark:text-zinc-900" icon={faArrowRight} /></button>
            </div>
            </div>
            </div>
        </div>

        <div className="bg-neutral-800 flex flex-col p-3 rounded-xl w-150">
            <div className="flex justify-center items-center">
            <img className="w-140 rounded-xl" src="/dashboard.png" alt="React logo" width="50" />
            </div>
            <div>
            <h2 className="text-3xl p-5">Portal</h2>
            <div className="flex justify-space p-2">
            <div className="flex gap-2 flex-wrap basis-2/3">
                <button className="rounded-lg bg-zinc-800 px-4 py-2 opacity-75 hover:opacity-100 border-1 border-zinc-600 h-12">Typescript</button>
                <button className="rounded-lg bg-zinc-800 px-4 py-2 opacity-75 hover:opacity-100 border-1 border-zinc-600 h-12">Vite</button>
            </div>
            <div className="basis-1/3 flex justify-end items-center">
                <button className="bg-sky-500 py-4 px-5 rounded-lg cursor-pointer hover:bg-sky-600"><FontAwesomeIcon className="dark:text-zinc-900" icon={faArrowRight} /></button>
            </div>
            </div>
            </div>
        </div>

    </div>
  </div>
);
}

export default Work;