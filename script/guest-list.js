/* 
// loop starts here

// refused.textContent += ;
// admitted.textContent += ;
*/

/*

for each person in #of people
    if person == Phil or person == Lola
        refused.textContent =+ person ", "
    else
        admitted.textContent =+ person ", "




*/

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');


admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
    if (person === "Phil" || person === "Lola") {
        refused.textContent += `${person}, `;
    }
    else {
        admitted.textContent += `${person}, `;
    }
}

let addFullStop = (string) => {
    return string.slice(0, -2) + ".";
}

admitted.textContent = addFullStop(admitted.textContent);
refused.textContent = addFullStop(refused.textContent);

// refused.textContent = refused.textContent.slice(0, -2);
// admitted.textContent += ".";
//always forgot about explicitly returning stuff