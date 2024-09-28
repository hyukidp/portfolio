import { TfiEmail } from "react-icons/tfi";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  const email = "h.yukidps@gmail.com";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}}`;

  return (
    <div className="w-full h-full max-w-6xl mx-auto mt-20" id="contact">
      <h1 className="text-5xl text-neutralWhite font-semibold mb-4">Contact<span className="text-neutralCyan">.</span></h1>
    
      <div className="flex flex-col flex-wrap justify-between">
        <div className="flex items-center w-[100%] mt-10">
          <a href={gmailLink}><TfiEmail className="size-12 mr-5 text-neutralCyan"/></a>
          <a href={gmailLink}
          className="text-neutralWhite font-semibold"><span className="block text-neutralWhite text-sm font-normal">Send me an email:</span>h.yukidps@gmail.com</a>
        </div>

        <div className="flex items-center w-[100%] mt-10">
          <FiPhone className="size-12 mr-5 text-neutralCyan"/>
          <h1 className="text-neutralWhite font-semibold"><span className="block text-neutralWhite text-sm font-normal">Give me a text or call:</span>+63 9567933589</h1>
        </div>

        <div className="flex items-center w-[100%] mt-10">
          <a href="https://www.linkedin.com/in/hyukidp/"><CiLinkedin className="size-14 mr-3 text-neutralCyan"/></a>
          <a href="https://www.linkedin.com/in/hyukidp/" className="text-neutralWhite font-semibold"><span className="block text-neutralWhite text-sm font-normal">Visit my LinkedIn account:</span>https://www.linkedin.com/in/hyukidp/</a>
        </div>

        <div className="flex items-center w-[100%] mt-10">
          <a href="https://www.facebook.com/h.yukidsuzuki/"><CiFacebook className="size-14 mr-3 text-neutralCyan"/></a>
          <a href="https://www.facebook.com/h.yukidsuzuki/" className="text-neutralWhite font-semibold"><span className="block text-neutralWhite text-sm font-normal">Message me through my account:</span>https://www.facebook.com/h.yukidsuzuki/</a>
        </div>
      </div>

    </div>
  )
}

export default Contact
