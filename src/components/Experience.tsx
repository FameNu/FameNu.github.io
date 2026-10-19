import { useResumeData } from '../services/useResumeData'
import SectionHeading from './SectionHeading'

export default function Experience() {
  const { experience } = useResumeData()
  return (
    <section id='experience' className='scroll-mt-16 bg-white py-20'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <SectionHeading eyebrow='Career Path' title='Work Experience' />
        <div className='relative ml-4 mt-12 border-l-2 border-slate-200 md:ml-0'>
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.organization}`}
              className='relative mb-10 ml-8'
            >
              <span
                aria-hidden='true'
                className='absolute top-5 -left-[49px] flex h-8 w-8 items-center justify-center rounded-full border-4 border-indigo-600 bg-white text-xs font-bold text-indigo-600'
              >
                ✦
              </span>
              <div className='rounded-xl border border-slate-100 bg-slate-50 p-6 shadow-sm'>
                <div className='mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center'>
                  <h3 className='text-xl font-bold text-slate-800'>
                    {item.role}
                  </h3>
                  <span className='w-max rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700'>
                    {item.startDate} – {item.endDate}
                  </span>
                </div>
                <h4 className='mb-4 font-medium text-slate-600'>
                  {item.organization}
                </h4>
                <p className='leading-7 text-slate-600'>{item.description}</p>
                <ul className='mt-3 list-inside list-disc space-y-1 text-slate-600'>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
