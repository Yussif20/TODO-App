import { formButton, themeToggler, footerButtons, checkButtons, deleteButtons } from "./elements";
import { addTask, checkTask, deleteTask, themeTogglerHandler } from "./utils";

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
            footerButtons().forEach(button=>button.classList.remove("active"))
            btn.classList.add("active")
        })
    })
    checkButtons().forEach((btn,index)=>{
        btn.addEventListener("click",(e)=> checkTask(e,index))
    })
    deleteButtons().forEach((btn,index)=>{
        btn.addEventListener("click",(e)=>deleteTask(e,index))
    })
}