import { v4 as uuidv4 } from 'uuid';

// if local library data exists, populate array with books from data
// else insert placeholder books
let lib;
if (localStorage.getItem('myLibrary')) {
  lib = JSON.parse(localStorage.getItem('myLibrary'));
} else {
  lib = [
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      numPages: 486,
      read: true,
      id: uuidv4(),
    },
    {
      title: 'Chez Panisse Menu Cookbook',
      author: 'Alice Waters',
      numPages: 215,
      read: false,
      id: uuidv4(),
    },
  ];
}

export default lib;
