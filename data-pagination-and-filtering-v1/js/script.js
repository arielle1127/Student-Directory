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



function showPage(list, page) {
   const itemsperPage = 9
   const startIndex = (page * itemsperPage) - itemsperPage;     
   const endIndex = page * itemsperPage; 
   let studentList = document.querySelector('.student-list'); 
   studentList.innerHTML = ''; 
      for (let i = 0; i < list.length; i++) 
         
        if (list[i] < endIndex && list[i] >= startIndex) {   
          let  studentItem = `<li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
            <h3>Ethel Dean</h3>
            <span class="email">ethel.dean@example.com</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined 12-15-2005</span>
          </div>
        </li>`;
         
  



///Create new elements needed to display the student information
//Use bracket notation to access the student object at that index
// and dot notation to access the specific properties of that student object. 
       

// insert the above elements to the studentList variable
//insertAdjacentHTML method and beforeend option works well for this.


       
         
                                             
   }
 console.log(page);
 console.log(list);
 console.log(studentList);
 console.log(studentItem);
}

showPage(data, 1);






/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions