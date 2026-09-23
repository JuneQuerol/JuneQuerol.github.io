let s=[];function v(){const e=document.getElementById("leftText").value,o=document.getElementById("rightText").value,t=document.getElementById("ignoreWhitespace").checked,d=document.getElementById("ignoreCase").checked;document.getElementById("showLineNumbers").checked;let i=e.split(`
`),a=o.split(`
`);const l=[...i],r=[...a];t&&(i=i.map(n=>n.trim()),a=a.map(n=>n.trim())),d&&(i=i.map(n=>n.toLowerCase()),a=a.map(n=>n.toLowerCase()));const m=[],c=Math.max(i.length,a.length);for(let n=0;n<c;n++){const u=n<i.length?i[n]:"",h=n<a.length?a[n]:"",y=n<l.length?l[n]:"",E=n<r.length?r[n]:"";let f="unchanged";u===""&&h!==""?f="added":u!==""&&h===""?f="removed":u!==h&&(f="modified"),m.push({line:n+1,type:f,leftContent:y,rightContent:E,leftLineNumber:n<l.length?n+1:void 0,rightLineNumber:n<r.length?n+1:void 0})}s=m,L(),x()}function p(e){switch(e){case"added":return"bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500";case"removed":return"bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500";case"modified":return"bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500";default:return"bg-gray-50 dark:bg-gray-800"}}function L(){const e=document.getElementById("showLineNumbers").checked,o=document.getElementById("leftDiff"),t=document.getElementById("rightDiff");o.innerHTML="",t.innerHTML="",s.forEach((d,i)=>{const a=document.createElement("div");if(a.className=`flex ${p(d.type)} ${d.type==="added"?"opacity-40":""}`,e){const c=document.createElement("div");c.className="w-12 flex-shrink-0 text-xs text-muted-foreground p-2 text-right border-r",c.textContent=d.leftLineNumber?.toString()||"",a.appendChild(c)}const l=document.createElement("div");l.className="flex-1 p-2 font-mono text-sm whitespace-pre-wrap break-words",l.textContent=d.leftContent||(d.type==="added"?" ":""),a.appendChild(l),o.appendChild(a);const r=document.createElement("div");if(r.className=`flex ${p(d.type)} ${d.type==="removed"?"opacity-40":""}`,e){const c=document.createElement("div");c.className="w-12 flex-shrink-0 text-xs text-muted-foreground p-2 text-right border-r",c.textContent=d.rightLineNumber?.toString()||"",r.appendChild(c)}const m=document.createElement("div");m.className="flex-1 p-2 font-mono text-sm whitespace-pre-wrap break-words",m.textContent=d.rightContent||(d.type==="removed"?" ":""),r.appendChild(m),t.appendChild(r)}),document.getElementById("diffPanel").classList.remove("hidden")}function x(){const e={totalLines:s.length,addedLines:0,removedLines:0,modifiedLines:0,unchangedLines:0};s.forEach(o=>{switch(o.type){case"added":e.addedLines++;break;case"removed":e.removedLines++;break;case"modified":e.modifiedLines++;break;case"unchanged":e.unchangedLines++;break}}),document.getElementById("stat-total").textContent=e.totalLines.toString(),document.getElementById("stat-added").textContent=e.addedLines.toString(),document.getElementById("stat-removed").textContent=e.removedLines.toString(),document.getElementById("stat-modified").textContent=e.modifiedLines.toString(),document.getElementById("stat-unchanged").textContent=e.unchangedLines.toString(),document.getElementById("statsPanel").classList.remove("hidden"),document.getElementById("copyReportBtn").classList.remove("hidden")}function g(){const e=document.getElementById("leftText").value,o=document.getElementById("rightText").value;document.getElementById("leftLineCount").textContent=`${e.split(`
`).length} lines`,document.getElementById("rightLineCount").textContent=`${o.split(`
`).length} lines`}function B(){const e=document.getElementById("leftText"),o=document.getElementById("rightText"),t=e.value;e.value=o.value,o.value=t,g()}function I(){document.getElementById("leftText").value="",document.getElementById("rightText").value="",s=[],document.getElementById("diffPanel").classList.add("hidden"),document.getElementById("statsPanel").classList.add("hidden"),document.getElementById("copyReportBtn").classList.add("hidden"),g()}function b(){const e=`Welcome to our website!
We offer the best services.
Our team is experienced.
Contact us for more information.
Thank you for visiting.`,o=`Welcome to our amazing website!
We offer the best quality services.
Our team is highly experienced.
Please contact us for more details.
Thank you for your visit.`;document.getElementById("leftText").value=e,document.getElementById("rightText").value=o,g()}function C(){const e=document.getElementById("ignoreWhitespace").checked,o=document.getElementById("ignoreCase").checked;let t=`Text Diff Report
`;t+=`Generated on: ${new Date().toLocaleString()}
`,t+=`Ignore Whitespace: ${e}
`,t+=`Ignore Case: ${o}

`;const d={totalLines:s.length,addedLines:0,removedLines:0,modifiedLines:0,unchangedLines:0};return s.forEach(i=>{switch(i.type){case"added":d.addedLines++;break;case"removed":d.removedLines++;break;case"modified":d.modifiedLines++;break;case"unchanged":d.unchangedLines++;break}}),t+=`Statistics:
`,t+=`- Total Lines: ${d.totalLines}
`,t+=`- Added Lines: ${d.addedLines}
`,t+=`- Removed Lines: ${d.removedLines}
`,t+=`- Modified Lines: ${d.modifiedLines}
`,t+=`- Unchanged Lines: ${d.unchangedLines}

`,t+=`Detailed Diff:
`,t+=`${"=".repeat(50)}

`,s.forEach(i=>{i.type!=="unchanged"&&(t+=`Line ${i.line}: ${i.type.toUpperCase()}
`,(i.type==="removed"||i.type==="modified")&&(t+=`- ${i.leftContent}
`),(i.type==="added"||i.type==="modified")&&(t+=`+ ${i.rightContent}
`),t+=`
`)}),t}function k(){const e=C();navigator.clipboard.writeText(e).then(()=>{alert("Diff report copied to clipboard!")})}document.getElementById("compareBtn")?.addEventListener("click",v);document.getElementById("swapBtn")?.addEventListener("click",B);document.getElementById("clearBtn")?.addEventListener("click",I);document.getElementById("loadSampleBtn")?.addEventListener("click",b);document.getElementById("copyReportBtn")?.addEventListener("click",k);document.getElementById("leftText")?.addEventListener("input",g);document.getElementById("rightText")?.addEventListener("input",g);document.getElementById("showLineNumbers")?.addEventListener("change",()=>{s.length>0&&L()});g();
