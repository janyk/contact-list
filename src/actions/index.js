export const SET_CONTACTS = 'SET_CONTACTS';
export const PICK_CONTACT = 'PICK_CONTACT';

export function setContacts(contacts) {
  return {
    type: SET_CONTACTS,
    contacts
  }
}

export function pickContact(contact) {
  return {
    type: PICK_CONTACT,
    contact
  }
}
