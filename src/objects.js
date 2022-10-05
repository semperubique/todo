const Task = (title, description, dueDate, priority, project) => {
  let done = false;
  return { title, description, dueDate, priority, project, done };
};

const Project = (title) => {
  return { title };
};

let tasks;
let projects;

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
} else {
  console.log("it does not exist");
  tasks = [];
}

if (localStorage.getItem("projects")) {
  projects = JSON.parse(localStorage.getItem("projects"));
} else {
  console.log("it does not exist");
  projects = [];
}

import { updateUI } from "./updateUI";

const demo = () => {
  const task1 = Task(
    "Clean the house",
    "There are some spiders that are dirty",
    "2022",
    10
  );
  const task2 = Task(
    "Remove the mouxxxse",
    "There are some spiders that are dixrty",
    "2022",
    5,
    "work"
  );
  const task3 = Task(
    "Miyau",
    "There are some spiders that are dixrty",
    "2022",
    5,
    "work"
  );
  const task4 = Task(
    "All go  the house",
    "There are some spiders that are dirty",
    "2022",
    10
  );
  tasks.push(task1);
  tasks.push(task2);
  tasks.push(task3);
  tasks.push(task4);
  const project1 = Project("work");
  const project2 = Project("gym");
  projects.push(project1);
  projects.push(project2);
  updateUI.updateProjectList(projects);
  updateUI.updateTaskList(tasks);
};

export { Task, Project, demo, tasks, projects };
