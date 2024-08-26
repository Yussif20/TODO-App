import { App, tasksContainer, textInput } from "./elements";
import { initTaskListeners } from "./eventListeners";

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
        initTaskListeners();
    }else{
        renderEmptyList();
    }
}
const renderEmptyList = ()=>{
    tasksContainer.innerHTML = ` <p class="todo__tasks--empty">Please enter your tasks</p>`
}
export const renderTasks = (tasks)=>{
    let taskList = ``;
    let counter = 1;
    tasks.forEach((task)=>{
            let taskEl =`<li id="item${counter}" class="todo__tasks--task"><p>${task.value}</p></li>` ;
            taskList += taskEl;
            counter ++;
    })
    let taskFooter = `
       <div class="todo__footer">
          <p><span class="todo__footer--count"></span>items left</p>
          <ul class="todo__footer--buttons">
            <li><button class="active footer-btn">All</button></li>
            <li><button class="footer-btn">Active</button></li>
            <li><button class="footer-btn">Completed</button></li>
          </ul>
          <button class="clear-btn">Clear Completed</button>
        </div>
    `
    tasksContainer.innerHTML =taskList + taskFooter;
    textInput.value = '';
}
export const addTask = (e)=>{
    e.preventDefault();
    let taskValue = textInput.value;
    if(!taskValue || !taskValue.split(" ").join(""))return;
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