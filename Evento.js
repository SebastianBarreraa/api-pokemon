
const botonapi = document.getElementById("botonapi");
const data1 = document.getElementById("data1");
const poke = document.getElementById("poke");

const Api = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data1.innerText = JSON.stringify(data);
      poke.innerText = `poker: ${JSON.stringify(poke)}`
    })
    .catch(e => console.error(new Error(e)));
}

botonapi.addEventListener("click", Api);
