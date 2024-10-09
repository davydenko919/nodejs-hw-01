import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
        const arr = await readContacts();

        if (arr.length === 0) {
            console.error("Помилка: Масив контактів порожній.");
            return;
        }

        if (arr.length === 1) {
            console.log("Останній контакт видалено.");
            arr.pop();
        } else {
            console.log("Видалення останнього контакту.");
            arr.pop();
        }

        await writeContacts(arr);

    } catch (error) {
        console.error("Сталася помилка:", error);
    }
};

removeLastContact();
