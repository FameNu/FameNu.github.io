import { useResumeData } from '../services/useResumeData'

export default function Footer() {
  const { profile } = useResumeData()
  const github = profile.links.find((link) => link.label === 'GitHub')
  return (
    <footer
      id='contact'
      className='scroll-mt-16 bg-slate-950 py-12 text-center text-slate-400'
    >
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-6 text-2xl font-bold text-white'>Let’s Connect</h2>
        <div className='mb-8 flex justify-center gap-6'>
          <a
            aria-label='Email'
            href={`mailto:${profile.email}`}
            className='flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-xl transition-all hover:-translate-y-1 hover:bg-indigo-600'
          >
            <img
              src='/email.svg'
              alt='Email'
              aria-hidden='true'
              className='h-5 w-5 brightness-0 invert'
            />
          </a>
          {github && (
            <a
              aria-label='GitHub'
              href={github.url}
              target='_blank'
              rel='noreferrer'
              className='flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-1 hover:bg-indigo-600'
            >
              <img
                src='/github.svg'
                alt='GitHub'
                aria-hidden='true'
                className='h-5 w-5 brightness-0 invert'
              />
            </a>
          )}
        </div>
        <p className='text-sm'>
          ©2026 {profile.portfolioName}. All rights reserved.
        </p>
        <p className='mt-2 text-xs text-slate-600'>
          Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
