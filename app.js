//Book Constructor

  function Book(title, author ,isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
  }

//UI Constuctor

  function UI() {
      
    UI.prototype.addBookToList = function(book){

       const list = document.getElementById('book-list');
       //Create tr Element
        const row = document.createElement('tr');

        row.innerHTML= `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="delete">X</a></td>
        `;

       list.appendChild(row);
    }

     UI.prototype.showAlert= function (message,className) {
       
        //div
        const div = document.createElement('div');

        div.className= `alert ${className}`;

        //Add text
         div.appendChild(document.createTextNode(message));

         //Get parent
          const container =document.querySelector('.container');

          const form = document.querySelector('#book-form');

          //Insert Alert
          container.insertBefore(div,form);

          //Disappear after 3 sec
           setTimeout( function(){
             document.querySelector('.alert').remove();
           }, 3000);

     }

    UI.prototype.clearFields = function() {
      
      document.getElementById('title').value='';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';

    }
  }

 //Event Listeners
  document.getElementById('book-form').addEventListener('submit', function(e) {
     
    //Get Form Values
       const title = document.getElementById('title').value,
             author = document.getElementById('author').value,
             isbn = document.getElementById('isbn').value
     
     //Book Object
      const book = new Book(title,author,isbn);

       //console.log(book);

       //UI Object
       const ui =new UI();

       if(title === '' || author==='' || isbn==='' ){

          ui.showAlert('Please fill in the fields', 'error');

       } else{

         //Add book to list
         ui.addBookToList(book);

         //Show success

          ui.showAlert('Book Added!', 'success');

         //Clear Fields
         ui.clearFields();
       }

      e.preventDefault();
  });