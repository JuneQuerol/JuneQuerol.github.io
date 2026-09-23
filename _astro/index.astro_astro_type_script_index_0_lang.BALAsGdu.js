let r=!0,p=null;function y(t){if(!t.trim())return"";let e=t;e=e.replace(/^###### (.*$)/gim,"<h6>$1</h6>"),e=e.replace(/^##### (.*$)/gim,"<h5>$1</h5>"),e=e.replace(/^#### (.*$)/gim,"<h4>$1</h4>"),e=e.replace(/^### (.*$)/gim,"<h3>$1</h3>"),e=e.replace(/^## (.*$)/gim,"<h2>$1</h2>"),e=e.replace(/^# (.*$)/gim,"<h1>$1</h1>"),e=e.replace(/```([\s\S]*?)```/g,"<pre><code>$1</code></pre>"),e=e.replace(/`([^`]*)`/g,"<code>$1</code>"),e=e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/__(.*?)__/g,"<strong>$1</strong>"),e=e.replace(/\*((?!\*).+?)\*/g,"<em>$1</em>"),e=e.replace(/_((?!_).+?)_/g,"<em>$1</em>"),e=e.replace(/~~(.*?)~~/g,"<del>$1</del>"),e=e.replace(/\[([^\]]*)\]\(([^)]*)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),e=e.replace(/!\[([^\]]*)\]\(([^)]*)\)/g,'<img src="$2" alt="$1" />'),e=e.replace(/^---$/gim,"<hr>"),e=e.replace(/^\*\*\*$/gim,"<hr>"),e=e.replace(/^> (.*)$/gim,"<blockquote>$1</blockquote>");const l=e.split(`
`);let n=!1,d=!1,o=[];for(let a=0;a<l.length;a++){const c=l[a],m=/^[\s]*[-*] (.*)/.test(c),u=/^[\s]*\d+\. (.*)/.test(c);m&&!n?(o.push("<ul>"),n=!0):!m&&n&&(o.push("</ul>"),n=!1),u&&!d?(o.push("<ol>"),d=!0):!u&&d&&(o.push("</ol>"),d=!1),m?o.push(c.replace(/^[\s]*[-*] (.*)/,"<li>$1</li>")):u?o.push(c.replace(/^[\s]*\d+\. (.*)/,"<li>$1</li>")):o.push(c)}return n&&o.push("</ul>"),d&&o.push("</ol>"),e=o.join(`
`),e=e.replace(/\n\n/g,"</p><p>"),e=e.replace(/^\s*/,"<p>").replace(/\s*$/,"</p>"),e=e.replace(/<p><\/p>/g,""),e=e.replace(/<p>(<h[1-6]>)/g,"$1"),e=e.replace(/(<\/h[1-6]>)<\/p>/g,"$1"),e=e.replace(/<p>(<ul>|<ol>|<blockquote>|<pre>)/g,"$1"),e=e.replace(/(<\/ul>|<\/ol>|<\/blockquote>|<\/pre>)<\/p>/g,"$1"),e=e.replace(/<p>(<hr>)<\/p>/g,"$1"),e.trim()}function i(){const t=document.getElementById("markdownInput").value,e=document.getElementById("convertingIndicator");e.classList.remove("hidden"),p&&clearTimeout(p),p=window.setTimeout(()=>{const l=y(t);document.getElementById("htmlOutput").value=l,s(),h(l),v(),e.classList.add("hidden")},300)}function s(){const t=document.getElementById("markdownInput").value,e=document.getElementById("htmlOutput").value;document.getElementById("mdLineCount").textContent=`${t.split(`
`).length} lines`,document.getElementById("mdCharCount").textContent=`${t.length} chars`,document.getElementById("htmlLineCount").textContent=`${e.split(`
`).length} lines`,document.getElementById("htmlCharCount").textContent=`${e.length} chars`}function h(t){const e=document.getElementById("livePreview");t?(e.innerHTML=t,e.style.fontSize="14px",e.style.lineHeight="1.6"):e.innerHTML=`
        <div class="flex items-center justify-center h-full text-muted-foreground">
          <div class="text-center">
            <span class="text-4xl mb-4 block">📄</span>
            <p>Preview will appear here</p>
            <p class="text-sm">Enter markdown text to see the rendered HTML</p>
          </div>
        </div>
      `}function v(){const e=document.getElementById("htmlOutput").value.length>0;document.getElementById("copyHtmlBtn").classList.toggle("hidden",!e),document.getElementById("downloadHtmlBtn").classList.toggle("hidden",!e),document.getElementById("downloadFullHtmlBtn").classList.toggle("hidden",!e)}function g(t){const e=document.getElementById("editorContainer"),l=document.getElementById("mdPanel"),n=document.getElementById("htmlPanel"),d=document.getElementById("previewPanel");document.querySelectorAll(".viewModeBtn").forEach(a=>{a.classList.remove("bg-white","dark:bg-gray-600","text-cyan-600","shadow-sm"),a.classList.add("text-gray-600","dark:text-gray-300")});const o=document.getElementById(`view${t.charAt(0).toUpperCase()+t.slice(1)}`);o.classList.add("bg-white","dark:bg-gray-600","text-cyan-600","shadow-sm"),o.classList.remove("text-gray-600","dark:text-gray-300"),t==="split"?(e.className="grid lg:grid-cols-2 gap-6",l.classList.remove("hidden"),n.classList.remove("hidden"),d.classList.add("hidden")):t==="preview"?(e.className="grid grid-cols-1 gap-6",l.classList.add("hidden"),n.classList.add("hidden"),d.classList.remove("hidden"),d.classList.remove("lg:col-span-2")):(e.className="grid grid-cols-1 gap-6",l.classList.remove("hidden"),n.classList.remove("hidden"),d.classList.add("hidden"))}function f(){const t=`# Markdown to HTML Converter

Welcome to our **powerful** and *easy-to-use* Markdown to HTML converter!

## Features

- **Real-time conversion** with live preview
- Support for all major markdown syntax
- Copy and download functionality
- Clean, semantic HTML output

### Supported Syntax

1. Headers (H1-H6)
2. **Bold** and *italic* text
3. ~~Strikethrough~~ text
4. \`Inline code\` and code blocks
5. [Links](https://example.com) and images
6. Lists (ordered and unordered)
7. Tables and blockquotes

#### Code Example

\`\`\`
function convertMarkdown(text) {
  return markdownToHtml(text);
}
\`\`\`

#### Blockquote

> This is a blockquote example.
> It can span multiple lines.

---

**Try it out!** Edit this markdown and see the HTML output update in real-time.`;document.getElementById("markdownInput").value=t,r&&i()}document.getElementById("markdownInput")?.addEventListener("input",()=>{r?i():s()});document.getElementById("autoConvert")?.addEventListener("change",t=>{r=t.target.checked;const e=document.getElementById("convertBtn");r?(e.classList.add("hidden"),i()):e.classList.remove("hidden")});document.getElementById("convertBtn")?.addEventListener("click",i);document.getElementById("viewSplit")?.addEventListener("click",()=>g("split"));document.getElementById("viewPreview")?.addEventListener("click",()=>g("preview"));document.getElementById("viewCode")?.addEventListener("click",()=>g("code"));document.getElementById("loadSampleBtn")?.addEventListener("click",f);document.getElementById("clearBtn")?.addEventListener("click",()=>{document.getElementById("markdownInput").value="",document.getElementById("htmlOutput").value="",s(),h(""),v()});document.getElementById("copyHtmlBtn")?.addEventListener("click",()=>{const t=document.getElementById("htmlOutput").value;navigator.clipboard.writeText(t).then(()=>{alert("HTML code copied to clipboard!")})});document.getElementById("downloadHtmlBtn")?.addEventListener("click",()=>{const t=document.getElementById("htmlOutput").value,e=new Blob([t],{type:"text/html"}),l=URL.createObjectURL(e),n=document.createElement("a");n.href=l,n.download="converted.html",n.click(),URL.revokeObjectURL(l)});document.getElementById("downloadFullHtmlBtn")?.addEventListener("click",()=>{const e=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Converted Markdown</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        h1, h2, h3, h4, h5, h6 { color: #333; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 4px; }
        pre { background: #f4f4f4; padding: 15px; border-radius: 8px; overflow-x: auto; }
        blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 20px; color: #666; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
        th { background-color: #f8f9fa; }
        img { max-width: 100%; height: auto; }
        a { color: #007bff; }
        hr { border: none; height: 1px; background: #ddd; }
    </style>
</head>
<body>
${document.getElementById("htmlOutput").value}
</body>
</html>`,l=new Blob([e],{type:"text/html"}),n=URL.createObjectURL(l),d=document.createElement("a");d.href=n,d.download="converted-full.html",d.click(),URL.revokeObjectURL(n)});s();
