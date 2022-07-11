"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[293],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,b=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2870:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:4},l="Detecting CVEs",s={unversionedId:"cves",id:"cves",title:"Detecting CVEs",description:"You can list all the CVEs relevant to your software artifact as follows:",source:"@site/docs/cves.md",sourceDirName:".",slug:"/cves",permalink:"/docosaurus-scribe/docs/cves",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to generate an SBOM",permalink:"/docosaurus-scribe/docs/gensbomcli"},next:{title:"A Sample Project",permalink:"/docosaurus-scribe/docs/sampleproject"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detecting-cves"},"Detecting CVEs"),(0,a.kt)("p",null,"You can list all the CVEs relevant to your software artifact as follows: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate an ",(0,a.kt)("em",{parentName:"li"},"SBOM")," with ",(0,a.kt)("em",{parentName:"li"},"gensbom")),(0,a.kt)("li",{parentName:"ol"},"Use open-source tool ",(0,a.kt)("a",{href:"https://github.com/anchore/grype"},"Grype")," on this ",(0,a.kt)("em",{parentName:"li"},"SBOM"),". You can run it either offline or online. If you run offline, you need to update the tool frequently and suppress the automatic update.",(0,a.kt)("br",{parentName:"li"}),"In a bash shell run:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"grype sbom:./image-sbom.json"),"   ")),(0,a.kt)("p",null,"Output when no vulnerabilities are found:"),(0,a.kt)("img",{src:"../img/grype/grype_alpine.png",alt:"Grype alpine"}),(0,a.kt)("p",null,"Example output when vulnerabilities are found:"),(0,a.kt)("img",{src:"../img/grype/grype_couchbase.png",alt:"Grype couchbase"}),"\xa0",(0,a.kt)("p",null,"For more details on the CVEs run:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"grype sbom:./image-sbom.json -o json")))}m.isMDXComponent=!0}}]);