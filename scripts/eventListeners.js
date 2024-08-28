import { formButton, themeToggler, checkButtons, deleteButtons, activeItemsBtn, allItemsBtn, completedItemsBtn, clearButton, footerButtons } from "./elements";
import { addTask, checkTask, deleteAllTasks, deleteTask, fetchData, initDataOnStartup, renderChosenTasks, themeTogglerHandler } from "./utils";

export const initListeners = () => {
    themeToggler.addEventListener("click", themeTogglerHandler);
    formButton.addEventListener("click", addTask);
    window.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            formButton.click();
        }
    });
}

export const initTaskListeners = () => {
    checkButtons().forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const taskId = parseInt(e.currentTarget.parentElement.id.replace('item', ''));
            checkTask(e, taskId);
        });
    });

    deleteButtons().forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const taskId = parseInt(e.currentTarget.parentElement.id.replace('item', ''));
            deleteTask(e, taskId);
        });
    });

    clearButton.addEventListener("click", deleteAllTasks);
}

footerButtons().forEach((btn) => {
    btn.addEventListener("click", () => {
        footerButtons().forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");
        const tasks = fetchData("tasks");
        renderChosenTasks(tasks);
        initTaskListeners();  // Reinitialize listeners after rendering
    });
});
