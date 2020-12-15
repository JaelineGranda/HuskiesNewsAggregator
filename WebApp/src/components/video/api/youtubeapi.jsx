const KEY = 'AIzaSyDvwjDqeXib2FbxJO0kh8o2oK_1hWEiIbU'; // mention your youtube API key here

export const config = {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: 'AIzaSyDvwjDqeXib2FbxJO0kh8o2oK_1hWEiIbU',
    },
  };