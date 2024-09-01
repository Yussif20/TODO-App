(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const f=document.querySelector(".app"),T=document.querySelector(".themeToggler__btn"),v=document.querySelector(".todo__form--input"),S=document.querySelector(".todo__footer--count"),p=document.querySelector(".todo__tasks"),g=document.querySelector(".todo__form--btn"),_=document.querySelector(".clear-btn"),k=document.querySelector(".todo__footer"),q=document.querySelector(".all-items"),D=document.querySelector(".active-items"),b=document.querySelector(".completed-items"),O=()=>document.querySelectorAll(".task-btn"),C=()=>document.querySelectorAll(".task-close"),y=()=>document.querySelectorAll(".footer-btn"),a=t=>{const e=localStorage.getItem(t);return e?JSON.parse(e):!1},i=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))};let c=null;const x=t=>{c=t.target.closest("li");const e=c.getBoundingClientRect();c.style.width=`${e.width}px`,c.style.height=`${e.height}px`,c.style.opacity="0.5",setTimeout(()=>{c&&(c.style.display="none")},0)},B=t=>{t.preventDefault()},w=t=>{if(t.preventDefault(),c!==t.target){const e=a("tasks")||[],o=parseInt(c.id.replace("item","")),s=t.target.closest("li"),n=parseInt(s.id.replace("item","")),r=e.findIndex(u=>u.id===o),d=e.findIndex(u=>u.id===n);e.splice(d,0,e.splice(r,1)[0]),i("tasks",e),l(e)}h()},A=t=>{h()},h=()=>{c&&(c.style.display="flex",c.style.width="",c.style.height="",c.style.opacity="",c=null)},L=()=>{f.classList.toggle("app--isDark"),i("darkThemeFlag",f.classList.contains("app--isDark"))},I=t=>{const e=t.filter(s=>s.isCompleted===!1),o=t.filter(s=>s.isCompleted===!0);q.classList.contains("active")&&m(t),D.classList.contains("active")&&m(e),b.classList.contains("active")&&m(o),S.textContent=e.length},$=()=>{p.innerHTML=' <p class="todo__tasks--empty">Please enter your tasks</p>'},m=t=>{let e="";t.forEach(s=>{let n=`
        <li id="item${s.id}" class="todo__tasks--task ${s.isCompleted?"checked":""}" draggable="true">
            <button class="task-btn" onclick="checkTask(event, ${s.id})"><img src="./assets/icon-check.svg" /></button>
            <p>${s.value}</p>
            <button class="task-close" onclick="deleteTask(event, ${s.id})"><img src="assets/icon-cross.svg" /></button>
        </li>`;e+=n}),p.innerHTML=e,p.querySelectorAll(".todo__tasks--task").forEach(s=>{s.addEventListener("dragstart",x),s.addEventListener("dragover",B),s.addEventListener("drop",w),s.addEventListener("dragend",A)}),v.value=""},l=t=>{t.length?(I(t),k.classList.add("active"),E()):(k.classList.remove("active"),$())},N=t=>{t.preventDefault();let e=v.value;if(!e||!e.split(" ").join(""))return;const o={id:Date.now(),value:e,isCompleted:!1},s=a("tasks")||[];s.push(o),i("tasks",s),l(s)},P=(t,e)=>{t.currentTarget.parentElement.classList.toggle("checked");const o=a("tasks"),s=o.findIndex(n=>n.id===e);s!==-1&&(o[s].isCompleted=!o[s].isCompleted,l(o),i("tasks",o))},F=(t,e)=>{let o=a("tasks");o=o.filter(s=>s.id!==e),l(o),i("tasks",o)},H=()=>{const t=a("tasks").filter(e=>e.isCompleted===!1);i("tasks",t),l(t)},M=()=>{a("darkThemeFlag")&&L(),l(a("tasks"))},J=()=>{T.addEventListener("click",L),g.addEventListener("click",N),window.addEventListener("keypress",t=>{t.key==="Enter"&&g.click()})},E=()=>{O().forEach(t=>{t.addEventListener("click",e=>{const o=parseInt(e.currentTarget.parentElement.id.replace("item",""));P(e,o)})}),C().forEach(t=>{t.addEventListener("click",e=>{const o=parseInt(e.currentTarget.parentElement.id.replace("item",""));F(e,o)})}),_.addEventListener("click",H)};y().forEach(t=>{t.addEventListener("click",()=>{y().forEach(o=>o.classList.remove("active")),t.classList.add("active");const e=a("tasks");I(e),E()})});M();J();
