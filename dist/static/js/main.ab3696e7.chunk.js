(this["webpackJsonpproject-management-app"]=this["webpackJsonpproject-management-app"]||[]).push([[0],{216:function(e,t,a){e.exports=a(407)},221:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(212),i=a.n(c),l=(a(221),a(6)),o=a(29),s=a(7),u=Object(s.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})})).catch((function(){}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/createProject"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log out")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",className:"btn btn-floating blue lighten-1"},e.profile.initials)))})),m=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signin"},"Log in")))},d=Object(s.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;console.log(t.uid);var n=t.uid?r.a.createElement(u,{profile:a}):r.a.createElement(m,null);return r.a.createElement("nav",{class:"nav-wrapper grey darken-3"},r.a.createElement("div",{class:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo"},"Project Management Tool"),n))})),h=a(23),p=a(24),E=a(27),f=a(25),b=a(28),g=a(47),j=a.n(g),N=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"blue-text"},e.user," ",e.content),r.a.createElement("div",{className:"grey-text note-date"},j()(e.time.toDate()).fromNow()))}))))))},v=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null," Posted by ",t.authorFirstName," ",t.authorLastName," "),r.a.createElement("p",{className:"grey-text"},j()(t.createdAt.toDate()).calendar())))},O=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(l.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(v,{project:e}))})))},y=a(22),C=a(16),S=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(O,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-1"},r.a.createElement(N,{notifications:n})))):r.a.createElement(o.a,{to:"/signin"})}}]),t}(n.Component),w=Object(C.d)(Object(s.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(y.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(S),P=Object(C.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(y.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content," ")),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,j()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading in progress .....")):r.a.createElement(o.a,{to:"/signin"})})),R=a(26),x=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{class:"btn blue lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),F=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(x),I=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"text"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"text"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{class:"btn blue lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),A=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(I),k=a(37),U=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"text"},"Project Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"text"},"Project Details"),r.a.createElement("textarea",{className:"materialize-textarea",cols:"30",rows:"10",id:"content",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{class:"btn blue lighten-1 z-depth-0"},"Create Project")))):r.a.createElement(o.a,{to:"/signin"})}}]),t}(n.Component),_=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(k.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(U);var D=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:w}),r.a.createElement(o.b,{exact:!0,path:"/project/:id",component:P}),r.a.createElement(o.b,{exact:!0,path:"/signin",component:F}),r.a.createElement(o.b,{exact:!0,path:"/signup",component:A}),r.a.createElement(o.b,{exact:!0,path:"/createProject",component:_}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L={},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("error"),Object(k.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("success"),Object(k.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(k.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(k.a)({},e,{authError:t.err.message});default:return e}},G={projects:[{id:"1",title:"Project 1",content:"Project Details 1"},{id:"2",title:"Project 2",content:"Project Details 2"},{id:"3",title:"Project 3",content:"Project Details 3"},{id:"4",title:"Project 4",content:"Project Details 4"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("Project created 123",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("Error in creating project",t.err),e;default:return e}},B=a(60),J=Object(C.c)({auth:T,project:z,firestore:B.firestoreReducer,firebase:y.firebaseReducer}),W=a(215),Z=a(92),K=a.n(Z);a(402),a(405);K.a.initializeApp({apiKey:"AIzaSyCC_0FDyXWR4-0er-i3JDKB0FXk4Y7ZZcs",authDomain:"project-management-tool-38651.firebaseapp.com",databaseURL:"https://project-management-tool-38651.firebaseio.com",projectId:"project-management-tool-38651",storageBucket:"project-management-tool-38651.appspot.com",messagingSenderId:"345764564358",appId:"1:345764564358:web:07f6a50bd8a8e400d0b007",measurementId:"G-9DTZZ3V7BE"}),K.a.firestore().settings({timestampsInSnapshots:!0});var X=K.a,M=Object(C.e)(J,Object(C.d)(Object(C.a)(W.a.withExtraArgument({getFirebase:y.getFirebase,getFirestore:B.getFirestore})),Object(y.reactReduxFirebase)(X,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),Object(B.reduxFirestore)(X)));M.firebaseAuthIsReady.then((function(){i.a.render(r.a.createElement(s.a,{store:M},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}))}},[[216,1,2]]]);
//# sourceMappingURL=main.ab3696e7.chunk.js.map