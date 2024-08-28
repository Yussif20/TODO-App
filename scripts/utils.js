import { activeItemsBtn, allItemsBtn, App, completedItemsBtn, tasksContainer, textInput, todoFooter,todoCount } from "./elements";
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
export const renderChosenTasks =(tasks)=>{
    const activeTasks = tasks.filter((item)=>item.isCompleted === false);
    const completedTasks = tasks.filter((item)=>item.isCompleted === true);

    allItemsBtn.classList.contains("active") &&renderTasks(tasks);
    activeItemsBtn.classList.contains("active") && renderTasks(activeTasks);
    completedItemsBtn.classList.contains("active") && renderTasks(completedTasks);
    todoCount.textContent = activeTasks.length;
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
                <button class="task-btn "><img src="./assets/icon-check.svg" /></button>
                <p>${task.value}</p>
                <button class="task-close"><img src="assets/icon-cross.svg" /></button>
            </li>` ;
            taskList += taskEl;
            counter ++;
    })
    tasksContainer.innerHTML = taskList ;
    textInput.value = '';
}
const initTasks =(tasks)=>{
    if(tasks.length){
        renderChosenTasks(tasks);
        todoFooter.classList.add("active");
        initTaskListeners();
    }else{
        todoFooter.classList.remove("active");
        renderEmptyList();
    }
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
    initTasks(tasks);
    saveToDB("tasks",tasks);
}
export const deleteTask = (e,index)=>{
    const tasks =fetchData("tasks");
    tasks.splice(index,1);
    initTasks(tasks)
    saveToDB("tasks",tasks)
}
export const deleteAllTasks =()=>{
    const tasks = fetchData("tasks").filter((item)=> item.isCompleted === false);
    saveToDB("tasks",tasks);
    initTasks(tasks)
}

export const initDataOnStartup =()=>{
    fetchData("darkThemeFlag") && themeTogglerHandler();
    initTasks(fetchData("tasks"));
}