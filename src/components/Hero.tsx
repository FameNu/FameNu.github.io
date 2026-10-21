import { useResumeData } from '../services/useResumeData'
import socialMedia from '../data/socialMedia.json'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const { profile } = useResumeData()
  const githubUrl = socialMedia.find((social) => social.name === 'github')?.linkURL

  return (
    <section
      id='hero'
      className='mx-auto flex max-w-6xl scroll-mt-20 flex-col items-center px-5 pb-20 pt-32 text-center md:pb-28 md:pt-40'
    >
      <p className='mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700'>
        <span aria-hidden='true'>👋</span> Hi there, I’m {profile.nickname}
      </p>
      <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl'>
        {profile.name}
      </h1>
      <p className='mb-10 max-w-2xl text-lg font-light leading-8 text-slate-600 sm:text-xl'>
        {profile.intro}
      </p>
      <div className='flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row'>
        <button
          onClick={() => scrollTo('contact')}
          className='rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white shadow-lg shadow-indigo-200 transition-colors hover:bg-indigo-700'
        >
          Contact Me
        </button>
        {
          githubUrl && (
            <a
              href={githubUrl}
              target='_blank'
              rel='noreferrer'
              className='flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50'
            >
              <img
                src='/github.svg'
                alt=''
                aria-hidden='true'
                className='h-5 w-5'
              />
              GitHub <span aria-hidden='true'>↗</span>
            </a>
          )
        }
      </div>
    </section>
  )
}
