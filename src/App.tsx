import ContactCard from "./components/ContactCard"
import SocialMediaCard from "./components/SocialMediaCard"
import { type Contact } from "./models/Contact"
import { getContacts, getContactSocialMedia } from "./services/contactService"

function App() {
  const contacts: Contact[] = getContacts()
  const SocialMedias: Contact[] = getContactSocialMedia()

  return (
    <div className='rounded-2xl max-w-xl w-full max-md:p-4 md:w-8/12 flex flex-col items-center justify-center gap-4'>
      <h1 className='w-full mb-8 text-center h-1/6 font-extrabold text-xl md:text-3xl'>
        Phuwamet Panjachalermrat
      </h1>
      {SocialMedias.map((socialMedia) => {
        return <SocialMediaCard data={socialMedia} />
      })}
      {contacts.map((contact) => {
        return <ContactCard data={contact} />
      })}
    </div>
  )
}

export default App
