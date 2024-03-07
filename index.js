import { program } from "commander";
import * as contactService from "./src/contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone  }) {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const getContacts = await contactService.getContactById(id);
      console.log(getContacts);
      break;

    case "add":
      const addContact = await contactService.getContactById(name, email, phone);
      console.log(addContact);
      break;

    case "remove":
      const removeContact = await contactService.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);