// *********************  Task # 01  ************************

// function createAdder(num) {
//     return function adder(value) {
//       return num + value;
//     }
//   }

//   const addFive = createAdder(5);
//   console.log(addFive(3)); // Output: 8
//   console.log(addFive(10)); // Output: 15



// *********************  Task # 02  ************************

// function searchArray(arr, val) {
//     // Base case: if the array is empty, return false
//     if (arr.length === 0) {
//       return false;
//     }else if (arr[0] === val) {
//       return true;
//     }else{
//     return searchArray(arr.slice(1), val);
//   }
//   }
  
//   const myArray = [1, 2, 3, 4, 5];
//   console.log(searchArray(myArray, 3))
//   console.log(searchArray(myArray, 6));
  
// *********************  Task # 03  ************************

// function addParagraph(text) {
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = text;
//     const content = document.getElementById('content');
//     content.appendChild(newParagraph);
//   }

//   addParagraph('New paragraph.');

// *********************  Task # 04  ************************

// function addListItem(text) {
//     const list = document.getElementById('myList');
//     const newListItem = document.createElement('li');
//     newListItem.textContent = text;
//     list.appendChild(newListItem);
//   }

//   addListItem('Item 3');

  
// *********************  Task # 05  ************************

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   const myDiv = document.getElementById('myDiv');
//   changeBackgroundColor(myDiv, 'red');

    
// *********************  Task # 06  ************************

// function saveToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }
//   const myObject = {name: 'Umar', age: 19};
//   saveToLocalStorage('myObject', myObject);
//   const storedObject = JSON.parse(localStorage.getItem('myObject'));
//   console.log(storedObject); // {name: 'John', age: 20}

      
// *********************  Task # 07  ************************

// function getFromLocalStorage(key) {
//     const storedValue = localStorage.getItem(key);
//     if (storedValue) {
//       return JSON.parse(storedValue);
//     }
//     return null;
//   }
//   const myObject = getFromLocalStorage('myObject');
//   console.log(myObject); 

    
// *********************  Task # 08  ************************

// function saveToLocalStorage(obj) {
    // Save each property to localStorage
    // for (let prop in obj) {
    //   localStorage.setItem(prop, obj[prop]);
    // }
  
    // Retrieve the object from localStorage and return it as a new object
//     let newObj = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       let prop = localStorage.key(i);
//       newObj[prop] = localStorage.getItem(prop);
//     }
//     return newObj;
//   }
//   let myObj = {
//     name: "Umar",
//     age: 19,
//     occupation: "Web developer"
//   };
  
//   let newObj = saveToLocalStorage(myObj);
//   console.log(newObj);