function errorInput(){
const month = document.getElementById("month").value;
const day = document.getElementById("day").value;
if(month<1 || month>12){
    alert("適切な値ではありません")
    return
}
console.log("Month:",month,"Day:",day);
}

const monthSelect = document.getElementById("month2");
monthSelectlist();
function monthSelectlist(){
for (let i=1;1<12;i++){
let option = document.createElement('option');
option.value = i;
option.textContent = i + "月";
monthSelect.appendChild(option);

}
}