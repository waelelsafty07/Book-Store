import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bookItem: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      percent: 60,
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      percent: 60,
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      percent: 60,
    },
  ],
};
const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookTitle = action.payload[0];
      const bookAuthor = action.payload[1];
      const newBook = {
        id: uuidv4(),
        title: bookTitle,
        author: bookAuthor,
        category: 'Action',
        percent: 40,
        chapter: '13',
      };
      state.bookItem.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        bookItem: state.bookItem.filter((book) => book.id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
