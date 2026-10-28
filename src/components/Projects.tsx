import { useResumeData } from '../services/useResumeData'
import SectionHeading from './SectionHeading'
import {
  colorWithOpacity,
  technologiesByName,
} from '../services/technologyData'

export default function Projects() {
  const { projects } = useResumeData()

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
            const unavailableMessage =
              'A public link for this project isn’t available yet.'

            return (
              <article
                key={project.name}
                className='group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800 text-left transition-colors hover:border-indigo-500'
              >
                {projectUrl ? (
                  <a
                    href={projectUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Open ${project.name} in a new tab`}
                    className='absolute inset-0 z-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400'
                  >
                    <span className='sr-only'>Open project</span>
                  </a>
                ) : (
                  <button
                    type='button'
                    aria-label={`${project.name}: public link unavailable`}
                    onClick={() => window.alert(unavailableMessage)}
                    className='absolute inset-0 z-0 cursor-pointer border-0 bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400'
                  />
                )}
                <div className='pointer-events-none relative z-10'>
                  <div className='relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 to-slate-700'>
                    {project.imghref ? (
                      <img
                        src={project.imghref}
                        alt={project.imgAlt || project.name}
                        className='absolute inset-0 h-full w-full object-cover'
                      />
                    ) : (
                      <span
                        aria-hidden='true'
                        className='absolute text-7xl opacity-20 transition-transform duration-500 group-hover:scale-110'
                      >
                        ✦
                      </span>
                    )}
                    <h3
                      className={`relative z-10 px-4 text-center text-2xl font-bold text-white/90 ${project.imghref ? 'bg-white/10 rounded-full' : ''}`}
                    >
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
                      {project.technologies.map((technologyName) => {
                        const technology =
                          technologiesByName.get(technologyName)

                        return (
                          <li
                            key={technologyName}
                            className='flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium'
                            style={
                              technology
                                ? {
                                    color: technology.textColor,
                                    backgroundColor: colorWithOpacity(
                                      technology.backgroundColor,
                                      technology.backgroundOpacity,
                                    ),
                                  }
                                : undefined
                            }
                          >
                            {technologyName}
                          </li>
                        )
                      })}
                    </ul>
                    <div className='pointer-events-auto relative z-20 mt-5 flex flex-wrap gap-3'>
                      {project.url && (
                        <a
                          href={project.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300'
                        >
                          Live Demo{' '}
                          <span aria-hidden='true' className='ml-1'>
                            ↗
                          </span>
                        </a>
                      )}
                      {project.repository && (
                        <a
                          href={project.repository}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center rounded-lg border border-slate-500 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-300 hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300'
                        >
                          View Repository{' '}
                          <span aria-hidden='true' className='ml-1'>
                            ↗
                          </span>
                        </a>
                      )}
                      {!projectUrl && (
                        <span className='text-sm font-medium text-indigo-300'>
                          Project link coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
