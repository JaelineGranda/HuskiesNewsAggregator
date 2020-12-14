import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, GET_BOOKMARK_ITEMS } from './types';
import axios from "axios";
const apiurl = "http://localhost:8001/api/auth/";

function login(username, password) {
    return axios
      .post(apiurl + "signin", {
        username,
        password
      })
      .then(response => { // saves jwt to local storage
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

export const bookmarkItem = item => (dispatch, getState) => {
  const { bookmarkItems } = getState().bookmarks;
  localStorage.setItem('bookmarks', JSON.stringify([item, ...bookmarkItems]));
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
  dispatch({
    type: UNBOOKMARK_ITEM,
    payload: item
  });
};

export const getBookmarkItems = () => {
  let bookmarkItems = localStorage.getItem('bookmarks');
  if (bookmarkItems === null) {
    bookmarkItems = [];
  } else {
    bookmarkItems = JSON.parse(bookmarkItems);
  }
  return {
    type: GET_BOOKMARK_ITEMS,
    payload: bookmarkItems
  };
  
};
