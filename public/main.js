async function pokemon() {
  const response = await fetch('http://localhost:3000/pokemon')
  return await response.json()
}

const pokedex = []
pokemon()
  .then(data =>
    data.forEach(pokemon => {
      pokedex.push(pokemon)
    })
  )
  .catch(err => console.log(err))

const $searchBar = document.querySelector('.searchbar')

const $anchor = document.querySelector('.anchor')

const renderResults = string => {
  if (string === '') {
    $anchor.innerHTML = ''
  } else {
    $anchor.innerHTML = ''
    pokedex.forEach(pokemon => {
      const name = pokemon.name.toLowerCase()
      if (string === name.substr(0, string.length)) {
        const $results = document.createElement('div')
        $results.classList.add('white')
        $results.textContent = pokemon.name
        $anchor.appendChild($results)
      }
    })
  }
}
let accumulator = ''

$searchBar.addEventListener('keydown', event => {
  if (event.key === 'Backspace') {
    accumulator = accumulator.substr(0, accumulator.length - 1)
  } else {
    accumulator += event.key
  }
  renderResults(accumulator)
})

/*
setInterval(() => {
  renderResults()
}, 1000)
*/
