interface SectionHeadingProps {
  eyebrow: string
  title: string
  isBgDark?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  isBgDark = false,
}: SectionHeadingProps) {
  const eyebrowColorClassName = isBgDark ? 'text-indigo-400' : 'text-indigo-600'

  const titleColorClassName = isBgDark ? 'text-slate-100' : 'text-slate-900'

  return (
    <div className='mb-12 text-center'>
      <p
        className={`mb-2 text-sm font-bold uppercase tracking-wider ${eyebrowColorClassName}`}
      >
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-bold ${titleColorClassName}`}>{title}</h2>
    </div>
  )
}
