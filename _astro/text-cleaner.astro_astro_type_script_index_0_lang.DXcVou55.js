const e={removeExtraSpaces:!0,removeEmptyLines:!0,trimLines:!0,removeSpecialChars:!1,removeNumbers:!1,removePunctuation:!1,removeEmails:!1,removeUrls:!1,removeHtmlTags:!1,removeExtraLineBreaks:!0,convertToAscii:!1,removeDuplicateLines:!1,sortLines:!1,removeLeadingNumbers:!1,normalizeSpaces:!0};function p(n){if(!n)return"";let t=n;if(e.removeHtmlTags&&(t=t.replace(/<[^>]*>/g,"")),e.removeUrls&&(t=t.replace(/https?:\/\/[^\s]+/g,""),t=t.replace(/www\.[^\s]+/g,"")),e.removeEmails&&(t=t.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,"")),e.removeLeadingNumbers&&(t=t.replace(/^\d+\.?\s*/gm,"")),e.removeSpecialChars&&(t=t.replace(/[^\w\s.,!?;:'"()-]/g,"")),e.removeNumbers&&(t=t.replace(/\d+/g,"")),e.removePunctuation&&(t=t.replace(/[.,\/#!$%^&*:{}=\-_`~()]/g,""),t=t.replace(/['"]/g,"")),e.convertToAscii&&(t=t.replace(/[^\x00-\x7F]/g,"")),e.normalizeSpaces&&(t=t.replace(/\t/g," "),t=t.replace(/[ ]+/g," ")),e.removeExtraSpaces&&(t=t.replace(/ +/g," ")),e.trimLines&&(t=t.split(`
`).map(o=>o.trim()).join(`
`)),e.removeEmptyLines&&(t=t.split(`
`).filter(o=>o.trim()!=="").join(`
`)),e.removeExtraLineBreaks&&(t=t.replace(/\n{3,}/g,`

`)),e.removeDuplicateLines){const o=t.split(`
`);t=[...new Set(o)].join(`
`)}return e.sortLines&&(t=t.split(`
`).sort((r,a)=>r.localeCompare(a)).join(`
`)),t.trim()}function c(){const n=document.getElementById("options-container");n&&(n.innerHTML="",Object.entries(e).forEach(([t,o])=>{const s=document.createElement("label");s.className="flex items-center space-x-2 text-sm";const r=document.createElement("input");r.type="checkbox",r.checked=o,r.className="rounded border-gray-300 text-blue-600 focus:ring-blue-500",r.addEventListener("change",()=>{e[t]=r.checked,i()});const a=document.createElement("span");a.className="text-sm",a.textContent=t.replace(/([A-Z])/g," $1").replace(/^./,l=>l.toUpperCase()),s.appendChild(r),s.appendChild(a),n.appendChild(s)}))}function i(){const n=document.getElementById("input-text"),t=document.getElementById("output-text"),o=document.getElementById("statistics"),s=document.getElementById("output-actions");if(!n||!t)return;const r=n.value,a=p(r);if(t.value=a,r){o?.classList.remove("hidden");const l=r.length,m=a.length,u=l-m,d=l>0?Math.round(u/l*100):0;document.getElementById("stat-original").textContent=l.toString(),document.getElementById("stat-cleaned").textContent=m.toString(),document.getElementById("stat-removed").textContent=u.toString(),document.getElementById("stat-reduction").textContent=d+"%"}else o?.classList.add("hidden");a&&s?(s.innerHTML=`
        <button
          id="swap-btn"
          class="text-sm bg-green-100 dark:bg-green-900/20 hover:bg-green-200 dark:hover:bg-green-800/30 text-green-700 dark:text-green-300 px-3 py-1 rounded transition-colors"
        >
          ↑ Use as Input
        </button>
        <button
          id="copy-btn"
          class="text-sm bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded transition-colors"
        >
          Copy
        </button>
      `,document.getElementById("swap-btn")?.addEventListener("click",y),document.getElementById("copy-btn")?.addEventListener("click",L)):s&&(s.innerHTML="")}function v(){Object.keys(e).forEach(n=>{e[n]=!1}),e.removeExtraSpaces=!0,e.removeEmptyLines=!0,e.trimLines=!0,e.removeExtraLineBreaks=!0,e.normalizeSpaces=!0,c(),i()}function E(){Object.keys(e).forEach(n=>{e[n]=!1}),e.removeHtmlTags=!0,e.removeUrls=!0,e.removeEmails=!0,e.removeExtraSpaces=!0,e.removeEmptyLines=!0,e.trimLines=!0,c(),i()}function g(){Object.keys(e).forEach(n=>{e[n]=!1}),e.removeSpecialChars=!0,e.removeNumbers=!0,e.removePunctuation=!0,e.removeExtraSpaces=!0,e.removeEmptyLines=!0,e.trimLines=!0,c(),i()}function f(){e.removeExtraSpaces=!0,e.removeEmptyLines=!0,e.trimLines=!0,e.removeSpecialChars=!1,e.removeNumbers=!1,e.removePunctuation=!1,e.removeEmails=!1,e.removeUrls=!1,e.removeHtmlTags=!1,e.removeExtraLineBreaks=!0,e.convertToAscii=!1,e.removeDuplicateLines=!1,e.sortLines=!1,e.removeLeadingNumbers=!1,e.normalizeSpaces=!0,c(),i()}function x(){const n=`    This is a sample text with extra    spaces.

<p>Some HTML tags</p> and http://example.com URLs.

1. First item with leading number
2. Second item

Contact us at email@example.com for more info!!!

Some special characters: @#$%^&*()

    Another line with    multiple   spaces...


Extra empty lines above and below.

Duplicate line
Duplicate line
Another line
`,t=document.getElementById("input-text");t&&(t.value=n,i())}function b(){const n=document.getElementById("input-text"),t=document.getElementById("output-text");n&&(n.value=""),t&&(t.value=""),i()}function L(){const n=document.getElementById("output-text");n&&navigator.clipboard.writeText(n.value)}function y(){const n=document.getElementById("input-text"),t=document.getElementById("output-text");n&&t&&(n.value=t.value,i())}document.addEventListener("DOMContentLoaded",()=>{c(),document.getElementById("input-text")?.addEventListener("input",i),document.getElementById("preset-basic")?.addEventListener("click",v),document.getElementById("preset-web")?.addEventListener("click",E),document.getElementById("preset-text")?.addEventListener("click",g),document.getElementById("reset-options")?.addEventListener("click",f),document.getElementById("load-sample")?.addEventListener("click",x),document.getElementById("clear-all")?.addEventListener("click",b)});
