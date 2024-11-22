function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(()=>{for(var t,i,u,D=Math.abs,d=Math.sin,f=Math.cos,A=Math.max,I=Math.min,N=Math.ceil,m=Math.sqrt,g=Math.pow,n={},a={},o={0:"0,",1:"17,",2:"34,",3:"51,",4:"68,",5:"85,",6:"102,",7:"119,",8:"136,",9:"153,",a:"170,",A:"170,",b:"187,",B:"187,",c:"204,",C:"204,",d:"221,",D:"221,",e:"238,",E:"238,",f:"255,",F:"255,"},c=document,p={},e=0;e<256;++e)t=e.toString(16),a[t=e<16?"0"+t:t]=a[t.toUpperCase()]=e.toString()+",";function w(t){return void 0!==t}function x(t){return"object"==_typeof(t)&&null!=t}function v(t,i,e){return isNaN(t)?e:I(e,A(i,t))}function y(){return!1}function T(){return(new Date).valueOf()}function _(t){for(var i,e,s=t.length-1;s;)e=~~(Math.random()*s),i=t[s],t[s]=t[e],t[e]=i,--s}function S(t,i,e){this.x=t,this.y=i,this.z=e}function b(t){this[1]={1:t[0],2:t[1],3:t[2]},this[2]={1:t[3],2:t[4],3:t[5]},this[3]={1:t[6],2:t[7],3:t[8]}}function L(t,i,e,s,h){for(var n,a,o,r=[],l=2/t,u=Math.PI*(3-m(5)+(parseFloat(h)?parseFloat(h):0)),g=0;g<t;++g)a=m(1-(n=g*l-1+l/2)*n),r.push([f(o=g*u)*a*i,n*e,d(o)*a*s]);return r}function H(t,i,e,s,h,n){for(var a,o,r,l=[],u=2/t,g=Math.PI*(3-m(5)+(parseFloat(n)?parseFloat(n):0)),c=0;c<t;++c)a=c*u-1+u/2,o=f(r=c*g),r=d(r),l.push(i?[a*e,o*s,r*h]:[o*e,a*s,r*h]);return l}function W(t,i,e,s,h,n){for(var a,o,r=[],l=2*Math.PI/i,u=0;u<i;++u)a=f(o=u*l),o=d(o),r.push(t?[n*e,a*s,o*h]:[a*e,n*s,o*h]);return r}function X(t,i,e,s,h){return H(t,0,i,e,s,h)}function Y(t,i,e,s,h){return H(t,1,i,e,s,h)}function U(t,i,e,s,h){return W(0,t,i,e,s,h=isNaN(h)?0:+h)}function V(t,i,e,s,h){return W(1,t,i,e,s,h=isNaN(h)?0:+h)}function M(t,i){var e;return window.G_vmlCanvasManager?null:((e=c.createElement("canvas")).width=t,e.height=i,e)}function r(t,i,e){var s,h,n=1,a=t.weightGradient;if(t.gCanvas)s=t.gCanvas.getContext("2d"),n=t.gCanvas.height;else{if(x(a[0])?n=a.length:a=[a],t.gCanvas=t=M(1024,n),!t)return null;for(s=t.getContext("2d"),h=0;h<n;++h){o=void 0;r=void 0;l=void 0;u=void 0;c=void 0;g=void 0;var o=s;var r=1024;var l=h;var u=a[h];var g,c=o.createLinearGradient(0,0,r,0);for(g in u)c.addColorStop(1-g,u[g]);o.fillStyle=c,o.fillRect(0,l,r,1)}}return e=A(I(e||0,n-1),0),"rgba("+(t=s.getImageData(~~(1023*i),e,1,1).data)[0]+","+t[1]+","+t[2]+","+t[3]/255+")"}function q(t,i,e,s,h,n,a,o,r,l,u,g){var c,d,f=h+(o||0)+(r.length&&r[0]<0?D(r[0]):0),m=n+(o||0)+(r.length&&r[1]<0?D(r[1]):0);for(t.font=i,t.textBaseline="top",t.fillStyle=e,a&&(t.shadowColor=a),o&&(t.shadowBlur=o),r.length&&(t.shadowOffsetX=r[0],t.shadowOffsetY=r[1]),c=0;c<s.length;++c)d=0,u&&("right"==g?d=l-u[c]:"centre"==g&&(d=(l-u[c])/2)),t.fillText(s[c],f+d,m),m+=parseInt(i)}function F(t,i,e,s,h,n,a){n?(t.beginPath(),t.moveTo(i,e+h-n),t.arcTo(i,e,i+n,e,n),t.arcTo(i+s,e,i+s,e+n,n),t.arcTo(i+s,e+h,i+s-n,e+h,n),t.arcTo(i,e+h,i,e+h-n,n),t.closePath(),t[a?"stroke":"fill"]()):t[a?"strokeRect":"fillRect"](i,e,s,h)}function C(t,i,e,s,h,n,a,o,r){this.strings=t,this.font=i,this.width=e,this.height=s,this.maxWidth=h,this.stringWidths=n,this.align=a,this.valign=o,this.scale=r}function z(t,i,e){var s=M(i,e);return s?(s.getContext("2d").drawImage(t,(i-t.width)/2,(e-t.height)/2),s):null}function G(t,i,e){var s=M(i,e);return s?(s.getContext("2d").drawImage(t,0,0,i,e),s):null}function Z(t,i,e,s,h,n,a,o,r,l){var u,g,c,d,f,m=i+(2*o+n)*s,p=e+(2*o+n)*s,w=M(m,p);return w?(r*=s,d=m-(n*=s),f=p-n,o=o*s+(g=c=n/2),u=w.getContext("2d"),r=I(r,d/2,f/2),h&&(u.fillStyle=h,F(u,g,c,d,f,r)),n&&(u.strokeStyle=a,u.lineWidth=n,F(u,g,c,d,f,r,!0)),l?((n=(h=M(m,p)).getContext("2d")).drawImage(t,o,o,i,e),n.globalCompositeOperation="source-in",n.fillStyle=a,n.fillRect(0,0,m,p),n.globalCompositeOperation="destination-over",n.drawImage(w,0,0),n.globalCompositeOperation="source-over",u.drawImage(h,0,0)):u.drawImage(t,o,o,t.width,t.height),{image:w,width:m/s,height:p/s}):null}function j(t,i,e){var s,h,n,a,o,r,l,u=parseInt(t.toString().length*e),g=parseInt(2*e*t.length),c=M(u,g);if(!c)return null;for((s=c.getContext("2d")).fillStyle="#000",s.fillRect(0,0,u,g),q(s,e+"px "+i,"#fff",t,0,0,0,0,[],"centre"),l={min:{x:n=(h=s.getImageData(0,0,u,g)).width,y:a=h.height},max:{x:-1,y:-1}},r=0;r<a;++r)for(o=0;o<n;++o)0<h.data[1+4*(r*n+o)]&&(o<l.min.x&&(l.min.x=o),o>l.max.x&&(l.max.x=o),r<l.min.y&&(l.min.y=r),r>l.max.y)&&(l.max.y=r);return n!=u&&(l.min.x*=u/n,l.max.x*=u/n),a!=g&&(l.min.y*=u/a,l.max.y*=u/a),c=null,l}function J(t){return"'"+t.replace(/(\'|\")/g,"").replace(/\s*,\s*/g,"', '")+"'"}function O(t,i,e){(e=e||c).addEventListener?e.addEventListener(t,i,!1):e.attachEvent("on"+t,i)}function k(t,i,e,s){var h,n,a,o,r,l,u,g,c,d,f,m,p,w,x,v,y=s.imageScale;return i.complete?t.complete?(i.width=i.width,i.height=i.height,y&&(t.width=i.width*y,t.height=i.height*y),e.iw=t.width,e.ih=t.height,s.txtOpt&&(y=t,h=s.zoomMax*s.txtScale,n=e.iw*h,a=e.ih*h,n<i.naturalWidth||a<i.naturalHeight?(y=G(t,n,a))&&(e.fimage=y):(n=e.iw,a=e.ih,h=1),parseFloat(s.imageRadius)&&(e.image=e.fimage=(c=e.image,d=s.imageRadius,f=n,m=a,p=h,w=parseFloat(d),x=A(f,m),v=M(f,m),t=v?(0<d.indexOf("%")?w=x*w/100:w*=p,(d=v.getContext("2d")).globalCompositeOperation="source-over",d.fillStyle="#fff",x/2<=w?(w=I(f,m)/2,d.beginPath(),d.moveTo(f/2,m/2),d.arc(f/2,m/2,w,0,2*Math.PI,!1),d.fill(),d.closePath()):(F(d,0,0,f,m,w=I(f/2,m/2,w),!0),d.fill()),d.globalCompositeOperation="source-in",d.drawImage(c,0,0,f,m),v):null)),e.HasText()||(s.shadow&&(p=e.image,x=n,w=a,d=h,c=s.shadow,f=s.shadowBlur,v=D((m=s.shadowOffset)[0]),r=D(m[1]),l=x+(f<v?v+f:2*f)*d,u=w+(f<r?r+f:2*f)*d,v=d*((f||0)+(m[0]<0?v:0)),r=d*((f||0)+(m[1]<0?r:0)),y=(g=M(l,u))?(o=g.getContext("2d"),c&&(o.shadowColor=c),f&&(o.shadowBlur=f*d),m&&(o.shadowOffsetX=m[0]*d,o.shadowOffsetY=m[1]*d),o.drawImage(p,v,r,x,w),{image:g,width:l/d,height:u/d}):null)&&(e.fimage=y.image,e.w=y.width,e.h=y.height),(s.bgColour||s.bgOutlineThickness)&&(o="tag"==s.bgColour?P(e.a,"background-color"):s.bgColour,r="tag"==s.bgOutline?P(e.a,"color"):s.bgOutline||s.textColour,n=e.fimage.width,a=e.fimage.height,"colour"==s.outlineMethod&&(y=Z(e.fimage,n,a,h,o,s.bgOutlineThickness,e.outline.colour,s.padding,s.bgRadius,1))&&(e.oimage=y.image),y=Z(e.fimage,n,a,h,o,s.bgOutlineThickness,r,s.padding,s.bgRadius))&&(e.fimage=y.image,e.w=y.width,e.h=y.height),"size"==s.outlineMethod&&(0<s.outlineIncrease?(e.iw+=2*s.outlineIncrease,e.ih+=2*s.outlineIncrease,y=G(e.fimage,n=h*e.iw,a=h*e.ih),e.oimage=y,e.fimage=z(e.fimage,e.oimage.width,e.oimage.height)):(n=h*(e.iw+2*s.outlineIncrease),y=G(e.fimage,n,a=h*(e.ih+2*s.outlineIncrease)),e.oimage=z(y,e.fimage.width,e.fimage.height))))),void e.Init()):O("load",function(){k(t,i,e,s)},t):O("load",function(){k(t,i,e,s)},i)}function P(t,i){var e=c.defaultView,s=i.replace(/\-([a-z])/g,function(t){return t.charAt(1).toUpperCase()});return e&&e.getComputedStyle&&e.getComputedStyle(t,null).getPropertyValue(i)||t.currentStyle&&t.currentStyle[s]}function l(t){return(t.target&&w(t.target.id)?t.target:t.srcElement.parentNode).id}function E(t,i){var e,s=parseInt(P(i,"width"))/i.width,h=parseInt(P(i,"height"))/i.height;return w(t.offsetX)?e={x:t.offsetX,y:t.offsetY}:(i=ot(i.id),(t=w(t.changedTouches)?t.changedTouches[0]:t).pageX&&(e={x:t.pageX-i.x,y:t.pageY-i.y})),e&&s&&h&&(e.x/=s,e.y/=h),e}function K(t){t=t.target||t.fromElement.parentNode,t=R.tc[t.id];t&&(t.mx=t.my=-1,t.UnFreeze(),t.EndDrag())}function Q(t){var i,e,s=R,h=l(t);for(i in s.tc)(e=s.tc[i]).tttimer&&(clearTimeout(e.tttimer),e.tttimer=null);h&&s.tc[h]&&((h=E(t,(e=s.tc[h]).canvas))&&(e.mx=h.x,e.my=h.y,e.Drag(t,h)),e.drawn=0)}function $(t){var i=R,e=c.addEventListener?0:1,s=l(t);s&&t.button==e&&i.tc[s]&&i.tc[s].BeginDrag(t)}function tt(t){var i=R,e=c.addEventListener?0:1,s=l(t);s&&t.button==e&&i.tc[s]&&(e=i.tc[s],Q(t),e.EndDrag()||e.touchState||e.Clicked(t))}function it(t){var i,e=l(t),e=e&&R.tc[e];e&&t.changedTouches&&(1==t.touches.length&&0==e.touchState?(e.touchState=1,e.BeginDrag(t),(i=E(t,e.canvas))&&(e.mx=i.x,e.my=i.y,e.drawn=0)):2==t.targetTouches.length&&e.pinchZoom?(e.touchState=3,e.EndDrag(),e.BeginPinch(t)):(e.EndDrag(),e.EndPinch(),e.touchState=0))}function et(t){var i=l(t),e=i&&R.tc[i];if(e&&t.changedTouches){switch(e.touchState){case 1:e.Draw(),e.Clicked();break;case 2:e.EndDrag();break;case 3:e.EndPinch()}e.touchState=0}}function st(t){var i,e,s,h=R,n=l(t);for(i in h.tc)(e=h.tc[i]).tttimer&&(clearTimeout(e.tttimer),e.tttimer=null);if((e=n&&h.tc[n])&&t.changedTouches&&e.touchState){switch(e.touchState){case 1:case 2:(s=E(t,e.canvas))&&(e.mx=s.x,e.my=s.y,e.Drag(t,s))&&(e.touchState=2);break;case 3:e.Pinch(t)}e.drawn=0}}function ht(t){var i=R,e=l(t);e&&i.tc[e]&&(t.cancelBubble=!0,t.returnValue=!1,t.preventDefault&&t.preventDefault(),i.tc[e].Wheel(0<(t.wheelDelta||t.detail)))}function nt(t){var i,e=R;for(i in clearTimeout(e.scrollTimer),e.tc)e.tc[i].Pause();e.scrollTimer=setTimeout(function(){var t,i=R;for(t in i.tc)i.tc[t].Resume()},e.scrollPause)}function h(){at(T())}function at(t){var i,e=R.tc;for(i in R.NextFrame(R.interval),t=t||T(),e)e[i].Draw(t)}function ot(t){var t=c.getElementById(t).getBoundingClientRect(),i=c.documentElement,e=c.body,s=window,h=s.pageXOffset||i.scrollLeft,s=s.pageYOffset||i.scrollTop,n=i.clientLeft||e.clientLeft,i=i.clientTop||e.clientTop;return{x:t.left+h-n,y:t.top+s-i}}function rt(t){this.e=t,this.br=0,this.line=[],this.text=[],this.original=t.innerText||t.textContent}function lt(t,i){this.ts=null,this.tc=t,this.tag=i,this.x=this.y=this.w=this.h=this.sc=1,this.z=0,this.pulse=1,this.pulsate=t.pulsateTo<1,this.colour=t.outlineColour,this.adash=~~t.outlineDash,this.agap=~~t.outlineDashSpace||this.adash,this.aspeed=+t.outlineDashSpeed,"tag"==this.colour?this.colour=P(i.a,"color"):"tagbg"==this.colour&&(this.colour=P(i.a,"background-color")),this.Draw=this.pulsate?this.DrawPulsate:this.DrawSimple,this.radius=0|t.outlineRadius,this.SetMethod(t.outlineMethod)}function B(t,i,e,s,h,n,a,o,r,l,u,g,c,d){this.tc=t,this.image=null,this.text=i,this.text_original=d,this.line_widths=[],this.title=e.title||null,this.a=e,this.position=new S(s[0],s[1],s[2]),this.x=this.y=this.z=0,this.w=h,this.h=n,this.colour=a||t.textColour,this.bgColour=o||t.bgColour,this.bgRadius=0|r,this.bgOutline=l||this.colour,this.bgOutlineThickness=0|u,this.textFont=g||t.textFont,this.padding=0|c,this.sc=this.alpha=1,this.weighted=!t.weight,this.outline=new lt(t,this)}function R(t,i,e){var s,h,o,r,n,a,l,u=c.getElementById(t),g=["id","class","innerHTML"];if(!u)throw 0;if(w(window.G_vmlCanvasManager)&&(u=window.G_vmlCanvasManager.initElement(u),this.ie=parseFloat(navigator.appVersion.split("MSIE")[1])),u&&(!u.getContext||!u.getContext("2d").fillText)){for(h=c.createElement("DIV"),s=0;s<g.length;++s)h[g[s]]=u[g[s]];throw u.parentNode.insertBefore(h,u),u.parentNode.removeChild(u),0}for(s in R.options)this[s]=(e&&w(e[s])?e:w(R[s])?R:R.options)[s];if(this.canvas=u,this.ctxt=u.getContext("2d"),this.z1=250/A(this.depth,.001),this.z2=this.z1/this.zoom,this.radius=.0075*I(u.height,u.width),this.max_radius=100,this.max_weight=[],this.min_weight=[],this.textFont=this.textFont&&J(this.textFont),this.textHeight*=1,this.imageRadius=this.imageRadius.toString(),this.pulsateTo=v(this.pulsateTo,0,1),this.minBrightness=v(this.minBrightness,0,1),this.maxBrightness=v(this.maxBrightness,this.minBrightness,1),this.ctxt.textBaseline="top",this.lx=(this.lock+"").indexOf("x")+1,this.ly=(this.lock+"").indexOf("y")+1,this.frozen=this.dx=this.dy=this.fixedAnim=this.touchState=0,this.fixedAlpha=1,this.source=i||t,this.repeatTags=I(64,~~this.repeatTags),this.minTags=I(200,~~this.minTags),0<~~this.scrollPause?R.scrollPause=~~this.scrollPause:this.scrollPause=0,0<this.minTags&&this.repeatTags<1&&(s=this.GetTags().length)&&(this.repeatTags=N(this.minTags/s)-1),this.transform=b.Identity(),this.startTime=this.time=T(),this.mx=this.my=-1,this.centreImage&&(o=this,(r=new Image).onload=function(){var n=r.width/2,a=r.height/2;o.centreFunc=function(t,i,e,s,h){t.setTransform(1,0,0,1,0,0),t.globalAlpha=1,t.drawImage(r,s-n,h-a)}},r.src=o.centreImage),this.Animate=this.dragControl?this.AnimateDrag:this.AnimatePosition,this.animTiming="function"==typeof R[this.animTiming]?R[this.animTiming]:R.Smooth,this.shadowBlur||this.shadowOffset[0]||this.shadowOffset[1]?(this.ctxt.shadowColor=this.shadow,this.shadow=this.ctxt.shadowColor,this.shadowAlpha=!!(a=M(3,3))&&((n=a.getContext("2d")).strokeStyle="#000",n.shadowColor="#fff",n.shadowBlur=3,n.globalAlpha=0,n.strokeRect(2,2,2,2),n.globalAlpha=1,a=null,0<n.getImageData(2,2,1,1).data[0])):delete this.shadow,this.Load(),i&&this.hideTags&&(l=this,R.loaded?l.HideTags():O("load",function(){l.HideTags()},window)),this.yaw=this.initial?this.initial[0]*this.maxSpeed:0,this.pitch=this.initial?this.initial[1]*this.maxSpeed:0,this.tooltip?(this.ctitle=u.title,u.title="","native"==this.tooltip?this.Tooltip=this.TooltipNative:(this.Tooltip=this.TooltipDiv,this.ttdiv||(this.ttdiv=c.createElement("div"),this.ttdiv.className=this.tooltipClass,this.ttdiv.style.position="absolute",this.ttdiv.style.zIndex=u.style.zIndex+1,O("mouseover",function(t){t.target.style.display="none"},this.ttdiv),c.body.appendChild(this.ttdiv)))):this.Tooltip=this.TooltipNone,!this.noMouse&&!p[t])for(p[t]=[["mousemove",Q],["mouseout",K],["mouseup",tt],["touchstart",it],["touchend",et],["touchcancel",et],["touchmove",st]],this.dragControl&&(p[t].push(["mousedown",$]),p[t].push(["selectstart",y])),this.wheelZoom&&(p[t].push(["mousewheel",ht]),p[t].push(["DOMMouseScroll",ht])),this.scrollPause&&p[t].push(["scroll",nt,window]),s=0;s<p[t].length;++s)O((h=p[t][s])[0],h[1],h[2]||u);R.started||(a=window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,R.NextFrame=a?R.NextFrameRAF:R.NextFrameTimeout,R.interval=this.interval,R.NextFrame(this.interval),R.started=1)}function ut(t){var i=t.targetTouches[0],t=t.targetTouches[1];return m(g(t.pageX-i.pageX,2)+g(t.pageY-i.pageY,2))}function s(t,i){R.tc[i]&&R.tc[i][t]()}for(e in(i=S.prototype).length=function(){return m(this.x*this.x+this.y*this.y+this.z*this.z)},i.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},i.cross=function(t){return new S(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},i.angle=function(t){var i=this.dot(t);return 0==i?Math.PI/2:1<=(i=i/(this.length()*t.length()))?0:i<=-1?Math.PI:Math.acos(i)},i.unit=function(){var t=this.length();return new S(this.x/t,this.y/t,this.z/t)},i=b.prototype,b.Identity=function(){return new b([1,0,0,0,1,0,0,0,1])},b.Rotation=function(t,i){var e=d(t),t=f(t),s=1-t;return new b([t+g(i.x,2)*s,i.x*i.y*s-i.z*e,i.x*i.z*s+i.y*e,i.y*i.x*s+i.z*e,t+g(i.y,2)*s,i.y*i.z*s-i.x*e,i.z*i.x*s-i.y*e,i.z*i.y*s+i.x*e,t+g(i.z,2)*s])},i.mul=function(t){for(var i,e=[],s=t.xform?1:0,h=1;h<=3;++h)for(i=1;i<=3;++i)e.push(s?this[h][1]*t[1][i]+this[h][2]*t[2][i]+this[h][3]*t[3][i]:this[h][i]*t);return new b(e)},i.xform=function(t){var i={},e=t.x,s=t.y,t=t.z;return i.x=e*this[1][1]+s*this[2][1]+t*this[3][1],i.y=e*this[1][2]+s*this[2][2]+t*this[3][2],i.z=e*this[1][3]+s*this[2][3]+t*this[3][3],i},(i=C.prototype).SetImage=function(t,i,e,s,h,n,a,o){this.image=t,this.iwidth=i*this.scale,this.iheight=e*this.scale,this.ipos=s,this.ipad=h*this.scale,this.iscale=o,this.ialign=n,this.ivalign=a},i.Align=function(t,i,e){var s=0;return"right"==e||"bottom"==e?s=i-t:"left"!=e&&"top"!=e&&(s=(i-t)/2),s},i.Create=function(t,i,e,s,h,n,a,o,r){var l,u,g,c,d,f,m,p,w,x,v,y,T,S,b,C=D(a[0]),z=D(a[1]);return o=A(o,C+n,z+n),l=this.width+(c=2*(o+s)),u=this.height+(d=2*(o+s)),m=p=o+s,this.image&&(w=x=o+s,v=this.iwidth,y=this.iheight,"top"==this.ipos||"bottom"==this.ipos?(v<this.width?w+=this.Align(v,this.width,this.ialign):m+=this.Align(this.width,v,this.align),"top"==this.ipos?p+=y+this.ipad:x+=this.height+this.ipad,l=A(l,v+c),u+=y+this.ipad):(y<this.height?x+=this.Align(y,this.height,this.ivalign):p+=this.Align(this.height,y,this.valign),"right"==this.ipos?w+=this.width+this.ipad:m+=v+this.ipad,l+=v+this.ipad,u=A(u,y+d))),(o=M(l,u))?(c=d=s/2,T=I(r,(r=l-s)/2,(f=u-s)/2),g=o.getContext("2d"),i&&(g.fillStyle=i,F(g,c,d,r,f,T)),s&&(g.strokeStyle=e,g.lineWidth=s,F(g,c,d,r,f,T,!0)),(n||C||z)&&(S=M(l,u))&&(b=g,g=S.getContext("2d")),q(g,this.font,t,this.strings,m,p,0,0,[],this.maxWidth,this.stringWidths,this.align),this.image&&g.drawImage(this.image,w,x,v,y),b&&(g=b,h&&(g.shadowColor=h),n&&(g.shadowBlur=n),g.shadowOffsetX=a[0],g.shadowOffsetY=a[1],g.drawImage(S,0,0)),o):null},(i=rt.prototype).Empty=function(){for(var t=0;t<this.text.length;++t)if(this.text[t].length)return!1;return!0},i.Lines=function(t){for(var i,e=t?1:0,s=(i=(t=t||this.e).childNodes).length,h=0;h<s;++h)"BR"==i[h].nodeName?(this.text.push(this.line.join(" ")),this.br=1):3==i[h].nodeType?this.br?(this.line=[i[h].nodeValue],this.br=0):this.line.push(i[h].nodeValue):this.Lines(i[h]);return e||this.br||this.text.push(this.line.join(" ")),this.text},i.SplitWidth=function(t,i,e,s){var h,n,a,o=[];for(i.font=s+"px "+e,h=0;h<this.text.length;++h){for(a=this.text[h].split(/\s+/),this.line=[a[0]],n=1;n<a.length;++n)i.measureText(this.line.join(" ")+" "+a[n]).width>t?(o.push(this.line.join(" ")),this.line=[a[n]]):this.line.push(a[n]);o.push(this.line.join(" "))}return this.text=o},(i=lt.prototype).SetMethod=function(t){var i={block:["PreDraw","DrawBlock"],colour:["PreDraw","DrawColour"],outline:["PostDraw","DrawOutline"],classic:["LastDraw","DrawOutline"],size:["PreDraw","DrawSize"],none:["LastDraw"]},i=i[t]||i.outline;"none"==t?this.Draw=function(){return 1}:this.drawFunc=this[i[1]],this[i[0]]=this.Draw},i.Update=function(t,i,e,s,h,n,a,o){var r=this.tc.outlineOffset,l=2*r;this.x=h*t+a-r,this.y=h*i+o-r,this.w=h*e+l,this.h=h*s+l,this.sc=h,this.z=n},i.Ants=function(t){var i,e,s,h,n,a,o,r,l;this.adash&&(h=(i=this.adash)+(e=this.agap),a=i,o=e,l=r=n=0,(s=this.aspeed)&&(l=D(s)*(T()-this.ts)/50,s=~~(l=s<0?864e4-l:l)%h),l=s?(s<=i?(n=i-s,a=s):r=e-(o=h-s),[n,o,a,r]):[i,e],t.setLineDash(l))},i.DrawOutline=function(t,i,e,s,h,n){var a=I(this.radius,h/2,s/2);t.strokeStyle=n,this.Ants(t),F(t,i,e,s,h,a,!0)},i.DrawSize=function(t,i,e,s,h,n,a,o,r){var l,u,g=a.w,c=a.h;return this.pulsate?(u=a.image?(a.image.height+this.tc.outlineIncrease)/a.image.height:a.oscale,l=a.fimage||a.image,u=1+(u-1)*(1-this.pulse),a.h*=u,a.w*=u):l=a.oimage,a.alpha=1,a.Draw(t,o,r,l),a.h=c,a.w=g,1},i.DrawColour=function(t,i,e,s,h,n,a,o,r){return a.oimage?(this.pulse<1?(a.alpha=1-g(this.pulse,2),a.Draw(t,o,r,a.fimage),a.alpha=this.pulse):a.alpha=1,a.Draw(t,o,r,a.oimage),1):this[a.image?"DrawColourImage":"DrawColourText"](t,i,e,s,h,n,a,o,r)},i.DrawColourText=function(t,i,e,s,h,n,a,o,r){var l=a.colour;return a.colour=n,a.alpha=1,a.Draw(t,o,r),a.colour=l,1},i.DrawColourImage=function(t,i,e,s,h,n,a,o,r){var l=t.canvas,i=~~A(i,0),e=~~A(e,0),s=I(l.width-i,s)+.5|0,h=I(l.height-e,h)+.5|0;return u?(u.width=s,u.height=h):u=M(s,h),u?(u.getContext("2d").drawImage(l,i,e,s,h,0,0,s,h),t.clearRect(i,e,s,h),this.pulsate?a.alpha=1-g(this.pulse,2):a.alpha=1,a.Draw(t,o,r),t.setTransform(1,0,0,1,0,0),t.save(),t.beginPath(),t.rect(i,e,s,h),t.clip(),t.globalCompositeOperation="source-in",t.fillStyle=n,t.fillRect(i,e,s,h),t.restore(),t.globalAlpha=1,t.globalCompositeOperation="destination-over",t.drawImage(u,0,0,s,h,i,e,s,h),t.globalCompositeOperation="source-over",1):this.SetMethod("outline")},i.DrawBlock=function(t,i,e,s,h,n){var a=I(this.radius,h/2,s/2);t.fillStyle=n,F(t,i,e,s,h,a)},i.DrawSimple=function(t,i,e,s,h,n){var a=this.tc;return t.setTransform(1,0,0,1,0,0),t.strokeStyle=this.colour,t.lineWidth=a.outlineThickness,t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0,t.globalAlpha=n?h:1,this.drawFunc(t,this.x,this.y,this.w,this.h,this.colour,i,e,s)},i.DrawPulsate=function(t,i,e,s){var h=T()-this.ts,n=this.tc,h=n.pulsateTo+(1-n.pulsateTo)*(.5+f(2*Math.PI*h/(1e3*n.pulsateTime))/2);return this.pulse=h=R.Smooth(1,h),this.DrawSimple(t,i,e,s,h,1)},i.Active=function(t,i,e){i=i>=this.x&&e>=this.y&&i<=this.x+this.w&&e<=this.y+this.h;return this.ts=i?this.ts||T():null,i},i.PreDraw=i.PostDraw=i.LastDraw=y,(i=B.prototype).Init=function(t){var i=this.tc;this.textHeight=i.textHeight,this.HasText()?this.Measure(i.ctxt,i):(this.w=this.iw,this.h=this.ih),this.SetShadowColour=i.shadowAlpha?this.SetShadowColourAlpha:this.SetShadowColourFixed,this.SetDraw(i)},i.Draw=y,i.HasText=function(){return this.text&&0<this.text[0].length},i.EqualTo=function(t){var i=t.getElementsByTagName("img");return this.a.href!=t.href?0:i.length?this.image.src==i[0].src:(t.innerText||t.textContent)==this.text_original},i.SetImage=function(t){this.image=this.fimage=t},i.SetDraw=function(t){this.Draw=this.fimage?7<t.ie?this.DrawImageIE:this.DrawImage:this.DrawText,t.noSelect&&(this.CheckActive=y)},i.MeasureText=function(t){for(var i,e=this.text.length,s=0,h=0;h<e;++h)this.line_widths[h]=i=t.measureText(this.text[h]).width,s=A(s,i);return s},i.Measure=function(t,i){var e,s,h,n,a,o,r,l=j(this.text,this.textFont,this.textHeight),u=l?l.max.y+l.min.y:this.textHeight;t.font=this.font=this.textHeight+"px "+this.textFont,a=this.MeasureText(t),i.txtOpt&&(s=(e=i.txtScale)*this.textHeight+"px "+this.textFont,h=[e*i.shadowOffset[0],e*i.shadowOffset[1]],t.font=s,n=this.MeasureText(t),r=new C(this.text,s,n+e,e*u+e,n,this.line_widths,i.textAlign,i.textVAlign,e),this.image&&r.SetImage(this.image,this.iw,this.ih,i.imagePosition,i.imagePadding,i.imageAlign,i.imageVAlign,i.imageScale),o=r.Create(this.colour,this.bgColour,this.bgOutline,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,h,e*this.padding,e*this.bgRadius),"colour"==i.outlineMethod?this.oimage=r.Create(this.outline.colour,this.bgColour,this.outline.colour,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,h,e*this.padding,e*this.bgRadius):"size"==i.outlineMethod&&(l=(l=j(this.text,this.textFont,this.textHeight+i.outlineIncrease)).max.y+l.min.y,s=e*(this.textHeight+i.outlineIncrease)+"px "+this.textFont,t.font=s,n=this.MeasureText(t),r=new C(this.text,s,n+e,e*l+e,n,this.line_widths,i.textAlign,i.textVAlign,e),this.image&&r.SetImage(this.image,this.iw+i.outlineIncrease,this.ih+i.outlineIncrease,i.imagePosition,i.imagePadding,i.imageAlign,i.imageVAlign,i.imageScale),this.oimage=r.Create(this.colour,this.bgColour,this.bgOutline,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,h,e*this.padding,e*this.bgRadius),this.oscale=this.oimage.width/o.width,0<i.outlineIncrease?o=z(o,this.oimage.width,this.oimage.height):this.oimage=z(this.oimage,o.width,o.height)),o&&(this.fimage=o,a=this.fimage.width/e,u=this.fimage.height/e),this.SetDraw(i),i.txtOpt=!!this.fimage),this.h=u,this.w=a},i.SetFont=function(t,i,e,s){this.textFont=t,this.colour=i,this.bgColour=e,this.bgOutline=s,this.Measure(this.tc.ctxt,this.tc)},i.SetWeight=function(t){var i,e,s=this.tc,h=s.weightMode.split(/[, ]/),n=t.length;if(this.HasText()){for(this.weighted=!0,e=0;e<n;++e)"both"==(i=h[e]||"size")?(this.Weight(t[e],s.ctxt,s,"size",s.min_weight[e],s.max_weight[e],e),this.Weight(t[e],s.ctxt,s,"colour",s.min_weight[e],s.max_weight[e],e)):this.Weight(t[e],s.ctxt,s,i,s.min_weight[e],s.max_weight[e],e);this.Measure(s.ctxt,s)}},i.Weight=function(t,i,e,s,h,n,a){n=((t=isNaN(t)?1:t)-h)/(n-h);"colour"==s?this.colour=r(e,n,a):"bgcolour"==s?this.bgColour=r(e,n,a):"bgoutline"==s?this.bgOutline=r(e,n,a):"outline"==s?this.outline.colour=r(e,n,a):"size"==s&&(0<e.weightSizeMin&&e.weightSizeMax>e.weightSizeMin?this.textHeight=e.weightSize*(e.weightSizeMin+(e.weightSizeMax-e.weightSizeMin)*n):this.textHeight=A(1,t*e.weightSize))},i.SetShadowColourFixed=function(t,i,e){t.shadowColor=i},i.SetShadowColourAlpha=function(t,i,e){var s,h;t.shadowColor=(i=t=i,h=(+(e=e)).toPrecision(3)+")","#"===t[0]?(n[t]||(4===t.length?n[t]="rgba("+o[t[1]]+o[t[2]]+o[t[3]]:n[t]="rgba("+a[t.substr(1,2)]+a[t.substr(3,2)]+a[t.substr(5,2)]),i=n[t]+h):"rgb("===t.substr(0,4)||"hsl("===t.substr(0,4)?i=t.replace("(","a(").replace(")",","+h):"rgba("!==t.substr(0,5)&&"hsla("!==t.substr(0,5)||(h=t.lastIndexOf(",")+1,s=t.indexOf(")"),e*=parseFloat(t.substring(h,s)),i=t.substr(0,h)+e.toPrecision(3)+")"),i)},i.DrawText=function(t,i,e){var s,h,n=this.tc,a=this.x,o=this.y,r=this.sc;for(t.globalAlpha=this.alpha,t.fillStyle=this.colour,n.shadow&&this.SetShadowColour(t,n.shadow,this.alpha),t.font=this.font,a+=i/r,o+=e/r-this.h/2,s=0;s<this.text.length;++s)h=a,"right"==n.textAlign?h+=this.w/2-this.line_widths[s]:"centre"==n.textAlign?h-=this.line_widths[s]/2:h-=this.w/2,t.setTransform(r,0,0,r,r*h,r*o),t.fillText(this.text[s],0,0),o+=this.textHeight},i.DrawImage=function(t,i,e,s){var h=this.x,n=this.y,a=this.sc,s=s||this.fimage,o=this.w,r=this.h,l=this.alpha,u=this.shadow;t.globalAlpha=l,u&&this.SetShadowColour(t,u,l),t.setTransform(a,0,0,a,a*(h+=i/a-o/2),a*(n+=e/a-r/2)),t.drawImage(s,0,0,o,r)},i.DrawImageIE=function(t,i,e){var s=this.fimage,h=this.sc,n=s.width=this.w*h,a=s.height=this.h*h,i=this.x*h+i-n/2,n=this.y*h+e-a/2;t.setTransform(1,0,0,1,0,0),t.globalAlpha=this.alpha,t.drawImage(s,i,n)},i.Calc=function(t,i){var e,s,h,n,a=this.tc,o=a.minBrightness,r=a.maxBrightness,l=a.max_radius,t=t.xform(this.position);return this.xformed=t,s=t,h=(e=a).stretchX,a=a.stretchY,n=e.radius*e.z1/(e.z1+e.z2+s.z),this.x=(t={x:s.x*n*h,y:s.y*n*a,z:s.z,w:(e.z1-s.z)/e.z2}).x,this.y=t.y,this.z=t.z,this.sc=t.w,this.alpha=i*v(o+(r-o)*(l-this.z)/(2*l),0,1),this.xformed},i.UpdateActive=function(t,i,e){var s=this.outline,h=this.w,n=this.h,a=this.x-h/2,o=this.y-n/2;return s.Update(a,o,h,n,this.sc,this.z,i,e),s},i.CheckActive=function(t,i,e){var s=this.tc,i=this.UpdateActive(t,i,e);return i.Active(t,s.mx,s.my)?i:null},i.Clicked=function(t){var i=this.a,e=i.target,s=i.href;if(""!=e&&"_self"!=e)if(self.frames[e])self.frames[e].document.location=s;else{try{if(top.frames[e])return void(top.frames[e].document.location=s)}catch(t){}window.open(s,e)}else{if(c.createEvent){if((e=c.createEvent("MouseEvents")).initMouseEvent("click",1,1,window,0,0,0,0,0,0,0,0,0,0,null),!i.dispatchEvent(e))return}else if(i.fireEvent&&!i.fireEvent("onclick"))return;c.location=s}},(i=R.prototype).SourceElements=function(){return c.querySelectorAll?c.querySelectorAll("#"+this.source):[c.getElementById(this.source)]},i.HideTags=function(){for(var t=this.SourceElements(),i=0;i<t.length;++i)t[i].style.display="none"},i.GetTags=function(){for(var t,i,e,s=this.SourceElements(),h=[],n=0;n<=this.repeatTags;++n)for(i=0;i<s.length;++i)for(t=s[i].getElementsByTagName("a"),e=0;e<t.length;++e)h.push(t[e]);return h},i.Message=function(t){for(var i,e,s,h=[],n=t.split(""),a=0;a<n.length;++a)" "!=n[a]&&(s=a-n.length/2,(i=c.createElement("A")).href="#",i.innerText=n[a],e=100*d(s/9),s=-100*f(s/9),(i=new B(this,n[a],i,[e,0,s],2,18,"#000","#fff",0,0,0,"monospace",2,n[a])).Init(),h.push(i));return h},i.CreateTag=function(t){var i,e,s,h,n,a,o,r,l=[0,0,0];return"text"!=this.imageMode&&(i=t.getElementsByTagName("img")).length&&((e=new Image).src=i[0].src,!this.imageMode)?((s=new B(this,"",t,l,0,0)).SetImage(e),k(e,i[0],s,this),s):("image"!=this.imageMode&&(h=(n=new rt(t)).Lines(),n.Empty()?n=null:(a=this.textFont||J(P(t,"font-family")),this.splitWidth&&(h=n.SplitWidth(this.splitWidth,this.ctxt,a,this.textHeight)),o="tag"==this.bgColour?P(t,"background-color"):this.bgColour,r="tag"==this.bgOutline?P(t,"color"):this.bgOutline)),n||e?(s=new B(this,h,t,l,2,this.textHeight+2,this.textColour||P(t,"color"),o,this.bgRadius,r,this.bgOutlineThickness,a,this.padding,n&&n.original),e?(s.SetImage(e),k(e,i[0],s,this)):s.Init(),s):void 0)},i.UpdateTag=function(t,i){var e=this.textColour||P(i,"color"),s=this.textFont||J(P(i,"font-family")),h="tag"==this.bgColour?P(i,"background-color"):this.bgColour,n="tag"==this.bgOutline?P(i,"color"):this.bgOutline;t.a=i,t.title=i.title,t.colour==e&&t.textFont==s&&t.bgColour==h&&t.bgOutline==n||t.SetFont(s,e,h,n)},i.Weight=function(t){for(var i,e,s,h,n,a,o=t.length,r=[],l=this.weightFrom?this.weightFrom.split(/[, ]/):[null],u=l.length,g=0;g<o;++g)for(r[g]=[],i=0;i<u;++i)s=t[g].a,h=l[i],n=this.textHeight,a=1,h?a=+(s.getAttribute(h)||n):(h=P(s,"font-size"))&&(a=-1<h.indexOf("px")&&+h.replace("px","")||-1<h.indexOf("pt")&&1.25*h.replace("pt","")||3.3*h),n=a,(!this.max_weight[i]||n>this.max_weight[i])&&(this.max_weight[i]=n),(!this.min_weight[i]||n<this.min_weight[i])&&(this.min_weight[i]=n),r[g][i]=n;for(i=0;i<u;++i)this.max_weight[i]>this.min_weight[i]&&(e=1);if(e)for(g=0;g<o;++g)t[g].SetWeight(r[g])},i.Load=function(){var t,i,e,s,h,n,a,o,r=this.GetTags(),l=[],u=[],g={sphere:L,vcylinder:X,hcylinder:Y,vring:U,hring:V};if(r.length){for(u.length=r.length,o=0;o<r.length;++o)u[o]=o;for(this.shuffleTags&&_(u),s=100*this.radiusX,h=100*this.radiusY,n=100*this.radiusZ,this.max_radius=A(s,A(h,n)),o=0;o<r.length;++o)(i=this.CreateTag(r[u[o]]))&&l.push(i);for(this.weight&&this.Weight(l,!0),this.shapeArgs?this.shapeArgs[0]=l.length:(t=(e=this.shape.toString().split(/[(),]/)).shift(),"function"==typeof window[t]?this.shape=window[t]:this.shape=g[t]||g.sphere,this.shapeArgs=[l.length,s,h,n].concat(e)),a=this.shape.apply(this,this.shapeArgs),this.listLength=l.length,o=0;o<l.length;++o)l[o].position=new S(a[o][0],a[o][1],a[o][2])}this.noTagsMessage&&!l.length&&(o=this.imageMode&&"both"!=this.imageMode?this.imageMode+" ":"",l=this.Message("No "+o+"tags")),this.taglist=l},i.Update=function(){var t,i,e,s,h,n,a=this.GetTags(),o=[],r=this.taglist,l=[],u=[];if(!this.shapeArgs)return this.Load();if(a.length){for(s=this.listLength=a.length,e=r.length,h=0;h<e;++h)o.push(r[h]),u.push(h);for(h=0;h<s;++h){for(t=n=0;n<e;++n)r[n].EqualTo(a[h])&&(this.UpdateTag(o[n],a[h]),t=u[n]=-1);t||l.push(h)}for(n=h=0;h<e;++h)-1==u[n]?u.splice(n,1):++n;if(u.length){for(_(u);u.length&&l.length;)h=u.shift(),n=l.shift(),o[h]=this.CreateTag(a[n]);for(u.sort(function(t,i){return t-i});u.length;)o.splice(u.pop(),1)}for(n=o.length/(l.length+1),h=0;l.length;)o.splice(N(++h*n),0,this.CreateTag(a[l.shift()]));for(this.shapeArgs[0]=s=o.length,i=this.shape.apply(this,this.shapeArgs),h=0;h<s;++h)o[h].position=new S(i[h][0],i[h][1],i[h][2]);this.weight&&this.Weight(o)}this.taglist=o},i.SetShadow=function(t){t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffset[0],t.shadowOffsetY=this.shadowOffset[1]},i.Draw=function(t){if(!this.paused){var i,e,s,h=this.canvas,n=h.width,a=h.height,o=0,r=(t-this.time)*R.interval/1e3,l=n/2+this.offsetX,u=a/2+this.offsetY,g=this.ctxt,c=-1,d=this.taglist,f=d.length,m=this.frontSelect,p=this.centreFunc==y;if(this.time=t,this.frozen&&this.drawn)return this.Animate(n,a,r);for(t=this.AnimateFixed(),g.setTransform(1,0,0,1,0,0),s=0;s<f;++s)d[s].Calc(this.transform,this.fixedAlpha);if(d=((t,i)=>{for(var e=[],s=t.length,h=0;h<s;++h)e.push(t[h]);return e.sort(i),e})(d,function(t,i){return i.z-t.z}),t&&this.fixedAnim.active)i=this.fixedAnim.tag.UpdateActive(g,l,u);else{for(this.active=null,s=0;s<f;++s)(e=0<=this.mx&&0<=this.my&&this.taglist[s].CheckActive(g,l,u))&&e.sc>o&&(!m||e.z<=0)&&(c=s,(i=e).tag=this.taglist[s],o=e.sc);this.active=i}for(this.txtOpt||this.shadow&&this.SetShadow(g),g.clearRect(0,0,n,a),s=0;s<f;++s){if(!p&&d[s].z<=0){try{this.centreFunc(g,n,a,l,u)}catch(t){alert(t),this.centreFunc=y}p=!0}i&&i.tag==d[s]&&i.PreDraw(g,d[s],l,u)||d[s].Draw(g,l,u),i&&i.tag==d[s]&&i.PostDraw(g)}this.freezeActive&&i?this.Freeze():(this.UnFreeze(),this.drawn=f==this.listLength),this.fixedCallback&&(this.fixedCallback(this,this.fixedCallbackTag),this.fixedCallback=null),t||this.Animate(n,a,r),i&&i.LastDraw(g),h.style.cursor=i?this.activeCursor:"",this.Tooltip(i,this.taglist[c])}},i.TooltipNone=function(){},i.TooltipNative=function(t,i){this.canvas.title=t?i&&i.title?i.title:"":this.ctitle},i.SetTTDiv=function(t,i){var e=this,s=e.ttdiv.style;t!=e.ttdiv.innerHTML&&(s.display="none"),e.ttdiv.innerHTML=t,i&&(i.title=e.ttdiv.innerHTML),"none"!=s.display||e.tttimer||(e.tttimer=setTimeout(function(){var t=ot(e.canvas.id);s.display="block",s.left=t.x+e.mx+"px",s.top=t.y+e.my+24+"px",e.tttimer=null},e.tooltipDelay))},i.TooltipDiv=function(t,i){t&&i&&i.title?this.SetTTDiv(i.title,i):!t&&-1!=this.mx&&-1!=this.my&&this.ctitle.length?this.SetTTDiv(this.ctitle):this.ttdiv.style.display="none"},i.Transform=function(t,i,e){var s,h;(i||e)&&(s=d(i),i=f(i),h=d(e),h=new b([e=f(e),0,h,0,1,0,-h,0,e]),e=new b([1,0,0,0,i,-s,0,s,i]),t.transform=t.transform.mul(h.mul(e)))},i.AnimateFixed=function(){var t,i,e,s;return this.fadeIn&&((e=T()-this.startTime)>=this.fadeIn?(this.fadeIn=0,this.fixedAlpha=1):this.fixedAlpha=e/this.fadeIn),!!this.fixedAnim&&(this.fixedAnim.transform||(this.fixedAnim.transform=this.transform),t=this.fixedAnim,e=T()-t.t0,i=t.angle,s=this.animTiming(t.t,e),this.transform=t.transform,e>=t.t?(this.fixedCallbackTag=t.tag,this.fixedCallback=t.cb,this.fixedAnim=this.yaw=this.pitch=0):i*=s,e=b.Rotation(i,t.axis),this.transform=this.transform.mul(e),0!=this.fixedAnim)},i.AnimatePosition=function(t,i,e){var s,h,n=this,a=n.mx,o=n.my;!n.frozen&&0<=a&&0<=o&&a<t&&o<i?(s=n.maxSpeed,h=n.reverse?-1:1,n.lx||(n.yaw=(2*a*s/t-s)*h*e),n.ly||(n.pitch=(2*o*s/i-s)*-h*e),n.initial=null):n.initial||(n.frozen&&!n.freezeDecel?n.yaw=n.pitch=0:n.Decel(n)),this.Transform(n,n.pitch,n.yaw)},i.AnimateDrag=function(t,i,e){var s=this,e=100*e*s.maxSpeed/s.max_radius/s.zoom;s.dx||s.dy?(s.lx||(s.yaw=s.dx*e/s.stretchX),s.ly||(s.pitch=s.dy*-e/s.stretchY),s.dx=s.dy=0,s.initial=null):s.initial||s.Decel(s),this.Transform(s,s.pitch,s.yaw)},i.Freeze=function(){this.frozen||(this.preFreeze=[this.yaw,this.pitch],this.frozen=1,this.drawn=0)},i.UnFreeze=function(){this.frozen&&(this.yaw=this.preFreeze[0],this.pitch=this.preFreeze[1],this.frozen=0)},i.Decel=function(t){var i=t.minSpeed,e=D(t.yaw),s=D(t.pitch);!t.lx&&i<e&&(t.yaw=t.z0<e?t.yaw*t.decel:0),!t.ly&&i<s&&(t.pitch=t.z0<s?t.pitch*t.decel:0)},i.Zoom=function(t){this.z2=this.z1*(1/t),this.drawn=0},i.Clicked=function(t){var i=this.active;try{i&&i.tag&&(!1===this.clickToFront||null===this.clickToFront?i.tag.Clicked(t):this.TagToFront(i.tag,this.clickToFront,function(){i.tag.Clicked(t)},!0))}catch(t){}},i.Wheel=function(t){t=this.zoom+this.zoomStep*(t?1:-1);this.zoom=I(this.zoomMax,A(this.zoomMin,t)),this.Zoom(this.zoom)},i.BeginDrag=function(t){this.down=E(t,this.canvas),t.cancelBubble=!0,t.returnValue=!1,t.preventDefault&&t.preventDefault()},i.Drag=function(t,i){var e,s,h;return this.dragControl&&this.down&&(e=this.dragThreshold*this.dragThreshold,s=i.x-this.down.x,h=i.y-this.down.y,this.dragging||e<s*s+h*h)&&(this.dx=s,this.dy=h,this.dragging=1,this.down=i),this.dragging},i.EndDrag=function(){var t=this.dragging;return this.dragging=this.down=null,t},i.BeginPinch=function(t){this.pinched=[ut(t),this.zoom],t.preventDefault&&t.preventDefault()},i.Pinch=function(t){var i=this.pinched;i&&(t=ut(t),t=i[1]*t/i[0],this.zoom=I(this.zoomMax,A(this.zoomMin,t)),this.Zoom(this.zoom))},i.EndPinch=function(t){this.pinched=null},i.Pause=function(){this.paused=!0},i.Resume=function(){this.paused=!1},i.SetSpeed=function(t){this.initial=t,this.yaw=t[0]*this.maxSpeed,this.pitch=t[1]*this.maxSpeed},i.FindTag=function(t){if(!w(t))return null;if(!x(t=w(t.index)?t.index:t))return this.taglist[t];var i,e,s;for(w(t.id)?(i="id",e=t.id):w(t.text)&&(i="innerText",e=t.text),s=0;s<this.taglist.length;++s)if(this.taglist[s].a[i]==e)return this.taglist[s]},i.RotateTag=function(t,i,e,s,h,n){var a=t.Calc(this.transform,1),a=new S(a.x,a.y,a.z),e=(e=e,i=(i=i)*Math.PI/180,new S(d(e=e*Math.PI/180)*f(i),-d(i),-f(e)*f(i))),i=a.angle(e),a=a.cross(e).unit();0==i?(this.fixedCallbackTag=t,this.fixedCallback=h):this.fixedAnim={angle:-i,axis:a,t:s,t0:T(),cb:h,tag:t,active:n}},i.TagToFront=function(t,i,e,s){this.RotateTag(t,0,0,i,e,s)},R.Start=function(t,i,e){R.Delete(t),R.tc[t]=new R(t,i,e)},R.Linear=function(t,i){return i/t},R.Smooth=function(t,i){return.5-f(i*Math.PI/t)/2},R.Pause=function(t){s("Pause",t)},R.Resume=function(t){s("Resume",t)},R.Reload=function(t){s("Load",t)},R.Update=function(t){s("Update",t)},R.SetSpeed=function(t,i){return!(!x(i)||!R.tc[t]||isNaN(i[0])||isNaN(i[1])||(R.tc[t].SetSpeed(i),0))},R.TagToFront=function(t,i){return!!x(i)&&(i.lat=i.lng=0,R.RotateTag(t,i))},R.RotateTag=function(t,i){if(x(i)&&R.tc[t]){isNaN(i.time)&&(i.time=500);var e=R.tc[t].FindTag(i);if(e)return R.tc[t].RotateTag(e,i.lat,i.lng,i.time,i.callback,i.active),!0}return!1},R.Delete=function(t){var i,e,s,h,n;if(p[t]&&(e=c.getElementById(t)))for(i=0;i<p[t].length;++i)s=p[t][i][0],h=p[t][i][1],(n=(n=e)||c).removeEventListener?n.removeEventListener(s,h):n.detachEvent("on"+s,h);delete p[t],delete R.tc[t]},R.NextFrameRAF=function(){requestAnimationFrame(at)},R.NextFrameTimeout=function(t){setTimeout(h,t)},R.tc={},R.options={z1:2e4,z2:2e4,z0:2e-4,freezeActive:!0,freezeDecel:!1,activeCursor:"pointer",pulsateTo:1,pulsateTime:3,reverse:!1,depth:.5,maxSpeed:.05,minSpeed:0,decel:.95,interval:20,minBrightness:.1,maxBrightness:1,outlineColour:"",outlineThickness:2,outlineOffset:5,outlineMethod:"outline",outlineRadius:0,textColour:["#222","#000"],textHeight:15,textFont:"Helvetica, Arial, sans-serif",shadow:"#111",shadowBlur:1,shadowOffset:[.1,.1],initial:null,hideTags:!1,zoom:0,weight:!1,weightMode:"size",weightFrom:null,weightSize:1,weightSizeMin:null,weightSizeMax:null,weightGradient:{0:"#f00",.33:"#ff0",.66:"#0f0",1:"#00f"},txtOpt:!0,txtScale:2,frontSelect:!1,wheelZoom:!0,zoomMin:.8,zoomMax:.8,zoomStep:.05,shape:"sphere",lock:null,tooltip:null,tooltipDelay:300,tooltipClass:"tctooltip",radiusX:1,radiusY:1,radiusZ:1,stretchX:1,stretchY:1,offsetX:0,offsetY:0,shuffleTags:!1,noSelect:!1,noMouse:!1,imageScale:1,paused:!1,dragControl:!1,dragThreshold:4,centreFunc:y,splitWidth:0,animTiming:"Smooth",clickToFront:!1,fadeIn:0,padding:0,bgColour:null,bgRadius:0,bgOutline:null,bgOutlineThickness:0,outlineIncrease:4,textAlign:"centre",textVAlign:"middle",imageMode:null,imagePosition:null,imagePadding:2,imageAlign:"centre",imageVAlign:"middle",noTagsMessage:!0,centreImage:null,pinchZoom:!1,repeatTags:0,minTags:0,imageRadius:0,scrollPause:!1,outlineDash:0,outlineDashSpace:0,outlineDashSpeed:1},R.options)R[e]=R.options[e];window.TagCanvas=R,O("load",function(){R.loaded=1},window)})();