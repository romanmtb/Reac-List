const index = (pageNumber, pageTotal) =>
    fetch(`https://content.guardianapis.com/search?order-by=newest&page=${pageNumber}&page-size=${pageTotal}&api-key=9f756fb3-eb7e-4c78-b09e-fe352ae2620d`)
        .then(res => res.json())


export default index