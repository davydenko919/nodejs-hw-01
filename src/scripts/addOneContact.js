import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const arr = await readContacts();
    const newContact = createFakeContact();
    arr.push(newContact);
    writeContacts(arr);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();