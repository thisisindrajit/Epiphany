(this.webpackJsonparmamentum=this.webpackJsonparmamentum||[]).push([[0],{101:function(e,t){},103:function(e,t){},138:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(65),i=n.n(r),c=n(40),s=n(1),u=n(14),l=function(){var e=Object(u.b)().loginWithRedirect;return o.a.createElement("div",{id:"login-button",onClick:function(){return e()}},"Login")},d=(n(82),n(66)),m=n.n(d),h=n(3),p=n(4),f=n(6),v=n(5),b=n(67),g=n.n(b),E=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"loading-box"},o.a.createElement("img",{src:g.a,alt:"loading_gif",style:{height:"250px"}}))}}]),n}(a.Component),y=function(e){var t=Object(u.b)(),n=t.isLoading,a=t.isAuthenticated;return n?o.a.createElement(E,null):(a&&e.history.push("/home"),o.a.createElement("div",{id:"login-box"},o.a.createElement("img",{id:"logo",src:m.a,alt:"Armamentum_logo"}),"Welcome to Armamentum!",o.a.createElement(l,null)))},w=n(72),j=(n(83),n(84),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=(new Date).getHours();return o.a.createElement("div",{id:"content"},o.a.createElement("div",{id:"welcome"},e<12?"Good Morning":e<16?"Good Afternoon":e<21?"Good Evening":"Good Night"," Indrajit!"))}}]),n}(a.Component)),O=n(68),S=n.n(O),k=n(29),x=n(73),L=(n(85),n(41)),C=n.n(L),N=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).inputHandler=function(t,n,a){var o=Object(x.a)(e.state.notes);o[n][a]=t.target.value,e.setState({notes:o})},e.createHandler=function(){var t={title:e.state.newnotetitle,body:e.state.newnotebody};fetch("https://armamentum.herokuapp.com/notes/postnote",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(){fetch("https://armamentum.herokuapp.com/notes").then((function(e){return e.json()})).then((function(t){var n=[];t.forEach((function(e,t){n[t]=""})),e.setState({notes:t,isLoading:!1,newnotetitle:"",newnotebody:"",showcreatenewnotebox:!1,updateStatus:n})}))}))},e.openbox=function(){e.setState({showcreatenewnotebox:!e.state.showcreatenewnotebox})},e.createnoteinputHandler=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value))},e.updateHandler=function(t,n){var a=e.state.updateStatus;a[n]="Updating...",e.setState({isUpdating:!0,updateStatus:a});var o={title:e.state.notes[n][2],body:e.state.notes[n][1]};fetch("https://armamentum.herokuapp.com/notes/updatenote/"+t,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(o)}).then((function(){a[n]="Updated!",e.setState({isUpdating:!1,updateStatus:a})}))},e.deleteHandler=function(t){fetch("https://armamentum.herokuapp.com/notes/deletenote/"+t,{method:"DELETE"}).then((function(){fetch("https://armamentum.herokuapp.com/notes").then((function(e){return e.json()})).then((function(t){e.setState({notes:t,isLoading:!1,showcreatenewnotebox:!1})}))}))},e.state={notes:[],isLoading:!0,isUpdating:!1,newnotetitle:"",newnotebody:"",showcreatenewnotebox:!1,updateStatus:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://armamentum.herokuapp.com/notes").then((function(e){return e.json()})).then((function(t){e.setState({notes:t,isLoading:!1})}))}},{key:"componentDidUpdate",value:function(){C()(document.querySelectorAll(".note-title")),C()(document.querySelectorAll(".note-textarea"))}},{key:"render",value:function(){var e=this;return console.log(this.props.name),!0===this.state.isLoading&&"Indrajit Vijayakumar"===this.props.name?o.a.createElement("div",{id:"loading"},"Loading notes..."):o.a.createElement("div",{id:"notes"},o.a.createElement("div",{id:"create-new-note",onClick:function(){return e.openbox()}},"Create a new note"),this.state.showcreatenewnotebox&&o.a.createElement("div",{id:"create-new-note-box"},o.a.createElement("textarea",{className:"note-title",name:"newnotetitle",onChange:function(t){return e.createnoteinputHandler(t)},placeholder:"Note title",value:this.state.newnotetitle,rows:1}),o.a.createElement("div",{className:"note-body"},o.a.createElement("textarea",{className:"note-textarea",name:"newnotebody",onChange:function(t){return e.createnoteinputHandler(t)},placeholder:"Note body",value:this.state.newnotebody,rows:1})),o.a.createElement("div",{className:"buttons"},o.a.createElement("div",{id:"create-note-button",onClick:function(){return e.createHandler()}},"Create"))),this.state.notes.map((function(t,n){return o.a.createElement("div",{className:"note",key:t[3]["@ref"].id},o.a.createElement("textarea",{className:"note-title",name:"title",onChange:function(t){return e.inputHandler(t,n,2)},defaultValue:t[2],rows:1}),o.a.createElement("div",{className:"note-body"},o.a.createElement("textarea",{className:"note-textarea",name:"body",onChange:function(t){return e.inputHandler(t,n,1)},defaultValue:t[1],rows:1})),o.a.createElement("div",{className:"buttons"},o.a.createElement("div",{className:"update-status"},e.state.updateStatus[n]),o.a.createElement("div",{className:"delete-button",onClick:function(){return e.deleteHandler(t[3]["@ref"].id)}},"Delete"),o.a.createElement("div",{className:"save-button",onClick:function(){return e.updateHandler(t[3]["@ref"].id,n)}},"Save")))})))}}]),n}(a.PureComponent),H=(n(86),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={quote:"",author:""},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(t){e.setState({quote:t.content,author:t.author})}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"quote"},o.a.createElement("span",{id:"content"},this.state.quote),""!==this.state.quote&&o.a.createElement("div",{id:"line"}),o.a.createElement("span",{id:"author"},this.state.author))}}]),n}(a.Component)),D=n(30),P=n.n(D),U=n(69),A=(n(88),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={weather:{temp:{value:void 0}},isLoading:!0,url:"",enableLocation:!1},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(U.a)(P.a.mark((function e(){var t=this;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=3;break}return e.next=3,navigator.geolocation.getCurrentPosition((function(e){t.setState({url:"https://api.climacell.co/v3/weather/realtime?lat="+e.coords.latitude+"&lon="+e.coords.longitude+"&unit_system=si&fields=temp&apikey=wnyk8nvno3fgvSgIuM8Y9h490KONwYyW",enableLocation:!0})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this;""!==this.state.url&&!0===this.state.isLoading&&fetch(this.state.url).then((function(e){return e.json()})).then((function(t){"API rate limit exceeded"===t.message?e.setState({weather:{temp:{value:void 0}},isLoading:!1}):e.setState({weather:t,isLoading:!1})})).catch((function(t){e.setState({isLoading:!1}),console.error("Error:"+t)}))}},{key:"render",value:function(){return!1===this.state.isLoading&&void 0!==this.state.weather.temp.value?o.a.createElement("div",{id:"weather"},o.a.createElement("div",{id:"city"},"Current temperature in your location"),o.a.createElement("span",{id:"temperature"},Math.round(this.state.weather.temp.value)+"\xb0C")):o.a.createElement("div",{id:"weather"},o.a.createElement("span",null,!0===this.state.isLoading&&!0===this.state.enableLocation?"Loading...":!1===this.state.enableLocation?"Please provide location access!":"Sorry! Some error occurred! Please try again!"))}}]),n}(a.PureComponent)),M=(n(89),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={picgeneratorlinks:["https://picsum.photos/1920/1080?random=1","https://picsum.photos/1920/1080?random=2","https://picsum.photos/1920/1080?random=3","https://picsum.photos/1920/1080?random=4"],picurl:[],isLoading:!0},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=[];this.state.picgeneratorlinks.map((function(e,n){return t[n]=fetch(e)})),Promise.all(t).then((function(t){var n=[];t.map((function(e,t){return n[t]=e.url})),e.setState({isLoading:!1,picurl:n})}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"pictures-box"},o.a.createElement("span",{id:"title"},"Your Gallery"),!1===this.state.isLoading?this.state.picurl.map((function(e,t){return o.a.createElement("a",{href:e,key:t,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("img",{className:"img-holder",src:e,alt:"random_photo"}))})):o.a.createElement("span",{style:{marginBottom:"20px"}},"\ud83d\udcf7Loading images..."))}}]),n}(a.PureComponent)),q=(n(90),n(70)),I=n.n(q),T=n(118)("a73d4c94f67c7b70b93d1023e8f8095173fe430d"),_=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).inputHandler=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.searchHandler=function(e){e.preventDefault(),a.setState({isLoading:!0,error:!1}),T.define(a.state.word).then((function(e){a.setState({word:"",isLoading:!1,result:e})})).catch((function(){a.setState({error:!0,isLoading:!1,word:""})}))},a.state={word:"",isLoading:!1,error:!1,result:{definitions:[]}},a}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"dictionary"},"Dictionary",o.a.createElement("div",{id:"search"},o.a.createElement("form",{method:"POST",onSubmit:this.searchHandler},o.a.createElement("input",{type:"text",name:"word",placeholder:"Enter the word to search...",value:this.state.word,autoComplete:"off",onChange:this.inputHandler}),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{id:"search-button",type:"submit"},"Search")))),!1===this.state.error&&(this.state.isLoading||this.state.result.definitions.length>0)?o.a.createElement("div",{id:"search"},!0===this.state.isLoading?"Searching...":this.state.result.definitions.length>0?o.a.createElement("div",{id:"search-results"},o.a.createElement("div",{id:"top"},o.a.createElement("span",{id:"word"},this.state.result.word),this.state.result.pronunciation&&o.a.createElement("span",{id:"pronunciation"},"/",this.state.result.pronunciation,"/")),this.state.result.definitions.map((function(e,t){return o.a.createElement("div",{className:"def-box",key:t},e.type&&o.a.createElement("span",{className:"type"},e.type),o.a.createElement("span",{className:"definition"},e.definition),e.example&&o.a.createElement("span",{className:"example"},o.a.createElement("b",null,"Example:")," ",I()(e.example)))}))):null):null,!0===this.state.error&&o.a.createElement("div",null,"Sorry! No definition found for the given word!"))}}]),n}(a.PureComponent),G=(n(138),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isLoading:!0,fact:{}},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://armamentum.herokuapp.com/fact").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,fact:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return!1===this.state.isLoading?o.a.createElement("div",{id:"fact-box"},"Fact about number "+this.state.fact.number,o.a.createElement("span",{id:"fact"},this.state.fact.text)):null}}]),n}(a.PureComponent)),J=function(e){var t=Object(a.useState)((new Date).toLocaleTimeString()),n=Object(w.a)(t,2),r=n[0],i=n[1],c=function(){i((new Date).toLocaleTimeString())};Object(a.useEffect)((function(){setInterval(c,1e3)}));var s=Object(u.b)(),l=s.user;return s.isAuthenticated||e.history.push("/"),o.a.createElement("div",{id:"bg"},o.a.createElement("div",{id:"titleandlogo"},o.a.createElement("img",{src:S.a,alt:"logo",id:"logo"}),o.a.createElement("span",{id:"title"},"ARMAMENTUM"),o.a.createElement("div",{id:"time"},o.a.createElement("h2",null,r))),o.a.createElement("div",{id:"body"},o.a.createElement(j,null),o.a.createElement(H,null),o.a.createElement("div",{id:"widget-grid"},o.a.createElement("div",{id:"left-1"},o.a.createElement(A,null),o.a.createElement(_,null),o.a.createElement(M,null)),o.a.createElement("div",{id:"right-1"},o.a.createElement(G,null),o.a.createElement(N,{name:l.name})))))};function B(){return o.a.createElement(u.a,{domain:"dev-crg4pmj4.us.auth0.com",clientId:"KPXUmwO2B80UKf3AQIJqcUvCFrZ0pomS",redirectUri:window.location.href},o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/",component:y,exact:!0}),o.a.createElement(s.a,{path:"/home",component:J})))}i.a.render(o.a.createElement(c.a,null,o.a.createElement(B,null)),document.getElementById("root"))},66:function(e,t,n){e.exports=n.p+"static/media/logo_black.3b2238ac.png"},67:function(e,t,n){e.exports=n.p+"static/media/loading.baeaf0c7.gif"},68:function(e,t,n){e.exports=n.p+"static/media/logo.0d338a54.png"},74:function(e,t,n){e.exports=n(143)},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.83c1aa54.chunk.js.map