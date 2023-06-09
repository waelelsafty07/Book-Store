import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const url = {
  getBooks:
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SwGdZyYZlogZItWee3uZ/books',
  addBook:
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SwGdZyYZlogZItWee3uZ/books',
  deleteBook:
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SwGdZyYZlogZItWee3uZ/books',
};

const initialState = {
  books: [],
  isLoading: true,
};
// Get books from API
const getBooksURL = url.getBooks;
export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios(getBooksURL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithVAlue('something went wrong');
  }
});

// Add book to API
export const addBookURL = url.addBook;
export const postBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    const bookObj = {
      item_id: uuidv4(),
      title: book[0],
      author: book[1],
      category: 'Action',
    };
    try {
      const response = await axios.post(addBookURL, bookObj);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

// Delete book from API
export const deleteBookURL = url.deleteBook;
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.delete(`${deleteBookURL}/${bookId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const booksSlice = createSlice({
  name: 'booksArr',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBook.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
