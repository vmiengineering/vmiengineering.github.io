"use strict";(self.webpackChunkeng_test=self.webpackChunkeng_test||[]).push([[375],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},2326:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return v},default:function(){return b},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return w}});var n=a(7462),r=a(3366),i=a(7294),o=a(3905),l=a(9443);var s=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(6010),c="tabItem_1uMI",m="tabItemActive_2DSg";var d=37,u=39;var k=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,r=e.values,o=e.groupId,l=e.className,k=s(),h=k.tabGroupChoices,N=k.setTabGroupChoices,g=(0,i.useState)(n),v=g[0],f=g[1],w=i.Children.toArray(e.children),y=[];if(null!=o){var b=h[o];null!=b&&b!==v&&r.some((function(e){return e.value===b}))&&f(b)}var S=function(e){var t=e.currentTarget,a=y.indexOf(t),n=r[a].value;f(n),null!=o&&(N(o,n),setTimeout((function(){var e,a,n,r,i,o,l,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,a>=0&&i<=s&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m),setTimeout((function(){return t.classList.remove(m)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case u:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case d:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},l)},r.map((function(e){var t=e.value,a=e.label;return i.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:S,onClick:S},a)}))),t?(0,i.cloneElement)(w.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var h=function(e){var t=e.children,a=e.hidden,n=e.className;return i.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},N=["components"],g={title:"License Server Change",sidebar_position:5},v="License Server Change Instructions",f={unversionedId:"licenseserver",id:"licenseserver",isDocsHomePage:!1,title:"License Server Change",description:"Ansys",source:"@site/docs/licenseserver.md",sourceDirName:".",slug:"/licenseserver",permalink:"/licenseserver",editUrl:"https://vmiengineering.github.io/docs/licenseserver.md",version:"current",sidebarPosition:5,frontMatter:{title:"License Server Change",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Visual Analysis",permalink:"/Software/visanalysis"},next:{title:"Support and Contact",permalink:"/contact"}},w=[{value:"Ansys",id:"ansys",children:[]},{value:"ArcGIS",id:"arcgis",children:[]},{value:"Autocad",id:"autocad",children:[]},{value:"Matlab",id:"matlab",children:[]},{value:"Mathcad",id:"mathcad",children:[]},{value:"Pix4Dmapper",id:"pix4dmapper",children:[]},{value:"RoadEng",id:"roadeng",children:[]},{value:"Solidworks",id:"solidworks",children:[]}],y={toc:w};function b(e){var t=e.components,i=(0,r.Z)(e,N);return(0,o.kt)("wrapper",(0,n.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"license-server-change-instructions"},"License Server Change Instructions"),(0,o.kt)("h2",{id:"ansys"},"Ansys"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"License Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hostname: ",(0,o.kt)("strong",{parentName:"p"},"anderson11")," | Interconnect Port: ",(0,o.kt)("strong",{parentName:"p"},"2325")," | FlexNet Port: ",(0,o.kt)("strong",{parentName:"p"},"1055")," | "))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"IMPORTANT")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"INSTRUCTIONS MAY VARY BASED ON VERSION INSTALLED")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start -> All Programs -> ANSYS XX.X (Version) -> ",(0,o.kt)("inlineCode",{parentName:"li"},"ANSYS Client Licensing")," (May be under the root ANSYS folder)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Right click ",(0,o.kt)("inlineCode",{parentName:"li"},"[Client] ANSLIC_ADMIN Utility")," "),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Specify the License Server machine")," (Depending on version it may just show the server on the utility front page)"),(0,o.kt)("li",{parentName:"ul"},"Highlight the Server that is in the list and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Edit Selected Server Machine"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Verify the following settings:"),(0,o.kt)("li",{parentName:"ul"},"ANSYS Licensing Interconnect port number (default is 2325): ",(0,o.kt)("inlineCode",{parentName:"li"},"2325")),(0,o.kt)("li",{parentName:"ul"},"ANSYS FLEXlm port number (default is 1055): ",(0,o.kt)("inlineCode",{parentName:"li"},"1055")),(0,o.kt)("li",{parentName:"ul"},"Select number of license server machines: ",(0,o.kt)("inlineCode",{parentName:"li"},"1-server")),(0,o.kt)("li",{parentName:"ul"},"Hostname 1: ",(0,o.kt)("inlineCode",{parentName:"li"},"anderson11")))),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"OK")),(0,o.kt)("li",{parentName:"ul"},"Close and verify Ansys opens properly")))),(0,o.kt)("h2",{id:"arcgis"},"ArcGIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Summary"),(0,o.kt)("br",{parentName:"p"}),"\n","Instructions provided describe how to reconfigure the ArcGIS License Manager after the license server hostname is changed."),(0,o.kt)("p",null,"If the name of the computer that ArcGIS License Manager is installed on is changed, the ArcGIS License Manager will need to be reconfigured to use that new computer name. Otherwise, license errors are received."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Procedure"),"  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate a copy of the Esri concurrent use (floating) license file. This file is usually named with the same number as the concurrent use license dongle (hardware key), which always begins with the numbers \u2018371\u2019 and has an extension of .EFL9. If the floating license file cannot be found, request a copy by visiting ",(0,o.kt)("a",{parentName:"p",href:"http://service.esri.com"},"http://service.esri.com"),", and clicking \u2018request a new license file\u2019, or by contacting Esri Customer Service at 888-377-4575.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open that license file using Notepad.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the line near the beginning of the license which reads \u2018SERVER\u2019. Change the name of the machine listed after \u2018SERVER\u2019 to match the PC's new hostname:\n",(0,o.kt)("img",{alt:"server",src:a(5412).Z})))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:"),(0,o.kt)("br",{parentName:"p"}),"\n","To find the PC's hostname, open a command prompt by going to Start > Run. In the 'Run' text box, type CMD and click OK. The DOS console should appear. In the console, type HOSTNAME and press 'Enter'. The value returned is the machine's hostname.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to Start > Programs > ArcGIS > License Manager (9.x) > Update License and complete the wizard, pointing to the .EFL9 license file that was just edited.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to Start > Programs > ArcGIS > License Manager (9.x) > License Manager Tools. Select the option 'Configuration using services.' Click the Start/Stop/Reread tab. Click Stop Server, Start Server, and Reread License File. It should say that the reread completed successfully."))),(0,o.kt)("p",null,"The reconfiguration is now complete. To use the new computer name as the license server, navigate to Start > Programs > ArcGIS > Desktop Administrator on a computer where ArcGIS Desktop is installed. Click License Manager on the left and the Change button on the right. Type in the license server's new name and click OK."),(0,o.kt)("h2",{id:"autocad"},"Autocad"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hostname (Server Name): ",(0,o.kt)("strong",{parentName:"p"},"anderson11")," | Port ",(0,o.kt)("strong",{parentName:"p"},"27005"),(0,o.kt)("br",{parentName:"p"}),"\n","27005@anderson11"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"NOTE")," For versions 2016 and earlier, reinstall the software to change the license type.  WHen you reinstall, select the license type, using the pre-2017 types: stand-alone or network."))),(0,o.kt)(k,{defaultValue:"2020",values:[{label:"Autocad 2020 or Newer",value:"2020"},{label:"Autocad 2017, 2018, 2019",value:"2017"},{label:"Autocad 2016 and Earlier",value:"2016"},{label:"Reinstall",value:"reinstall"}],mdxType:"Tabs"},(0,o.kt)(h,{value:"2020",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your software starts")),(0,o.kt)("p",null,"Follow this workflow to reset your license type through the License Manager. If your trial license has expired, click Already Have A License at the bottom of the Expired Trial dialog box."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start your Autodesk software."),(0,o.kt)("li",{parentName:"ol"},"At the upper-right, click the triangle next to the username."),(0,o.kt)("li",{parentName:"ol"},"Select Manage Licenses."),(0,o.kt)("li",{parentName:"ol"},"In the License Manager dialog box, select Manage License Type. The Let\u2019s Get Started screen appears."),(0,o.kt)("li",{parentName:"ol"},"Choose your license type.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your software doesn\u2019t start"),"\nUse the  Autodesk Licensing Installer Helper tool (AdskLicensingInstHelper)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before you begin:")," If you\u2019re signed in to the Autodesk desktop app or Autodesk cloud-based services, sign out. Then clear the login status by deleting the LoginState.xml file at these locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows: %localappdata%\\Autodesk\\Web Services\\LoginState.xml (Tip: From the Task Manager, select the Details tab. If the AdSSO service is running, click End Task and delete the LoginState.xml file.)"),(0,o.kt)("li",{parentName:"ul"},"macOS: ~/Library/Application\\ Support/Autodesk/Web\\ Services/LoginState.xml"),(0,o.kt)("li",{parentName:"ul"},"Linux: ~/.local/share/Autodesk/Web Services/LoginState.xml")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open a command prompt on Windows (run as administrator) or a terminal in macOS or Linux.  "),(0,o.kt)("li",{parentName:"ol"},"To change the directory to AdskLicensingInstHelper, run following commands:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows: cd %CommonProgramFiles(x86)%\\Autodesk Shared\\AdskLicensing\\Current\\helper\\"),(0,o.kt)("li",{parentName:"ul"},"macOS: cd /Library/Application\\ Support/Autodesk/AdskLicensing/Current/helper/"),(0,o.kt)("li",{parentName:"ul"},"Linux: cd /opt/Autodesk/AdskLicensing/2020/helper/")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In the Command line, run the following (for example, for the 2020 release):")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Windows: AdskLicensingInstHelper change -pk 2020_product_key -pv 2020.0.0.F -lm ""'),(0,o.kt)("li",{parentName:"ul"},"Mac/Linux: sudo  AdskLicensingInstHelper change -pk 2020_product_key -pv 2020.0.0.F -lm")),(0,o.kt)("p",null,"Note: Here is a list of  product keys.",(0,o.kt)("br",{parentName:"p"}),"\n","Start your Autodesk software. On the Let\u2019s Get Started screen, select the appropriate license type. ")),(0,o.kt)(h,{value:"2017",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your software starts")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"At the upper right, click the drop-down triangle next to the username."),(0,o.kt)("li",{parentName:"ol"},"Click Manage License."),(0,o.kt)("li",{parentName:"ol"},"In the License Manager dialog box, click Change License Type."),(0,o.kt)("li",{parentName:"ol"},"Close the product and restart it. Follow these directions, according to whether you see the Let's Get Started screen.")),(0,o.kt)("p",null,"A video tutorial of this process can be found here.\nYou see the Let's Get Started screen"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you see the screen, select one of these options:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Single-user"),(0,o.kt)("li",{parentName:"ul"},"Multi-user"),(0,o.kt)("li",{parentName:"ul"},"Enter a serial number"),(0,o.kt)("li",{parentName:"ul"},"Start a trial"))),(0,o.kt)("li",{parentName:"ol"},"If you're not sure, click Help Me Choose.")),(0,o.kt)("p",null,"You don't see the Let's Get Started screen or your software doesn't open"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you don't see the Get Started screen, delete the following LGS.data file."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"C:\\ProgramData\\Autodesk\\CLM\\LGS\\ProductKey_ProductVersion.0.0.F\\LGS.data"),(0,o.kt)("li",{parentName:"ul"},"For example, in AutoCAD 2019, the file may be here: C:\\ProgramData\\Autodesk\\CLM\\LGS\\001K1_2019.0.0.F\\LGS.data"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For a single-user license, delete the following folders and files:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"C:\\ProgramData\\Autodesk\\ADUT"),(0,o.kt)("li",{parentName:"ul"},"C:\\Users\\user\\AppData\\Roaming\\Autodesk\\ADUT (if it exists)"),(0,o.kt)("li",{parentName:"ul"},"C:\\Users\\user\\AppData\\local\\Autodesk\\Web Services\\LoginState.xml")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note"),": If the folders and files are hidden, see Show hidden files.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart the Autodesk software."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"macOS")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you don't see the Get Started screen, delete the LGS.data file."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/Library/Application\\ Support/Autodesk/CLM/LGS/ProductKey_ProductVersion.0.0.F/LGS.data"),(0,o.kt)("li",{parentName:"ul"},"For example, in AutoCAD 2018, the file may be here:"),(0,o.kt)("li",{parentName:"ul"},"/Library/Application\\ Support/Autodesk/CLM/LGS/777J1_2018.0.0.F/LGS.data",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("strong",{parentName:"li"},"Note"),": Here is a list of all the Autodesk product keys."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For a single-user license, also remove the following folders and files:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/Users/username/Library/Application\\ Support/Autodesk/ADUT (if it exists)"),(0,o.kt)("li",{parentName:"ul"},"/Users/username/Library/Application\\ Support/Autodesk/Web Services/LoginState.xml"),(0,o.kt)("li",{parentName:"ul"},'/Library/Preferences/FLEXnet Publisher/FLEXnet all files that begin with "adsk"',(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("strong",{parentName:"li"},"Note"),": Don't remove any non-Autodesk files from the FLEXnet folder. To make hidden files visible, go to Finder > Go > Go To Folder. Paste in the path, and press Enter.  "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart the Autodesk software.")))),(0,o.kt)(h,{value:"2016",mdxType:"TabItem"},(0,o.kt)("p",null,"For products earlier than 2017, uninstall the product and then reinstall it to reset the license. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Uninstall your Autodesk software."),(0,o.kt)("li",{parentName:"ol"},"Delete ADUT folders, if any. You can find them here:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Windows: C:\\Users\\YourUserID\\ AppData\\Roaming\\Autodesk\\ADUT "),(0,o.kt)("li",{parentName:"ul"},"macOS: /User/username/Library/Application\\ Support/Autodesk/ADUT"))),(0,o.kt)("li",{parentName:"ol"},"Sign in to manage.autodesk.com and download the software."),(0,o.kt)("li",{parentName:"ol"},"Follow the recommended installation workflow for Autodesk products."),(0,o.kt)("li",{parentName:"ol"},"After the software is installed, start it and select the appropriate license type."))),(0,o.kt)(h,{value:"reinstall",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Reinstall")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the above methods do not work then fullly uninstall and reinstall using the network license pointed to 27005@anderson11 when prompted when starting up."))))),(0,o.kt)("h2",{id:"matlab"},"Matlab"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"License Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hostname: ",(0,o.kt)("strong",{parentName:"p"},"anderson11")," | Port: ",(0,o.kt)("strong",{parentName:"p"},"27000")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\MATLAB\\R20XX\\licenses\\")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Right click")," and open ",(0,o.kt)("inlineCode",{parentName:"li"},"network.lic")," with a text editor (notepad)"),(0,o.kt)("li",{parentName:"ul"},"Change the first line to the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SERVER ANDERSON11.vmi.edu 00155D0414A5 27000")))),(0,o.kt)("li",{parentName:"ul"},"Save and exit and it should now point to the new license server"),(0,o.kt)("li",{parentName:"ul"},"Open to verify")),(0,o.kt)("h2",{id:"mathcad"},"Mathcad"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"License Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hostname: ",(0,o.kt)("strong",{parentName:"p"},"anderson11")," | Port: ",(0,o.kt)("strong",{parentName:"p"},"7788")))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"IMPORTANT")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is based on per user so must be done by the primary user of the asset"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When you open Mathcad it will prompt you to open the Mathcad License Setup wizard, click ",(0,o.kt)("inlineCode",{parentName:"li"},"YES"),"."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"I want to configure Mathcad to use an existing license file")),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Use a license server"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Server name: ",(0,o.kt)("inlineCode",{parentName:"li"},"anderson11")),(0,o.kt)("li",{parentName:"ul"},"Server Port : ",(0,o.kt)("inlineCode",{parentName:"li"},"7788")," (Default)"))),(0,o.kt)("li",{parentName:"ul"},"Open to verify")),(0,o.kt)("h2",{id:"pix4dmapper"},"Pix4Dmapper"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"TLDR")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"When you are done using the software log out to return the license back to the total license pool")))),(0,o.kt)("p",null,"In regards to the Pix4Dmapper software, please note that there is a 25 seat floating license for this software.  ",(0,o.kt)("strong",{parentName:"p"},"These licenses are not auto checked out/in from the total pool like most floating license software\u2019s use."),"  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This means that once you sign into the software on a computer, that license will pull from the total pool and stay checked out even if you close the program or turn off your computer.  ",(0,o.kt)("strong",{parentName:"p"},"The only way to deactivate the license to release the license back to the total pool is to log out of Pix4DMapper"),".  "),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"To log out of Pix4Dmapper please follow these steps (",(0,o.kt)("a",{parentName:"strong",href:"https://support.pix4d.com/hc/en-us/articles/208469726-How-to-log-out-of-Pix4Dmapper"},"https://support.pix4d.com/hc/en-us/articles/208469726-How-to-log-out-of-Pix4Dmapper"),"):")),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Make sure that there is an Internet connection for this procedure."),(0,o.kt)("li",{parentName:"ol"},"Open the software on the computer where it is currently registered."),(0,o.kt)("li",{parentName:"ol"},"On the right side of the toolbar, click the user options button   and click Log Out..."),(0,o.kt)("li",{parentName:"ol"},"Confirm the action by clicking OK."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"s",src:a(712).Z}),"  "),(0,o.kt)("h2",{id:"roadeng"},"RoadEng"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"License Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hostname: ",(0,o.kt)("strong",{parentName:"p"},"anderson11")," | Port: ",(0,o.kt)("strong",{parentName:"p"},"8081")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Uninstall Roadeng then Reinstall pointing to the new license")),(0,o.kt)("h2",{id:"solidworks"},"Solidworks"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"License Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hostname: ",(0,o.kt)("strong",{parentName:"p"},"anderson11")," | Port: ",(0,o.kt)("strong",{parentName:"p"},"25734"),(0,o.kt)("br",{parentName:"p"}),"\n","Point to: ",(0,o.kt)("strong",{parentName:"p"},"25734@anderson11")))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"NOTE")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"http://help.solidworks.com/2020/english/EnterprisePDM/admin/t_change_license_type.htm?verRedirect=1"},(0,o.kt)("strong",{parentName:"a"},"CLICK HERE TO FOLLOW DIRECTIONS ON SOLIDWORKS SITE TO CHANGE LICENSE SERVER ON CLIENTS"))),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Please note that there is a dropdown textbox in the upper right hand corner you can click to change Solidworks version that you are needing documentatino for.")))))}b.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})},5412:function(e,t,a){t.Z=a.p+"assets/images/arcgis-c6ff0c48b3e8dc2802da409f74a24aca.png"},712:function(e,t,a){t.Z=a.p+"assets/images/signout-8401e1b47d108b9e8bfb0bbada02e3a7.png"}}]);