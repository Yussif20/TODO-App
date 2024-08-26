import { formButton, themeToggler,textInput } from "./elements";
import { addTask, renderTasks, themeTogglerHandler } from "./utils";

export const initListeners = ()=>{
    themeToggler.addEventListener("click",themeTogglerHandler);
    formButton.addEventListener("click",addTask);
}
