"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[276],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9109:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Generating an SBOM from CLI",u={unversionedId:"gensbomcli",id:"gensbomcli",title:"Generating an SBOM from CLI",description:"Scribe gensbom CLI tool can generate an SBOM for docker images, OCI images, or local file directories. For example, you can invoke gensbom from your CI pipeline at the end of every stage to generate an SBOM for the output image. Alternatively, you can run gensbom on images in a registry or in a file directory. Once an SBOM is ready, you can store and share it using your own internal process. You can also run it through tools that report known vulnerabilities found in the listed components such as Grype.",source:"@site/docs/gensbomcli.md",sourceDirName:".",slug:"/gensbomcli",permalink:"/docosaurus-scribe/docs/gensbomcli",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docosaurus-scribe/docs/overview"},next:{title:"Detecting CVEs",permalink:"/docosaurus-scribe/docs/cves"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Generate an SBOM",id:"generate-an-sbom",level:2},{value:"Examples",id:"examples",level:2},{value:"Target (image) locations:",id:"target-image-locations",level:3},{value:"Output SBOM locations",id:"output-sbom-locations",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generating-an-sbom-from-cli"},"Generating an SBOM from CLI"),(0,a.kt)("p",null,"Scribe gensbom CLI tool can generate an SBOM for docker images, OCI images, or local file directories. For example, you can invoke gensbom from your CI pipeline at the end of every stage to generate an SBOM for the output image. Alternatively, you can run gensbom on images in a registry or in a file directory. Once an SBOM is ready, you can store and share it using your own internal process. You can also run it through tools that report known vulnerabilities found in the listed components such as Grype."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The tool works on Mac and Linux systems only. If you want access to external docker images from public registries, docker daemon should be installed before you install the CLI tool.",(0,a.kt)("br",{parentName:"p"}),"\n","You can download the latest gensbom CLI tool here:\nLinux: ",(0,a.kt)("a",{href:"http://resources.production.scribesecurity.com/linux/amd64/gensbom"},(0,a.kt)("a",{parentName:"p",href:"http://resources.production.scribesecurity.com/linux/amd64/gensbom"},"http://resources.production.scribesecurity.com/linux/amd64/gensbom")),"\nMac Intel: ",(0,a.kt)("a",{href:"http://resources.production.scribesecurity.com/darwin/amd64/gensbom"},(0,a.kt)("a",{parentName:"p",href:"http://resources.production.scribesecurity.com/darwin/amd64/gensbom"},"http://resources.production.scribesecurity.com/darwin/amd64/gensbom")),"\nMac M1: ",(0,a.kt)("a",{href:"http://resources.production.scribesecurity.com/darwin/amd64/gensbom"},(0,a.kt)("a",{parentName:"p",href:"http://resources.production.scribesecurity.com/darwin/amd64/gensbom"},"http://resources.production.scribesecurity.com/darwin/amd64/gensbom"))),(0,a.kt)("p",null,"before running the tool make sure you have the right privileges for the file by typing:\n",(0,a.kt)("inlineCode",{parentName:"p"},"chmod u+x gensbom")),(0,a.kt)("p",null,"Then, move gensbom to ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," or run it with ",(0,a.kt)("inlineCode",{parentName:"p"},"./gensbom")," from the directory it was downloaded into."),(0,a.kt)("h2",{id:"generate-an-sbom"},"Generate an SBOM"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom <target>")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<target>")," is the docker image: ",(0,a.kt)("i",null,"name:tag"),", ",(0,a.kt)("i",null,"file path"),", or ",(0,a.kt)("i",null,"registry URL"),"."),(0,a.kt)("p",null,"Example:\n",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom alpine:latest")),(0,a.kt)("p",null,"This creates a default SBOM in a CycloneDX JSON format, from the image of alpine:latest found in dockerhub. The SBOM is found by default under ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/scribe/registry/alpine/latest"),"."),(0,a.kt)("p",null,"By default the SBOM file name is the hash of the image. You can specify another output file path and name as follows:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom <target> [--output-file /path/file_name.json]")),(0,a.kt)("p",null,"You can also set an output directory as follows:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom <target> [--output-directory /file_path]")),(0,a.kt)("p",null,"Output SBOMs path segments are: target source, image name, image tag.\nExample:  ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/scribe/registry/alpine/latest"),".\n(The path for SBOMs of alpine:latest from registry)"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"target-image-locations"},"Target (image) locations:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom yourrepo/yourimage:tag"),"  "),(0,a.kt)("p",null,"By default the image is retrieved by dockerd. If the docker daemon is running, the image is pulled directly from the registry (by default, dockerhub).  "),(0,a.kt)("p",null,"Explicitly use the Docker daemon:\n",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom docker:yourrepo/yourimage:tag "),"  "),(0,a.kt)("p",null,'Use a local traball created by "docker save":',(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom docker-archive:path/to/yourimage.tar "),"  "),(0,a.kt)("p",null,"Use a tarball from your local disk for OCI archives (for example, Skopeo):\n",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom oci-archive:path/to/yourimage.tar "),"  "),(0,a.kt)("p",null,"Read the image directly from a path on your local disk (any directory):\n",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom dir:path/to/yourproject"),"  "),(0,a.kt)("p",null,"Pull image directly from a registry:\n",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom registry:yourrepo/yourimage:tag"),"  "),(0,a.kt)("p",null,"Read directly from a path on disk (any single file):\n",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom file:path/to/yourproject/file ")),(0,a.kt)("h3",{id:"output-sbom-locations"},"Output SBOM locations"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom alpine:latest --output-file /your_sboms/sample-sbom.json  "),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gensbom bom alpine:latest --output-directory /your_sboms")))}d.isMDXComponent=!0}}]);