(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{39:function(e,t,n){},48:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(32),r=n.n(i),c=n(8),o=(n(39),n(16)),l=n.n(o),h=n(19),u=n(4),d=n(5),j=n(2),b=n(7),p=n(6),m=n(3),O=n.n(m),v=n(13),f=n(0),g=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"login_container",children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{children:"Username"}),Object(f.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{children:"Email"}),Object(f.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{children:"Password"}),Object(f.jsx)("input",{type:"password",placeholder:"password",name:"password",value:this.state.password1,onChange:this.handleInput})]}),Object(f.jsx)("h5",{children:"Press to login"}),Object(f.jsx)("button",{className:"login_button",type:"Submit",onClick:this.redirectToHome,children:"Submit"})]})})}}]),n}(s.a.Component),x=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"registration_container",children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("h3",{children:"Choose A Username"}),Object(f.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Enter Your Email Address"}),Object(f.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Choose A Password"}),Object(f.jsx)("input",{type:"password",placeholder:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Enter Your Password Again"}),Object(f.jsx)("input",{type:"password",placeholder:"enter password again",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(f.jsx)("h3",{children:"Click the button below to create your account!"}),Object(f.jsx)("button",{className:"login_button",type:"Submit",children:"Register"})]})})}}]),n}(s.a.Component),y=n(17),w=n(9),k=n(15),S=n.n(k),C=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,play_status:"UNSTARTED"},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.saveStatus=a.saveStatus.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({play_status:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"saveStatus",value:function(){var e=this.props.game;e.play_status=this.state.play_status,this.props.updateStatus(e),this.setState({isEditing:!1}),this.props.history.push("/userhomepage")}},{key:"render",value:function(){var e=this,t=this.props.game;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("li",{className:"collection-item",children:[Object(f.jsx)("h2",{className:"collection-title",children:t.name}),Object(f.jsxs)("div",{className:"collection-body",children:[Object(f.jsx)("img",{src:t.background_image,alt:"game screenshot"}),Object(f.jsx)("p",{children:"Date Added To Collection:"}),Object(f.jsx)(S.a,{className:"release-date",format:"MM/DD/YYYY",children:t.date_added}),Object(f.jsx)("br",{}),this.state.isEditing?Object(f.jsx)("form",{onSubmit:this.handleSubmit,children:Object(f.jsxs)("select",{value:this.state.play_status,onChange:this.handleChange,children:[Object(f.jsx)("option",{value:"NOTSTARTED",children:"Not Started"}),Object(f.jsx)("option",{value:"PLAYING",children:"Playing"}),Object(f.jsx)("option",{value:"COMPLETED",children:"Completed"})]})}):Object(f.jsxs)("p",{children:["Play Status: ",t.play_status]}),this.state.isEditing?Object(f.jsx)("button",{type:"button",onClick:this.saveStatus,children:"Save"}):Object(f.jsx)("button",{type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Change Play Status"}),Object(f.jsx)("button",{type:"button",onClick:function(){return e.props.removeGame(t.id)},children:"Remove"})]})]})})}}]),n}(s.a.Component),N=Object(w.g)(C),T=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={games:[]},a.removeGame=a.removeGame.bind(Object(j.a)(a)),a.updateStatus=a.updateStatus.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/games/?is_owned=true").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({games:t})})).catch((function(e){console.error("There has been a problem with your fetch request:",e)}))}},{key:"removeGame",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}};fetch("/api/v1/games/".concat(e,"/"),n).then((function(n){var a=Object(y.a)(t.state.games),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({games:a})}))}},{key:"updateStatus",value:function(e){var t=this,n={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/games/".concat(e.id,"/?is_owned=true"),n).then((function(e){return e.json()})).then((function(e){var n=Object(y.a)(t.state.games),a=n.findIndex((function(e){return e.id===e.id}));n[a]=e,t.setState({games:n})}))}},{key:"render",value:function(){var e=this,t=this.state.games.map((function(t){return Object(f.jsx)(N,{game:t,removeGame:e.removeGame,updateStatus:e.updateStatus},t.id)}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"main-container",children:[Object(f.jsx)("h1",{children:"MY COLLECTION"}),Object(f.jsx)(c.b,{className:"create-review-link",to:"/search",children:"Add New Game To Collection"}),Object(f.jsx)("div",{className:"collection-container",children:Object(f.jsx)("ul",{className:"collection-list",children:t})})]})})}}]),n}(s.a.Component);var R=function(e){return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{className:"nav-links",children:[Object(f.jsx)("li",{className:"navbar-links",children:Object(f.jsx)(c.b,{to:"/",className:"nav-link",children:"Home"})}),Object(f.jsx)("li",{className:"navbar-links",children:!O.a.get("Authorization")&&Object(f.jsx)(c.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(f.jsx)("li",{className:"navbar-links",children:!O.a.get("Authorization")&&Object(f.jsx)(c.b,{to:"/register",className:"nav-link",children:"Register"})}),Object(f.jsx)("li",{className:"navbar-links",children:!!O.a.get("Authorization")&&Object(f.jsx)(c.b,{to:"/userhomepage",className:"nav-link",children:"Collection"})}),Object(f.jsx)("li",{className:"navbar-links",children:!!O.a.get("Authorization")&&Object(f.jsx)(c.b,{to:"/wishlist",className:"nav-link",children:"Wishlist"})}),Object(f.jsx)("li",{className:"navbar-links",children:!!O.a.get("Authorization")&&Object(f.jsx)(c.b,{to:"/gamesearch",className:"nav-link",children:"Search"})}),Object(f.jsx)("li",{className:"navbar-links",children:!!O.a.get("Authorization")&&Object(f.jsx)(c.b,{to:"/profile",className:"nav-link",children:"Profile"})}),Object(f.jsx)("li",{className:"navbar-links",children:!!O.a.get("Authorization")&&Object(f.jsx)(c.b,{to:"/",className:"nav-link",onClick:function(){return e.handleLogout("login")},children:"Logout"})})]})})},I=(n(48),n(28)),_=n(34),E=["children"];var D=function(e){var t=e.children,n=Object(_.a)(e,E);return Object(f.jsx)(w.b,Object(I.a)(Object(I.a)({},n),{},{render:function(){return!0===!!O.a.get("Authorization")?t:Object(f.jsx)(w.a,{to:"/"})}}))},F=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={profiles:[],display_name:"",avatar:null,preview:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/users/profiles/user/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({data:t})})).catch((function(e){console.error("There has been a problem with your fetch operation:",e)}))}},{key:"render",value:function(){var e,t;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{className:"profile_picture",src:null===(e=this.state.data)||void 0===e?void 0:e.avatar,alt:""}),Object(f.jsx)("h3",{children:null===(t=this.state.data)||void 0===t?void 0:t.display_name})]})}}]),n}(s.a.Component),A=(n(49),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,body:a.props.review.body},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.saveReview=a.saveReview.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"saveReview",value:function(){var e=this.props.review;e.body=this.state.body,this.props.editReview(e),this.setState({isEditing:!1})}},{key:"render",value:function(){var e=this,t=this.props.review;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{children:Object(f.jsxs)("li",{children:[Object(f.jsx)("h2",{children:t.game}),Object(f.jsx)("h3",{children:t.title}),Object(f.jsx)(S.a,{format:"MM/DD/YYYY hh:mm",children:t.created_at}),this.state.isEditing?Object(f.jsx)("textarea",{cols:"30",row:"10",name:"body",value:this.state.body,onChange:this.handleInput}):Object(f.jsx)("p",{children:t.body}),Object(f.jsxs)("h4",{children:["My Rating: ",t.rating]}),this.state.isEditing?Object(f.jsx)("button",{type:"button",onClick:this.saveReview,children:"Save"}):t.is_owner&&Object(f.jsx)("button",{type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Edit"}),t.is_owner&&Object(f.jsx)("button",{type:"button",onClick:function(){return e.props.deleteReview(t.id)},children:"Delete"})]})})})}}]),n}(s.a.Component)),Y=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={reviews:[],game:"",title:"",author:"",body:"",rating:""},a.addReview=a.addReview.bind(Object(j.a)(a)),a.handleInput=a.handleInput.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"addReview",value:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(this.state)};fetch("/api/v1/reviews/",t).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})),this.setState({game:"",title:"",author:"",body:""}),this.props.history.push("/profile")}},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"review_container",children:Object(f.jsxs)("form",{onSubmit:this.addReview,children:[Object(f.jsx)("input",{className:"review_input",type:"text",autoComplete:"off",name:"game",value:this.state.game,onChange:this.handleInput,placeholder:"Title of Game to Review"}),Object(f.jsx)("input",{className:"review_input",type:"text",autoComplete:"off",name:"title",value:this.state.title,onChange:this.handleInput,placeholder:"Title of Review"}),Object(f.jsx)("textarea",{className:"review_input",name:"body",value:this.state.body,onChange:this.handleInput,id:"",cols:"30",rows:"10",placeholder:"Your thoughts"}),Object(f.jsx)("input",{type:"text",autoComplete:"off",placeholder:"Rating 1-5"}),Object(f.jsx)("br",{}),Object(f.jsxs)("section",{className:"rating_scale",children:[Object(f.jsx)("p",{children:"Rating Scale:"}),Object(f.jsx)("p",{children:"5- Awesome. Highly recommend."}),Object(f.jsx)("p",{children:"4- Fun. Recommend but not a go and get now."}),Object(f.jsx)("p",{children:"3- It was ok. Good but ok if you miss it."}),Object(f.jsx)("p",{children:"2- Can't recommend. Didn't really enjoy it. Not for me, but could see others maybe liking it."}),Object(f.jsx)("p",{children:"1- Garbage. Not even worth a try."})]}),Object(f.jsx)("button",{type:"submit",children:"Submit"})]})})})}}]),n}(s.a.Component),L=Object(w.g)(Y),P=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={reviews:[]},a.deleteReview=a.deleteReview.bind(Object(j.a)(a)),a.editReview=a.editReview.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/reviews/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({reviews:t})})).catch((function(e){console.error("There has been a problem with your fetch operation:",e)}))}},{key:"deleteReview",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}};fetch("/api/v1/reviews/".concat(e),n).then((function(n){var a=Object(y.a)(t.state.reviews),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({reviews:a})}))}},{key:"editReview",value:function(e){var t=this,n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/reviews/".concat(e.id),n).then((function(e){return e.json()})).then((function(n){var a=Object(y.a)(t.state.reviews),s=a.findIndex((function(t){return t.id===e.id}));a[s]=n,t.setState({reviews:a})}))}},{key:"render",value:function(){var e=this,t=this.state.reviews.map((function(t){return Object(f.jsx)(A,{review:t,deleteReview:e.deleteReview,editReview:e.editReview},t.id)}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)(c.b,{className:"create-review-link",to:"/submitreview",children:"Click To Add New Review"}),Object(f.jsxs)("section",{className:"rating_scale",children:[Object(f.jsx)("p",{children:"Rating Scale:"}),Object(f.jsx)("p",{children:"5- Awesome. Highly recommend."}),Object(f.jsx)("p",{children:"4- Fun. Recommend but not a go and get now."}),Object(f.jsx)("p",{children:"3- It was ok. Good but ok if you miss it."}),Object(f.jsx)("p",{children:"2- Can't recommend. Didn't really enjoy it. Not for me, but could see others maybe liking it."}),Object(f.jsx)("p",{children:"1- Garbage. Not even worth a try."})]}),Object(f.jsx)("p",{children:t})]})})}}]),n}(s.a.Component),G=(s.a.Component,function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInput=function(e){a.setState({searchTerm:e.target.value})},a.state={searchTerm:"",display_name:"",avatar:null},a.getResults=a.getResults.bind(Object(j.a)(a)),a.handleInput=a.handleInput.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"getResults",value:function(e){var t=this;e.preventDefault(),fetch("/api/v1/users/profiles/?display_name=".concat(this.state.searchTerm)).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){return t.setState(e)})).catch((function(e){console.error("There has been a problem with your fetch operation:",e)})),this.setState({searchTerm:""})}},{key:"render",value:function(){var e;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("form",{onSubmit:this.getResults,children:Object(f.jsxs)("label",{htmlFor:"searchTerm",children:[Object(f.jsx)("strong",{children:"Find Friend: "}),Object(f.jsx)("input",{type:"text",name:"searchTerm",value:this.state.searchTerm,onChange:this.handleInput,autoComplete:"off"}),Object(f.jsx)("input",{type:"submit",value:"submit"})]})}),Object(f.jsx)("h3",{children:null===(e=this.state.results)||void 0===e?void 0:e.display_name})]})}}]),n}(s.a.Component)),M=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={display_name:"",avatar:null,preview:""},a.handleImage=a.handleImage.bind(Object(j.a)(a)),a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/users/profiles/user/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({data:t})})).catch((function(e){console.error("There has been a problem with your fetch operation:",e)}))}},{key:"handleInput",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({avatar:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("avatar",this.state.avatar),n.append("display_name",this.state.display_name),a={method:"POST",headers:{"X-CSRFToken":O.a.get("csrftoken")},body:n},e.next=7,fetch("/api/v1/users/profiles/",a);case 7:s=e.sent,this.setState({response:s});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(G,{}),Object(f.jsxs)("div",{children:[this.state.data?Object(f.jsx)(F,{}):Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("input",{type:"text",name:"display_name",value:this.state.display_name,onChange:this.handleInput}),Object(f.jsx)("input",{type:"file",name:"avatar",onChange:this.handleImage}),this.state.avatar?Object(f.jsx)("img",{src:this.state.preview,alt:""}):null,Object(f.jsx)("button",{type:"submit",children:"Save profile?"})]}),Object(f.jsx)("h1",{children:"Personal Reviews"}),Object(f.jsx)(P,{})]})]})}}]),n}(s.a.Component),z=Object(w.g)(M),X=n(29),J=function(e){return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:e.gameResults.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsxs)(c.b,{to:{pathname:"/game/".concat(e.name),gameProps:{game:e}},children:[Object(f.jsx)("h3",{children:e.name}),Object(f.jsx)("img",{src:e.background_image,alt:"game"}),Object(f.jsx)("h3",{children:"Released:"}),Object(f.jsx)(S.a,{className:"release-date",format:"MM/DD/YYYY",children:e.released})]})},e.id)}))})})};n(52).config();var H=function(){var e=Object(a.useState)(""),t=Object(X.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)([]),r=Object(X.a)(i,2),c=r[0],o=r[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Game Search"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.split(" ").join("-").toLowerCase();o([]),fetch("https://rawg.io/api/games?key=".concat("00ad52f6e4214b1fa7cb50086b276cfc","&search=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.results;void 0===t?alert("no games found"):o(t)})),s("")},children:[Object(f.jsx)("input",{type:"text",value:n,onChange:function(e){s(e.target.value)}}),Object(f.jsx)("input",{type:"submit"})]}),Object(f.jsx)(J,{gameResults:c})]})},U=Object(w.g)((function(e){var t=e.location.gameProps.game,n=function(n){var a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify({name:t.name,released:t.released,background_image:t.background_image,is_owned:n})};fetch("/api/v1/games/",a).then((function(e){if(!e.ok)throw new Error("Network response not ok");return e.json()})),e.history.push("/userhomepage")};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:t.name}),Object(f.jsx)("img",{src:t.background_image,alt:"screenshot"}),Object(f.jsx)("h3",{children:"Released:"}),Object(f.jsx)(S.a,{className:"release-date",format:"MM/DD/YYYY",children:t.released}),Object(f.jsx)("h3",{children:"Platform(s):"}),Object(f.jsx)("p",{children:t.platforms.map((function(e){return"".concat(e.platform.name," |")}))}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(!0)},children:"Add to Your Collection"}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(!1)},children:"Add to Wishlist"})]})})),W=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={games:[],is_owned:a.props.game.is_owned},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.game;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("li",{children:[Object(f.jsx)("h2",{children:t.name}),Object(f.jsx)("img",{src:t.background_image,alt:"game screenshot"}),Object(f.jsx)("p",{children:"Date Added To Wishlist:"}),Object(f.jsx)(S.a,{className:"release-date",format:"MM/DD/YYYY",children:t.date_added}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"button",onClick:function(){return e.props.updateOwned(t.id)},children:"Add to Collection"}),Object(f.jsx)("button",{type:"button",onClick:function(){return e.props.removeGame(t.id)},children:"Remove"})]})})}}]),n}(s.a.Component),q=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={games:[]},a.removeGame=a.removeGame.bind(Object(j.a)(a)),a.updateOwned=a.updateOwned.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/games/?is_owned=false").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({games:t})})).catch((function(e){console.error("There has been a problem with your fetch request:",e)}))}},{key:"removeGame",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}};fetch("/api/v1/games/".concat(e),n).then((function(n){var a=Object(y.a)(t.state.games),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({games:a})}))}},{key:"updateOwned",value:function(e){var t=this,n={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify({is_owned:!0})};fetch("/api/v1/games/".concat(e,"/?is_owned=false"),n).then((function(e){return e.json()})).then((function(e){var n=Object(y.a)(t.state.games),a=n.findIndex((function(e){return e.id===e.id}));n[a]=e,t.setState({games:n}),t.props.history.push("/userhomepage")}))}},{key:"render",value:function(){var e=this,t=this.state.games.map((function(t){return Object(f.jsx)(W,{game:t,removeGame:e.removeGame,updateOwned:e.updateOwned},t.id)}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"MY WISHLIST"}),Object(f.jsx)(c.b,{className:"create-review-link",to:"/search",children:"Add New Game To Wishlist"}),Object(f.jsx)("br",{}),Object(f.jsx)("ul",{children:t})]})}}]),n}(s.a.Component),B=Object(w.g)(q),K=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"frontpage-container",children:[Object(f.jsxs)("div",{className:"frontpage-item",children:[Object(f.jsx)("i",{className:"fas fa-gamepad frontpage-icon"}),Object(f.jsx)("p",{className:"frontpage-title",children:"Your Collection"}),Object(f.jsx)("p",{className:"frontpage-body",children:"Keep track of your game collection"})]}),Object(f.jsxs)("div",{className:"frontpage-item",children:[Object(f.jsx)("i",{className:"far fa-keyboard frontpage-icon"}),Object(f.jsx)("p",{className:"frontpage-title",children:"Your Input"}),Object(f.jsx)("p",{className:"frontpage-body",children:"Create your own reviews, ratings and recommendations"})]}),Object(f.jsxs)("div",{className:"frontpage-item",children:[Object(f.jsx)("i",{className:"fas fa-users frontpage-icon"}),Object(f.jsx)("p",{className:"frontpage-title",children:"Your Community"}),Object(f.jsx)("p",{className:"frontpage-body",children:"Connect with friends to share and see what they're playing"})]})]})})})}}]),n}(s.a.Component),Q=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={selection:O.a.get("Authorization")?"userhomepage":"login"},a.handleNavigation=a.handleNavigation.bind(Object(j.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(j.a)(a)),a.handleLogin=a.handleLogin.bind(Object(j.a)(a)),a.handleLogout=a.handleLogout.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleNavigation",value:function(e){this.setState({selection:e})}},{key:"handleRegistration",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,O.a.set("Authorization","Token ".concat(i.key)),this.props.history.push("/profile");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,O.a.set("Authorization","Token ".concat(i.key)),this.props.history.push("/userhomepage");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(O.a.remove("Authorization"),this.props.history.push("/"));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)("div",{className:"main_container",children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(R,{handleNavigation:this.handleNavigation,handleLogout:this.handleLogout}),Object(f.jsx)("div",{children:Object(f.jsxs)(w.d,{children:[Object(f.jsx)(w.b,{exact:!0,path:"/",component:K}),Object(f.jsx)(w.b,{exact:!0,path:"/login",children:Object(f.jsx)(g,{handleNavigation:this.handleNavigation,handleLogin:this.handleLogin})}),Object(f.jsx)(w.b,{path:"/register",children:Object(f.jsx)(x,{handleNavigation:this.handleNavigation,handleRegistration:this.handleRegistration})}),Object(f.jsx)(D,{path:"/userhomepage",children:Object(f.jsx)(T,{})}),Object(f.jsx)(D,{path:"/profile",children:Object(f.jsx)(z,{})}),Object(f.jsx)(D,{path:"/gamesearch",children:Object(f.jsx)(H,{})}),Object(f.jsx)(D,{path:"/game/:name",children:Object(f.jsx)(U,{})}),Object(f.jsx)(D,{path:"/wishlist",children:Object(f.jsx)(B,{})}),Object(f.jsx)(D,{path:"/submitreview",children:Object(f.jsx)(L,{})}),Object(f.jsx)(D,{path:"/profilesearch",children:Object(f.jsx)(G,{})})]})})]})})}}]),n}(s.a.Component),V=Object(w.g)(Q),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(c.a,{children:Object(f.jsx)(V,{})})}),document.getElementById("root")),Z()}},[[56,1,2]]]);
//# sourceMappingURL=main.0063d6b2.chunk.js.map