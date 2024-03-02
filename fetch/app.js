const d = document.body.querySelector(".card");

function fetchData() {
//   fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=108&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
//   )
    fetch('api.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const searchText = document.getElementById("search").value.toLowerCase();
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText)
      );
      if (filteredData.length > 0) {
        d.innerHTML = `<p>${filteredData[0].name}</p>`;
        d.innerHTML += `<img src="${filteredData[0].image}" alt="${filteredData[0].name}"></img>`;
      } else {
        d.innerHTML = "No results found.";
      }
    })
    .catch((error) => {
      console.error("\n\t Error in fetching :  " + error);
    });
}
