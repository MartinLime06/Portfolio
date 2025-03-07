import Technology from "./technologies";

function About() {
    return (
      <div id="about" className="flex justify-center items-center flex-col gap-5">
        <div className="flex flex-col items-left lg:w-3/5">
          <h1 className="font-sans text-2xl lg:text-5xl font-bold">Teknologi</h1>
          <p className="opacity-75 mt-2 text-sm lg:text-base">
            Under er en liste over kodespråk og andre apper jeg har erfaring med
          </p>
        </div>
        <div className="flex lg:mb-40 w-300 overflow-hidden rounded-2xl gap-5 z-90">
          <Technology />
          <Technology />
        </div>
      </div>
    );
};

export default About;