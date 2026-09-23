let r=[],c=[];const C={scholar:"https://scholar.google.com/scholar?q=",pubmed:"https://pubmed.ncbi.nlm.nih.gov/?term=",arxiv:"https://arxiv.org/search/?query=",jstor:"https://www.jstor.org/action/doBasicSearch?Query=",ieee:"https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=",acm:"https://dl.acm.org/action/doSearch?AllField=",eric:"https://eric.ed.gov/?q=",semantic:"https://www.semanticscholar.org/search?q=",researchgate:"https://www.researchgate.net/search/publication?q=",sciencedirect:"https://www.sciencedirect.com/search?qs="},f=document.getElementById("search-query"),k=document.querySelectorAll(".search-engine-btn"),x=document.querySelectorAll(".tab-btn"),j=document.querySelectorAll(".tab-content"),p=document.getElementById("source-title"),b=document.getElementById("source-authors"),h=document.getElementById("source-year"),E=document.getElementById("source-type"),S=document.getElementById("source-url"),I=document.getElementById("source-tags"),B=document.getElementById("source-notes"),q=document.getElementById("add-source-btn"),L=document.getElementById("sources-list"),A=document.getElementById("source-count"),m=document.getElementById("filter-sources"),T=document.getElementById("filter-type"),H=document.getElementById("export-csv-btn"),N=document.getElementById("clear-sources-btn"),O=document.getElementById("stats-total"),D=document.getElementById("stats-journal"),M=document.getElementById("stats-books"),U=document.getElementById("stats-conference"),R=document.getElementById("stats-other"),y=document.getElementById("tags-cloud"),w=document.getElementById("recent-sources");function J(){const t=localStorage.getItem("researchHelperSources");t&&(r=JSON.parse(t),c=[...r],u(),i())}function v(){localStorage.setItem("researchHelperSources",JSON.stringify(r))}k.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.engine,n=f.value.trim();if(!n){alert("Please enter a search query"),f.focus();return}const s=C[e]+encodeURIComponent(n);window.open(s,"_blank")})});x.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.tab;x.forEach(n=>n.classList.remove("active")),t.classList.add("active"),j.forEach(n=>n.classList.add("hidden")),document.getElementById(`${e}-tab`).classList.remove("hidden"),e==="organize"&&i()})});q.addEventListener("click",()=>{const t=p.value.trim();if(!t){alert("Please enter a title"),p.focus();return}const e={id:Date.now(),title:t,authors:b.value.trim(),year:h.value?parseInt(h.value):null,type:E.value,url:S.value.trim(),tags:I.value.split(",").map(n=>n.trim()).filter(n=>n),notes:B.value.trim(),dateAdded:new Date().toISOString()};r.unshift(e),c=[...r],v(),u(),i(),p.value="",b.value="",h.value="",E.value="journal",S.value="",I.value="",B.value="",alert("Source added successfully!")});function g(){const t=m.value.toLowerCase(),e=T.value;c=r.filter(n=>{const s=!t||n.title.toLowerCase().includes(t)||n.authors.toLowerCase().includes(t)||n.tags.some(d=>d.toLowerCase().includes(t)),a=!e||n.type===e;return s&&a}),u()}m.addEventListener("input",g);T.addEventListener("change",g);function u(){if(A.textContent=r.length,c.length===0){L.innerHTML='<p class="text-gray-500 dark:text-gray-400 text-center py-8">No sources found</p>';return}const t=c.map(e=>{const n={journal:"Journal Article",book:"Book",conference:"Conference Paper",thesis:"Thesis",website:"Website",other:"Other"};return`
        <div class="source-card">
          <div class="flex justify-between items-start mb-2">
            <h4 class="font-semibold text-lg">${l(e.title)}</h4>
            <button class="delete-source-btn text-red-600 hover:text-red-700 px-2" data-id="${e.id}">
              <span class="text-xl">×</span>
            </button>
          </div>

          ${e.authors?`<p class="text-sm text-gray-600 dark:text-gray-400 mb-1">${l(e.authors)}</p>`:""}

          <div class="flex items-center gap-3 mb-2 text-sm">
            <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">${n[e.type]}</span>
            ${e.year?`<span class="text-gray-600 dark:text-gray-400">${e.year}</span>`:""}
          </div>

          ${e.tags.length>0?`
            <div class="flex flex-wrap gap-1 mb-2">
              ${e.tags.map(s=>`<span class="tag">${l(s)}</span>`).join("")}
            </div>
          `:""}

          ${e.notes?`<p class="text-sm text-gray-600 dark:text-gray-400 mb-2">${l(e.notes)}</p>`:""}

          ${e.url?`
            <a href="${l(e.url)}" target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              View Source →
            </a>
          `:""}
        </div>
      `}).join("");L.innerHTML=t,document.querySelectorAll(".delete-source-btn").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.dataset.id);P(n)})}),document.querySelectorAll(".tag").forEach(e=>{e.addEventListener("click",()=>{m.value=e.textContent,g(),document.querySelector('[data-tab="sources"]').click()})})}function P(t){confirm("Are you sure you want to delete this source?")&&(r=r.filter(e=>e.id!==t),c=c.filter(e=>e.id!==t),v(),u(),i())}N.addEventListener("click",()=>{confirm("Are you sure you want to delete all sources? This cannot be undone.")&&(r=[],c=[],v(),u(),i())});H.addEventListener("click",()=>{if(r.length===0){alert("No sources to export");return}const t=["Title","Authors","Year","Type","URL","Tags","Notes","Date Added"],e=r.map(o=>[o.title,o.authors,o.year||"",o.type,o.url,o.tags.join("; "),o.notes,new Date(o.dateAdded).toLocaleDateString()]),n=[t.join(","),...e.map(o=>o.map($=>`"${String($).replace(/"/g,'""')}"`).join(","))].join(`
`),s=new Blob([n],{type:"text/csv"}),a=URL.createObjectURL(s),d=document.createElement("a");d.href=a,d.download=`research-sources-${new Date().toISOString().split("T")[0]}.csv`,d.click(),URL.revokeObjectURL(a)});function i(){O.textContent=r.length,D.textContent=r.filter(s=>s.type==="journal").length,M.textContent=r.filter(s=>s.type==="book").length,U.textContent=r.filter(s=>s.type==="conference").length,R.textContent=r.filter(s=>["thesis","website","other"].includes(s.type)).length;const t={};r.forEach(s=>{s.tags.forEach(a=>{t[a]=(t[a]||0)+1})});const e=Object.entries(t).sort((s,a)=>a[1]-s[1]).slice(0,15);e.length===0?y.innerHTML='<p class="text-gray-500 dark:text-gray-400">No tags yet</p>':(y.innerHTML=e.map(([s,a])=>`<span class="tag">${l(s)} (${a})</span>`).join(""),y.querySelectorAll(".tag").forEach(s=>{s.addEventListener("click",()=>{const a=s.textContent.replace(/\s*\(\d+\)$/,"");m.value=a,g(),document.querySelector('[data-tab="sources"]').click()})}));const n=r.slice(0,5);n.length===0?w.innerHTML='<p class="text-gray-500 dark:text-gray-400">No sources yet</p>':w.innerHTML=n.map(s=>`
        <div class="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
          <div class="flex-1">
            <p class="font-medium text-sm">${l(s.title)}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">${s.authors||"No author"}</p>
          </div>
          <span class="text-xs text-gray-400">${new Date(s.dateAdded).toLocaleDateString()}</span>
        </div>
      `).join("")}function l(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}f.addEventListener("keypress",t=>{t.key==="Enter"&&k[0].click()});J();
