import { type ContactProps } from "../models/Contact"

function ContactCard({data}: ContactProps): JSX.Element {
  const { name, title, linkURL } = data
  const copyToClipboard = (): void => {
    const data: string = title === 'Email' ? linkURL : linkURL.split('-').join('')
    navigator.clipboard
      .writeText(data)
      .then(() => {
        alert(`${title} copied to clipboard`)
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  }

  const pathImg = `/${name}.svg`

  return (
    <div
      key={name}
      className='grid grid-cols-6 grid-rows-1 items-center gap-4 min-w-40 max-w-full w-full h-16 max-h-16 px-6 py-3 rounded-md card-hover'
      onClick={() => copyToClipboard()}
    >
      <img src={pathImg} alt={name} className='col-span-2 max-h-full w-full' />
      <p className='col-span-3 w-full text-center font-bold'>{linkURL}</p>
    </div>
  )
}

export default ContactCard