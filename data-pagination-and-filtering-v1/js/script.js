/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



// showPage function creates and insert the elements needed to display a page of nine students using the array of student objects in data.js


function showPage(list, page) {
   const itemsperPage = 9
   const startIndex = (page * itemsperPage) - itemsperPage;     
   const endIndex = page * itemsperPage; 
   let studentList = document.querySelector('.student-list'); 
   studentList.innerHTML = ''; 
      
    for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
      const studentItem = document.createElement('li');
        studentList.appendChild(studentItem);
        studentItem.innerHTML =  `
                  <li class="student-item cf">
                    <div class="student-details">
                      <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                      <h3>${list[i].name.first} ${list[i].name.last}</h3>
                      <span class="email">${list[i].email}</span>
                    </div>
                    <div class="joined-details">
                     <span class="date">Joined ${list[i].registered.date}</span>
                    </div>
                  </li> 
                          `;
          }
     } 
}
showPage(data, 1);


//addPagination function creates and insert the elements needed for the pagination buttons

function addPagination(list) {
  const numberOfpages = Math.ceil(list.length / 9);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  for (let i=1; i<=numberOfpages; i++) {
    const li = document.createElement('li');
    linkList.appendChild(li);
    li.innerHTML = `<li>
                       <button type="button">${[i]}</button>
                     </li>
                   `;   

//first button on the list will be set to 'active' class when you open the page

const firstButton = document.querySelector('button');                   
firstButton.className = 'active';

//if a button is clicked, it will become 'active'
//any other button will have no active class
//call showPage function in order to show the correct studentItem(s) when new page is clicked 

linkList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
      const inactiveButton = document.querySelector('.active');
      inactiveButton.className = '';
      e.target.className = 'active';
      showPage(list, e.target.textContent);
        }
     })                     
  }
}
addPagination(data);