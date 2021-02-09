(this["webpackJsonpdemo-pnp-app"]=this["webpackJsonpdemo-pnp-app"]||[]).push([[0],{40:function(e){e.exports=JSON.parse('{"name":"demo-pnp-app","version":"1.0.3","author":"devinsg","email":"vnonline365@gmail.com","private":true,"license":"MIT","engines":{"node":"12.15.0","npm":"6.13.4"},"proxy":"http://localhost:5000","dependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","axios":"^0.21.0","i18next":"^19.8.4","qs":"^6.9.4","react":"^17.0.1","react-bootstrap":"^1.4.3","react-dom":"^17.0.1","react-dropdown-select":"^4.7.3","react-i18next":"^11.8.5","react-paginate":"^7.0.0","react-redux":"^7.2.2","react-router":"^5.2.0","react-router-dom":"^5.2.0","react-scripts":"4.0.1","redux":"^4.0.5","web-vitals":"^0.2.4","workbox-background-sync":"^5.1.4","workbox-broadcast-update":"^5.1.4","workbox-cacheable-response":"^5.1.4","workbox-core":"^5.1.4","workbox-expiration":"^5.1.4","workbox-google-analytics":"^5.1.4","workbox-navigation-preload":"^5.1.4","workbox-precaching":"^5.1.4","workbox-range-requests":"^5.1.4","workbox-routing":"^5.1.4","workbox-strategies":"^5.1.4","workbox-streams":"^5.1.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","production":"GENERATE_SOURCEMAP=false react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"bootstrap":"^4.5.3","lodash":"^4.17.20","moment":"^2.29.1","node-sass":"^4.14.1"}}')},50:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(28),i=a.n(s),o=(a(50),a(17)),l=a(8),j=a(6),u=a.n(j),d=a(9),b=a(7),p=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/",children:"VNI Online 365"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(n.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("a",{className:"nav-link",href:"/",children:["Home",Object(n.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"/employee",children:"Employee"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"/course",children:"Course"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"/video",children:"Video"})})]})})]})})},h=a(40),x=function(){return Object(n.jsx)("footer",{className:"py-3 bg-dark",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("p",{className:"m-0 text-center text-white",children:["Copyright \xa9 2021 | version ",h.version]})})})},m=a.p+"static/media/tbs1.efbd6cce.jpg",O=function(e){var t=e.callAction,a=e.title,c=e.text;return Object(n.jsxs)("div",{className:"row align-items-center my-5",children:[Object(n.jsx)("div",{className:"col-lg-7",children:Object(n.jsx)("img",{className:"img-fluid rounded mb-4 mb-lg-0",src:m,alt:"Most viewed"})}),Object(n.jsxs)("div",{className:"col-lg-5",children:[Object(n.jsx)("h1",{className:"font-weight-light",children:a}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("a",{className:"btn btn-primary",href:"/",onClick:t,children:"Xem phim"})]})]})},v=function(e){var t=e.title,a=e.text;return Object(n.jsx)("div",{className:"col-md-4 mb-5",children:Object(n.jsxs)("div",{className:"card h-100",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"card-title",children:t}),Object(n.jsx)("p",{className:"card-text",children:a})]}),Object(n.jsx)("div",{className:"card-footer",children:Object(n.jsx)("a",{href:"/",className:"btn btn-primary btn-sm",children:"More Info"})})]})})},f=function(e){var t=e.callAction,a=e.videos;return Object(n.jsxs)("div",{className:"container",children:[Array.isArray(a)&&a.length>=1&&Object(n.jsx)(O,{callAction:t,title:a[0].VideoName,text:a[0].Description}),Object(n.jsx)("div",{className:"card text-white bg-secondary my-5 py-4 text-center",children:Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("p",{className:"text-white m-0",children:"This call to action card is a great place to showcase some important information or display a clever tagline!"})})}),Object(n.jsxs)("div",{className:"row",children:[Array.isArray(a)&&a.length>=2&&Object(n.jsx)(v,{title:a[1].VideoName,text:a[1].Description}),Array.isArray(a)&&a.length>=3&&Object(n.jsx)(v,{title:a[2].VideoName,text:a[2].Description}),Array.isArray(a)&&a.length>=4&&Object(n.jsx)(v,{title:a[3].VideoName,text:a[3].Description})]}),Object(n.jsxs)("div",{className:"row",children:[Array.isArray(a)&&a.length>=5&&Object(n.jsx)(v,{title:a[4].VideoName,text:a[4].Description}),Array.isArray(a)&&a.length>=6&&Object(n.jsx)(v,{title:a[5].VideoName,text:a[5].Description}),Array.isArray(a)&&a.length>=7&&Object(n.jsx)(v,{title:a[6].VideoName,text:a[6].Description})]}),Object(n.jsxs)("div",{className:"row",children:[Array.isArray(a)&&a.length>=8&&Object(n.jsx)(v,{title:a[7].VideoName,text:a[7].Description}),Array.isArray(a)&&a.length>=9&&Object(n.jsx)(v,{title:a[8].VideoName,text:a[8].Description}),Array.isArray(a)&&a.length>=10&&Object(n.jsx)(v,{title:a[9].VideoName,text:a[9].Description})]})]})},g=a(41);var y=a.n(g).a.create({baseURL:""}),w=a(18),N=a.n(w),C=function(){};C.status=function(){return new Promise((function(e,t){y.get("/v1/api/connection").then((function(t){var a=t.data;e(a)})).catch((function(e){t(e)}))}))},C.getList=function(e,t){var a="/v1/api/video/list?pagesize=".concat(e,"&pageindex=").concat(t);return new Promise((function(e,t){y.get(a).then((function(t){var a=t.data.data;e(a)})).catch((function(e){t(e)}))}))},C.getVideoByKey=function(e){var t="/v1/api/video/item?video_key=".concat(e);return new Promise((function(e,a){y.get(t).then((function(t){var a=t.data.data;Array.isArray(a)&&a.length?e(a[0]):e({})})).catch((function(e){a(e)}))}))},C.getCategoryList=function(){return new Promise((function(e,t){y.get("/v1/api/video/category").then((function(t){var a=t.data.data;Array.isArray(a)&&a.length&&N.a.forEach(a,(function(e){e.value=e.VideoCategoryId,e.label=e.VideoCategoryName})),e(a)})).catch((function(e){t(e)}))}))};var k=C,E=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),o=i[0],l=i[1],j=Object(c.useCallback)(function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,k.getList(t,a);case 4:n=e.sent,c=n.page_data,l(c),r(!1),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(0),r(!1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),[]);Object(c.useEffect)((function(){j(50,0)}),[j]);return Object(n.jsxs)("div",{className:"wrap home-page",children:[Object(n.jsx)(p,{}),Object(n.jsx)(f,{callAction:function(e){return e.preventDefault(),k.status()},loading:a,videos:o}),Object(n.jsx)(x,{})]})},S=a(91),A=a(92),D=a(43),L=a(93),P=function(){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"No."}),Object(n.jsx)("th",{children:"Code"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Edit"})]})})},T=function(e){var t=e.index,a=e.rowItem;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t+1}),Object(n.jsx)("td",{children:a.EmployeeCode}),Object(n.jsx)("td",{children:a.EmployeeName}),Object(n.jsx)("td",{className:"row-btn",children:Object(n.jsx)(o.b,{to:"/employee/".concat(a.EmployeeKey),children:"Edit"})})]})},I=function(e){var t=e.employees;return Object(n.jsx)("tbody",{children:Array.isArray(t)&&t.length?t.map((function(e,t){return Object(n.jsx)(T,{index:t,rowItem:e},"key"+t)})):null})},V=a(21),z=a.n(V),_=a(19),K=a.n(_),W=function(e){var t=e.isLoading;return Object(n.jsx)(c.Fragment,{children:t&&Object(n.jsx)("div",{children:"Loading ..."})})},G=function(e){var t=e.loading,a=e.employees,c=e.handlePageClick,r=e.pageTotal,s=e.pageSize,i=e.pageSizeList,o=e.onChangePageSize;return Object(n.jsxs)(S.a,{children:[Object(n.jsx)(A.a,{children:Object(n.jsx)(D.a,{children:Object(n.jsx)("h3",{children:"Employees"})})}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(K.a,{style:{maxWidth:"300px"},options:i,multi:!1,values:s,onChange:o})}),Object(n.jsx)(D.a,{children:Object(n.jsx)(z.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:r,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:c,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]}),t?Object(n.jsx)(A.a,{className:"row-loading",children:Object(n.jsx)(W,{isLoading:t})}):Object(n.jsx)(A.a,{children:Object(n.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(n.jsx)(P,{}),Object(n.jsx)(I,{employees:a})]})})]})},R=function(){};R.status=function(){return new Promise((function(e,t){y.get("/v1/api/connection").then((function(t){var a=t.data;e(a)})).catch((function(e){t(e)}))}))},R.getEmployees=function(e,t){var a="/v1/api/employee/list?pagesize=".concat(e,"&pageindex=").concat(t);return new Promise((function(e,t){y.get(a).then((function(t){var a=t.data.data;e(a)})).catch((function(e){t(e)}))}))},R.getEmployeeByKey=function(e){var t="/v1/api/employee/item?emp_key=".concat(e);return new Promise((function(e,a){y.get(t).then((function(t){var a=t.data.data;Array.isArray(a)&&a.length?e(a[0]):e({})})).catch((function(e){a(e)}))}))},R.getTeams=function(){return new Promise((function(e,t){y.get("/v1/api/employee/teams").then((function(t){var a=t.data.data;Array.isArray(a)&&a.length&&Object(w.forEach)(a,(function(e){e.value=e.TeamId,e.label=e.TeamName})),e(a)})).catch((function(e){t(e)}))}))},R.updateEmployee=function(e,t){var a={emp_key:e,emp_name:t};return new Promise((function(e,t){y.post("/v1/api/employee/item",a).then((function(t){var a=t.data.data;e(a)})).catch((function(e){t(e)}))}))},R.assignEmployee=function(e,t){var a={emp_key:e,teamIds:t};return new Promise((function(e,t){y.post("/v1/api/employee/assign",a).then((function(t){var a=t.data.data;e(a)})).catch((function(e){t(e)}))}))};var B=R,F=[{label:"500",value:"500"},{label:"1000",value:"1000"},{label:"1500",value:"1500"}],M=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)([F[0]]),h=Object(b.a)(j,2),m=h[0],O=h[1],v=Object(c.useState)(10),f=Object(b.a)(v,2),g=f[0],y=f[1],w=Object(c.useCallback)(function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,B.getEmployees(t,a);case 4:n=e.sent,c=n.page_total,s=n.page_data,y(c),l(s),r(!1),e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),r(!1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),[]);Object(c.useEffect)((function(){w(500,0)}),[w]);var N=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=m[0].value,n=t.selected,e.abrupt("return",w(a,n));case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"wrap employee-page",children:[Object(n.jsx)(p,{}),Object(n.jsx)(G,{loading:a,employees:o,handlePageClick:N,pageTotal:g,pageSize:m,pageSizeList:F,onChangePageSize:function(e){try{var t=e[0].value;O(e);return w(t,0)}catch(a){throw a}}}),Object(n.jsx)(x,{})]})},U=a(23),J=a(94),q=a(95),H=function(e){var t=e.employee,a=e.teams,c=e.selectTeams,r=e.saveEmployee,s=e.onSelectChangeTeam,i=e.onChangeEmployeeName;return Object(n.jsx)(S.a,{className:"form-full-screen",children:Object(n.jsxs)(J.a,{children:[Object(n.jsxs)(J.a.Group,{controlId:"formEmpCode",children:[Object(n.jsx)(J.a.Label,{children:"Employee Code:"}),Object(n.jsx)(J.a.Control,{type:"text",placeholder:"Enter employee code",value:t.EmployeeCode,readOnly:!0})]}),Object(n.jsxs)(J.a.Group,{controlId:"formEmpName",children:[Object(n.jsx)(J.a.Label,{children:"Employee Name:"}),Object(n.jsx)(J.a.Control,{type:"text",placeholder:"Enter account name",value:t.EmployeeName,onChange:i})]}),Object(n.jsxs)(J.a.Group,{controlId:"formSelectTeam",children:[Object(n.jsx)(J.a.Label,{children:"Teams:"}),Object(n.jsx)(K.a,{options:a,onChange:s,multi:!0,values:c})]}),Object(n.jsx)(q.a,{variant:"primary",type:"submit",onClick:r,children:"Submit"})]})})},X=function(){var e=Object(l.f)().id,t=Object(c.useState)([]),a=Object(b.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)([]),o=Object(b.a)(i,2),j=o[0],h=o[1],m=Object(c.useState)(null),O=Object(b.a)(m,2),v=O[0],f=O[1],g=Object(c.useCallback)(Object(d.a)(u.a.mark((function t(){var a,n,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.getTeams();case 3:return a=t.sent,s(a),t.next=7,B.getEmployeeByKey(e);case 7:n=t.sent,f(n),n.TeamIds&&(c=JSON.parse(n.TeamIds),r=[],Object(w.forEach)(a,(function(e){Array.isArray(c)&&c.length&&c.indexOf(e.TeamId)>=0&&r.push(e)})),h(r)),t.next=15;break;case 12:throw t.prev=12,t.t0=t.catch(0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),[e]);Object(c.useEffect)((function(){g()}),[g]);var y=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a=[],Object(w.forEach)(j,(function(e){a.push(e.TeamId)})),e.next=6,B.updateEmployee(v.EmployeeKey,v.EmployeeName);case 6:return n=e.sent,e.next=9,B.assignEmployee(v.EmployeeKey,a);case 9:c=e.sent,n&&c&&alert("Submit is success!"),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(1),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"wrap employee-page",children:[Object(n.jsx)(p,{}),v&&r.length?Object(n.jsx)(H,{employee:v,teams:r,selectTeams:j,saveEmployee:y,onSelectChangeTeam:function(e){h(e)},onChangeEmployeeName:function(e){v&&(v.EmployeeName=e.target.value),f(Object(U.a)({},v))}}):null,Object(n.jsx)(x,{})]})},$=function(){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"No."}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Desc"}),Object(n.jsx)("th",{children:"Edit"})]})})},Q=function(e){var t=e.index,a=e.rowItem;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t+1}),Object(n.jsx)("td",{children:a.CourseName}),Object(n.jsx)("td",{children:a.Description}),Object(n.jsx)("td",{className:"row-btn",children:Object(n.jsx)(o.b,{to:"/course/".concat(a.CourseKey),children:"Edit"})})]})},Y=function(e){var t=e.employees;return Object(n.jsx)("tbody",{children:Array.isArray(t)&&t.length?t.map((function(e,t){return Object(n.jsx)(Q,{index:t,rowItem:e},"key"+t)})):null})},Z=function(e){var t=e.loading,a=e.employees,c=e.handlePageClick,r=e.pageTotal,s=e.pageSize,i=e.pageSizeList,o=e.onChangePageSize;return Object(n.jsxs)(S.a,{children:[Object(n.jsx)(A.a,{children:Object(n.jsx)(D.a,{children:Object(n.jsx)("h3",{children:"Courses"})})}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(K.a,{style:{maxWidth:"300px"},options:i,multi:!1,values:s,onChange:o})}),Object(n.jsx)(D.a,{children:Object(n.jsx)(z.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:r,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:c,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]}),t?Object(n.jsx)(A.a,{className:"row-loading",children:Object(n.jsx)(W,{isLoading:t})}):Object(n.jsx)(A.a,{children:Object(n.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(n.jsx)($,{}),Object(n.jsx)(Y,{employees:a})]})})]})},ee=function(){};ee.status=function(){return new Promise((function(e,t){y.get("/v1/api/connection").then((function(t){var a=t.data;e(a)})).catch((function(e){t(e)}))}))},ee.getCourses=function(e,t){var a="/v1/api/course/list?pagesize=".concat(e,"&pageindex=").concat(t);return new Promise((function(e,t){y.get(a).then((function(t){var a=t.data.data;e(a)})).catch((function(e){t(e)}))}))},ee.getCourseByKey=function(e){var t="/v1/api/course/item?course_key=".concat(e);return new Promise((function(e,a){y.get(t).then((function(t){var a=t.data.data;Array.isArray(a)&&a.length?e(a[0]):e({})})).catch((function(e){a(e)}))}))},ee.updateCourse=function(e,t,a){var n={course_key:e,course_name:t,course_desc:a};return new Promise((function(e,t){y.post("/v1/api/course/item",n).then((function(t){var a=t.data.data;e(a)})).catch((function(e){t(e)}))}))};var te=ee,ae=[{label:"500",value:"500"},{label:"1000",value:"1000"},{label:"1500",value:"1500"}],ne=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)([ae[0]]),h=Object(b.a)(j,2),m=h[0],O=h[1],v=Object(c.useState)(10),f=Object(b.a)(v,2),g=f[0],y=f[1],w=Object(c.useCallback)(function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,te.getCourses(t,a);case 4:n=e.sent,c=n.page_total,s=n.page_data,y(c),l(s),r(!1),e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),r(!1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),[]);Object(c.useEffect)((function(){w(500,0)}),[w]);var N=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=m[0].value,n=t.selected,e.abrupt("return",w(a,n));case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"wrap employee-page",children:[Object(n.jsx)(p,{}),Object(n.jsx)(Z,{loading:a,employees:o,handlePageClick:N,pageTotal:g,pageSize:m,pageSizeList:ae,onChangePageSize:function(e){try{var t=e[0].value;O(e);return w(t,0)}catch(a){throw a}}}),Object(n.jsx)(x,{})]})},ce=function(e){var t=e.course,a=e.saveCourse,c=e.onChangeCourseName,r=e.onChangeCourseDesc;return Object(n.jsx)(S.a,{className:"form-full-screen",children:Object(n.jsxs)(J.a,{children:[Object(n.jsxs)(J.a.Group,{controlId:"formCourseName",children:[Object(n.jsx)(J.a.Label,{children:"Course Name:"}),Object(n.jsx)(J.a.Control,{type:"text",placeholder:"Enter course name",value:t.CourseName,onChange:c})]}),Object(n.jsxs)(J.a.Group,{controlId:"formCourseDesc",children:[Object(n.jsx)(J.a.Label,{children:"Description:"}),Object(n.jsx)(J.a.Control,{type:"text",placeholder:"Enter course desc",value:t.Description,onChange:r})]}),Object(n.jsx)(q.a,{variant:"primary",type:"submit",onClick:a,children:"Submit"})]})})},re=function(){var e=Object(l.f)().id,t=Object(c.useState)(null),a=Object(b.a)(t,2),r=a[0],s=a[1],i=Object(c.useCallback)(Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te.getCourseByKey(e);case 3:a=t.sent,s(a),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e]);Object(c.useEffect)((function(){i()}),[i]);var o=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,te.updateCourse(r.CourseKey,r.CourseName,r.Description);case 4:e.sent&&alert("Submit is success!"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"wrap course-page",children:[Object(n.jsx)(p,{}),r?Object(n.jsx)(ce,{course:r,saveCourse:o,onChangeCourseName:function(e){r&&(r.CourseName=e.target.value),s(Object(U.a)({},r))},onChangeCourseDesc:function(e){r&&(r.Description=e.target.value),s(Object(U.a)({},r))}}):null,Object(n.jsx)(x,{})]})},se=function(){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"No."}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:"Edit"})]})})},ie=function(e){var t=e.index,a=e.rowItem;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t+1}),Object(n.jsx)("td",{children:a.VideoName}),Object(n.jsx)("td",{children:a.Description}),Object(n.jsx)("td",{className:"row-btn",children:Object(n.jsx)(o.b,{to:"/video/".concat(a.VideoKey),children:"Edit"})})]})},oe=function(e){var t=e.videos;return Object(n.jsx)("tbody",{children:Array.isArray(t)&&t.length?t.map((function(e,t){return Object(n.jsx)(ie,{index:t,rowItem:e},"key"+t)})):null})},le=function(e){var t=e.loading,a=e.videos,c=e.handlePageClick,r=e.pageTotal,s=e.pageSize,i=e.pageSizeList,o=e.onChangePageSize;return Object(n.jsxs)(S.a,{children:[Object(n.jsx)(A.a,{children:Object(n.jsx)(D.a,{children:Object(n.jsx)("h3",{children:"Videos"})})}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(K.a,{style:{maxWidth:"300px"},options:i,multi:!1,values:s,onChange:o})}),Object(n.jsx)(D.a,{children:Object(n.jsx)(z.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:r,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:c,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]}),t?Object(n.jsx)(A.a,{className:"row-loading",children:Object(n.jsx)(W,{isLoading:t})}):Object(n.jsx)(A.a,{children:Object(n.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(n.jsx)(se,{}),Object(n.jsx)(oe,{videos:a})]})})]})},je=[{label:"500",value:"500"},{label:"1000",value:"1000"},{label:"1500",value:"1500"}],ue=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)([je[0]]),h=Object(b.a)(j,2),m=h[0],O=h[1],v=Object(c.useState)(10),f=Object(b.a)(v,2),g=f[0],y=f[1],w=Object(c.useCallback)(function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,k.getList(t,a);case 4:n=e.sent,c=n.page_total,s=n.page_data,y(c),l(s),r(!1),e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),r(!1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),[]);Object(c.useEffect)((function(){w(500,0)}),[w]);var N=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=m[0].value,n=t.selected,e.abrupt("return",w(a,n));case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"wrap video-page",children:[Object(n.jsx)(p,{}),Object(n.jsx)(le,{loading:a,videos:o,handlePageClick:N,pageTotal:g,pageSize:m,pageSizeList:je,onChangePageSize:function(e){try{var t=e[0].value;O(e);return w(t,0)}catch(a){throw a}}}),Object(n.jsx)(x,{})]})},de=function(e){var t=e.video;return Object(n.jsx)(S.a,{className:"form-full-screen",children:Object(n.jsxs)(J.a,{children:[Object(n.jsxs)(J.a.Group,{controlId:"txtVideoName",children:[Object(n.jsx)(J.a.Label,{children:"Video Name:"}),Object(n.jsx)(J.a.Control,{type:"text",placeholder:"Enter video name",value:t.VideoName})]}),Object(n.jsxs)(J.a.Group,{controlId:"txtVideoNameEn",children:[Object(n.jsx)(J.a.Label,{children:"Video Name (English):"}),Object(n.jsx)(J.a.Control,{type:"text",placeholder:"Enter video name (en)",value:t.VideoName_EN})]}),Object(n.jsxs)(J.a.Group,{controlId:"txtDescription",children:[Object(n.jsx)(J.a.Label,{children:"Short Description:"}),Object(n.jsx)(J.a.Control,{type:"text",placeholder:"Enter short description",value:t.Description})]}),Object(n.jsxs)(J.a.Group,{controlId:"txtDescription",children:[Object(n.jsx)(J.a.Label,{children:"Short Description:"}),Object(n.jsx)(J.a.Control,{type:"text",placeholder:"Enter short description (en)",value:t.Description_EN})]})]})})},be=function(){var e=Object(l.f)().id,t=Object(c.useState)(null),a=Object(b.a)(t,2),r=a[0],s=a[1],i=Object(c.useCallback)(Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.getVideoByKey(e);case 3:a=t.sent,s(a),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e]);return Object(c.useEffect)((function(){i()}),[i]),Object(n.jsxs)("div",{className:"wrap video-page",children:[Object(n.jsx)(p,{}),r&&Object(n.jsx)(de,{video:r}),Object(n.jsx)(x,{})]})},pe=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(E,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/employee",children:Object(n.jsx)(M,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/employee/:id",children:Object(n.jsx)(X,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/course",children:Object(n.jsx)(ne,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/course/:id",children:Object(n.jsx)(re,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/video",children:Object(n.jsx)(ue,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/video/:id",children:Object(n.jsx)(be,{})})]})})},he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,96)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(pe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");he?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):xe(t,e)}))}}(),me()}},[[90,1,2]]]);