window.addEventListener('load', solve);

function solve() {
    const inputFields = {
        title: document.querySelector('#title'),
        description: document.querySelector('#description'),
        label: document.querySelector('#label'),
        points: document.querySelector('#points'),
        assignee: document.querySelector('#assignee'),
    }
    const sprintApp = {
        createBtn: document.querySelector('#create-task-btn'),
        deleteBtn: document.querySelector('#delete-task-btn'),
        input: document.querySelector('input'),
        taskSection: document.querySelector('#tasks-section'),
        points: document.querySelector('#total-sprint-points'),
        taskIdNumber: 1
    }
    const taskInfo = {}
    const buttonLabels = {
        'Feature': {
            class: "feature",
            textContent: 'Feature &#8865;'
        },
        'Low Priority Bug': {
            class: "low-priority",
            textContent: 'Low Priority Bug &#9737;'
        },
        'High Priority Bug': {
            class: "high-priority",
            textContent: 'High Priority Bug &#9888;'
        },
    }

    const checkCorrectInputs = (dataFromInput) => dataFromInput.every(item => item.value.trim().length !== 0)

    const clearInputFields = (dataFromInput => dataFromInput.forEach(x => x.value = ''))

    const deleteTaskBtnFunctionality = (event) => {
        const id = event.currentTarget.parentElement.parentElement.id
        sprintApp.input.id = id
        Object.values(inputFields).forEach((x, index) => {
            x.value = taskInfo[id][index]
            x.disabled = true
        })
        sprintApp.createBtn.disabled = true
        sprintApp.deleteBtn.disabled = false
    }

    const changePoints = (points) => {
        const currentPoints = Number(sprintApp.points.textContent.replace('Total Points ', '').replace('pts', ''))
        sprintApp.points.textContent = `Total Points ${currentPoints + points}pts`
    }

    const createTaskHtmlElement = (event) => {
        const article = document.createElement('article');
        article.setAttribute('id', `task-${sprintApp.taskIdNumber}`);
        article.classList.add('task-card');
        article.innerHTML = `
            <div class="task-card-label ${buttonLabels[inputFields.label.value].class}">${buttonLabels[inputFields.label.value].textContent}</div>
            <h3 class="task-card-title">${inputFields.title.value}</h3>
            <p class="task-card-description">${inputFields.description.value}</p>
            <div class="task-card-points">Estimated at ${inputFields.points.value} pts</div>
            <div class="task-card-assignee">Assigned to: ${inputFields.assignee.value}</div>
            <div class="task-card-actions">
                <button>Delete</button>
            </div>
        `
        article.querySelector('button').addEventListener('click', deleteTaskBtnFunctionality)

        changePoints(Number(inputFields.points.value))
        taskInfo[`task-${sprintApp.taskIdNumber}`] = []

        Object.values(inputFields).forEach(x => taskInfo[`task-${sprintApp.taskIdNumber}`].push(x.value))
        sprintApp.taskIdNumber += 1
        return article
    }

    const createBtnFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(inputFields)
        if (!checkCorrectInputs(data)) return
        sprintApp.taskSection.appendChild(createTaskHtmlElement(inputFields))
        clearInputFields(data)
    }

    const deleteBtnFunctionality = (event) => {
        event.preventDefault()
        const [_, taskToDelete] = Array.from(document.querySelectorAll(`#${sprintApp.input.id}`))
        taskToDelete.remove()
        delete taskInfo[sprintApp.input.id]
        changePoints(-Number(inputFields.points.value))
        sprintApp.createBtn.disabled = false
        sprintApp.deleteBtn.disabled = true
        const data = Object.values(inputFields)
        clearInputFields(data)
        data.forEach(x => x.disabled = false)
    }


    sprintApp.createBtn.addEventListener('click', createBtnFunctionality)
    sprintApp.deleteBtn.addEventListener('click', deleteBtnFunctionality)
}

