import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";
import hiroImg from "/src/assets/image1.png" 

const MV = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/public/SUZUKI_RESUME_2024.pdf';
        link.download = 'SUZUKI_2024.pdf';
        link.click();
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

  return (
    <div className="w-full h-full md:h-screen flex flex-col items-center max-w-6xl mx-auto md:flex-row mt-16 md:mt-0">
        <div className="w-full md:w-3/4 border-l-4 border-neutralCyan  pl-3 md:pl-5 py-5">
            <h1 className="text-neutralWhite font-semibold text-3xl lg:text-5xl">Hello! I am <span className="block text-5xl lg:text-8xl text-neutralCyan mb-1">Hiroyuki</span> and I am a Developer</h1>
            <div className="flex mt-4">
                <div className="border-r-2 border-neutralCyan pr-3">
                    <h1 className="text-neutralWhite"><span className="text-neutralCyan font-bold text-xl">5</span> years of IT experience</h1>
                </div>
                <div className="border-r-2 border-neutralCyan pl-3 pr-3">
                    <h1 className="text-neutralWhite"><span className="text-neutralCyan font-bold text-xl">10+</span> Websites developed</h1>
                </div>
                <div className="pl-3">
                    <h1 className="text-neutralWhite"><span className="text-neutralCyan font-bold text-xl">1</span> Mobile App created</h1>
                </div>
            </div>
            <div className="flex gap-2 w-full">
                <button onClick={handleDownload} className="px-4 py-1 text-base md:text-lg bg-neutralCyan mt-5 rounded-xl text-neutralGray font-semibold hover:-translate-y-2 duration-200"><GrDocumentPdf className="inline mr-2 -mt-2"/>Download CV</button>
                <a href="https://www.linkedin.com/in/hyukidp/" className="px-4 py-1 text-base md:text-lg bg-neutralCyan mt-5 rounded-xl text-neutralGray font-semibold hover:-translate-y-2 duration-200"><AiOutlineLinkedin className="inline mr-2 -mt-2"/>LinkedIn Profile</a>
            </div>
        </div>

        <div className="w-full md:w-2/4 z-10 flex items-center justify-center">
          <img className="size-[420px] w-auto h-auto" src={hiroImg}/>
        </div>

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                        },
                        onHover: {
                            enable: true,
                        },
                        resize: true,
                    },
                },
                particles: {
                    color: {
                        value: "#FFFAFB",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        enable: true,
                        opacity: 0.3,
                        width: 2,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    </div>
  )
}

export default MV
