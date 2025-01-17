let name = "john";
let surname = "chow";

console.log(name);
console.log(surname);
console.log((3 + 2) - 76 * (1 + 1));

let a = 10;
console.log(a + 9);

const month = document.querySelector(".month-select")
const monthTitle = document.querySelector(".month-title")

function monthName() {
    if (month.value === "january") {
        monthTitle.textContent = "January";
    } 
}

month.addEventListener("change", monthName)