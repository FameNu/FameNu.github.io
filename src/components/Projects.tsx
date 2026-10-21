import type { KeyboardEvent } from 'react'
import { useResumeData } from '../services/useResumeData'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const { projects } = useResumeData()

  const handleContactClick = (projectUrl?: string) => {
    if (!projectUrl) {
      window.alert('A public link for this project isn’t available yet.')
      return
    }

    window.open(projectUrl, '_blank', 'noopener,noreferrer')
  }

  const handleProjectKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    projectUrl?: string,
  ) => {
    if (event.key === 'Enter' || (!projectUrl && event.key === ' ')) {
      event.preventDefault()
      handleContactClick(projectUrl)
    }
  }

  return (
    <section
      id='projects'
      className='scroll-mt-16 bg-slate-900 py-20 text-white'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Portfolio'
          title='Featured Projects'
          isBgDark
        />
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {projects.map((project) => {
            const projectUrl = project.url ?? project.repository

            return (
              <article
                key={project.name}
                role={projectUrl ? 'link' : 'button'}
                tabIndex={0}
                aria-label={
                  projectUrl
                    ? `Open ${project.name} in a new tab`
                    : `${project.name}. Public project link unavailable`
                }
                onClick={() => handleContactClick(projectUrl)}
                onKeyDown={(event) =>
                  handleProjectKeyDown(event, projectUrl)
                }
                className='group cursor-pointer overflow-hidden rounded-xl border border-slate-700 bg-slate-800 text-left transition-colors hover:border-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400'
              >
                <div className='relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 to-slate-700'>
                  <span
                    aria-hidden='true'
                    className='absolute text-7xl opacity-20 transition-transform duration-500 group-hover:scale-110'
                  >
                    ✦
                  </span>
                  <h3 className='relative z-10 px-4 text-center text-2xl font-bold text-white/90'>
                    {project.visualTitle ?? project.name}
                  </h3>
                </div>
                <div className='p-6'>
                  <h3 className='mb-2 text-xl font-bold text-white'>
                    {project.name}
                  </h3>
                  <p className='mb-6 text-sm leading-relaxed text-slate-400'>
                    {project.description}
                  </p>
                  <ul className='flex flex-wrap gap-2'>
                    {project.technologies.map((technology, technologyIndex) => (
                      <li
                        key={technology}
                        className={`rounded-md px-2.5 py-1 text-xs ${technologyIndex % 2 === 0 ? 'bg-indigo-900/40 text-indigo-300' : 'bg-slate-700 text-slate-300'}`}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                  <p className='mt-5 text-sm font-medium text-indigo-300'>
                    {projectUrl ? 'View project ↗' : 'Project link coming soon'}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
