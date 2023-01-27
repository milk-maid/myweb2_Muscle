const section = document.querySelector('section');
const button =  document.querySelector('button');

section.className = 'red-bg';

button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible'
    // }
    // section.classList.toggle('visible');
    section.classList.toggle('invisible');
})
const div = document.querySelector('div');
// div.insertAdjacentHTML('beforeend', '<p>Something went Wrong!</p>');




// const listItemElement = document.querySelectorAll('li');
// const h1 = document.getElementById('main-title');
// const li = document.querySelector('li:last-of-type');
// const body = document.body;

// for (const items of listItemElement) {
//     console.dir(items);
// }

// h1.textContent = 'My Angel';
// h1.style.color = "Beige";
// h1.style.background = "Crimson";  //"Chartreuse";
// li.textContent = li.textContent + ' (Changed)';