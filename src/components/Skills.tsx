import { useResumeData } from '../services/useResumeData'
import SectionHeading from './SectionHeading'

const categoryStyles = [
  'bg-blue-50 text-blue-600',
  'bg-green-50 text-green-600',
  'bg-purple-50 text-purple-600',
  'bg-orange-50 text-orange-600',
]

export default function Skills() {
  const { skills } = useResumeData()

  return (
    <section id='skills' className='scroll-mt-16 bg-slate-50 py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <SectionHeading eyebrow='Expertise' title='Technical Skills' />
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {skills.map((group, index) => (
            <article
              key={group.category}
              className='rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md'
            >
              <div
                aria-hidden='true'
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-2xl ${categoryStyles[index % categoryStyles.length]}`}
              >
                {group.icon && <i className={`fas ${group.icon}`} />}
              </div>
              <h3 className='mb-4 text-lg font-bold text-slate-800'>
                {group.category}
              </h3>
              <ul className='space-y-2 ml-4 text-slate-600 list-disc'>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
