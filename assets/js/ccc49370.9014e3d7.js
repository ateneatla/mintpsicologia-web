"use strict";(self.webpackChunkmintpsicologia_web=self.webpackChunkmintpsicologia_web||[]).push([[103],{8964:(e,n,t)=>{t.r(n),t.d(n,{default:()=>O});var a=t(7294),i=t(512),s=t(1944),r=t(5281),l=t(9460),o=t(7846),c=t(1420),d=t(5999),m=t(2244),u=t(5893);function g(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(m.Z,{...t,subLabel:(0,u.jsx)(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(m.Z,{...n,subLabel:(0,u.jsx)(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,l.C)(),{title:t,description:a,date:i,tags:r,authors:o,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(s.d,{title:t,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:i}),o.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var f=t(6668);function p(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function v(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=v({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function x(e){const n=e.getBoundingClientRect();return n.top===n.bottom?x(e.parentNode):n}function b(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>x(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(x(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function j(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,f.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function L(e){const n=(0,a.useRef)(void 0),t=j();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),o=b(l,{anchorTopOffset:t.current}),c=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var C=t(9960);function N(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,u.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(C.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(N,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const H=a.memo(N);function _(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:l,...o}=e;const c=(0,f.L)(),d=r??c.tableOfContents.minHeadingLevel,m=l??c.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>v({toc:p(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:d,maxHeadingLevel:m});return L((0,a.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:m}}),[i,s,d,m])),(0,u.jsx)(H,{toc:g,className:t,linkClassName:i,...o})}const k={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},y="table-of-contents__link toc-highlight",Z="table-of-contents__link--active";function w(e){let{className:n,...t}=e;return(0,u.jsx)("div",{className:(0,i.Z)(k.tableOfContents,"thin-scrollbar",n),children:(0,u.jsx)(_,{...t,linkClassName:y,linkActiveClassName:Z})})}var T=t(2212);function I(e){let{sidebar:n,children:t}=e;const{metadata:a,toc:i}=(0,l.C)(),{nextItem:s,prevItem:r,frontMatter:d,unlisted:m}=a,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:p}=d;return(0,u.jsxs)(o.Z,{sidebar:n,toc:!h&&i.length>0?(0,u.jsx)(w,{toc:i,minHeadingLevel:f,maxHeadingLevel:p}):void 0,children:[m&&(0,u.jsx)(T.Z,{}),(0,u.jsx)(c.Z,{children:t}),(s||r)&&(0,u.jsx)(g,{nextItem:s,prevItem:r})]})}function O(e){const n=e.content;return(0,u.jsx)(l.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(s.FG,{className:(0,i.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(I,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},2212:(e,n,t)=>{t.d(n,{Z:()=>g});t(7294);var a=t(512),i=t(5999),s=t(5742),r=t(5893);function l(){return(0,r.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(s.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),m=t(9047);function u(e){let{className:n}=e;return(0,r.jsx)(m.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.Z)(n,d.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},4572:(e,n,t)=>{t.d(n,{Z:()=>d});t(7294);var a=t(512),i=t(5999),s=t(8824),r=t(9460);const l={container:"container_iJTo"};var o=t(5893);function c(e){let{readingTime:n}=e;const t=function(){const{selectMessage:e}=(0,s.c)();return n=>{const t=Math.ceil(n);return e(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}}();return(0,o.jsx)(o.Fragment,{children:t(n)})}function d(e){let{className:n}=e;const{metadata:t}=(0,r.C)(),{readingTime:i}=t;return(0,o.jsx)("div",{className:(0,a.Z)(l.container,"margin-vert--md",n),children:void 0!==i&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c,{readingTime:i})})})}}}]);