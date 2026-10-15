export interface Contact {
  name: string
  title: string
  linkURL: string
}

export interface ContactProps {
  data: Contact
  [keys: string]: Contact
}
