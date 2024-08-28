import { initListeners } from "./scripts/eventListeners";
import { initDataOnStartup } from "./scripts/utils";

initDataOnStartup();
initListeners();

// localStorage.clear()

// TODO Add listeners to detect the checked items ✅
// TODO Add close marks next to each task ✅
// TODO Add delete task listener to the cross mark ✅
// TODO add check icons to the tasks ✅
// TODO fix the background image repeat problem on mobile ✅
// TODO render chosen items ✅
// TODO clear all tasks button ✅
// TODO update the ui when choosing category ✅
// TODO listen to tasks after change category ✅
// TODO add drag and drop property