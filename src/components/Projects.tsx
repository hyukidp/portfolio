import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Projects = () => {
    Fancybox.bind("[data-fancybox]", {
    });

  return (
    <div className="w-full h-full max-w-6xl mx-auto mt-20 z-40" id="projects">
      <h1 className="text-5xl text-neutralWhite font-semibold mb-4">Projects<span className="text-neutralCyan">.</span></h1>
        <div className="flex  justify-between flex-wrap mt-10">
            <div className="flex flex-col border-2 border-neutralCyan w-[100%] md:w-[48%] lg:w-[33%] rounded-md hover:-translate-y-4 mt-10">
                <a href="/src/assets/stalucia/stalucia1.png" data-fancybox="gallery">
                    <img className="size-[100%] max-h-[200px] rounded-t-md min-h-[200px]" src="/src/assets/stalucia/stalucia1.png" />
                </a>
                <a href="/src/assets/stalucia/stalucia2.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/stalucia/stalucia2.png" />
                </a>
                <a href="/src/assets/stalucia/stalucia3.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/stalucia/stalucia3.png" />
                </a>
                <a href="/src/assets/stalucia/stalucia4.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/stalucia/stalucia4.png" />
                </a>
                <a href="/src/assets/stalucia/stalucia5.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/stalucia/stalucia5.png" />
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
                <a href="/src/assets/mendo/mendo1.png" data-fancybox="gallery">
                    <img className="size-[100%] max-h-[200px] rounded-t-md" src="/src/assets/mendo/mendo1.png" />
                </a>
                <a href="/src/assets/mendo/mendo2.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/mendo/mendo2.png" />
                </a>
                <a href="/src/assets/mendo/mendo3.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/mendo/mendo3.png" />
                </a>
                <a href="/src/assets/mendo/mendo4.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/mendo/mendo4.png" />
                </a>
                <a href="/src/assets/mendo/mendo5.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/mendo/mendo5.png" />
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
                <a href="/src/assets/emue/emue1.png" data-fancybox="gallery">
                    <img className="w-[100%] h-auto max-h-[200px] object-cover rounded-t-md" src="/src/assets/emue/emue1.png" />
                </a>
                <a href="/src/assets/emue/emue2.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/emue/emue2.png" />
                </a>
                <a href="/src/assets/emue/emue3.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/emue/emue3.png" />
                </a>
                <a href="/src/assets/emue/emue4.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/emue/emue4.png" />
                </a>
                <a href="/src/assets/emue/emue6.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/emue/emue6.png" />
                </a>
                <a href="/src/assets/emue/emue5.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/emue/emue5.png" />
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
                <a href="/src/assets/tacdesk/td1.jpg" data-fancybox="gallery">
                    <img className="w-[100%] h-auto max-h-[200px] object-cover rounded-t-md" src="/src/assets/tacdesk/td1.jpg" />
                </a>
                <a href="/src/assets/tacdesk/td2.jpg" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/tacdesk/td2.jpg" />
                </a>
                <a href="/src/assets/tacdesk/td3.jpg" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/tacdesk/td3.jpg" />
                </a>
                <a href="/src/assets/tacdesk/td4.jpg" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/tacdesk/td4.jpg" />
                </a>
                <a href="/src/assets/tacdesk/td5.jpg" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/tacdesk/td5.jpg" />
                </a>
                <a href="/src/assets/tacdesk/td6.jpg" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/tacdesk/td6.jpg" />
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
                <a href="/src/assets/dfa/dfa1.png" data-fancybox="gallery">
                    <img className="w-[100%] h-auto max-h-[200px] object-cover rounded-t-md" src="/src/assets/dfa/dfa1.png" />
                </a>
                <a href="/src/assets/dfa/dfa2.png" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/dfa/dfa2.png" />
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
                <a href="/src/assets/ipay/ipay1.jpg" data-fancybox="gallery">
                    <img className="size-[100%] max-h-[200px] min-h-[200px] rounded-t-md" src="/src/assets/ipay/ipay1.jpg" />
                </a>
                <a href="/src/assets/ipay/ipay2.jpg" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/ipay/ipay2.jpg" />
                </a>
                <a href="/src/assets/ipay/ipay3.jpg" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/ipay/ipay3.jpg" />
                </a>
                <a href="/src/assets/ipay/ipay4.jpg" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/ipay/ipay4.jpg" />
                </a>
                <a href="/src/assets/ipay/ipay5.jpg" data-fancybox="gallery">
                    <img className="size-20 hidden" src="/src/assets/ipay/ipay5.jpg" />
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
