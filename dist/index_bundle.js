(()=>{"use strict";class t{constructor(t,e,n,o){this.id=t,this.title=e,this.description=n,this.dueDate=o,this.isComplete=!1}}const e=[];function n(n,o,i){const s=0===(c=e).length?1:c.reduce(((t,e)=>t.id<e.value?e:t)).id+1;var c;const d=new t(s,n,o,i);return e.push(d),d}console.log("TodoList app loaded"),n("Test","Test Description","2022-12-29"),n("Test2","Test Description 2","2022-12-30"),console.table(e);const o=document.createElement("div");o.classList.add("main-content"),document.body.appendChild(o),o.appendChild(function(t){const e=document.createElement("div"),n=document.createElement("h2");n.textContent=t.title;const o=document.createElement("div");return e.appendChild(n),e.appendChild(o),console.log(t),e}((1,e.find((t=>1===t.id)))))})();