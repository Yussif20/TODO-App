import { themeToggler } from "./elements";
import { themeTogglerHandler } from "./utils";

export const initListeners = ()=>{
    themeToggler.addEventListener("click",themeTogglerHandler)
}
