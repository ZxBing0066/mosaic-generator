(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g=document.getElementById("canvas"),m=document.getElementById("offscreen"),u=document.getElementById("file"),a=g.getContext("2d"),s=m.getContext("2d");s.imageSmoothingEnabled=!1;s.mozImageSmoothingEnabled=!1;s.webkitImageSmoothingEnabled=!1;s.msImageSmoothingEnabled=!1;a.imageSmoothingEnabled=!1;a.mozImageSmoothingEnabled=!1;a.webkitImageSmoothingEnabled=!1;a.msImageSmoothingEnabled=!1;u.addEventListener("change",d=>{const n=d.target.files;if(!(n!=null&&n.length))return;const i=n[0],r=new FileReader;r.addEventListener("loadend",e=>{var t,o;if((t=e.target)!=null&&t.result){const l=document.createElement("img");l.classList.add("obj"),l.src=(o=e.target)==null?void 0:o.result,l.onload=()=>{s.drawImage(l,0,0,20,20);const f=m.toDataURL(),c=new Image;c.src=f,c.onload=()=>{a.drawImage(c,0,0,200,200)}}}}),r.readAsDataURL(i)});