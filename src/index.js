import { initializeUI } from "./initializeUI";
import { UX } from "./UX";
import { demo } from "./objects";

initializeUI.initializeBody();
demo();
UX.enableAddProjectButton();
UX.enableAddTaskButton();
UX.enableFolderSwitching();
UX.enableProjectSwitching();
