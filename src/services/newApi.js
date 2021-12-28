import axios from 'axios';
// const NEWS_PER_PAGE = 5;
async function fetchNews(searchNews, elem) {
  const params = new URLSearchParams({
    _limit: elem, _news: searchNews,
  });
  const url = `https://jsonplaceholder.typicode.com/posts?${params}`;
  const responce = await axios.get(url); return responce.data;
};
export default fetchNews;