/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*BIG GOAL: Display a directory of student cards on a page
         9 students on the page at one time
         Add buttons that navigate to the next 9 students

1st Goal: Display a page of 9 students
         Use a function 
         name this function showPage. 
         two parameters: list, and page.
           list parameter will represent the array of student data 
           page parameter will be the page number that we want to display.

*/
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

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
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  const numberOfpages = Math.ceil(list.length / 9);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  for (let i=1; i<=numberOfpages.length; i++) {
    const button = document.createElement('button');
    linkList.appendChild(button);
      button.innerHTML = `<li>
                            <button type="button">${numberOfpages[i]}</button>
                          </li>
                         `;      
                             

  }
}

addPagination(data);
