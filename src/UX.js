import { Task, Project } from "./objects";
import { updateUI } from "./updateUI";

const logicHandler = (() => {
  let tasks = [];
  let projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const addTask = (task) => {
    tasks.push(task);
  };

  const task1 = Task(
    "Clean the house",
    "There are some spiders that are dirty",
    "2022",
    1
  );
  const task2 = Task(
    "Remove the mouxxxse",
    "There are some spiders that are dixrty",
    "2022",
    1,
    "work"
  );
  addTask(task1);
  addTask(task2);
  const project1 = Project("work");
  const project2 = Project("gym");
  addProject(project1);
  addProject(project2);

  const updateProjectList = () => {
    const projectList = document.querySelector(".project-list");
    projectList.innerHTML = "";
    projects.forEach((project) => {
      updateUI.addNewProjectToProjectList(projectList, project);
    });
    enabelDeleteProjectButton();
  };

  const enableFolderSwitching = () => {
    const folderButtons = document.querySelectorAll(".folder-button");
    folderButtons.forEach((folder) =>
      folder.addEventListener("click", () => {
        updateUI.updateContent(folder, tasks);
        enableAddTaskButton();
      })
    );
  };

  const enableProjectSwitching = () => {
    const projectButtons = document.querySelectorAll(".project-button");
    projectButtons.forEach((project) =>
      project.addEventListener("click", () => {
        updateUI.updateContent(project, tasks);
        enableAddTaskButton();
      })
    );
  };

  const openProjectForm = (addProjectButton) => {
    addProjectButton.classList.add("hidden");
    const form = document.createElement("form");

    const projectDetailsContainer = document.createElement("div");

    const projectTitle = document.createElement("input");
    const buttonAddOrCancel = document.createElement("div");
    const buttonAdd = document.createElement("button");
    const buttonCancel = document.createElement("button");

    projectTitle.required = true;
    projectTitle.placeholder = "Project";

    buttonAdd.type = "button";
    buttonCancel.type = "button";
    buttonAdd.textContent = "Add";
    buttonCancel.textContent = "Cancel";

    buttonCancel.addEventListener("click", () => {
      form.remove();
      addProjectButton.classList.remove("hidden");
    });
    buttonAdd.addEventListener("click", () => {
      if (!form.checkValidity()) {
        form.reportValidity();
      } else {
        const newProject = Project(projectTitle.value);
        projects.push(newProject);
        updateProjectList();
        enableProjectSwitching();
        form.remove();
        addProjectButton.classList.remove("hidden");
      }
    });

    buttonAddOrCancel.classList.add("add-or-cancel");

    buttonAddOrCancel.appendChild(buttonAdd);
    buttonAddOrCancel.appendChild(buttonCancel);

    projectDetailsContainer.appendChild(projectTitle);

    form.appendChild(projectDetailsContainer);
    form.appendChild(buttonAddOrCancel);

    const projectList = document.querySelector(".project-list");
    projectList.after(form);
  };
  const openTaskForm = (addTaskButton) => {
    addTaskButton.classList.add("hidden");
    const form = document.createElement("form");

    const taskDetailsContainer = document.createElement("div");
    taskDetailsContainer.classList.add("task-details-container");

    const taskPriority = document.createElement("select");
    const taskTitle = document.createElement("input");
    const taskProject = document.createElement("select");
    const taskDueDate = document.createElement("input");
    const taskDescription = document.createElement("textarea");
    const buttonAddOrCancel = document.createElement("div");
    const buttonAdd = document.createElement("button");
    const buttonCancel = document.createElement("button");

    const optionPriority = document.createElement("option");
    optionPriority.value = "";
    optionPriority.textContent = "-";
    optionPriority.selected = true;
    taskPriority.appendChild(optionPriority);
    for (let i = 0; i < 10; i++) {
      const optionPriority = document.createElement("option");
      optionPriority.value = i + 1;
      optionPriority.textContent = i + 1;
      taskPriority.appendChild(optionPriority);
    }

    taskTitle.required = true;
    taskTitle.placeholder = "Task";
    taskTitle.classList.add("task-title");

    const optionProject = document.createElement("option");
    optionProject.value = "";
    optionProject.textContent = "-";
    taskProject.appendChild(optionProject);
    projects.forEach((project) => {
      const optionProject = document.createElement("option");
      optionProject.value = project.title;
      optionProject.textContent = project.title;
      taskProject.appendChild(optionProject);
    });

    taskDueDate.type = "date";

    taskDescription.classList.add("text-area-description");

    buttonAdd.type = "button";
    buttonCancel.type = "button";
    buttonAdd.textContent = "Add";
    buttonCancel.textContent = "Cancel";

    buttonCancel.addEventListener("click", () => {
      form.remove();
      addTaskButton.classList.remove("hidden");
    });
    buttonAdd.addEventListener("click", () => {
      if (!form.checkValidity()) {
        form.reportValidity();
      } else {
        const newTask = Task(
          taskTitle.value,
          taskDescription.value,
          taskDueDate.value,
          taskPriority.value,
          taskProject.value
        );
        tasks.push(newTask);
        updateUI.updateTaskList(document.querySelector(".task-list"), newTask);
        form.remove();
        addTaskButton.classList.remove("hidden");
      }
    });

    buttonAddOrCancel.classList.add("add-or-cancel");

    buttonAddOrCancel.appendChild(buttonAdd);
    buttonAddOrCancel.appendChild(buttonCancel);

    taskDetailsContainer.appendChild(taskPriority);
    taskDetailsContainer.appendChild(taskTitle);
    taskDetailsContainer.appendChild(taskProject);
    taskDetailsContainer.appendChild(taskDueDate);
    form.appendChild(taskDetailsContainer);
    form.appendChild(taskDescription);
    form.appendChild(buttonAddOrCancel);

    const choiceTitle = document.querySelector(".choice-title");
    choiceTitle.after(form);
  };

  const enableAddTaskButton = () => {
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.addEventListener("click", () => openTaskForm(addTaskButton));
  };

  const enableAddProjectButton = (addProjectButton) => {
    addProjectButton.addEventListener("click", () =>
      openProjectForm(addProjectButton)
    );
  };

  const enabelDeleteProjectButton = () => {
    const projectDeleteButtons = document.querySelectorAll(
      ".project-delete-button"
    );
    projectDeleteButtons.forEach((projectDeleteButton) =>
      projectDeleteButton.addEventListener("click", () => {
        projects = projects.filter(
          (project) =>
            project.title !==
            projectDeleteButton.closest("li").children[0].textContent
        );
        projectDeleteButton.closest("li").remove();
      })
    );
  };

  const enabelDeleteTaskButton = () => {
    const taskDeleteButtons = document.querySelectorAll(".task-delete-button");
    taskDeleteButtons.forEach((taskDeleteButton) =>
      taskDeleteButton.addEventListener("click", () => {
        console.log(taskDeleteButton.closest("li").children[2].textContent);
        tasks = tasks.filter(
          (task) =>
            task.title !==
            taskDeleteButton.closest("li").children[2].textContent
        );
        taskDeleteButton.closest("li").remove();
      })
    );
  };

  return {
    enableFolderSwitching,
    enableProjectSwitching,
    updateProjectList,
    enableAddProjectButton,
    enabelDeleteProjectButton,
    enabelDeleteTaskButton,
  };
})();

export { logicHandler };
