import { useResumeData } from '../services/useResumeData'

export default function Education() {
  const { education } = useResumeData()
  return (
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
            {item.award && (
              <span className='inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800'>
                {item.award}
              </span>
            )}
            <p className='mt-1 text-slate-500'>{item.institution}</p>
            <p className='mt-1 text-sm text-slate-400'>
              <i className='fas fa-graduation-cap' />
              {` `}
              {item.startDate ? `${item.startDate} - ` : ''}
              {item.endDate}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
