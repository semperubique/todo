import { logicHandler } from "./UX";

const initializeUI = (() => {
  const initializeHeader = () => {
    const header = document.createElement("header");
    const logo = document.createElement("h1");
    logo.classList.add("logo");
    logo.textContent = "Tasks";
    header.appendChild(logo);

    return header;
  };

  const initializeMain = () => {
    const main = document.createElement("main");
    main.appendChild(initializeSidebar());
    main.appendChild(initializeContent());

    return main;
  };

  const initializeFooter = () => {
    const footer = document.createElement("footer");
    const info = document.createElement("p");
    info.textContent = "by Murad Ildarov";
    footer.appendChild(info);

    return footer;
  };

  const initializeSidebar = () => {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.appendChild(initializeFolders());
    sidebar.appendChild(initializeprojects());

    return sidebar;
  };

  const initializeContent = () => {
    const content = document.createElement("div");
    content.classList.add("content");
    return content;
  };

  const initializeFolders = () => {
    const folders = document.createElement("div");
    folders.classList.add("folders");
    const inbox = document.createElement("button");
    inbox.classList.add("folder-button", "inbox");
    const inboxIcon = document.createElement("span");
    inboxIcon.classList.add("material-icons");
    inboxIcon.textContent = "inbox";
    inbox.appendChild(inboxIcon);
    inbox.insertAdjacentText("beforeend", "Inbox");
    folders.appendChild(inbox);

    return folders;
  };

  const initializeprojects = () => {
    const projects = document.createElement("div");
    projects.classList.add("projects");

    const title = document.createElement("h2");
    title.textContent = "Projects";

    const projectList = document.createElement("ul");
    projectList.classList.add("project-list");

    const projectAddButton = document.createElement("button");
    projectAddButton.classList.add("add-project");
    const projectAddButtonIcon = document.createElement("span");
    projectAddButtonIcon.classList.add("material-icons");
    projectAddButtonIcon.textContent = "add";
    projectAddButton.appendChild(projectAddButtonIcon);
    projectAddButton.insertAdjacentText("beforeend", "Add a project");

    projects.appendChild(title);
    projects.appendChild(projectList);
    projects.appendChild(projectAddButton);

    logicHandler.enableAddProjectButton(projectAddButton); // fix: it should not be here

    return projects;
  };

  const initializeBody = () => {
    const body = document.querySelector("body");
    body.appendChild(initializeHeader());
    body.appendChild(initializeMain());
    body.appendChild(initializeFooter());
  };

  return { initializeBody };
})();

export { displayInitializer };
