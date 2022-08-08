// intro 
function theExplosion() {
    alert("BOOM!");
  }
  
  const button = document.createElement("button");
  button.textContent = "WARNING";
  button.addEventListener("click", () => {
    // this will delay the event by 5 seconds
    setTimeout(theExplosion, 5000);
  });
  document.body.appendChild(button);

  // Exercice 1 - p,r,o,u,t. 

  
let word = "p r o u t";
let i = 0;

let div = document.createElement("div");
document.querySelector('body').appendChild(div);

function displayProut() {
  if (i < word.length) {
    div.textContent = div.textContent + word[i];
    i++;
    console.log(div.textContent);
  } else {
    clearInterval;
  }
}
setInterval(displayProut, 1000);