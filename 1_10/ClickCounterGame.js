function ClickCounterGame(){
    let count = 0;
    
//const gameContainer = document.getElementById("game-containar");

let button1 = document.createElement("button");
button1.textContent="＋１ボタン";

let button2 = document.createElement("button");
button2.textContent="+10ボタン";

let counter = document.createElement("p");
counter.textContent = count;

button1.addEventListener("click",function(){
    count++;
    counter.textContent = count;
})

button2.addEventListener("click",function(){
    count= count + 10;
    counter.textContent = count;
})

gameContainer.appendChild(button1);
gameContainer.appendChild(button2);
gameContainer.appendChild(counter);
}