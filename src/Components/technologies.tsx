function Technology() {
  return (
    <div className="flex gap-5 mb-10 mt-10 animate-infinite-scroll z-50">
        <div className="flex justify-start items-center gap-5 bg-technology rounded-2xl lg:w-75">
              <div className="flex flex-row justify-center items-center gap-5 m-4">
                <div className="flex items-center justify-center p-2 bg-cyan-300/20 shadow-md rounded-lg">
                  <img src="/react-native.svg" width="50" alt="React logo" />
                </div>
                <div>
                  <h2 className="text-lg">React</h2>
                  <p className="opacity-90 text-sm">Javascript Biblotek</p>
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center gap-5 bg-technology rounded-2xl lg:w-75">
              <div className="flex flex-row justify-center items-center gap-5 m-4">
                <div className="flex items-center justify-center p-2 bg-orange-900/50 rounded-lg">
                  <img src="/git.svg" width="50" alt="Git logo" />
                </div>
                <div>
                  <h2 className="text-lg">Git</h2>
                  <p className="opacity-90 text-sm">Versjons Kontroll</p>
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center gap-5 bg-technology rounded-2xl lg:w-75">
              <div className="flex flex-row justify-center items-center gap-5 m-4">
                <div className="flex items-center justify-center p-2 bg-blue-400/20 rounded-lg">
                  <img src="/tailwindcss.svg" width="50" alt="Tailwind logo" />
                </div>
                <div>
                  <h2 className="text-lg">Tailwind</h2>
                  <p className="opacity-90 text-sm">CSS/Styling</p>
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center gap-5 bg-technology rounded-2xl lg:w-75">
              <div className="flex flex-row justify-center items-center gap-5 m-4">
                <div className="flex items-center justify-center p-2 bg-blue-500/20 rounded-lg">
                  <img src="/typescript.svg" width="50" alt="TypeScript logo" />
                </div>
                <div>
                  <h2 className="text-lg">TypeScript</h2>
                  <p className="opacity-90 text-sm">
                    Bedre versjon av Javascript
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center gap-5 bg-technology rounded-2xl lg:w-75">
              <div className="flex flex-row justify-center items-center gap-5 m-4">
                <div className="flex items-center justify-center p-2 bg-amber-500/20 rounded-lg">
                  <img src="/python.svg" width="50" alt="Python logo" />
                </div>
                <div>
                  <h2 className="text-lg">Python</h2>
                  <p className="opacity-90 text-sm">
                    For AI og windows scripts
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center gap-5 bg-technology rounded-2xl lg:w-75">
              <div className="flex flex-row justify-center items-center gap-5 m-4">
                <div className="flex items-center justify-center p-2 bg-fuchsia-500/20 rounded-lg">
                  <img
                    width={50}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABe0lEQVR4nO2ZrUsEYRCHH7XaNFivCP4HIljMNovReEmjQRCzwSiYTIa7A0EQDdcEEVSsImKwKoh4JxjEkRdmQV5W771bbx2PeWDK7N7cPPx2uY8Fx3G6ZRxoAG1AjFVbdws7dqRhYGHpUPUUkSyJCvao6G6tlJMza6tI6n4uUhLiiRhDPBFjiCdiDPFEjCGeyCAmshR9nX4HboAVYDiacZnz+nk9tpHzflk9AHvARBki+8AqsAncam+5gMi9zlsHDrV3AYz0W6T6pRd+rb0C1wVEzqLzatqfLlMETeXlF0XWtL9QpsiM3iun0YzQe4qqlSAyCpwDH8Bkv0XCZdQErnThN2A2mvEI7ER1/I3Is847UeHQ2+5hv55FjoAtYCpnRjeXVibSBHaBRWCoDJFqwowi98hPuEgvidwBBzn9OT0WPkD/NBELiIsYQzwRY4gnYgzxRIwhnogxxBP5r4m0B+VhaL3AY+OyqpYiMqYy2R8FlqqlEmFHx3FI5xOIEq6rQyn8UQAAAABJRU5ErkJggg=="
                    alt="PHP logo"
                  />
                </div>
                <div>
                  <h2 className="text-lg">PHP</h2>
                  <p className="opacity-90 text-sm">
                    For AI og windows scripts
                  </p>
                </div>
              </div>
            </div>
    </div>
  );
}

export default Technology;