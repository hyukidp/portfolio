import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import staLuciaImg1 from "/src/assets/stalucia/stalucia1.png"
import staLuciaImg2 from "/src/assets/stalucia/stalucia2.png"
import staLuciaImg3 from "/src/assets/stalucia/stalucia3.png"
import staLuciaImg4 from "/src/assets/stalucia/stalucia4.png"
import staLuciaImg5 from "/src/assets/stalucia/stalucia5.png"
import mendoImg1 from "/src/assets/mendo/mendo1.png"
import mendoImg2 from "/src/assets/mendo/mendo2.png"
import mendoImg3 from "/src/assets/mendo/mendo3.png"
import mendoImg4 from "/src/assets/mendo/mendo4.png"
import mendoImg5 from "/src/assets/mendo/mendo5.png"
import emueImg1 from "/src/assets/emue/emue1.png"
import emueImg2 from "/src/assets/emue/emue2.png"
import emueImg3 from "/src/assets/emue/emue3.png"
import emueImg4 from "/src/assets/emue/emue4.png"
import emueImg5 from "/src/assets/emue/emue5.png"
import emueImg6 from "/src/assets/emue/emue6.png"
import tdImg1 from "/src/assets/tacdesk/td1.jpg"
import tdImg2 from "/src/assets/tacdesk/td2.jpg"
import tdImg3 from "/src/assets/tacdesk/td3.jpg"
import tdImg4 from "/src/assets/tacdesk/td4.jpg"
import tdImg5 from "/src/assets/tacdesk/td5.jpg"
import tdImg6 from "/src/assets/tacdesk/td6.jpg"
import dfaImg1 from "/src/assets/dfa/dfa1.jpg"
import dfaImg2 from "/src/assets/dfa/dfa2.jpg"
import ipayImg1 from "/src/assets/ipay/ipay1.jpg"
import ipayImg2 from "/src/assets/ipay/ipay2.jpg"
import ipayImg3 from "/src/assets/ipay/ipay3.jpg"
import ipayImg4 from "/src/assets/ipay/ipay4.jpg"
import ipayImg5 from "/src/assets/ipay/ipay5.jpg"



