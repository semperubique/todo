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

export { Task, Project, tasks, projects };
