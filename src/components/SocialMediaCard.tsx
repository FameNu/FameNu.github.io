import { type ContactProps } from "../models/Contact"

function SocialMediaCard({data}: ContactProps): JSX.Element {
  const { name, title, linkURL } = data

  const pathImg = `/${name}.svg`
  return (
    <a
      href={linkURL}
      target='_blank'
      className='grid grid-cols-6 grid-rows-1 items-center gap-4 min-w-40 max-w-full max-h-16 w-full h-16 px-6 py-3 rounded-md card-hover'
    >
      <img src={pathImg} alt={name} className='col-span-2 max-h-full w-full' />
      <h2 className='col-span-3 w-full text-center font-bold'>{title}</h2>
    </a>
  )
}

export default SocialMediaCard