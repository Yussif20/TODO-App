import { formButton, themeToggler,textInput } from "./elements";
import { renderTasks, themeTogglerHandler } from "./utils";

export const initListeners = ()=>{
    themeToggler.addEventListener("click",themeTogglerHandler);
    formButton.addEventListener("click",renderTasks(textInput.value))
}
