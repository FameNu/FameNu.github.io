import { useResumeData } from '../services/useResumeData'

export default function Education() {
  const { education, profile } = useResumeData()
  return (
    <section
      id='about'
      className='scroll-mt-16 border-y border-slate-100 bg-white py-20'
    >
      <div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8'>
        <div>
          <p className='mb-2 text-sm font-bold uppercase tracking-wider text-indigo-600'>
            About Me
          </p>
          <h2 className='mb-6 text-3xl font-bold text-slate-900'>
            Topic About Me
          </h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className='mb-4 leading-relaxed text-slate-600'>
              {paragraph}
            </p>
          ))}
        </div>
        <div className='relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-8'>
          <span
            aria-hidden='true'
            className='absolute right-5 top-2 text-indigo-600 opacity-10'
          >
            <i className='fas fa-graduation-cap text-7xl text-primary'></i>
          </span>
          <h3 className='relative z-10 mb-6 text-xl font-bold text-slate-900'>
            Education
          </h3>
          <div className='relative z-10 border-l-2 border-indigo-300 pl-4'>
            {education.map((item) => (
              <article key={item.institution} className='relative pb-2'>
                <span
                  aria-hidden='true'
                  className='absolute -left-[23px] top-1.5 h-3 w-3 rounded-full bg-indigo-600'
                />
                <h4 className='text-lg font-semibold text-slate-800'>
                  {item.degree} in {item.field}
                </h4>
                <p className='mt-1 text-slate-500'>{item.institution}</p>
                {item.award && (
                  <span className='mt-3 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800'>
                    {item.award}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
