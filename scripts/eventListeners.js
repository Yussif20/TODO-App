import { formButton, themeToggler, footerButtons, textInput } from "./elements";
import { addTask, themeTogglerHandler } from "./utils";

export const initListeners = ()=>{
    themeToggler.addEventListener("click",themeTogglerHandler);
    formButton.addEventListener("click",addTask);
    window.addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            formButton.click();
        }
    })
}
export const initTaskListeners = ()=>{
    footerButtons().forEach((btn)=>{
        btn.addEventListener("click",()=>{
            btn.classList.add("active")
        })
    })
}