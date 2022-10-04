import { logicHandler } from "./UX";

const updateUI = (() => {
  const updateTaskList = (taskList, task) => {
    const taskElement = document.createElement("li");
    const taskDone = document.createElement("button");
    const taskPriority = document.createElement("span");
    const taskTitle = document.createElement("span");
    taskTitle.classList.add("task-title");
    const taskProject = document.createElement("span");
    const taskDescription = document.createElement("p");
    const taskDescriptionVisiblity = document.createElement("button");
    const taskDueDate = document.createElement("span");
    const taskDelete = document.createElement("button");
    const taskDoneIcon = document.createElement("span");
    taskDoneIcon.classList.add("material-icons");
    if (task.done === false) {
      taskDoneIcon.textContent = "check_box_outline_blank";
    } else if (task.done === true) {
      taskDoneIcon.textContent = "check_box";
    }
    taskDone.appendChild(taskDoneIcon);
    taskPriority.textContent = task.priority;
    taskTitle.textContent = task.title;
    taskProject.textContent = task.project;
    taskDescription.textContent = task.description;
    taskDueDate.textContent = task.dueDate;
    const taskDeleteIcon = document.createElement("span");
    taskDeleteIcon.classList.add("material-icons");
    taskDeleteIcon.textContent = "close";
    taskDelete.appendChild(taskDeleteIcon);
    taskDelete.classList.add("task-delete-button");

    taskElement.appendChild(taskDone);
    taskElement.appendChild(taskPriority);
    taskElement.appendChild(taskTitle);
    taskElement.appendChild(taskProject);
    taskElement.appendChild(taskDueDate);
    taskElement.appendChild(taskDelete);

    taskList.appendChild(taskElement);
  };

  const updateContent = (choice, tasks) => {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    const container = document.createElement("div");
    container.classList.add("content-container");

    const choiceTitle = document.createElement("h2");
    const taskList = document.createElement("ul");
    taskList.classList.add("task-list");
    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "Add a task";

    if (choice.classList[1] === "inbox") {
      choiceTitle.textContent = "Inbox";
      tasks.forEach((task) => {
        updateTaskList(taskList, task);
      });
    } else {
      choiceTitle.textContent = choice.textContent;
      tasks.forEach((task) => {
        if (task.project === choice.textContent) {
          updateTaskList(taskList, task);
        }
      });
    }

    choiceTitle.classList.add("choice-title");
    container.appendChild(choiceTitle);
    container.appendChild(addTaskButton);
    container.appendChild(taskList);
    content.appendChild(container);
    logicHandler.enabelDeleteTaskButton();
  };

  const addNewProjectToProjectList = (projectList, project) => {
    const projectElement = document.createElement("li");
    projectElement.classList.add("project-name-and-detele");
    const projectName = document.createElement("span");
    projectName.classList.add("project-button");
    projectName.textContent = project.title;
    const projectDeleteButton = document.createElement("button");
    projectDeleteButton.textContent = "x";
    projectDeleteButton.classList.add("project-delete-button");
    projectElement.appendChild(projectName);
    projectElement.appendChild(projectDeleteButton);
    projectList.appendChild(projectElement);
  };

  return { updateContent, addNewProjectToProjectList, updateTaskList };
})();

export { displayUpdater };
