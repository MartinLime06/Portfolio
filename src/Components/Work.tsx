import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Work() {
  return (
  <div id="work">
    <div className="flex justify-between items-center">
    <h1 className="font-sans text-5xl font-bold lg:mr-30 lg:ml-30 lg:p-10">Mitt Arbeid</h1>
    <a href="https://github.com/MartinLime06" target="_blank"><button className='bg-blue-500/40 px-10 py-4 rounded-lg cursor-pointer hover:bg-blue-800 lg:mr-40'>Alle Projekter  <FontAwesomeIcon icon={faChevronRight} /></button></a>
    </div>
    <div className="gap-5 flex flex-wrap justify-center lg:mr-40 lg:ml-40 lg:p-5">

        <div className="border-1 border-neutral-800 flex flex-col p-0 rounded-xl w-120 h-auto">
            <div className="flex justify-center items-center p-0 m-0 overflow-hidden w-full h-50">
                <img src="/dashboard.png" className="blur-sm object-fit object-top h-auto w-full" alt="project image" />
            </div>
            <div>
            <h2 className="text-2xl font-bold p-5">Dashboard</h2>
            <div className="flex justify-space pb-5 ml-5 mr-5">
            <div className="flex gap-2 flex-wrap">
                <button className="text-sm rounded-2xl bg-zinc-900 px-2 py-1 opacity-75 hover:opacity-100 border-1 border-zinc-800">Typescript</button>
                <button className="text-sm rounded-2xl bg-zinc-900 px-2 py-1 opacity-75 hover:opacity-100 border-1 border-zinc-800">Vite</button>
                <button className="text-sm rounded-2xl bg-zinc-900 px-2 py-1 opacity-75 hover:opacity-100 border-1 border-zinc-800">TailwindCSS</button>
                <button className="text-sm rounded-2xl bg-zinc-900 px-2 py-1 opacity-75 hover:opacity-100 border-1 border-zinc-800">SQL</button>
            </div>
            </div>
            <div className="flex justify-center items-center gap-5 m-5">
                <a href="https://github.com/MartinLime06/Dashboard.TangenLab" target="_blank"><button className="dark:bg-zinc-900 dark:text-slate-100 py-4 px-5 rounded-xl cursor-pointer hover:bg-zinc-700 hover:text-gray-100"><FontAwesomeIcon className="dark:text-slate-100" icon={faGithub} /> Code</button></a>
                <a href="https://dashboard.tangenlab.no" target="_blank"><button className="dark:text-sky-500 py-4 px-5 rounded-xl cursor-pointer hover:bg-sky-500 hover:text-gray-100"><FontAwesomeIcon className="dark:text-sky-500" icon={faGlobe} /> WebSite</button></a>
            </div>
            </div>
        </div>

        <div className="border-1 border-neutral-800 flex flex-col p-0 rounded-xl w-120 h-auto">
            <div className="flex justify-center items-center p-0 m-0 overflow-hidden w-full h-50">
                <img src="/tangenlab.png" className="object-fit object-top h-auto w-full" alt="project image" />
            </div>
            <div>
            <h2 className="text-2xl font-bold p-5">Old Portfolio</h2>
            <div className="flex justify-space pb-5 ml-5 mr-5">
            <div className="flex gap-2 flex-wrap">
                <button className="text-sm rounded-2xl bg-zinc-900 px-2 py-1 opacity-75 hover:opacity-100 border-1 border-zinc-800">Typescript</button>
                <button className="text-sm rounded-2xl bg-zinc-900 px-2 py-1 opacity-75 hover:opacity-100 border-1 border-zinc-800">CSS</button>
            </div>
            </div>
            <div className="flex justify-center items-center gap-5 m-5">
                <a href="https://github.com/MartinLime06/portfolio_old" target="_blank"><button className="dark:bg-zinc-900 dark:text-slate-100 py-4 px-5 rounded-xl cursor-pointer hover:bg-zinc-700 hover:text-gray-100"><FontAwesomeIcon className="dark:text-slate-100" icon={faGithub} /> Code</button></a>
                <a href="https://dashboard.tangenlab.no" target="_blank"><button className="dark:text-sky-500 py-4 px-5 rounded-xl cursor-pointer hover:bg-sky-500 hover:text-gray-100"><FontAwesomeIcon className="dark:text-sky-500" icon={faGlobe} /> WebSite</button></a>
            </div>
            </div>
        </div>

        <div className="border-1 border-neutral-800 flex flex-col p-0 rounded-xl w-120 h-auto">
            <div className="flex justify-center items-center p-0 m-0 overflow-hidden w-full h-50">
                <img src="/tangenretail.png" className="object-fit object-top h-auto w-full" alt="project image" />
            </div>
            <div>
            <h2 className="text-2xl font-bold p-5">TangenRetail</h2>
            <div className="flex justify-space pb-5 ml-5 mr-5">
            <div className="flex gap-2 flex-wrap">
                <button className="text-sm rounded-2xl bg-zinc-900 px-2 py-1 opacity-75 hover:opacity-100 border-1 border-zinc-800">HTML</button>
                <button className="text-sm rounded-2xl bg-zinc-900 px-2 py-1 opacity-75 hover:opacity-100 border-1 border-zinc-800">CSS</button>
            </div>
            </div>
            <div className="flex justify-center items-center gap-5 m-5">
                <a href="https://github.com/MartinLime06/TangenRetail" target="_blank"><button className="dark:bg-zinc-900 dark:text-slate-100 py-4 px-5 rounded-xl cursor-pointer hover:bg-zinc-700 hover:text-gray-100"><FontAwesomeIcon className="dark:text-slate-100" icon={faGithub} /> Code</button></a>
                <a href="https://Tangenretail.no" target="_blank"><button className="dark:text-sky-500 py-4 px-5 rounded-xl cursor-pointer hover:bg-sky-500 hover:text-gray-100"><FontAwesomeIcon className="dark:text-sky-500" icon={faGlobe} /> WebSite</button></a>
            </div>
            </div>
        </div>

    </div>
  </div>
);
}

export default Work;