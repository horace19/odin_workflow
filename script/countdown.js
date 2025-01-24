/*new p for each iteration output to div*/

/* 
const output = .output
let i=10
when i>=0; 
    const para = create p
    output.append para
    switch (i);
        case 10: para.textContent= "Countdown 10" break
        case 0: para.textContent=Blast off! break
        default: para.textContent=i 
    i--

const para = create p
*/

const output = document.querySelector(".output");
let count = 10;
while (count >= 0) {
    const para = document.createElement("p");
    output.appendChild(para);
    switch (count) {
        case 10: para.textContent = "Countdown 10"; break;
        case 0: para.textContent = "Blast off!"; break; 
        default: para. textContent = count; break;
    }
    count--;
}