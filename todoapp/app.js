import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  onSnapshot,
  query,
  deleteDoc,
  orderBy,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const firebaseConfig = {
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();

let todoList = document.getElementById("todoList");
let arr = [];
window.onload = () => {
  const q = query(collection(db, "todos"), orderBy("timestamp", "asc"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    todoList.innerHTML = "";
    querySnapshot.forEach((doc) => {
      arr.push(doc.id);
      todoList.innerHTML += `<li><span>${
        doc.data().message
      }</span> <button onclick="deleteTodo('${doc.id}')">Delete Todo</button>
      <button onclick="editTodo('${doc.id}','${
        doc.data().message
      }')">Edit Todo</button></li>`;
    });
  });
};

let inputVal = document.getElementById("inputVal");
const addTodo = async () => {
  await addDoc(collection(db, "todos"), {
    message: inputVal.value,
    timestamp: new Date(),
  });
  inputVal.value = "";
};

const deleteTodo = async (uid) => {
  await deleteDoc(doc(db, "todos", uid));
};

const editTodo = async (uid, message) => {
  let newVal = prompt("enter updated todo", message);

  await updateDoc(doc(db, "todos", uid), {
    message: newVal,
  });
};

const delAllTodo = () => {
    arr.forEach(async (val) => {
      await deleteDoc(doc(db, "todos", val));
    });
};

window.addTodo = addTodo;
window.deleteTodo = deleteTodo;
window.editTodo = editTodo;
window.delAllTodo = delAllTodo;
