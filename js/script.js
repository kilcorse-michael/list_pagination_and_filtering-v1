/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/




/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

//Global scope variables
const listStudentLi = document.getElementsByTagName("li");
const ulStudentList = document.querySelector(".student-list");
let page;
const studentsPerPage = 10;

// the function to show only ten students per page with parameters list and showPage
const showPage = (list, page) => {
  //setting the low and high values for each page
  const low = page * studentsPerPage;
  const high = (page + 1) * studentsPerPage;
  //looping through each index of the list collection
  for(let i = 0; i < list.length; i++){
    //conditional statement to determine whether or not the index is shown
    if(i >= low && i < high){
      list[i].style.display = '';
    }else{
      list[i].style.display = 'none';
    }
  }

}



/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const appendPageLinks = () => {
  const pageDiv = document.querySelector("div.page");

  const numberOfPages = Math.ceil((listStudentLi.length - 1) / studentsPerPage);

//for loop creating buttons
for(let i = 0; i < numberOfPages; i++){
  const pageButtons = document.createElement("button");

  pageButtons.className = ".pagination"
  pageButtons.textContent = i + 1;
  pageDiv.appendChild(pageButtons);
  pageButtons.addEventListener("click" , () => {
    page = pageButtons.textContent - 1;

      showPage(listStudentLi, page);
  });

}

}
showPage(listStudentLi, 0);
appendPageLinks();


// Remember to delete the comments that came with this file, and replace them with your own code comments.
