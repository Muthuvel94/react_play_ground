import axios from axios

const KEY = "AIzaSyDviWIF__QPNF7XxXumgviFBsNsG_G-b8Q";

export default axios.create ({
 baseURL: 'https://www.googleapis.com/youtube/v3',
 params: {
  part: 'snippet',
  maxResults: 5,
  type: 'video',
  key: KEY,
  q: 'surfboards'
 }
});