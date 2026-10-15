import contacts from '../data/contact.json';
import socialMedia from '../data/socialMedia.json';
import { type Contact } from '../models/Contact';

function getContacts(): Contact[] {
  return contacts;
}

function getContactSocialMedia(): Contact[] {
  return socialMedia;
}

export { getContacts, getContactSocialMedia };