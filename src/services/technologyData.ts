import technologiesJson from '../data/technologies.json'
import type { Technology } from '../models/Technology'

export const technologies = technologiesJson as Technology[]

export const technologiesByName = new Map(
  technologies.map((technology) => [technology.name, technology]),
)

export const colorWithOpacity = (color: string, opacity: number): string => {
  const match = /^#([\da-f]{3}|[\da-f]{6})$/i.exec(color)
  if (!match) return color

  const hex =
    match[1].length === 3
      ? match[1]
          .split('')
          .map((digit) => digit + digit)
          .join('')
      : match[1]
  const red = Number.parseInt(hex.slice(0, 2), 16)
  const green = Number.parseInt(hex.slice(2, 4), 16)
  const blue = Number.parseInt(hex.slice(4, 6), 16)
  const alpha = Math.max(0, Math.min(1, opacity))

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}
