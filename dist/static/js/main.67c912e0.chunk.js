(this["webpackJsonpreact-firebase"]=this["webpackJsonpreact-firebase"]||[]).push([[0],{221:function(e,t,a){e.exports=a(418)},226:function(e,t,a){},418:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(89),o=a.n(c),i=(a(226),a(6)),l=a(35),s=a(10),u=a(7),m=a(8),p=a.n(m),d=a(27),h=a(213),f=a.n(h),E=(a(232),a(235),a(419),f.a.initializeApp({apiKey:"AIzaSyA4n9B_VF6mr89WICLHJqvHA_RMqg47F_E",authDomain:"react-firebase-db-host-app.firebaseapp.com",databaseURL:"https://react-firebase-db-host-app.firebaseio.com",projectId:"react-firebase-db-host-app",storageBucket:"react-firebase-db-host-app.appspot.com",messagingSenderId:"571627584111",appId:"1:571627584111:web:68bb0a10aaf1aeef716b9a",measurementId:"G-RDDQBWDX4Z"})),g=E.firestore(),b=E,v={signout:function(){return function(e,t){b.auth().signOut().then((function(t){e({type:"LOGIN_SUCCESS",payload:null})}))}}},j=Object(s.b)((function(e){return{login:e.auth.login,authError:e.auth.authError,userSignOut:e.auth.signOut}}),v)((function(e){console.log("TCL: SignedInLinks props",e);return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/createProject"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return e.signout()}},"Log Out")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/",className:"btn btn-floating pink lighten-1"},"GB")))})),N=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/signin "},"Login")))},O=Object(s.b)((function(e){return console.log("TCL: mapStateToProps state",e),{isLogin:!!e.auth.login}}))((function(e){return console.log("TCL:NavBar props",e),r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{to:"/",className:"brand-logo"},"React Firebase"),e.isLogin?r.a.createElement(j,null):r.a.createElement(N,null)))})),y=a(22),C=a(23),P=a(25),w=a(24),S=a(26),R=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(P.a)(this,Object(w.a)(t).call(this,e))).state={loading:!1,getAppProjects:null,currentProject:null},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.getAppProjects,e.currentProject);return this.props.isLogin?(console.log("TCL: ProjectDetails -> render -> currentProject",t),r.a.createElement("div",{className:"container section project-details"},t?r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action gret lighten-4 green-text"},r.a.createElement("div",null,"Posted by ",t.firstName," ",t.lastName),r.a.createElement("div",null))):null)):r.a.createElement(l.a,{to:"/signin"})}}],[{key:"getDerivedStateFromProps",value:function(e,t){console.log("TCL: ProjectDetails -> getDerivedStateFromProps -> nextProps",e);var a=t;return e.getAllProjects&&(a.getAppProjects=e.getAllProjects,e.match&&e.match.params&&e.match.params.id&&(a.currentProject=e.getAllProjects[e.match.params.id])),a===t?t:a}}]),t}(n.Component),T=Object(s.b)((function(e){return{getAllProjects:e.project.getProjects,isLogin:e.auth.login}}))(R),L=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-test text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content),r.a.createElement("p",{className:"grey-text"},t&&t.createdAt&&JSON.stringify(t.createdAt))))},k=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e,t){return r.a.createElement(i.b,{to:"/project/".concat(e.id),key:t},r.a.createElement(L,{project:e}))})))},I=function(e){var t=e.notificationArray;return r.a.createElement("div",{className:"secction"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.time.seconds},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("br",null),r.a.createElement("span",null,e.content),r.a.createElement("br",null),r.a.createElement("div",{className:"grey-text note-date"},e.time.seconds),r.a.createElement("hr",null))}))))))},A=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(P.a)(this,Object(w.a)(t).call(this,e))).state={loading:!1,projects:null,notificationArray:[]},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects(),this.props.getCurrentUser(),this.props.getAllNotifications()}},{key:"render",value:function(){var e=this.state,t=e.projects,a=e.notificationArray;return this.props.isLogin?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(k,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},t?r.a.createElement(I,{notificationArray:a}):r.a.createElement("span",null,"loading...")))):r.a.createElement(l.a,{to:"/signin"})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t;return a.projects=e.getAllProjects,a.notificationArray=e.notification,a===t?t:a}}]),t}(n.Component),x={getProjects:function(){return function(e){return new Promise(Object(d.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.collection("projects").get().then(function(){var t=Object(d.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,a.forEach((function(e){n.push(e.data())}));case 3:return t.next=5,e({type:"GET_PROJECTS",payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e({type:"GET_PROJECTS",payload:[]})}));case 2:case"end":return t.stop()}}),t)})))).catch((function(t){console.log("Error retriving contacts "+t),e({type:"GET_PROJECTS",payload:[]})}))}},getCurrentUser:function(e){console.log("TCL: UID",e);var t=b.auth();return console.log("TCL: user",t),function(e,t){g.collection("users").doc().get().then((function(t){console.log("TCL: snapshot",t.data()),console.log("TCL: snapshot",t.id);var a=Object(u.a)({uid:t.id},t.data());e({type:"CURRENT_USER",payload:a})})).catch((function(e){console.log("Error getting documents",e)}))}},getAllNotifications:function(){return function(e){return new Promise(Object(d.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.collection("notifications").get().then(function(){var t=Object(d.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],a.forEach((function(e){n.push(e.data())})),t.next=4,e({type:"GET_NOTIFICATION",payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e({type:"GET_NOTIFICATION",payload:[]})}));case 2:case"end":return t.stop()}}),t)})))).catch((function(t){console.log("Error retriving contacts "+t),e({type:"GET_NOTIFICATION",payload:[]})}))}}},_=Object(s.b)((function(e){return{getAllProjects:e.project.getProjects,isLogin:e.auth.login,notification:e.notification.getNotification}}),x)(A),U=a(34),G=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(P.a)(this,Object(w.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.state={email:"",password:"",login:{}},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isLogin,n=t.authError;return a?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"SignIn"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},n?r.a.createElement("p",null,n):null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t;return a.login=e.login,a===t?t:a}}]),t}(n.Component),F={signIn:function(e){return function(t){return new Promise(Object(d.a)(p.a.mark((function a(){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",b.auth().signInWithEmailAndPassword(e.email,e.password).then(function(){var e=Object(d.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGIN_SUCCESS",payload:{data:a}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(d.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGIN_ERROR",payload:a});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return a.stop()}}),a)})))).catch((function(e){t({type:"LOGIN_ERROR",payload:e})}))}}},D=Object(s.b)((function(e){return{isLogin:e.auth.login,authError:e.auth.authError}}),F)(G),J=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(P.a)(this,Object(w.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a.state={email:"",password:"",firstName:"",lastName:""},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isLogin,n=t.authError,c=t.userSignUp;return a?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up")),n?r.a.createElement("div",{className:"red-text center"},r.a.createElement("p",null,c)):null))}}]),t}(n.Component),z={signUp:function(e){return function(t,a){b.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return g.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGN_UP",payload:!0})})).catch((function(e){t({type:"SIGN_UP_ERROR",payload:e.message})}))}}},B=Object(s.b)((function(e){return{isLogin:e.auth.login,authError:e.auth.authError,userSignUp:e.auth.signUp}}),z)(J),W=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(P.a)(this,Object(w.a)(t).call(this,e))).handleChange=function(e){console.log("TCL: CreateProject -> e",e.target.id),console.log("TCL: CreateProject -> e.target.value",e.target.value),a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a.state={title:"",content:""},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this;return this.props.isLogin?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(l.a,{to:"/signin"})}}]),t}(n.Component),q=Object(s.b)((function(e){return{isLogin:e.auth.login}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a){g.collection("projects").add(Object(u.a)({},e,{firstName:"Gaurav",lastName:"Bagul",createdAt:new Date})).then((function(a){t({type:"CREATE_PROJECT",payload:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",payload:e})}))}}(t))}}}))(W),H=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:_}),r.a.createElement(l.b,{path:"/project/:id",component:T}),r.a.createElement(l.b,{path:"/signin",component:D}),r.a.createElement(l.b,{path:"/signup",component:B}),r.a.createElement(l.b,{path:"/createProject",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(18),K={authError:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(u.a)({},e,{authError:"Login Faild",login:null});case"LOGIN_SUCCESS":return Object(u.a)({},e,{login:t.payload,authError:null});case"SIGNOUT":return Object(u.a)({},e,{signOut:t.payload,login:null});case"SIGN_UP":return Object(u.a)({},e,{login:t.payload,authError:null});case"SIGN_UP_ERROR":return Object(u.a)({},e,{signUp:t.payload,authError:!0});case"CURRENT_USER":return Object(u.a)({},e,{currentUser:t.payload});default:return e}},V={},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return Object(u.a)({},e,{createProject:t.payload});case"CREATE_PROJECT_ERROR":return Object(u.a)({},e,{createProjectError:t.payload});case"GET_PROJECTS":return Object(u.a)({},e,{getProjects:t.payload});default:return e}},Z={},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NOTIFICATION":return Object(u.a)({},e,{getNotification:t.payload});default:return e}},Y=a(216),ee=a(217),te=Object(M.c)({auth:Q,project:X,firestore:Y.firestoreReducer,firebase:ee.firebaseReducer,notification:$}),ae=a(218),ne=a(139),re=a(219),ce=a.n(re),oe=a(220),ie={key:"root",storage:ce.a},le=Object(ne.a)(ie,te),se=Object(M.d)(le,Object(M.a)(ae.a)),ue=Object(ne.b)(se);o.a.render(r.a.createElement(s.a,{store:se},r.a.createElement(oe.a,{loading:null,persistor:ue},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[221,1,2]]]);
//# sourceMappingURL=main.67c912e0.chunk.js.map