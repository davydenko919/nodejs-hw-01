import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
    let arr = await readContacts();
    for (let i=0; i < number; i++) {
        arr.push(createFakeContact());
    };

    writeContacts(arr);
};



generateContacts(5);
