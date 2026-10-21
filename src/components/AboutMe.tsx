import { useResumeData } from '../services/useResumeData'
import Education from './Education'

export default function AboutMe() {
  const { profile } = useResumeData()
  return (
    <section
      id='about'
      className='scroll-mt-16 border-y border-slate-100 bg-white py-20'
    >
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8'>
        <div>
          <p className='mb-2 text-sm font-bold uppercase tracking-wider text-indigo-600'>
            About Me
          </p>
          <h2 className='mb-6 text-3xl font-bold text-slate-900'>
            Passions
          </h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className='mb-4 leading-relaxed text-slate-600'>
              {paragraph}
            </p>
          ))}
        </div>
        <Education />
      </div>
    </section>
  )
}
