function book(title, author, pages, status, published) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.published = published;
}

// add some initial books
let arrBook = [];
addBook(arrBook, "To Kill a Mockingbird", "Harper Lee", 200, "yes,i already read it", 1953);
addBook(arrBook, "The Great Gatsby", "F. Scott Fitzgerald", 310, "yes,i already read it", 1985);
addBook(arrBook, "One Hundred Years of Solitude", "Gabriel García Márquez ", 432, "yes,i already read it", 1946);
addBook(arrBook, "A Passage to India", "E.M. Forster", 159, "yes,i already read it", 1963);


// add a new book
let newBook = document.querySelector('#newBook');
newBook.addEventListener('click', (e) => {
  e.preventDefault();
  let title = document.getElementById("bookTitle").value;
  let author = document.getElementById("bookAuthor").value;
  let pages = document.getElementById("bookPages").value;
  let status = document.getElementById("status").value;
  let published = document.getElementById("published").value;
  if (title === "" || author === "" || pages === "" || status === "") {
    alert("Please, fill all the fields");
  } else {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookPages").value = "";
    document.getElementById("status").value = "";
    document.getElementById("published").value = "";
    const book1 = new book(title, author, pages, status, published);
    displayBook(book1);
    addBook(arrBook, title, author, pages, status);
    console.log(arrBook.length);
  }

});
function addBook(array, title, author, pages, status, published) {
  const book1 = new book(title, author, pages, status, published);
  array.push(book1);
}

//display the books
arrBook.forEach(book => displayBook(book));

function displayBook(book) {
  //create the rows of the table to display books
  let myTable = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
  let row = myTable.insertRow();
  row.setAttribute("index", arrBook.indexOf(book));
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  let btnDel = document.createElement("button");
  btnDel.title="Delete this book ?"
  btnDel.className = "dltBtn";
  btnDel.setAttribute("index", arrBook.indexOf(book));
  btnDel.innerHTML = "Delete";
  let btnStatus = document.createElement("button");
  btnStatus.title ="Click to change the reading status"
  btnStatus.className = "statusBtn";
  btnStatus.setAttribute("index", arrBook.indexOf(book));
  btnStatus.innerHTML = book.status;
  cell1.innerHTML = book.title;
  cell2.innerHTML = book.author;
  cell3.innerHTML = book.pages;
  cell4.appendChild(btnStatus);
  cell5.innerHTML = book.published;
  cell6.appendChild(btnDel);
  // delete the book
  btnDel.addEventListener('click', function (e) {
    let attribute = e.target.getAttribute("index");
    let result = confirm("Are you sure you want to delete this book?");
    if (result) {
      arrBook.splice(attribute, 1);
      let i = e.target.parentNode.parentNode.rowIndex;
      document.getElementById("bookTable").deleteRow(i);
    }
  })
  //change the reading status of the book
  btnStatus.addEventListener('click', function (e) {
    if(e.target.innerHTML==="yes,i already read it"){
      e.target.innerHTML="no,i didnt read it yet";
      book.status="no,i didnt read it yet";
      console.log(book);
      //arrBook.forEach(book => console.log(book));
    }else {
      e.target.innerHTML="yes,i already read it";
      book.status="yes,i already read it";
      console.log(book);
      //arrBook.forEach(book => console.log(book));
    }
  })

}


  