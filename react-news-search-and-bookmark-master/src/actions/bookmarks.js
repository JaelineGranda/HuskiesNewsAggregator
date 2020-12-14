import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, GET_BOOKMARK_ITEMS } from './types';
import axios from 'axios';

export const bookmarkItem = item => (dispatch, getState) => {
  const { bookmarkItems } = getState().bookmarks;
  localStorage.setItem('bookmarks', JSON.stringify([item, ...bookmarkItems]));
  axios.put("http://localhost:8001/api/user/update", { "id": JSON.parse(localStorage.getItem("user")).id, "bookmarks": JSON.stringify([item, ...bookmarkItems]) })
  dispatch({
    type: BOOKMARK_ITEM,
    payload: item
  });
};

export const unBookmarkItem = item => (dispatch, getState) => {
  const { bookmarkItems } = getState().bookmarks;
  const newBookmarkItems = bookmarkItems.filter(
    bookmarkItem => bookmarkItem !== item
  );
  localStorage.setItem('bookmarks', JSON.stringify(newBookmarkItems));
  
  axios.put("http://localhost:8001/api/user/update", { "id": JSON.parse(localStorage.getItem("user")).id, "bookmarks": JSON.stringify(newBookmarkItems) })
  dispatch({
    type: UNBOOKMARK_ITEM,
    payload: item
  });
};

export const getBookmarkItems = () => {
  // localStorage.setItem("bookmarks",[])
  let bookmarkItems = localStorage.getItem('bookmarks');
  if (bookmarkItems === null) {
    bookmarkItems = [];
  } else {
    console.log(bookmarkItems)
    bookmarkItems = JSON.parse(bookmarkItems);
  }
  return {
    type: GET_BOOKMARK_ITEMS,
    payload: bookmarkItems
  };
};
