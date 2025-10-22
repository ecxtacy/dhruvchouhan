import { Button } from "@/components/ui/button"
import Image from "next/image"
import Navbar from "./navbar"
import Skilltag from "./ui/skill-tag"
import data, { about_me, educationData, experience, experiences, project_detail, projectsData, social_links } from "@/content/data"
import Icon from "./ui/icon"
import ProjectCard from "./project-card"
import ExperienceCard from "./experience-card"
import EducationCard from "./education-card"

export function HomePage() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-4">
      <Navbar/>
      <main className="space-y-16 p-4">
        <section className="flex flex-col items-center space-y-4" id="hero">
          <Image
            alt="Your Photo"
            className="rounded-full my-6"
            height={600}
            src="/assets/me.jpeg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width={400}
          />
          <h1 className="text-3xl font-bold">Namaskar, I&rsquo;m a Programmer</h1>
        </section>
        <section className="2xl:container mx-auto">
            <div className="mx-auto">
              <div className="max-w-xs py-3 px-8 rounded-lg shadow-lg border flex bg-gray-100 mx-auto justify-around">
                <Icon iconName="github" link={social_links.github}/>
                <Icon iconName="twitter" link={social_links.twitter}/>
                <Icon iconName="gmail" link={social_links.gmail}/>
                <Icon iconName="instagram" link={social_links.instagram}/>
                <Icon iconName="linkedin" link={social_links.linkedin}/>
              </div>
            </div>
        </section>
        <section className="space-y-4" id="about">
          <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4" >About Me</h2>
          <p className="">{data.about_me}</p>
          </div>

          <div className="experiences my-20">
            <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
            {experiences.map((exp, i) => <ExperienceCard key={i} {...exp}/>)}
          </div>

          <div className="experiences my-20">
            <h2 className="text-2xl font-bold mb-8">Education</h2>
            {educationData.map((exp, i) => <EducationCard key={i} {...exp}/>)}
          </div>

          <h3 className="text-xl font-bold" >Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => <Skilltag key={index}>{skill}</Skilltag>)}
          </div>
        </section>

        <div className="experiences my-20">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          {projectsData.map((exp, i) => <ProjectCard key={i} {...exp}/>)}
        </div>

        <section className="" id="contact">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <a href="mailto:dc.dhruvchouhan@gmail.com" className="max-w-prose text-lg my-4 hover:underline">{"Email: " + data.contact.email}</a>
          <div className="">
              <a 
                  href="/resume.pdf" // Make sure your resume is in the `public` folder
                  download="DhruvChouhan_Resume.pdf"
                  className="inline-flex px-6 py-3 font-medium leading-tight text-slate-900 bg-teal-300 rounded-lg hover:bg-teal-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 dark:text-slate-900 dark:bg-teal-300 dark:hover:bg-teal-200 transition-colors duration-300"
                  aria-label="Download Résumé"
              >
                  Download Résumé
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 h-5 w-5">
                      <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                  </svg>
              </a>
          </div>
        </section>


      </main>
      <footer className="flex items-center justify-center py-4 border-t">
        <p className="text-sm text-gray-500 dark:text-slate-50">© 2024 Dhruv Chouhan</p>
      </footer>
    </div>
  )
}
