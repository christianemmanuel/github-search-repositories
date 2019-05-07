import githubSearch from './githubAPI'

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
  // Get Search Term Value
  const searchTerm = searchInput.value;

  // Clear Search Search
  if(searchTerm == '') {
    showMessage('Please input repository name', 'alert-danger');
  }

  githubSearch.search(searchTerm)
    .then((results) => {
      console.log(results);

      let output = '<div class="row">';
        results.forEach((post) => {
          output += `
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${post.name}</h5>
                  <a href="${post.html_url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          `;
        })
      output += '</div>'
      
      document.getElementById('results').innerHTML = output;
    })

  e.preventDefault();
});


function showMessage(message, className) {
  const div = document.createElement('div');

  div.className = `alert ${className}`;

  div.appendChild(document.createTextNode(message));

  let searchContainer = document.getElementById('search-container');
  let search = document.getElementById('search');

  searchContainer.insertBefore(div, search);

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);

}