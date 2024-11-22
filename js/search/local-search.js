function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _createForOfIteratorHelper(t,e){var n,r,o,a,i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return o=!(r=!0),{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){o=!0,n=t},f:function(){try{r||null==i.return||i.return()}finally{if(o)throw n}}};if(Array.isArray(t)||(i=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return i&&(t=i),a=0,{s:e=function(){},n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var n;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(n="Object"===(n={}.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);if("object"!=_typeof(n=n.call(t,e||"default")))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}var LocalSearch=_createClass(function t(e){var n=void 0===(n=e.path)?"":n,r=void 0!==(r=e.unescape)&&r,e=void 0===(e=e.top_n_per_article)?1:e;_classCallCheck(this,t),this.path=n,this.unescape=r,this.top_n_per_article=e,this.isfetched=!1,this.datas=null},[{key:"getIndexByWord",value:function(t,a){var i=this,l=2<arguments.length&&void 0!==arguments[2]&&arguments[2],c=[],s=new Set;return l||(a=a.toLowerCase()),t.forEach(function(t){i.unescape&&((e=document.createElement("div")).innerText=t,t=e.innerHTML);var e,n=t.length;if(0!==n){var r,o=0;for(l||(t=t.toLowerCase());-1<(r=a.indexOf(t,o));)c.push({position:r,word:t}),s.add(t),o=r+n}}),c.sort(function(t,e){return t.position!==e.position?t.position-e.position:e.word.length-t.word.length}),[c,s]}},{key:"mergeIntoSlice",value:function(t,e,n){for(var r=n[0],o=r.position,a=r.word,i=[],l=new Set;o+a.length<=e&&0!==n.length;){l.add(a),i.push({position:o,length:a.length});var c=o+a.length;for(n.shift();0!==n.length&&(o=(r=n[0]).position,a=r.word,o<c);)n.shift()}return{hits:i,start:t,end:e,count:l.size}}},{key:"highlightKeyword",value:function(t,e){var n,r="",o=e.start,a=_createForOfIteratorHelper(e.hits);try{for(a.s();!(n=a.n()).done;){var i=n.value,l=i.position,c=i.length;r+=t.substring(o,l),o=l+c,r+='<mark class="search-keyword">'.concat(t.substr(l,c),"</mark>")}}catch(t){a.e(t)}finally{a.f()}return r+t.substring(o,e.end)}},{key:"getResultItems",value:function(h){var d=this,y=[];return this.datas.forEach(function(t){var e=t.title,n=t.content,t=t.url,r=(o=_slicedToArray(d.getIndexByWord(h,e),2))[0],o=o[1],a=(i=_slicedToArray(d.getIndexByWord(h,n),2))[0],i=i[1],o=new Set([].concat(_toConsumableArray(o),_toConsumableArray(i))).size;if(0!==(i=r.length+a.length)){for(var l=[],c=(0!==r.length&&l.push(d.mergeIntoSlice(0,e.length,r)),[]);0!==a.length;){var s=a[0].position,u=Math.max(0,s-20),s=Math.min(n.length,s+100);c.push(d.mergeIntoSlice(u,s,a))}c.sort(function(t,e){return t.count!==e.count?e.count-t.count:t.hits.length!==e.hits.length?e.hits.length-t.hits.length:t.start-e.start}),0<=(r=parseInt(d.top_n_per_article,10))&&(c=c.slice(0,r));var f="";(t=new URL(t,location.origin)).searchParams.append("highlight",h.join(" ")),f+=0!==l.length?'<li class="local-search-hit-item"><a href="'.concat(t.href,'"><span class="search-result-title">').concat(d.highlightKeyword(e,l[0]),"</span>"):'<li class="local-search-hit-item"><a href="'.concat(t.href,'"><span class="search-result-title">').concat(e,"</span>"),c.forEach(function(t){f+='<p class="search-result">'.concat(d.highlightKeyword(n,t),"...</p></a>")}),f+="</li>",y.push({item:f,id:y.length,hitCount:i,includedCount:o})}}),y}},{key:"fetchData",value:function(){var e=this,n=!this.path.endsWith("json");fetch(this.path).then(function(t){return t.text()}).then(function(t){e.isfetched=!0,e.datas=n?_toConsumableArray((new DOMParser).parseFromString(t,"text/xml").querySelectorAll("entry")).map(function(t){return{title:t.querySelector("title").textContent,content:t.querySelector("content").textContent,url:t.querySelector("url").textContent}}):JSON.parse(t),e.datas=e.datas.filter(function(t){return t.title}).map(function(t){return t.title=t.title.trim(),t.content=t.content?t.content.trim().replace(/<[^>]+>/g,""):"",t.url=decodeURIComponent(t.url).replace(/\/{2,}/g,"/"),t}),window.dispatchEvent(new Event("search:loaded"))})}},{key:"highlightText",value:function(e,t,n){var r,o=e.nodeValue,a=t.start,i=[],l=_createForOfIteratorHelper(t.hits);try{for(l.s();!(r=l.n()).done;){var c=r.value,s=c.position,u=c.length,f=document.createTextNode(o.substring(a,s)),a=s+u,h=document.createElement("mark");h.className=n,h.appendChild(document.createTextNode(o.substr(s,u))),i.push(f,h)}}catch(t){l.e(t)}finally{l.f()}e.nodeValue=o.substring(a,t.end),i.forEach(function(t){e.parentNode.insertBefore(t,e)})}},{key:"highlightSearchWords",value:function(t){var n=this,e=new URL(location.href).searchParams.get("highlight"),r=e?e.split(" "):[];if(r.length&&t){for(var o=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,null),a=[];o.nextNode();)o.currentNode.parentNode.matches("button, select, textarea, .mermaid")||a.push(o.currentNode);a.forEach(function(t){var e=_slicedToArray(n.getIndexByWord(r,t.nodeValue),1)[0];e.length&&(e=n.mergeIntoSlice(0,t.nodeValue.length,e),n.highlightText(t,e,"search-keyword"))})}}}]);window.addEventListener("load",function(){function t(){btf.overflowPaddingR.add(),btf.animateIn(h,"to_show 0.5s"),btf.animateIn(d,"titleScale 0.5s"),setTimeout(function(){i.focus()},300),f||(a.isfetched||a.fetchData(),i.addEventListener("input",u),f=!0),document.addEventListener("keydown",function t(e){"Escape"===e.code&&(p(),document.removeEventListener("keydown",t))}),y(),window.addEventListener("resize",y)}function e(){btf.addEventListenerPjax(document.querySelector("#search-button > .search"),"click",t)}var n=GLOBAL_CONFIG.localSearch,r=n.path,o=n.languages,a=new LocalSearch({path:r,top_n_per_article:n.top_n_per_article,unescape:n.unescape}),i=document.querySelector("#local-search-input input"),l=document.getElementById("local-search-stats-wrap"),c=document.getElementById("loading-status"),s=!r.endsWith("json"),u=function(){var t,e,n,r;a.isfetched&&(r=i.value.trim().toLowerCase(),""!==(r=s?r.replace(/</g,"&lt;").replace(/>/g,"&gt;"):r)&&(c.innerHTML='<i class="fas fa-spinner fa-pulse"></i>'),n=r.split(/[-\s]+/),t=document.getElementById("local-search-results"),e=[],0<r.length&&(e=a.getResultItems(n)),1===n.length&&""===n[0]?(t.textContent="",l.textContent=""):0===e.length?(t.textContent="",(n=document.createElement("div")).className="search-result-stats",n.textContent=o.hits_empty.replace(/\$\{query}/,r),l.innerHTML=n.outerHTML):(e.sort(function(t,e){return t.includedCount!==e.includedCount?e.includedCount-t.includedCount:t.hitCount!==e.hitCount?e.hitCount-t.hitCount:e.id-t.id}),r=o.hits_stats.replace(/\$\{hits}/,e.length),t.innerHTML='<ol class="search-result-list">'.concat(e.map(function(t){return t.item}).join(""),"</ol>"),l.innerHTML='<hr><div class="search-result-stats">'.concat(r,"</div>"),window.pjax&&window.pjax.refresh(t)),c.textContent="")},f=!1,h=document.getElementById("search-mask"),d=document.querySelector("#local-search .search-dialog"),y=function(){window.innerWidth<768&&d.style.setProperty("--search-height",window.innerHeight+"px")},p=function(){btf.overflowPaddingR.remove(),btf.animateOut(d,"search_close .5s"),btf.animateOut(h,"to_hide 0.5s"),window.removeEventListener("resize",y)};window.addEventListener("search:loaded",function(){var t=document.getElementById("loading-database");t.nextElementSibling.style.display="block",t.remove()}),e(),document.querySelector("#local-search .search-close-button").addEventListener("click",p),h.addEventListener("click",p),GLOBAL_CONFIG.localSearch.preload&&a.fetchData(),a.highlightSearchWords(document.getElementById("article-container")),window.addEventListener("pjax:complete",function(){btf.isHidden(h)||p(),a.highlightSearchWords(document.getElementById("article-container")),e()})});