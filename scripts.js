console.log(' this is working ')

const car = {
    brand: 'Tesla',
    notAwesome: true,
    overRated: true,
    saveGas: true,
    favorites: ['tech', 'battery', 'interior']
}


// grab my p1 id
// change the text inside via JS
const p1 = document.getElementById('p1')



p1.innerHTML = 'Hey Class!'

p1.innerHTML = '<h2> second heading </h2>'

const changeColor = () => {
    p1.style.color = 'blue'
}

const myFunction = () =>{
    alert('TEST')
}

const getSomeData = () => {
  fetch('https://codice-boca.web.app/menu')
  .then(response => response.json())
  .then(cleanData => console.log(cleanData))
}