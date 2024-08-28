import { formButton, themeToggler, footerButtons, checkButtons, deleteButtons, activeItemsBtn, allItemsBtn, completedItemsBtn } from "./elements";
import { addTask, checkTask, deleteTask, renderActiveTasks, renderAllTasks, renderCompletedTasks, themeTogglerHandler } from "./utils";

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
    allItemsBtn.addEventListener("click",()=>{
        completedItemsBtn.classList.remove("active");
        activeItemsBtn.classList.remove("active");
        allItemsBtn.classList.add("active");
        renderAllTasks();
    })
    activeItemsBtn.addEventListener("click",()=>{
        completedItemsBtn.classList.remove("active");
        allItemsBtn.classList.remove("active");
        activeItemsBtn.classList.add("active");
        renderActiveTasks();
    })
    completedItemsBtn.addEventListener("click",()=>{
        allItemsBtn.classList.remove("active");
        activeItemsBtn.classList.remove("active");
        completedItemsBtn.classList.add("active");
        renderCompletedTasks();
    })
    checkButtons().forEach((btn,index)=>{
        btn.addEventListener("click",(e)=> checkTask(e,index))
    })
    deleteButtons().forEach((btn,index)=>{
        btn.addEventListener("click",(e)=>deleteTask(e,index))
    })
}