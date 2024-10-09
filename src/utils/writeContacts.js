import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, undefined, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('Дані успішно записані у файл.');
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
};