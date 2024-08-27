import { App, taskCount, tasksContainer, textInput } from "./elements";
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
const renderTasks = (tasks)=>{
    let taskList = ``;
    let counter = 1;
    tasks.forEach((task)=>{
            let taskEl =`
            <li id="item${counter}" class="todo__tasks--task ${task.isCompleted ? "checked": ""}">
                <button class="task-btn "></button>
                <p>${task.value}</p>
                <button class="task-close"><img src="assets/icon-cross.svg" /></button>
            </li>` ;
            taskList += taskEl;
            counter ++;
    })
    let taskFooter = `
       <div class="todo__footer">
          <p><span class="todo__footer--count">${counter - 1}</span>items left</p>
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
    initTasks(tasks)
}
export const checkTask = (e,index)=>{
    e.currentTarget.parentElement.classList.toggle("checked");
    const tasks = fetchData("tasks");
    tasks[index].isCompleted = !tasks[index].isCompleted;
    saveToDB("tasks",tasks)
}
export const deleteTask = (e,index)=>{
    const tasks =fetchData("tasks");
    tasks.splice(index,1);
    initTasks(tasks)
    saveToDB("tasks",tasks)
}

export const initDataOnStartup =()=>{
    fetchData("darkThemeFlag") && themeTogglerHandler();
    initTasks(fetchData("tasks"));
}