import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
import { writeFile } from "fs/promises";

const contactsPath = path.resolve("src/db", "contacts.json");

 export  async function listContacts () {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
}

export async function getContactById(id) {
   const contactsData = await listContacts();
    const contactId = contactsData.find(data => data.id = id);
    return contactId || null
}

export async function removeContact(id) {
    const contacts = await listContacts();
    const index = contacts.findIndex(set => set.id === id);
     if (index === -1) {
    return null;
    }
    const [result] =  contactsData.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contactsData));
    return result;

}

export async function addContact(name, email, phone ) {
     const contactsData = await listContacts();
    const newContact = {
    id: nanoid(),
        name,
        email,
        phone 
    }
   
    contactsData.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contactsData));
    return newContact;
}