import { useState } from 'react'
import socialMediaJson from '../data/socialMedia.json'
import { useResumeData } from '../services/useResumeData'
import type { SocialMediaLink } from '../models/SocialMedia'

const socialMedia: SocialMediaLink[] = socialMediaJson

const socialHoverColors: Record<string, string> = {
  github: 'hover:bg-slate-600',
  linkedin: 'hover:bg-[#0A66C2]',
  facebook: 'hover:bg-[#1877F2]',
  instagram:
    'hover:bg-gradient-to-tr hover:from-amber-400 hover:via-pink-500 hover:to-purple-600',
}

export default function Footer() {
  const { profile } = useResumeData()
  const [copyStatus, setCopyStatus] = useState('')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('Copied to clipboard')
    } catch {
      setCopyStatus('Could not copy email. Please copy it manually.')
    }
  }

  return (
    <footer
      id='contact'
      className='scroll-mt-16 bg-slate-950 py-12 text-slate-400'
    >
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-6 md:grid-cols-2 md:items-center lg:px-8'>
        <div>
          <h2 className='text-2xl font-bold text-white'>{profile.portfolioName}</h2>
          <p className='mt-2 text-sm'>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className='mt-6 flex flex-wrap items-center gap-3'>
            <button
              type='button'
              onClick={copyEmail}
              title='Copy email address'
              className='rounded font-medium text-slate-200 underline decoration-slate-600 underline-offset-4 transition hover:text-white hover:decoration-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400'
            >
              {profile.email}
            </button>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Send an email to ${profile.email}`}
              title='Open email app'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 transition hover:-translate-y-1 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
            >
              <img src='/email.svg' alt='' aria-hidden='true' className='h-4 w-4 brightness-0 invert' />
            </a>
            <span aria-live='polite' className='min-h-5 text-sm text-indigo-300'>
              {copyStatus}
            </span>
          </div>
          <p className='mt-6 text-xs text-slate-500'>Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>

        <div className='md:justify-self-end'>
          <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300'>Find me online</h3>
          <nav aria-label='Social media'>
            <ul className='flex flex-wrap gap-3'>
              {socialMedia.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.linkURL}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={social.title}
                    title={social.title}
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 transition duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${socialHoverColors[social.name] ?? 'hover:bg-indigo-600'}`}
                  >
                    <img
                      src={`/${social.name}.svg`}
                      alt=''
                      aria-hidden='true'
                      className='h-5 w-5 brightness-0 invert'
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