const Projects = () => {
    Fancybox.bind("[data-fancybox]", {
    });

  return (
    <div className="w-full h-full max-w-6xl mx-auto mt-20 z-40" id="projects">
      <h1 className="text-5xl text-neutralWhite font-semibold mb-4">Projects<span className="text-neutralCyan">.</span></h1>
        <div className="flex  justify-between flex-wrap mt-10">
            <div className="flex flex-col border-2 border-neutralCyan w-[100%] md:w-[48%] lg:w-[33%] rounded-md hover:-translate-y-4 mt-10">
                <a href={staLuciaImg1} data-fancybox="gallery">
                    <img className="size-[100%] max-h-[200px] rounded-t-md min-h-[200px]" src={staLuciaImg1} />
                </a>
                <a href={staLuciaImg2} data-fancybox="gallery">
                    <img className="size-20 hidden" src={staLuciaImg2} />
                </a>
                <a href={staLuciaImg3} data-fancybox="gallery">
                    <img className="size-20 hidden" src={staLuciaImg3} />
                </a>
                <a href={staLuciaImg4} data-fancybox="gallery">
                    <img className="size-20 hidden" src={staLuciaImg4} />
                </a>
                <a href={staLuciaImg5} data-fancybox="gallery">
                    <img className="size-20 hidden" src={staLuciaImg5} />
                </a>

                <div className="p-3">
                    <div className="flex justify-between">
                        <h1 className="text-neutralCyan text-lg font-semibold">Sta. Lucia Bus</h1>
                        <h2 className="text-neutralWhite text-lg font-semibold">2024</h2>
                    </div>
                    <p className="text-neutralWhite mt-2">This is a comprehensive web application designed to managem bus operations. Built with React.js and TypeScript, this project serves as a training ground for enhancing my skills in modern web development and API integration.</p>

                    <h2 className="text-neutralWhite mt-4">Technologies used: React.js, TypeScript, Tailwind, Postman</h2>
                </div>
            </div>

            <div className="flex flex-col border-2 border-neutralCyan w-[100%] md:w-[48%] lg:w-[33%] hover:-translate-y-4 mt-10 rounded-md">
                <a href={mendoImg1} data-fancybox="gallery">
                    <img className="size-[100%] max-h-[200px] rounded-t-md" src={mendoImg1} />
                </a>
                <a href={mendoImg2} data-fancybox="gallery">
                    <img className="size-20 hidden" src={mendoImg2} />
                </a>
                <a href={mendoImg3} data-fancybox="gallery">
                    <img className="size-20 hidden" src={mendoImg3} />
                </a>
                <a href={mendoImg4} data-fancybox="gallery">
                    <img className="size-20 hidden" src={mendoImg4} />
                </a>
                <a href={mendoImg5} data-fancybox="gallery">
                    <img className="size-20 hidden" src={mendoImg5} />
                </a>

                <div className="p-3">
                    <div className="flex justify-between">
                        <h1 className="text-neutralCyan text-lg font-semibold">Ichibankan</h1>
                        <h2 className="text-neutralWhite text-lg font-semibold">2024</h2>
                    </div>
                    <p className="text-neutralWhite mt-2">Collaborated with a japanese designer and developed a website for a food business in Japan. I was also given a chance to design some of images included in the menu.</p>

                    <h2 className="text-neutralWhite mt-4">Technologies used: Figma, WordPress, HTML, CSS, JavaScript</h2>
                </div>
            </div>

            <div className="flex flex-col border-2 border-neutralCyan w-[100%] md:w-[48%] lg:w-[33%] hover:-translate-y-4 mt-10 overflow-hidden rounded-md">
                <a href={emueImg1} data-fancybox="gallery">
                    <img className="w-[100%] h-auto max-h-[200px] object-cover rounded-t-md" src={emueImg1} />
                </a>
                <a href={emueImg2} data-fancybox="gallery">
                    <img className="size-20 hidden" src={emueImg2} />
                </a>
                <a href={emueImg3} data-fancybox="gallery">
                    <img className="size-20 hidden" src={emueImg3} />
                </a>
                <a href={emueImg4} data-fancybox="gallery">
                    <img className="size-20 hidden" src={emueImg4} />
                </a>
                <a href={emueImg6} data-fancybox="gallery">
                    <img className="size-20 hidden" src={emueImg6} />
                </a>
                <a href={emueImg5} data-fancybox="gallery">
                    <img className="size-20 hidden" src={emueImg5} />
                </a>

                <div className="p-3">
                    <div className="flex justify-between">
                        <h1 className="text-neutralCyan text-lg font-semibold">Emue</h1>
                        <h2 className="text-neutralWhite text-lg font-semibold">2024</h2>
                    </div>
                    <p className="text-neutralWhite mt-2">Developed a 12-pages website and integrated necessary WordPress plugins as per client's request.</p>

                    <h2 className="text-neutralWhite mt-4">Technologies used: WordPress, HTML, CSS, JavaScript, PHP</h2>
                </div>
            </div>

            <div className="flex flex-col border-2 border-neutralCyan w-[100%] md:w-[48%] lg:w-[33%] overflow-hidden hover:-translate-y-4 mt-10 rounded-md">
                <a href={tdImg1} data-fancybox="gallery">
                    <img className="w-[100%] h-auto max-h-[200px] object-cover rounded-t-md" src={tdImg1} />
                </a>
                <a href={tdImg2} data-fancybox="gallery">
                    <img className="size-20 hidden" src={tdImg2} />
                </a>
                <a href={tdImg3} data-fancybox="gallery">
                    <img className="size-20 hidden" src={tdImg3} />
                </a>
                <a href={tdImg4} data-fancybox="gallery">
                    <img className="size-20 hidden" src={tdImg4} />
                </a>
                <a href={tdImg5} data-fancybox="gallery">
                    <img className="size-20 hidden" src={tdImg5} />
                </a>
                <a href={tdImg6} data-fancybox="gallery">
                    <img className="size-20 hidden" src={tdImg6} />
                </a>

                <div className="p-3">
                    <div className="flex justify-between">
                        <h1 className="text-neutralCyan text-lg font-semibold">TacDesk</h1>
                        <h2 className="text-neutralWhite text-lg font-semibold">2022-2023</h2>
                    </div>
                    <p className="text-neutralWhite mt-2">Developed a web and android application for our client in our thesis project which simplifies the incident reporting of the subdivision.</p>

                    <h2 className="text-neutralWhite mt-4">Technologies used: XAML, C#, Firebase, HTML, CSS, Bootstrap</h2>
                </div>
            </div>

            <div className="flex flex-col border-2 border-neutralCyan w-[100%] md:w-[48%] lg:w-[33%] overflow-hidden hover:-translate-y-4 mt-10 rounded-md">
                <a href={dfaImg1} data-fancybox="gallery">
                    <img className="w-[100%] h-auto max-h-[200px] object-cover rounded-t-md" src={dfaImg1} />
                </a>
                <a href={dfaImg2} data-fancybox="gallery">
                    <img className="size-20 hidden" src={dfaImg2} />
                </a>

                <div className="p-3">
                    <div className="flex justify-between">
                        <h1 className="text-neutralCyan text-lg font-semibold">DFA: Redesigned</h1>
                        <h2 className="text-neutralWhite text-lg font-semibold">2021</h2>
                    </div>
                    <p className="text-neutralWhite mt-2">Redesigned and developed the existing Department of Foreign Affairs (DFA) website that can be seen on the internet.</p>

                    <h2 className="text-neutralWhite mt-4">Technologies used: Adobe Photoshop, HTML, CSS</h2>
                </div>
            </div>

            <div className="flex flex-col border-2 border-neutralCyan w-[100%] md:w-[48%] lg:w-[33%] hover:-translate-y-4 mt-10 rounded-md">
                <a href={ipayImg1} data-fancybox="gallery">
                    <img className="size-[100%] max-h-[200px] min-h-[200px] rounded-t-md" src={ipayImg1} />
                </a>
                <a href={ipayImg2} data-fancybox="gallery">
                    <img className="size-20 hidden" src={ipayImg2} />
                </a>
                <a href={ipayImg3} data-fancybox="gallery">
                    <img className="size-20 hidden" src={ipayImg3} />
                </a>
                <a href={ipayImg4} data-fancybox="gallery">
                    <img className="size-20 hidden" src={ipayImg4} />
                </a>
                <a href={ipayImg5} data-fancybox="gallery">
                    <img className="size-20 hidden" src={ipayImg5} />
                </a>

                <div className="p-3">
                    <div className="flex justify-between">
                        <h1 className="text-neutralCyan text-lg font-semibold">iPay</h1>
                        <h2 className="text-neutralWhite text-lg font-semibold">2020</h2>
                    </div>
                    <p className="text-neutralWhite mt-2">My first ever project doing designing and web developing back when I was in college. This is a prototype of a payment system.</p>

                    <h2 className="text-neutralWhite mt-4">Technologies used: Adobe Photoshop, HTML, CSS, PHP</h2>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Projects
