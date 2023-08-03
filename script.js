let params = new URLSearchParams(window.location.search);
let liftsValue = parseInt(params.get("lifts"));
let floorsValue = parseInt(params.get("floors"));
console.log({floorsValue,lifts})

let form = document.getElementById('form');
let render = document.getElementById('render');

let floorsContainer = document.getElementById("floors");
let liftContainer = document.getElementById("lifts")

for(i=floorsValue; i>0;i--){
  let floordiv = document.createElement("div");
  floordiv.setAttribute("class","floor");
  // let floors = document.createElement("hr");
  floors.setAttribute("class","flooring")

  let buttonContainer = document.createElement("div")
  buttonContainer.setAttribute("class","buttons")
  let Upbuttons = document.createElement("button");
  Upbuttons.innerText="Up";
  let Downbuttons = document.createElement("button");
  Downbuttons.innerText = 'Down'
  
  let para = document.createElement("p");
  buttonContainer.append(Upbuttons,Downbuttons);
  floordiv.append(buttonContainer,para);
  render.appendChild(floordiv);
}

// for (i =liftsValue; i>0;i-- ){
//   let liftdiv = document.createElement(div);
//   liftdiv.setAttribute("class","lift");

// }


// for(i=floorsValue; i>0;i--){
//   floors.innerHTML += `<div class="build">
//   <p class="para">Floors${i}</p>
//   <button class="Upbutton">Up</button>
//   <br>
//   <button class="Downbutton">Down</button>
//   <hr class="line">
// </div>
// `



// }



