const Task = (title, description, dueDate, priority, project) => {
  let done = false;
  return { title, description, dueDate, priority, project, done };
};

const Project = (title) => {
  return { title };
};

let tasks = [];
let projects = [];

import { updateUI } from "./updateUI";

const demo = () => {
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
  tasks.push(task1);
  tasks.push(task2);
  const project1 = Project("work");
  const project2 = Project("gym");
  projects.push(project1);
  projects.push(project2);
  updateUI.updateProjectList(projects);
  updateUI.updateTaskList(tasks);
};

export { Task, Project, demo, tasks, projects };
