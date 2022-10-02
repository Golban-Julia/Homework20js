import '../styles/index.scss';
import 'bootstrap';

import { doneTask, deleteTask } from "./functions";

const form = document.forms.worksheet;
const taskInput = document.querySelector('#task_input');
const { add } = document.forms.worksheet.elements;

const ulNode = document.getElementById("list");
const errorMessage = document.querySelector(".error-message");
const button = document.querySelector("button");


form.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();

  const taskText = taskInput.value;

  if (taskText.trim().length === 0) {
    taskInput.classList.add("error");
    errorMessage.innerHTML = "Please, enter valid task";
    return;
  };

  taskInput.value = "";
  taskInput.focus();

  const li = document.createElement('li');
  ulNode.appendChild(li);
  li.innerHTML = taskText;
  li.classList.add("task");

  const btn = document.createElement('button');
  li.appendChild(btn);
  btn.innerHTML = "Delete";
  btn.classList.add("remove-button");
  
  const checkbox = document.createElement("input");
  li.appendChild(checkbox);
  checkbox.setAttribute("type", "checkbox");
  li.insertAdjacentElement('afterbegin', checkbox);
  checkbox.classList.add("check");
};


ulNode.addEventListener("click", deleteTask);
ulNode.addEventListener('change', doneTask);


taskInput.oninput = () => {
  const isErrorField = taskInput.classList.contains("error");

  if (isErrorField) {
    taskInput.classList.remove("error");
    errorMessage.innerHTML = "";
  } 
};



