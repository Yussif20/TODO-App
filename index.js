import { initListeners } from "./scripts/eventListeners";
import { initDataOnStartup } from "./scripts/utils";

initDataOnStartup();
initListeners();

// localStorage.clear()

// TODO Add listeners to detect the checked items 
// TODO Add close marks next to each task
// TODO Add delete task listener to the cross mark
 