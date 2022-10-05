import { UX } from "./UX";

const updateUI = (() => {
  const updateTaskList = (tasks) => {
    const choiceTitle = document.querySelector(".choice-title");
    let filteredTasks;

    if (choiceTitle.textContent === "Inbox") {
      filteredTasks = tasks;
    } else {
      filteredTasks = tasks.filter(
        (task) => task.project === choiceTitle.textContent
      );
    }

    const sortAlphabetically = (a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    };

    const sortCompleted = (a, b) => {
      if (a.done < b.done) {
        return -1;
      } else if (a.done > b.done) {
        return 1;
      } else {
        return 0;
      }
    };

    const sortPriority = (a, b) => {
      if (a.priority > b.priority) {
        return -1;
      } else if (a.priority < b.priority) {
        return 1;
      } else {
        return 0;
      }
    };

    const sortDueDate = (a, b) => {
      if (a.dueDate < b.dueDate) {
        return -1;
      } else if (a.dueDate > b.dueDate) {
        return 1;
      } else {
        return 0;
      }
    };

    filteredTasks.sort(sortAlphabetically);
    filteredTasks.sort(sortDueDate);
    filteredTasks.sort(sortPriority);
    filteredTasks.sort(sortCompleted);

    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = "";
    filteredTasks.forEach((task) => {
      const taskElement = document.createElement("li");
      const taskDone = document.createElement("button");
      taskDone.classList.add("task-complete-button");
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
    });
    UX.enableDeleteTaskButton();
    UX.enableCompleteTaskButton();

    // saving process
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const updateProjectList = (projects) => {
    const projectList = document.querySelector(".project-list");
    projectList.innerHTML = "";
    projects.forEach((project) => {
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
    });
    UX.enableDeleteProjectButton();
    UX.enableProjectSwitching();

    // saving process
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const updateChoiceTitle = (choice) => {
    const choiceTitle = document.querySelector(".choice-title");
    if (choice.classList[1] === "inbox") {
      choiceTitle.textContent = "Inbox";
    } else {
      choiceTitle.textContent = choice.textContent;
    }
  };

  return {
    updateChoiceTitle,
    updateProjectList,
    updateTaskList,
  };
})();

export { updateUI };
