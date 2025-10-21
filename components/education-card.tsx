import ExperienceCard from "./experience-card";

// Type for a single education entry
export type Education = {
  institution: string;
  institutionLink: string;
  degree: string;
  date: string;
  description: string[];
};

const EducationCard: React.FC<Education> = ({ institution, institutionLink, degree, date, description }) => (
    <div className="mb-12 group relative grid pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:drop-shadow-lg dark:lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"></div>
      <header className="z-10 mb-2 mt-1 font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2" aria-label={date}>
        {date}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
          <div>
            <a
              href={institutionLink}
              className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-teal-500 focus-visible:text-teal-500 dark:text-slate-200 dark:hover:text-teal-300 dark:focus-visible:text-teal-300 group/link text-base"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${degree} at ${institution}`}
            >
              <span className="text-md absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {degree} · <span className="inline-block">{institution}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </h3>
        <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
          {description.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  export default EducationCard;