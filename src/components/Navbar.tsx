import { useState } from 'react'
import { useResumeData } from '../services/useResumeData'

const sections = [
  {
    label: 'About',
    id: 'about',
  },
  {
    label: 'Skills',
    id: 'skills',
  },
  {
    label: 'Experience',
    id: 'experience',
  },
  {
    label: 'Projects',
    id: 'projects',
  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { profile } = useResumeData()

  const navigateTo = (id: string) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md'>
      <nav
        aria-label='Main navigation'
        className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8'
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='text-xl font-bold tracking-tight text-indigo-600'
        >
          {profile.portfolioName ?? 'FameNu'}
        </button>
        <div className='hidden items-center gap-8 md:flex'>
          {sections.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => navigateTo(id)}
              className='text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600'
            >
              {label}
            </button>
          ))}
        </div>
        <button
          type='button'
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls='mobile-navigation'
          onClick={() => setMenuOpen((open) => !open)}
          className='rounded-md p-2 text-2xl leading-none text-slate-600 hover:text-indigo-600 md:hidden'
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>
      {menuOpen && (
        <div
          id='mobile-navigation'
          className='border-t border-slate-200 bg-white md:hidden'
        >
          <nav
            aria-label='Mobile navigation'
            className='mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6'
          >
            {sections.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => navigateTo(id)}
                className='rounded-md px-3 py-3 text-left font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
