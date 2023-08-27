let params = new URLSearchParams(window.location.search);
let liftsValue = parseInt(params.get("lifts"));
let floorsValue = parseInt(params.get("floors"));

// function loadpage(floorsValue, liftsValue){

//   const section1 = document.createElement("SECTION");
//   section1.setAttribute("id","layoutDiv");
//   const body2 = document.querySelector("body");

//   const bbdiv = document.createElement("div");
//   body2.appendChild(bbdiv);

//   const backButton = document.createElement("BUTTON");
//   backButton.textContent = "Reset";
//   backButton.setAttribute("class","backbut");
//   // backButton.setAttribute("class","upAndDown")
//   bbdiv.appendChild(backButton)
//   bbdiv.setAttribute("class","backbutton")

//   body2.appendChild(section1);
// }

if (floorsValue === "" || liftsValue === "") {
  alert("Give some value");
} else if (floorsValue <= 0 || liftsValue <= 0) {
  alert(
    "Floor number or Lift number should be positive and also greater than zero"
  );
} else if (floorsValue < liftsValue) {
  alert("Number of lifts cannot be more than floors");
}

let form = document.getElementById("form");
let render = document.getElementById("render");

let floorsContainer = document.getElementById("floors");
let liftContainer = document.getElementById("lifts");

for (i = floorsValue; i > 0; i--) {
  let floordiv = document.createElement("div");
  floordiv.setAttribute("class", "floor");
  // let floors = document.createElement("hr");
  floordiv.setAttribute("data-floorNo", i);

  let buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "buttons");
  let Upbuttons = document.createElement("button");
  Upbuttons.setAttribute("class", "btn");
  Upbuttons.setAttribute("data-buttons", i);
  Upbuttons.innerText = "Up";

  let Downbuttons = document.createElement("button");
  Downbuttons.setAttribute("class", "btn");
  Downbuttons.setAttribute("data-buttons", i);
  Downbuttons.innerText = "Down";

  let para = document.createElement("p");
  para.setAttribute("class", "para");

  // let textPara = document.createTextNode(`Floor ${i}`)
  // let floorNum = para.appendChild(textPara);
  // buttonContainer.append(floorNum,Upbuttons,Downbuttons);
  para.textContent = `Floor ${i}`;

  buttonContainer.append(para, Upbuttons, Downbuttons);
  floordiv.append(buttonContainer);
  render.appendChild(floordiv);
}

const but = document.querySelectorAll(".btn");

for (i = liftsValue; i > 0; i--) {
  let lift = document.createElement("div");
  lift.setAttribute("class", "lift");
  // lift.setAttribute("data-LiftNo", j)
  lift.setAttribute("data-liftfloor", i);
  lift.setAttribute("data-state", "free");
  lift.setAttribute("data-currentFloor", 1);
  let Lgate = document.createElement("div");
  Lgate.setAttribute("class", "l-gate");
  let Rgate = document.createElement("div");
  Rgate.setAttribute("class", "r-gate");
  lift.append(Lgate, Rgate);
  const liftArray = Array.from(render.childNodes);

  liftArray.shift();
  console.log("liftArray", liftArray.length);
  const groundFloor = liftArray[liftArray.length - 1];
  // console.log(groundFloor.childNodes);
  groundFloor.append(lift);
}

but.forEach((butt) => {
  butt.addEventListener("click", () => {
    const floorNumber = butt.getAttribute("data-buttons");
    console.log("Button is on floor:", floorNumber);
    const lifts = document.querySelectorAll(".lift");
    let liftArray = Array.from(lifts);
    console.log(liftArray);
    console.log(lifts, "lift");
    //we have to dynamically provide the index which is closest to the destination and in a free state
    const liftTobeMoved = liftArray.find(
      (lift) => lift.dataset.state === "free"
    );
    moveLift(floorNumber, liftTobeMoved);
  });
});

function moveLift(floorNumber, lift) {
  lift.setAttribute("data-state", "busy");
  lift.style = `transform: translateY(-${
    100 * (floorNumber - 1) + 2 * floorNumber
  }px); transition: ${2 * floorNumber}s ease-in;`;
  setTimeout(function () {
    doorsMovement(lift, floorNumber);
  }, floorNumber * 2000);
}

function doorsMovement(lift, floorNumber) {
  doorsOpen(lift);
  setTimeout(function () {
    doorsClose(lift);
  }, floorNumber * 2000);

  // leftGate.style=`transform: translateX(-${0}px); transition: ${2.5}s ease-in;`
}

function doorsOpen(lift) {
  console.log("lift", lift);

  const leftGate = lift.childNodes[0];
  leftGate.style = `transform: translateX(-${30}px); transition: ${2.5}s ease-in`;

  const rightGate = lift.childNodes[1];
  rightGate.style = `transform: translateX(${30}px); transition: ${2.5}s ease-in`;
}

function doorsClose(lift) {
  const leftGate = lift.childNodes[0];
  leftGate.style = `transform: translateX(-${0}px); transition: ${2.5}s ease-in`;

  const rightGate = lift.childNodes[1];
  rightGate.style = `transform: translateX(${0}px); transition: ${2.5}s ease-in`;
  lift.setAttribute("data-state", "free");
}

// function checkingLiftStatus(liftArray){

//   for(let i = 0; i < liftArray.length; i++)
//   {
//     let status = liftArray[i].getAttribute("data-liftAvailability");
//     if(status == "Available"){
//       return i;
//     }
//   }

// }
// function checkingAllBusy(liftArray){

//   for(let i = 0; i < liftArray.length; i++)
//   {
//     let status = liftArray[i].getAttribute("data-liftAvailability");
//     if(status == "Available"){
//       return false;
//     }
//   }
//   return true;
// }

// function closestLift(buttonFloor,Array){
//   let cL;
//   let minDistance = Infinity;
//   for(let i = 0; i< liftArray.length; i++)
//   {
//     diffInFloors = 0;
//     if(liftArray[i].getAttribute("data-liftAvailability") == "Available"){
//       let floorOccupiedByLift = liftArray[i].getAttribute("data-liftfloor");

//       let diffInFloors = Math.abs(buttonFloor-floorOccupiedByLift);
//     if(minDistance > diffInFloors){
//       cL = i;
//       minDistance = diffInFloors;
//     }
//     }
//   }
//   return cL;
// };

// // for(i=floorsValue; i>0;i--){
// //   floors.innerHTML += `<div class="build">
// //   <p class="para">Floors${i}</p>
// //   <button class="Upbutton">Up</button>
// //   <br>
// //   <button class="Downbutton">Down</button>
// //   <hr class="line">
// // </div>
// // `

// // }
