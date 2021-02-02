import axios from 'axios';

const KEY = 'AIzaSyDIwZ2OewEiZslAzpHF7wccEqbDyBla1H4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});