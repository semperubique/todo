const Task = (title, description, dueDate, priority, project) => {
  let done = false;
  return { title, description, dueDate, priority, project, done };
};

const Project = (title) => {
  return { title };
};

export { Task, Project };
