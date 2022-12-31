(()=>{"use strict";const e=new class{events={};publish(e,t){if(console.log(`publish called for event ${e} with data ${JSON.stringify(t)}`),this.events[e])for(let n of this.events[e])console.log(`calling ${n} for ${e}`),n(t)}subscribe(e,t){console.log(`subscribe: ${e}, ${t}`),this.events[e]||(this.events[e]=[]),this.events[e].push(t),console.log(`${t} subscribed to ${e}`)}unsubscribe(e,t){this.events[e]&&this.events[e].remove(this.events[e].find((e=>e===t)))}};class t{constructor(e,t,n,s){this.id=e,this.title=t,this.description=n,this.dueDate=s,this.isComplete=!1}}const n=[];function s(e,s,c){const o=0===(i=n).length?1:i.reduce(((e,t)=>e.id<t.value?t:e)).id+1;var i;const d=new t(o,e,s,c);return n.push(d),d}const c=new class{render(e){const t=function(e){return n.find((t=>t.id===e))}(e);if(!t)return;const s=document.createElement("div"),c=document.createElement("h2");c.textContent=t.title;const o=document.createElement("div"),i=document.createElement("div");i.textContent=t.description,o.appendChild(i);const d=document.createElement("div");d.textContent=t.dueDate,o.appendChild(d);const a=document.createElement("div");return a.textContent=t.isComplete,o.appendChild(a),s.appendChild(c),s.appendChild(o),s}},o=[new class{constructor(e,t){this.id=e,this.name=t}}(1,"Default")];function i(){return o}const d=new class{render(){const e=i(),t=document.createElement("div");t.classList.add("project-list-container");const n=document.createElement("h2");n.textContent="Projects";const s=document.createElement("ul");s.classList.add("project-list");for(let t of e){const e=document.createElement("li");e.classList.add("project-list-item");const n=document.createElement("a");n.href="#",n.textContent=t.name,n.addEventListener("click",(e=>this.onProjectLinkClick(e,t))),e.appendChild(n),s.appendChild(e)}return t.appendChild(n),t.appendChild(s),t}onProjectLinkClick(t,n){t.preventDefault(),console.log({project:n}),e.publish("changePage",{page:"ProjectDetail",data:1})}},a=new class{pageLinks=[{name:"Projects",page:"ProjectList"}];render(){const e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("ul");n.classList.add("header-links");for(let e of this.pageLinks){const t=document.createElement("li");t.classList.add("header-link-item");const s=document.createElement("a");s.href="#",s.textContent=e.name,s.addEventListener("click",(t=>this.onHeaderLinkClick(t,e))),t.appendChild(s),n.appendChild(t)}return t.appendChild(n),e.appendChild(t),e}onHeaderLinkClick(t,n){t.preventDefault(),e.publish("changePage",n.page)}};console.log("TodoList app loaded"),s("Test","Test Description","2022-12-29"),s("Test2","Test Description 2","2022-12-30"),console.table(n);const l={TodoItemDetail:c,ProjectList:d};e.subscribe("changePage",p),document.body.appendChild(a.render());const r=document.createElement("div");function p(e){console.log(e),e.page&&l[e.page]&&(r.innerHTML="",r.appendChild(l[e.page].render(e.data)))}r.classList.add("main-content"),document.body.appendChild(r),p({page:"ProjectList"})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNGLFVBQWUsYUFBY1MsRUFBUVIsS0FDekMsR0MzQkoxRCxRQUFRQyxJQUFJLHVCQUNabUIsRUFBWSxPQUFRLG1CQUFvQixjQUN4Q0EsRUFBWSxRQUFTLHFCQUFzQixjQUMzQ3BCLFFBQVFtRSxNUEtHaEQsR09IWCxNQUFNaUQsRUFBUSxDQUNWLGVBQWtCLEVBQ2xCLFlBQWUsR0FHbkIsWUFBaUIsYUFBY0MsR0FFL0JwQyxTQUFTcUMsS0FBSy9CLFlBQVksWUFDMUIsTUFBTWdDLEVBQWN0QyxTQUFTQyxjQUFjLE9BSTNDLFNBQVNtQyxFQUFXdEUsR0FDaEJDLFFBQVFDLElBQUlGLEdBQ1BBLEVBQUsyRCxNQUFTVSxFQUFNckUsRUFBSzJELFFBSTlCYSxFQUFZQyxVQUFZLEdBQ3hCRCxFQUFZaEMsWUFBWTZCLEVBQU1yRSxFQUFLMkQsTUFBTTdCLE9BQU85QixFQUFLQSxPQUN6RCxDQVhBd0UsRUFBWXpCLFVBQVVDLElBQUksZ0JBQzFCZCxTQUFTcUMsS0FBSy9CLFlBQVlnQyxHQVkxQkYsRUFBVyxDQUNQWCxLQUFNLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL21vZHVsZXMvUHViU3ViLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Ub2RvSXRlbS9Ub2RvSXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL21vZHVsZXMvVG9kb0l0ZW0vVG9kb0l0ZW1Db250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy91dGlsLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Ub2RvSXRlbS9Ub2RvSXRlbURldGFpbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC9Qcm9qZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC9Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0L1Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9MYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHViU3ViIHtcclxuICAgIGV2ZW50cyA9IHt9O1xyXG5cclxuICAgIHB1Ymxpc2goZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcHVibGlzaCBjYWxsZWQgZm9yIGV2ZW50ICR7ZXZlbnR9IHdpdGggZGF0YSAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApXHJcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgbGlzdGVuZXIgb2YgdGhpcy5ldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBjYWxsaW5nICR7bGlzdGVuZXJ9IGZvciAke2V2ZW50fWApXHJcbiAgICAgICAgICAgIGxpc3RlbmVyKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN1YnNjcmliZTogJHtldmVudH0sICR7Y2FsbGJhY2t9YClcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtjYWxsYmFja30gc3Vic2NyaWJlZCB0byAke2V2ZW50fWApXHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnJlbW92ZShcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLmZpbmQobGlzdGVuZXIgPT4gbGlzdGVuZXIgPT09IGNhbGxiYWNrKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQdWJTdWIoKTsiLCJleHBvcnQgY2xhc3MgVG9kb0l0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gXCIuL1RvZG9JdGVtXCI7XHJcbmltcG9ydCB7IGdldE5leHRJZCB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5jb25zdCB0b2RvSXRlbXMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xyXG4gICAgY29uc3QgbmV3SWQgPSBnZXROZXh0SWQodG9kb0l0ZW1zKTtcclxuICAgIGNvbnN0IG5ld1RvZG9JdGVtID0gbmV3IFRvZG9JdGVtKG5ld0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpO1xyXG4gICAgdG9kb0l0ZW1zLnB1c2gobmV3VG9kb0l0ZW0pO1xyXG4gICAgcmV0dXJuIG5ld1RvZG9JdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb2RvSXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdG9kb0l0ZW1zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb2RvSXRlbUJ5SWQoaWQpIHtcclxuICAgIHJldHVybiB0b2RvSXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkVG9kb0l0ZW0sIGdldFRvZG9JdGVtcywgZ2V0VG9kb0l0ZW1CeUlkIH07IiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRJZChhcnIpIHtcclxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgocHJldmlvdXMsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXh0ID0gcHJldmlvdXMuaWQgPCBpdGVtLnZhbHVlID8gaXRlbSA6IHByZXZpb3VzXHJcbiAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICB9KS5pZCArIDE7XHJcbn0iLCJpbXBvcnQgeyBnZXRUb2RvSXRlbUJ5SWQgfSBmcm9tIFwiLi9Ub2RvSXRlbUNvbnRyb2xsZXJcIjtcclxuY2xhc3MgVG9kb0l0ZW1EZXRhaWwge1xyXG4gICAgcmVuZGVyKGlkKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBnZXRUb2RvSXRlbUJ5SWQoaWQpO1xyXG4gICAgICAgIGlmICghdG9kb0l0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2RvSXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRvZG9JdGVtSGVhZGVyLnRleHRDb250ZW50ID0gdG9kb0l0ZW0udGl0bGU7XHJcbiAgICBcclxuICAgICAgICBjb25zdCB0b2RvSXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdG9kb0l0ZW0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgdG9kb0l0ZW1Db250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5kdWVEYXRlO1xyXG4gICAgICAgIHRvZG9JdGVtQ29udGVudC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNDb21wbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlzQ29tcGxldGVEaXYudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5pc0NvbXBsZXRlO1xyXG4gICAgICAgIHRvZG9JdGVtQ29udGVudC5hcHBlbmRDaGlsZChpc0NvbXBsZXRlRGl2KTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHRvZG9JdGVtRGl2LmFwcGVuZENoaWxkKHRvZG9JdGVtSGVhZGVyKTtcclxuICAgICAgICB0b2RvSXRlbURpdi5hcHBlbmRDaGlsZCh0b2RvSXRlbUNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRvZG9JdGVtRGl2O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVG9kb0l0ZW1EZXRhaWwoKTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBnZXROZXh0SWQgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICBuZXcgUHJvamVjdCgxLCBcIkRlZmF1bHRcIiksXHJcbl07XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcclxuICAgIGNvbnN0IG5ld0lkID0gZ2V0TmV4dElkKHByb2plY3RzKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdJZCwgbmFtZSk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFByb2plY3QsIGdldFByb2plY3RzLCBnZXRQcm9qZWN0QnlJZCB9IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIi4vUHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IFB1YlN1YiBmcm9tIFwiLi4vUHViU3ViXCI7XHJcbmNsYXNzIFByb2plY3RMaXN0IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgcHJvamVjdExpc3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XHJcbiAgICBcclxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay5ocmVmPVwiI1wiO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgICAgICAgICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5vblByb2plY3RMaW5rQ2xpY2soZSwgcHJvamVjdCkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0SGVhZGVyKTtcclxuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gcHJvamVjdExpc3RDb250YWluZXJEaXY7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qcm9qZWN0TGlua0NsaWNrKGUsIHByb2plY3QpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coe3Byb2plY3R9KTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaCgnY2hhbmdlUGFnZScsIHtcclxuICAgICAgICAgICAgcGFnZTogJ1Byb2plY3REZXRhaWwnLFxyXG4gICAgICAgICAgICBkYXRhOiAxLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9qZWN0TGlzdCgpOyIsImltcG9ydCBQdWJTdWIgZnJvbSBcIi4uL1B1YlN1YlwiO1xyXG5cclxuY2xhc3MgSGVhZGVyIHtcclxuICAgIHBhZ2VMaW5rcyA9IFtcclxuICAgICAgICB7bmFtZTogJ1Byb2plY3RzJyxwYWdlOiAnUHJvamVjdExpc3QnfVxyXG4gICAgXVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbGlua3MnKTtcclxuICAgICAgICBmb3IgKGxldCBwYWdlIG9mIHRoaXMucGFnZUxpbmtzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxpbmstaXRlbScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaXN0SXRlbUxpbmsuaHJlZiA9ICcjJztcclxuICAgICAgICAgICAgbGlzdEl0ZW1MaW5rLnRleHRDb250ZW50ID0gcGFnZS5uYW1lO1xyXG4gICAgICAgICAgICBsaXN0SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5vbkhlYWRlckxpbmtDbGljayhlLCBwYWdlKSk7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJdGVtTGluayk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsaW5rcy5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChsaW5rcyk7XHJcblxyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZWFkZXJMaW5rQ2xpY2soZSwgbmV3UGFnZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaCgnY2hhbmdlUGFnZScsIG5ld1BhZ2UucGFnZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWFkZXIoKTsiLCJpbXBvcnQgUHViU3ViIGZyb20gJy4vbW9kdWxlcy9QdWJTdWInO1xyXG5pbXBvcnQgeyBhZGRUb2RvSXRlbSwgZ2V0VG9kb0l0ZW1CeUlkLCBnZXRUb2RvSXRlbXMgfSBmcm9tICcuL21vZHVsZXMvVG9kb0l0ZW0vVG9kb0l0ZW1Db250cm9sbGVyJztcclxuaW1wb3J0IFRvZG9JdGVtRGV0YWlsIGZyb20gJy4vbW9kdWxlcy9Ub2RvSXRlbS9Ub2RvSXRlbURldGFpbCc7XHJcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tICcuL21vZHVsZXMvUHJvamVjdC9Qcm9qZWN0TGlzdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9tb2R1bGVzL0xheW91dC9oZWFkZXInO1xyXG5jb25zb2xlLmxvZygnVG9kb0xpc3QgYXBwIGxvYWRlZCcpO1xyXG5hZGRUb2RvSXRlbShcIlRlc3RcIiwgXCJUZXN0IERlc2NyaXB0aW9uXCIsIFwiMjAyMi0xMi0yOVwiKTtcclxuYWRkVG9kb0l0ZW0oXCJUZXN0MlwiLCBcIlRlc3QgRGVzY3JpcHRpb24gMlwiLCBcIjIwMjItMTItMzBcIik7XHJcbmNvbnNvbGUudGFibGUoZ2V0VG9kb0l0ZW1zKCkpO1xyXG5cclxuY29uc3QgcGFnZXMgPSB7XHJcbiAgICBcIlRvZG9JdGVtRGV0YWlsXCI6IFRvZG9JdGVtRGV0YWlsLFxyXG4gICAgXCJQcm9qZWN0TGlzdFwiOiBQcm9qZWN0TGlzdCxcclxufVxyXG5cclxuUHViU3ViLnN1YnNjcmliZSgnY2hhbmdlUGFnZScsIGNoYW5nZVBhZ2UpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChIZWFkZXIucmVuZGVyKCkpO1xyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5tYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQYWdlKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYgKCFkYXRhLnBhZ2UgfHwgIXBhZ2VzW2RhdGEucGFnZV0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHBhZ2VzW2RhdGEucGFnZV0ucmVuZGVyKGRhdGEuZGF0YSkpO1xyXG59XHJcblxyXG5jaGFuZ2VQYWdlKHtcclxuICAgIHBhZ2U6IFwiUHJvamVjdExpc3RcIlxyXG59KTtcclxuLy9jaGFuZ2VQYWdlKFRvZG9JdGVtRGV0YWlsLCAxKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJldmVudHMiLCJwdWJsaXNoIiwiZXZlbnQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGlzIiwibGlzdGVuZXIiLCJzdWJzY3JpYmUiLCJjYWxsYmFjayIsInB1c2giLCJ1bnN1YnNjcmliZSIsInJlbW92ZSIsImZpbmQiLCJUb2RvSXRlbSIsImNvbnN0cnVjdG9yIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsImlzQ29tcGxldGUiLCJ0b2RvSXRlbXMiLCJhZGRUb2RvSXRlbSIsIm5ld0lkIiwiYXJyIiwibGVuZ3RoIiwicmVkdWNlIiwicHJldmlvdXMiLCJpdGVtIiwidmFsdWUiLCJuZXdUb2RvSXRlbSIsInJlbmRlciIsInRvZG9JdGVtIiwiZ2V0VG9kb0l0ZW1CeUlkIiwidG9kb0l0ZW1EaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0b2RvSXRlbUhlYWRlciIsInRleHRDb250ZW50IiwidG9kb0l0ZW1Db250ZW50IiwiZGVzY3JpcHRpb25EaXYiLCJhcHBlbmRDaGlsZCIsImR1ZURhdGVEaXYiLCJpc0NvbXBsZXRlRGl2IiwicHJvamVjdHMiLCJuYW1lIiwiZ2V0UHJvamVjdHMiLCJwcm9qZWN0TGlzdENvbnRhaW5lckRpdiIsImNsYXNzTGlzdCIsImFkZCIsInByb2plY3RMaXN0SGVhZGVyIiwicHJvamVjdExpc3QiLCJwcm9qZWN0IiwicHJvamVjdExpc3RJdGVtIiwicHJvamVjdExpbmsiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvblByb2plY3RMaW5rQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2UiLCJwYWdlTGlua3MiLCJoZWFkZXIiLCJuYXYiLCJsaW5rcyIsImxpc3RJdGVtIiwibGlzdEl0ZW1MaW5rIiwib25IZWFkZXJMaW5rQ2xpY2siLCJuZXdQYWdlIiwidGFibGUiLCJwYWdlcyIsImNoYW5nZVBhZ2UiLCJib2R5IiwibWFpbkNvbnRlbnQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9