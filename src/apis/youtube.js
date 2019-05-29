import axios from 'axios';

const KEY = 'AIzaSyCCRClbkT6Hyjzr5klAnGHJZ2lZkIrAoIQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});


