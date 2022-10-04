import { initializeUI } from "./initializeUI";
import { logicHandler } from "./UX";

initializeUI.initializeBody();
logicHandler.enableFolderSwitching();
logicHandler.updateProjectList();
logicHandler.enableProjectSwitching();
