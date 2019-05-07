export default {
  search: function(searchTerm) {
     return fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
      .then((responds) => responds.json())
      .then((dataPram) => dataPram.items)
      .catch((err) => console.log(err));
  }
}