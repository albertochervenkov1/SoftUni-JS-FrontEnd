// TODO: 
 function attachEvents() { 
     BASE_URL = 'http://localhost:3030/jsonstore/tasks/'; 
     const form = document.querySelector('#form-section > form'); 
     const taskTitleInput = document.getElementById('title'); 
     const taskDescriptionInput = document.getElementById('description'); 
     const loadBtn = document.getElementById('load-board-btn'); 
     const addBtn = document.getElementById('create-task-btn'); 
     const todoList = document.querySelector('#todo-section > .task-list'); 
     const inProgressList = document.querySelector('#in-progress-section > .task-list'); 
     const codeReviewList = document.querySelector('#code-review-section > .task-list'); 
     const doneList = document.querySelector('#done-section > .task-list'); 
  
     loadBtn.addEventListener('click', loadAllTasks); 
     addBtn.addEventListener('click', addTask); 
  
  
     async function addTask(event){ 
         event.preventDefault(); 
         const status = 'ToDo'; 
         const title = taskTitleInput.value; 
         const description = taskDescriptionInput.value; 
         const task = JSON.stringify({title, description, status}); 
         const httpHeaders = { 
             method: 'POST', 
             body: task 
         } 
         await fetch(BASE_URL, httpHeaders); 
         loadAllTasks(); 
         form.reset(); 
     } 
  
  
     async function loadAllTasks(event){ 
         if (event){ 
             event.preventDefault(); 
         } 
         todoList.innerHTML = ''; 
         inProgressList.innerHTML = ''; 
         codeReviewList.innerHTML = ''; 
         doneList.innerHTML = ''; 
         try { 
         const allTasks = await fetch(BASE_URL); 
         const data = await allTasks.json(); 
         currentTasks = Object.values(data); 
         let currentList = null; 
         let btnText = ''; 

         for (const {title, description, status, _id} of currentTasks){ 
             if (status === 'ToDo'){ 
                currentList = todoList; 
                btnText = 'Move to In Progress' 
             } 
             else if (status === 'In Progress'){ 
                 currentList = inProgressList; 
                 btnText = 'Move to Code Review'; 
             } 
             else if (status === 'Code Review'){ 
                 currentList = codeReviewList; 
                 btnText = 'Move to Done' 
             } 
             else if (status === 'Done'){ 
                 currentList = doneList; 
                 btnText = 'Close' 
             } 
  
             const li = createElement('li', currentList, '', ['task']) 
             createElement('h3', li, title); 
             createElement('p',li, description); 
             submitBtn = createElement('button', li, btnText); 
             submitBtn.status = status; 
             submitBtn.taskId = _id; 
             if (status === 'Done'){ 
                 submitBtn.addEventListener('click', deleteHandler); 
             } 
             else { 
                 submitBtn.addEventListener('click', moveHandler); 
             } 
         } 
         } 
         catch(err){ 
             console.error(err); 
         } 
  
     } 
  
     async function moveHandler() { 
         const liStatus = this.status; 
         const taskId = this.taskId; 
         let newStatus = '' 
         if (liStatus === 'ToDo'){ 
             newStatus = 'In Progress' 
         } 
         else if (liStatus === 'In Progress'){ 
             newStatus = 'Code Review' 
         } 
         else if (liStatus === 'Code Review'){ 
             newStatus = 'Done' 
         } 
         const httpHeaders = { 
             method: 'PATCH', 
             body: JSON.stringify({status: newStatus}) 
         } 
         await fetch(`${BASE_URL}${taskId}`, httpHeaders); 
         loadAllTasks(); 
     } 
  
     async function deleteHandler(){ 
         const taskId = this.taskId; 
         const httpHeaders = { 
             method: 'DELETE' 
         }; 
         await fetch(`${BASE_URL}${taskId}`, httpHeaders); 
         loadAllTasks(); 
     } 
  
     function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml){ 
         htmlElement = document.createElement(type); 
  
         if (content && useInnerHtml) { 
             htmlElement.innerHTML = content; 
         } 
         else { 
             if (content && type !== 'input'){ 
                 htmlElement.textContent = content; 
             } 
             else if (content && type === 'input'){ 
                 htmlElement.value = content; 
             } 
         } 
  
         if (classes && classes.length > 0){ 
             htmlElement.classList.add(...classes); 
         } 
  
         if (id) { 
             htmlElement.id = id; 
         } 
  
         if (attributes){ 
             for (const key in attributes) { 
                 htmlElement[key] = attributes[key]; 
             } 
         } 
  
         if (parentNode) { 
             parentNode.appendChild(htmlElement); 
         } 
  
         return htmlElement; 
     } 
 } 
  
 attachEvents(); 