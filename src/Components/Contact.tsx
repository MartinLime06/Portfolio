//import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Contact() {
    //const SendEmail = () => {
    //    const emailData = {
    //        name: (document.querySelector('input[name="name"]') as HTMLInputElement).value,
    //        email: (document.querySelector('input[name="email"]') as HTMLInputElement).value,
    //        message: (document.querySelector('textarea[name="message"]') as HTMLTextAreaElement).value
    //    };
    //    console.log("Send Email", emailData );
    //};
  return (
    <div id="contact" className="flex justify-center items-center flex-col gap-5 p-10">
    {/*<div className="flex flex-col items-left lg:w-2/3 p-5 gap-5">
      <h1  className="font-sans text-2xl lg:text-5xl font-bold ml-5">Kontakt</h1>
      <form className="flex flex-col items-center justify-center gap-5">
        <div className="flex gap-5 justify-center items-center flex-wrap w-full">
        <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg">Fullt Navn</label>
            <input className="border-1 border-neutral-800 w-70 h-15 pl-5 rounded-xl text-lg" type="text" placeholder="Fullt Navn" name="name" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">E-post</label>
            <input className="border-1 border-neutral-800 w-70 h-15 pl-5 rounded-xl text-lg" type="email" placeholder="your@company.com" name="email" />
        </div>
        </div>
        <textarea placeholder="Beskrivelse av henvendelse..." name="message" className="border-1 border-neutral-800 rounded-xl p-5 w-145 h-50" />
        <button onClick={SendEmail} className="border-1 border-neutral-50 bg-neutral-100 text-black text-lg font-bold w-140 h-15 rounded-xl cursor-pointer hover:text-white hover:bg-neutral-900 hover:border-neutral-500">Send <FontAwesomeIcon icon={faPaperPlane}/></button>
      </form>
    </div>*/}
    <h1 className="font-sans text-2xl lg:text-5xl font-bold ml-5">Kontakt</h1>
    <div className="flex flex-row gap-10 text-lg lg:text-2xl">
    <h2 className=""><span className="font-bold text-blue-300">Telefon:</span> +47 475 08 130</h2>
    <h2 className=""><span className="font-bold text-blue-300">E-post:</span> martin.tangen@tangenlab.no</h2>
    </div>
    </div>
  );
}

export default Contact;