import type { Technology } from '../models/Technology'

interface TechnologyIconProps {
  technology: Technology
  className?: string
}

export default function TechnologyIcon({
  technology,
  className = 'h-8 w-8 text-xl',
}: TechnologyIconProps) {
  if (technology.icon.type === 'image') {
    return (
      <img
        src={technology.icon.value}
        alt={technology.name}
        aria-hidden='true'
        className={`${className} w-6 mx-1 shrink-0 object-contain`}
        loading='lazy'
      />
    )
  }

  return (
    <i
      aria-hidden='true'
      className={`${technology.icon.value} ${className} flex shrink-0 items-center justify-center`}
      style={{ color: technology.iconColor }}
    />
  )
}
