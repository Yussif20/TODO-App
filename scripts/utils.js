import { App, tasksContainer, textInput } from "./elements";

const fetchData = (key) =>{
    const data = localStorage.getItem(key);
    return data? JSON.parse(data):false;
}
const saveToDB = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}

export const themeTogglerHandler = ()=>{
    App.classList.toggle("app--isDark");
    saveToDB("darkThemeFlag" , App.classList.contains("app--isDark"))
}
export const renderTasks = (tasks)=>{
    let taskList = ``;
    tasks.forEach((task)=>{
            let taskEl =`<li class="todo__tasks--task"><p>${task}</p></li>` ;
            taskList += taskEl;
    })
    tasksContainer.innerHTML =taskList;
    textInput.value = '';
}
export const initDataOnStartup =()=>{
    fetchData("darkThemeFlag") && themeTogglerHandler();

}