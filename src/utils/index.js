import PRIVATE_API_KEY from '../privateApiKey'

export const getNews = (pageNumber, pageTotal) =>
  fetch(`https://content.guardianapis.com/search?order-by=newest&page=${pageNumber}&page-size=${pageTotal}&api-key=${PRIVATE_API_KEY}`)
    .then(res => res.json())


export const apiGetNewsBody = id =>
  fetch(`https://content.guardianapis.com/${id}?show-fields=bodyText&api-key=${PRIVATE_API_KEY}`)
    .then(res => res.json())
    .then(data => ({body: data.response.content.fields.bodyText.substr(0,200)}))

