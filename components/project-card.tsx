export type Project = {
    title: string;
    description: string;
    image?: string; // Optional image for the project
    githubLink?: string; // Optional GitHub link
    liveLink?: string; // Optional link to a live demo
    skills: string[];
};

const ProjectCard: React.FC<Project> = ({ title, description, image, githubLink, liveLink, skills }) => (
    <div className="mb-12 group relative transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:-inset-y-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:drop-shadow-lg dark:lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"></div>
        
        <div className="z-10 relative"> {/* Added relative and z-10 for content to be above hover background */}
            {image && (
                <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
            )}
            <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
                <a 
                    href={liveLink || githubLink} 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-teal-500 focus-visible:text-teal-500 dark:text-slate-200 dark:hover:text-teal-300 dark:focus-visible:text-teal-300 group/link text-base"
                >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="pr-1">{title}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                </a>
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
            
            <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                {skills.map((skill, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-100/80 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                            {skill}
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex mt-4 space-x-4">
                {githubLink && (
                    <a 
                        href={githubLink} 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        className="text-slate-500 hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-300 transition-colors duration-300"
                        aria-label="GitHub Repository"
                    >
                        {/* You'd typically use an SVG icon for GitHub here */}
                        GitHub
                    </a>
                )}
                {liveLink && (
                    <a 
                        href={liveLink} 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        className="text-slate-500 hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-300 transition-colors duration-300"
                        aria-label="Live Demo"
                    >
                        {/* You'd typically use an SVG icon for a live demo here */}
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    </div>
);

export default ProjectCard;