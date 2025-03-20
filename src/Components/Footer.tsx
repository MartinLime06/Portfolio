import { Link } from "react-scroll";

function Footer(){
    return(
        <div id="contact">
            <div className="relative bottom-0 left-0 right-0 flex justify-around items-center p-10 border-zinc-900 border-t-2">
                <div>
                    <h1 className="font-bold text-2xl">Martin Tangen</h1>
                    <p className="opacity-75">Made in 2024</p>
                </div>
                <div className="flex gap-10 justify-center">
                    <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-xl">Naviger</h1>
                    <Link className="text- opacity-75 hover:opacity-100 cursor-pointer" to="header">Home</Link>
                    <Link className="text- opacity-75 hover:opacity-100 cursor-pointer" to="about">Om Meg</Link>
                    <Link className="text- opacity-75 hover:opacity-100 cursor-pointer" to="work">Arbeid</Link>
                    <Link className="text- opacity-75 hover:opacity-100 cursor-pointer" to="contact">Kontakt</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-xl">Socials</h1>
                    <a className="opacity-75 hover:opacity-100 cursor-pointer" target="_blank" href="https://github.com/MartinLime06">Github</a>
                    <a className="opacity-75 hover:opacity-100 cursor-pointer" target="_blank" href="https://www.linkedin.com/in/martin-tangen-94633a25b/">LinkedIn</a>
                    <a className="opacity-75 hover:opacity-100 cursor-pointer" target="_blank" href="https://www.instagram.com/martin_tangen/">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;