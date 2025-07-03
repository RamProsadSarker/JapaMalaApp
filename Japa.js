let count = 0;
let round=0;
function increase() {
count++;
updateCounter();
}

function decrease() {
count--;
updateCounter();
}
function reset() {
count = 0;
round = 0;
updateCounter();
}
function updateCounter() {
document.getElementById("counter").innerText = count;
document.getElementById("Round").innerText = round;
if(count==108)
{
        round++;
        count=0;
}
}