import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopMedical, faGlobe, faServer, faComputer } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const data = [
    {
        title: "PC Reparasjon",
        description: "Jeg reparerer alle typer PCer, bærbare og stasjonære. Som en privataktør tar jeg ikke my betalt og pris kan avtales både før og etter jobben er gjort.",
        icon: faLaptopMedical,
    },
    {
        title: "Lage Nettsider",
        description: "Jeg lager nettsider for små bedrifter og privatpersoner. Jeg har erfaring med HTML, CSS, Typescript, React, TailwindCSS, og mer.",
        icon: faGlobe,
    },
    {
        title: "Domeneregistrering og Nettside Hosting",
        description: "Jeg kan hjelpe deg med å finne et domene og hosting til din nettside.",
        icon: faServer,
    },
    {
        title: "Bygge pc",
        description: "Skal du kjøpe en ny pc og ønsker at den skal være skreddersydd for dine behov? Jeg kan hjelpe deg med å bygge en pc som tilfredstiller dine ønsker.",
        icon: faComputer,
    }
]

function Services(){
    const services = data.map((service, index) => {
        return(
            <div key={index} className="border-1 border-neutral-800 flex flex-col p-5 rounded-xl lg:w-120 w-90 h-auto hover:bg-neutral-400/20"> 
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-xl font-bold text-orange-500">{service.title}</h2>
                        <FontAwesomeIcon icon={service.icon as IconProp} />
                    </div>
                    <p>{service.description}</p>
                </div>
            </div>
        )
    }, [])
    return(
        <div id="services" className="flex items-center flex-col justify-center m-5">
            <div className="flex flex-col lg:w-2/3 w-screen gap-5">
            <div className="flex flex-col items-left ml-5 gap-2">
                <h1 className="font-sans text-2xl lg:text-5xl font-bold">Tjenester</h1>
                <p className="opacity-75 text-sm lg:text-base">
                Jeg tilbyr alle tjenestene i listen under
                </p>
            </div>
                <div className="flex justify-center flex-wrap gap-5">
                {services}
                </div>
            </div>
        </div>
    )
};

export default Services;