import { initializeUI } from "./initializeUI";
import { UX } from "./UX";
import { updateUI } from "./updateUI";
import { tasks, projects } from "./objects";

initializeUI.initializeBody();
updateUI.updateTaskList(tasks);
updateUI.updateProjectList(projects);
UX.enableAddProjectButton();
UX.enableAddTaskButton();
UX.enableFolderSwitching();
UX.enableProjectSwitching();
