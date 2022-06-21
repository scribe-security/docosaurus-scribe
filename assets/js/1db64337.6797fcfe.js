"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},c=void 0,l={unversionedId:"overview",id:"overview",title:"overview",description:"Scribe is a solution for organizations who are concerned about threats from their software supply chain.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docosaurus-scribe/docs/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docosaurus-scribe/docs/intro"}},u={},d=[{value:"How Scribe works",id:"how-scribe-works",level:2},{value:"Software Bill of Materials (SBOM)",id:"software-bill-of-materials-sbom",level:3},{value:"Integrity Validation and Open Source Authentication",id:"integrity-validation-and-open-source-authentication",level:3},{value:"CVEs - Published Vulnerabilities",id:"cves---published-vulnerabilities",level:3},{value:"Govern the Security of the Software Development Lifecycle",id:"govern-the-security-of-the-software-development-lifecycle",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"https://repository-images.githubusercontent.com/503625714/7e2cd452-c7f1-4718-8b5b-e2e89f43eb37",alt:"Gitgat",width:"400"}),"# Overview",(0,o.kt)("p",null,"Scribe is a solution for organizations who are concerned about threats from their software supply chain.\nDevSecOps teams securing software builds and security teams responsible for software in-use, can use Scribe as a means to continuously assure this software is secure."),(0,o.kt)("h2",{id:"how-scribe-works"},"How Scribe works"),(0,o.kt)("h3",{id:"software-bill-of-materials-sbom"},"Software Bill of Materials (SBOM)"),(0,o.kt)("p",null,"Scribe can generate an SBOM for every build with a tool you can run in your build pipeline. With Scribe Online, you can store SBOMs and share them on a continuous basis with subscribers you authorize, even if they reside across organizational borders.\nIn the next sections, we explain how Scribe can augment the supply chain risk management with security analysis and apply security policies on SBOMs and other types of information.\nAn SBOM is a standard format for expressing information about the components making up a software artifact, useful for managing software supply chain risks. An SBOM can be utilized for identifying vulnerabilities inherited from dependencies, during both the development phase and the use phase. It can also be used to identify open-source dependencies with low reputation. Today, organizations are not always aware of the full extent of the open-source dependencies in the software they build or use. Moreover, if such information exists, it is not methodically tracked or communicated to the stakeholders who consume this software. This is especially true in vendor-customer relationships."),(0,o.kt)("p",null,"Read more on SBOM ",(0,o.kt)("a",{href:"https://scribesecurity.com/sbom/"},"here"),"."),(0,o.kt)("h3",{id:"integrity-validation-and-open-source-authentication"},"Integrity Validation and Open Source Authentication"),(0,o.kt)("p",null,"Scribe validates the integrity of your software build by tracking every file\u2019s hash value from the file\u2019s origin to the built artifact, throughout the software development lifecycle. This origin can be open-source or internal: a code repo, a package manager or a container registry. In the process, Scribe flags suspicious modifications while accounting for legitimate changes such as linting and compilation. Scribe also validates the build environment and tools in a similar way. With its open-source package intelligence service, Scribe authenticates the open-source components, thus assuring that they were not maliciously modified. Scribe enriches SBOMs with this granular validation information and you can share it with relevant stakeholders.\nAdvanced user can cryptographically sign and validate critical evidence with customer keys, throughout the software development lifecycle (SDLC). This method provides resistance against tampering. It can also be regarded as extending the well known concept of software signing to the SDLC."),(0,o.kt)("h3",{id:"cves---published-vulnerabilities"},"CVEs - Published Vulnerabilities"),(0,o.kt)("p",null,"Scribe generates CVE reports and continuously tracks newly published CVEs for software builds delivered to production based on the SBOMs it stores and manages for the built software."),(0,o.kt)("h3",{id:"govern-the-security-of-the-software-development-lifecycle"},"Govern the Security of the Software Development Lifecycle"),(0,o.kt)("p",null,"As a DevSecOps or a Security engineer, you can use Scribe to set a local or an organizational SDLC policy that governs your acceptable risk. For instance, you can whitelist open-source components, mandate certain security tests, or flag severe warnings from tools running in your pipeline checking for CVEs or performing application security tests.\nIn a more advanced use case, Scribe enables software customers to govern, by policy, artifacts delivered from their vendors such as in a subcontracting relationship. The policy owner can also mandate a minimum level for the software vendor\u2019s build environment security level.\nIn another advanced use case, Scribe policy mandates the signage of commits and identity of committers."))}f.isMDXComponent=!0}}]);