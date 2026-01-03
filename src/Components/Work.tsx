import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
    {
        title: "Dashboard",
        image: "/dashboard.png",
        techStack: ["Typescript", "Vite", "TailwindCSS"],
        codeLink: "https://github.com/MartinLime06/Dashboard.TangenLab",
        websiteLink: "https://dashboard.apps.tl.tangenlab.no"
    },
    {
        title: "Old Portfolio",
        image: "/tangenlab.png",
        techStack: ["Typescript", "Vite", "TailwindCSS"],
        codeLink: "https://github.com/MartinLime06/portfolio_old",
        websiteLink: "https://oldportfolio.apps.tl.tangenlab.no"
    },
    {
        title: "TangenRetail",
        image: "/tangenretail.png",
        techStack: ["Typescript", "Vite", "TailwindCSS"],
        codeLink: "https://github.com/MartinLime06/tangenretail",
        websiteLink: "https://tangenretail.apps.tl.tangenlab.no"
    },
    {
        title: "TangenTest-2",
        image: "/tangenretail.png",
        techStack: ["Typescript", "Vite", "TailwindCSS"],
        codeLink: "https://github.com/MartinLime06/tangenretail",
        websiteLink: "https://tangenretail.apps.tl.tangenlab.no"
    }
];
function Work() {
  return (
  <div id="work" className="flex justify-center items-center flex-col m-5">
    <div className="flex justify-between items-center lg:w-2/3 w-screen p-5">
    <h1 className="font-sans text-xl lg:text-5xl font-bold lg:p-10">Mitt Arbeid</h1>
    <a href="https://github.com/MartinLime06" target="_blank"><button className='bg-orange-500/40 lg:px-10 px-5 py-2 lg:py-4 rounded-lg cursor-pointer hover:bg-sky-800'>Alle Projekter  <FontAwesomeIcon icon={faChevronRight} /></button></a>
    </div>
    <div className="gap-5 flex flex-wrap justify-center lg:mr-40 lg:ml-40 lg:p-5">
        { projects.map((project) => (
        <div className="border-1 border-neutral-800 flex flex-col p-0 rounded-xl lg:w-120 w-90 h-auto">
            <div className="flex justify-center items-center p-0 m-0 overflow-hidden w-full h-60">
                <img src={project.image} className="blur-sm object-fit object-top h-auto w-full" alt="project image" />
            </div>
            <div>
            <h2 className="text-2xl font-bold p-5">{project.title}</h2>
            <div className="flex justify-space pb-5 ml-5 mr-5">
            <div className="flex gap-2 flex-wrap">
                {project.techStack.map((tech, index) => (
                    <button key={index} className="text-sm rounded-2xl bg-black-900 px-2 py-1 opacity-75 hover:opacity-100 border-1 border-zinc-800">{tech}</button>
                ))}
            </div>
            </div>
            <div className="flex justify-center items-center gap-5 m-5">
                <a href={project.codeLink} target="_blank"><button className="dark:bg-white dark:text-black py-4 px-5 rounded-xl cursor-pointer hover:bg-zinc-300"><FontAwesomeIcon className="dark:text-black" icon={faGithub} /> Code</button></a>
                <a href={project.websiteLink} target="_blank"><button className="dark:text-white-500 py-4 px-5 rounded-xl cursor-pointer hover:bg-orange-800/50 hover:text-gray-100 border-1 border-gray-800/50"><FontAwesomeIcon className="dark:text-white-500" icon={faGlobe} /> WebSite</button></a></div>
            </div>
        </div>
        )) }
    </div>
  </div>
);
}

export default Work;