document.addEventListener('DOMContentLoaded', function(e) {

    //DOM Events / removing contents
    var bookListH2 = document.querySelector("#book-list h2");
    console.log(bookListH2);

    bookListH2.addEventListener("click", function(e) {
        console.log(e.target);
        console.log(e);
    });

    var btns = document.querySelectorAll("#book-list.delete");

    Array.from(btns).forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        });
    });

    const clickMe = document.querySelector("#page-banner a");
    clickMe.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("navigation to", e.target.textContent, "was prevented");
    });

    // //Event Bubbling
    const list = document.querySelector("#book-list ul");
    list.addEventListener("click", function(e) {
        if (e.target.className == "delete") {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });

    //forms
    console.log(document.forms);
    const addBook = document.querySelector("#add-book");
    console.log(addBook);

    //adding new book to the list
    const addForm = document.forms["add-book"];

    addForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        //console.log(value);

        //creating elements
        const li = document.createElement("li");
        const bookName = document.createElement("span");
        const deleteBtn = document.createElement("span");

        // add content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;

        //add classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        //append to DOM
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    // //hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e) {
        if (hideBox.checked) {
            list.style.display = "none";
        } else {
            list.style.display = "initial";
        }
    });

    //filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach(function(book) {
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });

    //tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panels');
    tabs.addEventListener('click', function(e) {
        if (e.target.tagName == "LI") {
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(function(panel) {
                if (panel == targetPanel) {
                    panel.classList.add('active');
                } {
                    panel.classList.remove('active');
                }
            });
        }
    });


});