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
const initTasks =(tasks)=>{
    if(tasks.length){
        renderTasks(tasks);
    }else{
        renderEmptyList();
    }
}
const renderEmptyList = ()=>{
    tasksContainer.innerHTML = ` <p>Please enter your tasks</p>`
}
export const renderTasks = (tasks)=>{
    let taskList = ``;
    tasks.forEach((task)=>{
            let taskEl =`<li class="todo__tasks--task"><p>${task.value}</p></li>` ;
            taskList += taskEl;
    })
    tasksContainer.innerHTML =taskList;
    textInput.value = '';
}
export const addTask = (e)=>{
    e.preventDefault();
    let taskValue = textInput.value;
    const task ={
        value : taskValue,
        isCompleted:false,
    }
    const tasks = fetchData("tasks") || [];
    tasks.push(task);
    saveToDB("tasks",tasks);
    renderTasks(tasks)
}

export const initDataOnStartup =()=>{
    fetchData("darkThemeFlag") && themeTogglerHandler();
    initTasks(fetchData("tasks"));
}