function solve() {
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const labelInput = document.getElementById("label");
    const pointsInput = document.getElementById("points");
    const assigneeInput = document.getElementById("assignee");
    const taskIDInput = document.getElementById("task-id");
   
    const sectionEl = document.getElementById("tasks-section");
   
    const createBtn = document.getElementById("create-task-btn");
    const deleteBtn = document.getElementById("delete-task-btn");
    const totalPointsInput = document.getElementById("total-sprint-points");
   
    const myObj = {};
   
    let taskId = "";
   
    let countTasks = 0;
   
    let totalPoints = 0;
   
    createBtn.addEventListener("click", onCreate);
    deleteBtn.addEventListener("click", onDelete);
   
    function onCreate() {
      if (
        titleInput.value == "" ||
        descriptionInput.value == "" ||
        labelInput.value == "" ||
        pointsInput.value == "" ||
        assigneeInput.value == ""
      ) {
        return;
      }
   
      const title = titleInput.value;
      const description = descriptionInput.value;
      const label = labelInput.value;
      const points = pointsInput.value;
      const assignee = assigneeInput.value;
   
      countTasks += 1;
      taskId = `task-${countTasks}`;
      myObj[taskId] = { title, description, label, points, assignee };
   
      totalPoints += Number(pointsInput.value);
      totalPointsInput.textContent = `Total Points ${totalPoints}pts`;
   
      const articleEl = document.createElement("article");
      articleEl.id = taskId;
      articleEl.className = "task-card";
   
      const featureDiv = document.createElement("div");
   
      if (labelInput.value == "Feature") {
        featureDiv.classList.add(...["task-card-label", "feature"]);
        featureDiv.innerHTML = `${labelInput.value} &#8865;`;
      } else if (labelInput.value == "Low Priority Bug") {
        featureDiv.classList.add(...["task-card-label", "low-priority"]);
        featureDiv.innerHTML = `${labelInput.value} &#9737;`;
      } else if (labelInput.value == "High Priority Bug") {
        featureDiv.classList.add(...["task-card-label", "high-priority"]);
        featureDiv.innerHTML = `${labelInput.value} &#9888;`;
      }
   
      const titleEl = document.createElement("h3");
      titleEl.className = "task-card-title";
      titleEl.textContent = titleInput.value;
   
      const paragraphEl = document.createElement("p");
      paragraphEl.className = "task-card-description";
      paragraphEl.textContent = descriptionInput.value;
   
      const pointsDiv = document.createElement("div");
      pointsDiv.className = "task-card-points";
      pointsDiv.textContent = `Estimated at ${pointsInput.value} pts`;
   
      const assigneeDiv = document.createElement("div");
      assigneeDiv.className = "task-card-assignee";
      assigneeDiv.textContent = `Assigned to: ${assigneeInput.value}`;
   
      const actionsDiv = document.createElement("div");
      actionsDiv.className = "task-card-actions";
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.addEventListener("click", onDel);
      actionsDiv.appendChild(delBtn);
   
      articleEl.appendChild(featureDiv);
      articleEl.appendChild(titleEl);
      articleEl.appendChild(paragraphEl);
      articleEl.appendChild(pointsDiv);
      articleEl.appendChild(assigneeDiv);
      articleEl.appendChild(actionsDiv);
   
      sectionEl.appendChild(articleEl);
   
      clearInputs();
    }
   
    function onDel(e) {
      taskIDInput.value = e.target.parentNode.parentNode.id;
      const loadId = taskIDInput.value;
   
      titleInput.value = myObj[loadId].title;
      descriptionInput.value = myObj[loadId].description;
      labelInput.value = myObj[loadId].label;
      pointsInput.value = myObj[loadId].points;
      assigneeInput.value = myObj[loadId].assignee;
   
      titleInput.disabled = true;
      descriptionInput.disabled = true;
      labelInput.disabled = true;
      pointsInput.disabled = true;
      assigneeInput.disabled = true;
   
      deleteBtn.disabled = false;
      createBtn.disabled = true;
    }
   
    function onDelete() {
      const delId = taskIDInput.value;
   
      totalPoints -= Number(pointsInput.value);
      totalPointsInput.textContent = `Total Points ${totalPoints}pts`;
   
      document.getElementById(delId).remove();
   
      titleInput.disabled = false;
      descriptionInput.disabled = false;
      labelInput.disabled = false;
      pointsInput.disabled = false;
      assigneeInput.disabled = false;
   
      createBtn.disabled = false;
      deleteBtn.disabled = true;
   
      clearInputs();
    }
   
    function clearInputs() {
      titleInput.value = "";
      descriptionInput.value = "";
      pointsInput.value = "";
      labelInput.value = "";
      assigneeInput.value = "";
    }
}