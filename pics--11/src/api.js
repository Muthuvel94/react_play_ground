import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID S6svt9QewryOwt0VXK_QiYwepodJwjLvQN66Gn-fozE',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
