import { Task, Project, tasks, projects } from "./objects";
import { updateUI } from "./updateUI";
// import { tasks, projects } from "./objects";

const UX = (() => {
  const enableFolderSwitching = () => {
    const folderButtons = document.querySelectorAll(".folder-button");
    folderButtons.forEach((folder) =>
      folder.addEventListener("click", () => {
        updateUI.updateChoiceTitle(folder);
        updateUI.updateTaskList(tasks);
      })
    );
  };

  const enableProjectSwitching = () => {
    const projectButtons = document.querySelectorAll(".project-button");
    projectButtons.forEach((project) =>
      project.addEventListener("click", () => {
        updateUI.updateChoiceTitle(project);
        updateUI.updateTaskList(tasks);
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
        updateUI.updateProjectList(projects); // here
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
        updateUI.updateTaskList(tasks);
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

  const enableAddProjectButton = () => {
    const addProjectButton = document.querySelector(".add-project");
    addProjectButton.addEventListener("click", () =>
      openProjectForm(addProjectButton)
    );
  };

  const enableDeleteProjectButton = () => {
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
        updateUI.updateProjectList(projects);
        updateUI.updateChoiceTitle(document.querySelector(".inbox"));
        tasks = tasks.filter(
          (task) =>
            task.project !==
            projectDeleteButton.closest("li").children[0].textContent
        );
        updateUI.updateTaskList(tasks);
      })
    );
  };

  const enableDeleteTaskButton = () => {
    const taskDeleteButtons = document.querySelectorAll(".task-delete-button");
    taskDeleteButtons.forEach((taskDeleteButton) =>
      taskDeleteButton.addEventListener("click", () => {
        tasks = tasks.filter(
          (task) =>
            task.title !==
            taskDeleteButton.closest("li").children[2].textContent
        );
        updateUI.updateTaskList(tasks);
      })
    );
  };

  const enableCompleteTaskButton = () => {
    const taskCompleteButtons = document.querySelectorAll(
      ".task-complete-button"
    );
    taskCompleteButtons.forEach((taskCompleteButton) =>
      taskCompleteButton.addEventListener("click", () => {
        if (
          tasks.filter(
            (task) =>
              task.title ===
              taskCompleteButton.closest("li").children[2].textContent
          )[0].done === true
        ) {
          tasks.filter(
            (task) =>
              task.title ===
              taskCompleteButton.closest("li").children[2].textContent
          )[0].done = false;
        } else {
          tasks.filter(
            (task) =>
              task.title ===
              taskCompleteButton.closest("li").children[2].textContent
          )[0].done = true;
        }
        updateUI.updateTaskList(tasks);
      })
    );
  };

  return {
    enableFolderSwitching,
    enableProjectSwitching,
    enableAddProjectButton,
    enableDeleteProjectButton,
    enableDeleteTaskButton,
    enableAddTaskButton,
    enableCompleteTaskButton,
  };
})();

export { UX };
