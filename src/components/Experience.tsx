const Experience = () => {
  return (
    <div className="w-full px-4 md:px-10">
        <h2 className="text-3xl text-neutralWhite font-semibold mt-10">Professional Experience</h2>
        <div className="flex flex-row flex-wrap w-full justify-center lg:justify-between">
          <div className="border-2 border-neutralCyan p-3 w-[100%] lg:w-[48%] mt-10 rounded-lg">
            <h3 className="text-lg text-neutralCyan font-semibold">2024-2025</h3>
            <h1 className="text-3xl font-semibold text-neutralWhite">System Engineer</h1>
            <h2 className="text-lg text-neutralWhite">Okun Japan</h2>
            <h2 className="text-lg text-neutralWhite">Contractual</h2>
            <p className="text-lg text-neutralWhite mt-5">Assisted in the development of NextAid project, an insurance company, implementing scalable and maintainable application architecture using Next.js and TypeScript.</p>
            <div>
              <h3 className="text-lg text-neutralWhite mt-5">Duties and Responsibilities:</h3>
              <p className="text-lg text-neutralWhite"><span className="text-neutralCyan">•</span> Implemented API integration on the frontend, connecting UI components with backend services to retrieve, display, and update data dynamically.</p>
              <p className="text-lg text-neutralWhite"><span className="text-neutralCyan">•</span> Created detailed technical documentations for system architecture, deployment processes, and codebase standards to support knowledge sharing and onboarding.</p>
              <p className="text-lg text-neutralWhite"><span className="text-neutralCyan">•</span> Collaborated with members using GitHub, effectively managing branches, code reviews, and merges to maintain codebase stability.</p>
            </div>
          </div>

          <div className="border-2 border-neutralCyan p-3 w-[100%] lg:w-[48%] mt-10 rounded-lg">
            <h3 className="text-lg text-neutralCyan font-semibold">2023-2024</h3>
            <h1 className="text-3xl font-semibold text-neutralWhite">Junior Web Developer</h1>
            <h2 className="text-lg text-neutralWhite">Right Communication Group</h2>
            <h2 className="text-lg text-neutralWhite">Full-time</h2>
            <p className="text-lg text-neutralWhite mt-5">I participated in the development and maintenance of WordPress websites by customizing themes, managing plugins, and ensuring regular updates. I troubleshoot issues, assist in content management, and collaborate with designers and managers to meet project requirements.</p>
            <div>
              <h3 className="text-lg text-neutralWhite mt-5">Duties and Responsibilities:</h3>
              <p className="text-lg text-neutralWhite"><span className="text-neutralCyan">•</span> Designing and Developing custom WordPress themes from scratch using HTML, CSS, JavaScript, and PHP.</p>
              <p className="text-lg text-neutralWhite"><span className="text-neutralCyan">•</span> Building websites that adapt seamlessly to different screen sizes and devices ensuring a consistent user experience across devices.</p>
              <p className="text-lg text-neutralWhite"><span className="text-neutralCyan">•</span> Integrating WordPress plugins to meet specific project requirements.</p>
            </div>
          </div>

          <div className="border-2 border-neutralCyan p-3 w-[100%] lg:w-[48%] mt-10 rounded-lg">
            <h3 className="text-lg text-neutralCyan font-semibold">2023</h3>
            <h1 className="text-3xl font-semibold text-neutralWhite">Technical Engineer</h1>
            <h2 className="text-lg text-neutralWhite">Dahua Technology</h2>
            <h2 className="text-lg text-neutralWhite">Internship</h2>
            <p className="text-lg text-neutralWhite mt-5">Responsible for providing support and expertise for the company's products. This involves troubleshooting and resolving issues, conducting product demonstrations and trainings, and assisting clients with system integration. I also work closely with the sales team to develop solutions tailored to customer needs.</p>
            <div>
              <h3 className="text-lg text-neutralWhite mt-5">Duties and Responsibilities:</h3>
              <p className="text-lg text-neutralWhite"><span className="text-neutralCyan">•</span> Assisted all technical engineers and channel sales to properly implement ideas to complete significant projects.</p>
              <p className="text-lg text-neutralWhite"><span className="text-neutralCyan">•</span> Conducted product demonstrations and presentations to potential and existing customers.</p>
              <p className="text-lg text-neutralWhite"><span className="text-neutralCyan">•</span> Participated in after-sales support such as maintenance and troubleshooting.</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Experience
