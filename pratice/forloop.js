let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
for (let i = 1; i <= 31; i++) {
    date.innerHTML += `<option>${i}</option>`;
}
let months = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
for (let i = 0; i < months.length; i++) {
    month.innerHTML += `<option>${months[i]}</option>`;
}
for (let i = 1950; i <= 2030; i++) {
    year.innerHTML += `<option>${i}</option>`
}
// increase and decrease on clicking the buttons
var count = 0;

function updateDisplay() {
    document.getElementById("num").innerText = count;
    if (count <=20000) {
        document.getElementById("message").innerText = "NEKU ANDHUKU RA PELLI";
    }
    

    
 else{
        document.getElementById("message").innerText = "";
    }
}


function increase() {
    count = count + 10000;
    updateDisplay();
}

function decrease() {
    count = count - 10000;
    updateDisplay();
}
