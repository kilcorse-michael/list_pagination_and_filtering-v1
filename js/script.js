/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


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
  //locally scoped variables
  const pageDiv = document.querySelector("div.page");
  const divPagination = document.createElement("div");
  const ulPagination = document.createElement("ul");
  const numberOfPages = Math.ceil((listStudentLi.length - 1) / studentsPerPage);

  //setting class names and appending elements to DOM
  divPagination.className = "pagination"
  pageDiv.appendChild(divPagination);
  divPagination.appendChild(ulPagination);

    //for loop creating buttons
      for(let i = 0; i < numberOfPages; i++){
          const pageLi = document.createElement("li");
          const pageA = document.createElement("a");

          //appending li and a children
          ulPagination.appendChild(pageLi);
          pageLi.appendChild(pageA);

          pageA.textContent = i + 1;

              //adding the event listener to each pageButtons
              pageA.addEventListener("click" , (event) => {
                  page = parseInt(pageA.textContent - 1);

                  showPage(listStudentLi, page);
                  
        });
      }
   }

showPage(listStudentLi, 0);

appendPageLinks();


// Remember to delete the comments that came with this file, and replace them with your own code comments.
