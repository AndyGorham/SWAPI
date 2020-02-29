let fetchButton = document.getElementById("fetchButton");

// Fetch data from SWAPI
fetchButton.addEventListener("click", () =>{
  randomPlanet();
})

// Output planet information to DOM
function nameOutput({name,population}){
  try{
    // Remove existing output if present
    let currentOutput = document.getElementById("planet");
    if (currentOutput !== null) {currentOutput.parentElement.removeChild(currentOutput)}
    
    // Define new output
    let newOutput = `
      <p ID="planet">
        ${name} is a planet with ${population} inhabitants.
      </p>`
    // Output new output
    fetchButton.insertAdjacentHTML('afterend',newOutput);
    fetchButton.innerText = "Refresh Data";
  }
  catch(ex){
    console.log(ex);
  }
}

// Iterate through random planets
function randomPlanet(){
    let randomNumber = Math.floor(Math.random() * 10);
    fetch(`https://swapi.co/api/planets/${randomNumber}/`)
     .then(data => data.json())
     .then(d => nameOutput(d))
     .catch(err => console.log(err))
}
