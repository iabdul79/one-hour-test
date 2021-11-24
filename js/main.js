const mock = [
  {
    title: 'abcd',
    rating: 5,
    release: 1999,
  },
  {
    title: 'abcd',
    rating: 9,
    release: 1998,
  },
  {
    title: 'xyz',
    rating: 9,
    release: 2006,
  },
] 


  const search = () => {
    setTimeout(() => {
      const searchText = document.getElementById('search').value;
      const filteredList = searchText ? mock.filter(movie => movie.title.includes(searchText)) : mock;
      createList(filteredList);
    }, 300);
  }

  const createList = (list) => {
    document.getElementById('movie-table').innerHTML = tableHeader();
    list.forEach(movie => {
      document.getElementById('movie-table').innerHTML+= createListElement(movie);
    });
  }

  const sort = () => {
    const sortBy = document.getElementById('sort').value;
    if (!sortBy) {
      return;
    }
    const list = mock.slice();
    let comp = (a,b) => b[sortBy]-a[sortBy]; 
    if (sortBy === 'title') {
      comp = (a,b) => b[sortBy].toUpperCase()-a[sortBy].toUpperCase();
    }
    list.sort(comp);
    createList(list);
  }

  const clear = () => {
    document.getElementById('search').value = '';
  }

  const tableHeader = () => `<tr>
              <th style="width:70%">Movie</th>
              <th>Rating</th>
              <th>Year</th>
            </tr>`;

  const createListElement = (movie) => {
    return `<tr>
            <td>${movie.title}</td>
            <td>${movie.rating}</td>
            <td>${movie.release}</td>
          </tr>`;
  }



  createList(mock);
  document.getElementById('clear').addEventListener('click', () => {
    clear();
    search();
  });