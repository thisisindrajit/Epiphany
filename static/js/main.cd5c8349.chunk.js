(this.webpackJsonparmamentum=this.webpackJsonparmamentum||[]).push([[0],{194:function(e,t,a){e.exports=a.p+"static/media/logo_black.3b2238ac.png"},195:function(e,t,a){e.exports=a.p+"static/media/loading.58607b10.gif"},196:function(e,t,a){e.exports=a.p+"static/media/logo.0d338a54.png"},197:function(e,t,a){e.exports=a.p+"static/media/nytlogo.9348e128.png"},198:function(e,t,a){e.exports=a.p+"static/media/guardianlogo.d9a0b4ad.png"},201:function(e,t,a){e.exports=a(445)},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},239:function(e,t){},241:function(e,t){},251:function(e,t){},253:function(e,t){},278:function(e,t){},280:function(e,t){},281:function(e,t){},287:function(e,t){},289:function(e,t){},307:function(e,t){},309:function(e,t){},321:function(e,t){},324:function(e,t){},329:function(e,t){},331:function(e,t){},354:function(e,t){},445:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(193),i=a.n(o),l=a(20),s=function(){var e=Object(l.b)().loginWithRedirect;return r.a.createElement("div",{id:"login-button",onClick:function(){return e()}},"Login")},c=(a(209),a(194)),u=a.n(c),m=a(7),d=a(8),h=a(10),p=a(9),f=a(195),g=a.n(f),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"loading-box"},r.a.createElement("img",{src:g.a,alt:"loading_gif",style:{height:"200px"}}))}}]),a}(n.Component),b=a(60),E=(a(210),a(211),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=(new Date).getHours();return r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"welcome"},e<12?"Good Morning":e<16?"Good Afternoon":e<21?"Good Evening":"Good Night","!"))}}]),a}(n.Component)),w=a(196),k=a.n(w),y=a(46),j=a.n(y),S=a(72),O=a(45),x=a(200),L=(a(213),a(109)),N=a.n(L),C=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).inputHandler=function(t,a,n){var r=Object(x.a)(e.state.notes);r[a][n]=t.target.value,e.setState({notes:r})},e.createHandler=function(){var t={title:e.state.newnotetitle,body:e.state.newnotebody,email:e.props.user.email};e.setState({createStatus:"Creating note..."}),(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(a){fetch("https://armamentum.herokuapp.com/notes/postnote",{method:"POST",headers:{"Content-type":"application/json",userjwt:e.state.rawuserjwt,email:e.props.user.email,Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(){(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(t){return fetch("https://armamentum.herokuapp.com/notes",{headers:{Authorization:"Bearer ".concat(t),userjwt:e.state.rawuserjwt,email:e.props.user.email}}).then((function(e){return e.json()})).then((function(t){var a=[];t.forEach((function(e,t){a[t]=""})),e.setState({notes:t,isLoading:!1,newnotetitle:"",newnotebody:"",showcreatenewnotebox:!1,updateStatus:a,createStatus:""})}))}))}))}))},e.openbox=function(){e.setState({showcreatenewnotebox:!e.state.showcreatenewnotebox})},e.createnoteinputHandler=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.updateHandler=function(t,a){var n=e.props.auth0.getAccessTokenSilently,r=e.state.updateStatus;r[a]="Updating...",e.setState({isUpdating:!0,updateStatus:r});var o={title:e.state.notes[a][2],body:e.state.notes[a][1],email:e.props.user.email};n({audience:"https://armamentum-notes"}).then((function(n){fetch("https://armamentum.herokuapp.com/notes/updatenote/"+t,{method:"PUT",headers:{"Content-type":"application/json",userjwt:e.state.rawuserjwt,email:e.props.user.email,Authorization:"Bearer ".concat(n)},body:JSON.stringify(o)}).then((function(){r[a]="Updated!",e.setState({isUpdating:!1,updateStatus:r})}))}))},e.deleteHandler=function(t,a){var n=e.props.auth0.getAccessTokenSilently,r=e.state.updateStatus;r[a]="Deleting note...",e.setState({isUpdating:!0,updateStatus:r}),n({audience:"https://armamentum-notes"}).then((function(a){fetch("https://armamentum.herokuapp.com/notes/deletenote/"+t,{method:"DELETE",headers:{userjwt:e.state.rawuserjwt,email:e.props.user.email,Authorization:"Bearer ".concat(a)}}).then((function(){(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(t){return fetch("https://armamentum.herokuapp.com/notes",{headers:{userjwt:e.state.rawuserjwt,Authorization:"Bearer ".concat(t),email:e.props.user.email}}).then((function(e){return e.json()})).then((function(t){var a=[];t.forEach((function(e,t){a[t]=""})),e.setState({notes:t,isLoading:!1,showcreatenewnotebox:!1,isUpdating:!1,updateStatus:a})}))}))}))}))},e.state={notes:[],isLoading:!0,isUpdating:!1,newnotetitle:"",newnotebody:"",showcreatenewnotebox:!1,updateStatus:[],createStatus:"",rawuserjwt:""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(j.a.mark((function e(){var t,a,n,r=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.auth0,a=t.getAccessTokenSilently,n=t.getIdTokenClaims,e.next=3,n().then((function(e){r.setState({rawuserjwt:e.__raw})}));case 3:a({audience:"https://armamentum-notes"}).then((function(e){return fetch("https://armamentum.herokuapp.com/notes",{headers:{userjwt:r.state.rawuserjwt,Authorization:"Bearer ".concat(e),email:r.props.user.email}}).then((function(e){return e.json()})).then((function(e){r.setState({notes:e,isLoading:!1})})).catch((function(e){console.log(e)}))}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){N()(document.querySelectorAll(".note-title")),N()(document.querySelectorAll(".note-textarea"))}},{key:"render",value:function(){var e=this;return!0===this.state.isLoading?r.a.createElement("div",{id:"loading"},"Loading your \ud83d\uddd2\ufe0fnotes..."):r.a.createElement("div",{id:"notes"},r.a.createElement("div",{id:"create-new-note",onClick:function(){return e.openbox()}},"Create a new note"),this.state.showcreatenewnotebox&&r.a.createElement("div",{id:"create-new-note-box"},r.a.createElement("textarea",{className:"note-title",name:"newnotetitle",onChange:function(t){return e.createnoteinputHandler(t)},placeholder:"Note title",value:this.state.newnotetitle,rows:1}),r.a.createElement("div",{className:"note-body"},r.a.createElement("textarea",{className:"note-textarea",name:"newnotebody",onChange:function(t){return e.createnoteinputHandler(t)},placeholder:"Note body",value:this.state.newnotebody,rows:1})),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"update-status"},this.state.createStatus),r.a.createElement("div",{id:"create-note-button",onClick:this.state.createStatus.length>0?null:function(){return e.createHandler()}},"Create"))),this.state.notes.map((function(t,a){return r.a.createElement("div",{className:"note",key:t[4]["@ref"].id},r.a.createElement("textarea",{className:"note-title",name:"title",onChange:function(t){return e.inputHandler(t,a,2)},defaultValue:t[2],rows:1}),r.a.createElement("div",{className:"note-body"},r.a.createElement("textarea",{className:"note-textarea",name:"body",onChange:function(t){return e.inputHandler(t,a,1)},defaultValue:t[1],rows:1})),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"update-status"},e.state.updateStatus[a]),r.a.createElement("div",{className:"delete-button",onClick:function(){return e.deleteHandler(t[4]["@ref"].id,a)}},"Delete"),r.a.createElement("div",{className:"save-button",onClick:function(){return e.updateHandler(t[4]["@ref"].id,a)}},"Save")))})))}}]),a}(n.PureComponent),H=Object(l.c)(C),A=(a(214),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={quote:"",author:""},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(t){e.setState({quote:t.content,author:t.author})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"quote"},r.a.createElement("span",{id:"content"},this.state.quote),""!==this.state.quote&&r.a.createElement("div",{id:"line"}),r.a.createElement("span",{id:"author"},this.state.author))}}]),a}(n.Component)),M=(a(215),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={weather:{temp:{value:void 0}},isLoading:!0,url:"",enableLocation:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(j.a.mark((function e(){var t=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=3;break}return e.next=3,navigator.geolocation.getCurrentPosition((function(e){t.setState({url:"https://armamentum.herokuapp.com/weather/"+e.coords.latitude+"&"+e.coords.longitude,enableLocation:!0})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this;""!==this.state.url&&!0===this.state.isLoading&&fetch(this.state.url).then((function(e){return e.json()})).then((function(t){"API rate limit exceeded"===t.message?e.setState({weather:{temp:{value:void 0}},isLoading:!1}):e.setState({weather:t,isLoading:!1})})).catch((function(t){console.log(t),e.setState({isLoading:!1})}))}},{key:"render",value:function(){return!1===this.state.isLoading&&void 0!==this.state.weather.temp.value?r.a.createElement("div",{id:"weather"},r.a.createElement("div",{id:"city"},"Current temperature in your location"),r.a.createElement("span",{id:"temperature"},Math.round(this.state.weather.temp.value)+"\xb0C")):r.a.createElement("div",{id:"weather"},r.a.createElement("span",null,!0===this.state.isLoading&&!0===this.state.enableLocation?"Loading...":!1===this.state.enableLocation?"Please provide location access!":"Sorry! Some error occurred! Please try again!"))}}]),a}(n.PureComponent)),V=(a(216),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={picgeneratorlinks:["https://picsum.photos/1920/1080?random=1","https://picsum.photos/1920/1080?random=2","https://picsum.photos/1920/1080?random=3","https://picsum.photos/1920/1080?random=4"],picurl:[],isLoading:!0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=[];this.state.picgeneratorlinks.map((function(e,a){return t[a]=fetch(e)})),Promise.all(t).then((function(t){var a=[];t.map((function(e,t){return a[t]=e.url})),e.setState({isLoading:!1,picurl:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"pictures-box"},r.a.createElement("span",{id:"title"},"Photos for you"),!1===this.state.isLoading?this.state.picurl.map((function(e,t){return r.a.createElement("a",{href:e,key:t,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"img-holder",src:e,alt:"random_photo"}))})):r.a.createElement("span",{style:{marginBottom:"20px"}},"\ud83d\udcf7Loading images..."))}}]),a}(n.PureComponent)),B=(a(217),a(218),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).inputHandler=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n.searchHandler=function(e){e.preventDefault(),n.setState({isLoading:!0,error:!1}),fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+n.state.word).then((function(e){return e.json()})).then((function(e){(e.title&&"No Definitions Found"===e.title||0===e[0].meanings.length)&&n.setState({error:!0,isLoading:!1}),n.setState({word:"",result:e,isLoading:!1})})).catch((function(e){console.log("inside error"),console.log(e),n.setState({error:!0,isLoading:!1})}))},n.state={word:"",isLoading:!1,error:!1,result:[]},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"dictionary"},"Dictionary",r.a.createElement("div",{id:"search"},r.a.createElement("form",{method:"POST",onSubmit:this.searchHandler},r.a.createElement("input",{type:"text",name:"word",placeholder:"Enter the word to search...",value:this.state.word,autoComplete:"off",onChange:this.inputHandler}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{id:"search-button",type:"submit"},"Search")))),!1===this.state.error&&(this.state.isLoading||this.state.result.length>0)?r.a.createElement("div",{id:"search"},!0===this.state.isLoading?"Searching...":this.state.result.length>0?r.a.createElement("div",{id:"search-results"},r.a.createElement("div",{id:"top"},r.a.createElement("span",{id:"word"},this.state.result[0].word)),this.state.result.map((function(e,t){return r.a.createElement("div",{className:"def-box",key:t},e.meanings.map((function(e,t){return r.a.createElement("div",{className:"result",key:t},e.partOfSpeech&&r.a.createElement("span",{className:"type"},e.partOfSpeech),e.definitions.map((function(e,t){return r.a.createElement("div",{className:"defn",key:t},r.a.createElement("span",{className:"definition"},e.definition),(e.example||e.synonyms)&&r.a.createElement("div",{className:"other"},e.example&&r.a.createElement("span",{className:"example"},r.a.createElement("b",null,"Example: "),e.example),e.synonyms&&r.a.createElement("div",{className:"synonyms"},r.a.createElement("b",null,"Synonyms: "),e.synonyms.join(", "))))})))})))}))):null):null,!0===this.state.error&&r.a.createElement("div",{id:"no-def"},"Sorry! No definition found for the given word!"))}}]),a}(n.Component)),z=(a(219),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={result:[],isLoading:!0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://armamentum.herokuapp.com/books/nytbooks").then((function(e){return e.json()})).then((function(t){console.log(t.results.books),e.setState({result:t.results.books,isLoading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"nytbooks"},this.state.isLoading?r.a.createElement("div",{style:{padding:"10px",textAlign:"center"}},"Loading books..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{id:"books-title"},"Best Selling Books"),this.state.result.slice(0,10).map((function(e,t){return r.a.createElement("div",{className:"book-box",key:t,onClick:function(){window.open(e.amazon_product_url,"_blank")}},r.a.createElement("img",{className:"bookcover",src:e.book_image,alt:"book_cover"}),r.a.createElement("div",{className:"details"},r.a.createElement("span",{className:"title"},e.title),r.a.createElement("span",{className:"author"},e.author),r.a.createElement("span",{className:"desc"},e.description)))}))))}}]),a}(n.Component)),D=(a(220),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,fact:{}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://armamentum.herokuapp.com/fact").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,fact:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return!1===this.state.isLoading?r.a.createElement("div",{id:"fact-box"},"Fact about number "+this.state.fact.number,r.a.createElement("span",{id:"fact"},this.state.fact.text)):r.a.createElement("div",{id:"fact-box-loading"},"Fetching a \ud83c\udf1ffact for you...")}}]),a}(n.PureComponent)),I=(a(221),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).toggleBox=function(){n.setState({toggleLinkBox:!n.state.toggleLinkBox})},n.inputHandler=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n.setLink=function(e){var t=n.state.links;if(0!==n.state.title.length&&0!==n.state.url.length){for(var a=0;a<t.length;a++)if(t[a].title===e)return void alert("This title already exists! Please enter a new title!");t.push({title:n.state.title,url:n.state.url}),localStorage.setItem("quick-links",JSON.stringify(t)),n.setState({links:JSON.parse(localStorage.getItem("quick-links")),title:"",url:"",toggleLinkBox:!1})}else alert("Please fill in all the fields!")},n.deleteLink=function(e){var t=n.state.links;t=t.filter((function(t){return t.title!==e})),localStorage.setItem("quick-links",JSON.stringify(t)),n.setState({links:JSON.parse(localStorage.getItem("quick-links")),title:"",url:"",toggleLinkBox:!1})},n.state={links:localStorage.hasOwnProperty("quick-links")?JSON.parse(localStorage.getItem("quick-links")):[],toggleLinkBox:!1,title:"",url:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"quick-links"},r.a.createElement("div",{id:"add-link",onClick:this.toggleBox},"+ Add a new link"),this.state.toggleLinkBox&&r.a.createElement("div",{id:"add-link-box"},r.a.createElement("input",{type:"text",name:"title",placeholder:"Enter the title",value:this.state.title,maxLength:"50",autoComplete:"off",onChange:this.inputHandler}),r.a.createElement("input",{type:"text",name:"url",placeholder:"Enter the url",value:this.state.url,autoComplete:"off",onChange:this.inputHandler}),r.a.createElement("div",{id:"create-link",onClick:function(){return e.setLink(e.state.title)}},"Create Link")),this.state.links.map((function(t,a){var n=t.title,o=t.url;return r.a.createElement("div",{key:a,className:"link-box"},r.a.createElement("span",{className:"link-title",onClick:function(){window.open(o,"_blank")}},n),r.a.createElement("div",{className:"icons",onClick:function(){return e.deleteLink(n)}},r.a.createElement("svg",{className:"icons-2",width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",fill:"#E74C3C",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))))})))}}]),a}(n.PureComponent)),P=(a(222),a(197)),T=a.n(P),_=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).dateformat=function(e){var t=e.split("T")[0].split("-");return t[2]+"/"+t[1]+"/"+t[0]},n.state={result:[],isLoading:!0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://armamentum.herokuapp.com/news/nytnews").then((function(e){return e.json()})).then((function(t){e.setState({result:t.results,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"news-box-nyt"},this.state.isLoading?r.a.createElement("div",{style:{padding:"10px"}},"Loading news..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:T.a,id:"nyt-logo",alt:"nyt-logo"}),this.state.result.slice(0,10).map((function(t,a){return r.a.createElement("div",{key:a,className:"news-list-item-nyt",onClick:function(){window.open(t.url,"_blank")}},r.a.createElement("img",{className:"nyt-img-holder",src:t.multimedia[1].url,alt:"thumbnail"}),r.a.createElement("div",{className:"other-data"},r.a.createElement("span",{className:"nyt-title",title:t.title},t.title),r.a.createElement("div",{className:"pubdateandsubsection"},r.a.createElement("div",{className:"pubdate"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-calendar2-minus",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{marginRight:"5px"}},r.a.createElement("path",{fillRule:"evenodd",d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"}),r.a.createElement("path",{d:"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"})),e.dateformat(t.published_date)),r.a.createElement("span",{className:"category"},t.subsection))))}))))}}]),a}(n.Component),q=(a(223),a(198)),U=a.n(q),J=a(199),R=new(a.n(J).a)("8125dc9a-3498-4272-bd7c-4568c525f5e3",!0),F=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).dateformat=function(e){var t=e.split("T")[0].split("-");return t[2]+"/"+t[1]+"/"+t[0]},n.state={news:[],isLoading:!0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;R.content.search("world",{"order-by":"newest"}).then((function(t){var a=JSON.parse(t.body);e.setState({news:a.response.results,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"news-box-guardian"},this.state.isLoading?r.a.createElement("div",{style:{padding:"20px"}},"Loading news..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:U.a,id:"guardian-logo",alt:"guardian-logo"}),this.state.news.map((function(t,a){return r.a.createElement("div",{className:"news-list-item-guardian",onClick:function(){return window.open(t.webUrl,"_blank")},key:a},r.a.createElement("span",{className:"title"},t.webTitle),r.a.createElement("div",{className:"other-data"},r.a.createElement("div",{className:"pubdate"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-calendar2-minus",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{marginRight:"5px"}},r.a.createElement("path",{fillRule:"evenodd",d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"}),r.a.createElement("path",{d:"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"})),e.dateformat(t.webPublicationDate)),r.a.createElement("span",{className:"category"},t.sectionName)))}))))}}]),a}(n.Component),W=function(){var e=Object(l.b)().logout;return r.a.createElement("div",{id:"logout-button",onClick:function(){return e({returnTo:window.location.href})}},"Logout")},G=function(e){var t=Object(n.useState)((new Date).toLocaleTimeString()),a=Object(b.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(!1),c=Object(b.a)(s,2),u=c[0],m=c[1],d=Object(n.useState)(!1),h=Object(b.a)(d,2),p=h[0],f=h[1];localStorage.hasOwnProperty("bg-type")||localStorage.setItem("bg-type","wallpaper");var g=Object(n.useState)(localStorage.getItem("bg-type")),w=Object(b.a)(g,2),y=w[0],j=w[1];Object(n.useEffect)((function(){"wallpaper"===y?fetch("https://picsum.photos/1920/1080?random=6").then((function(e){document.body.style.backgroundImage='linear-gradient(to top, rgba(23, 32, 42, 0.20), rgba(0, 0, 0, 0.80)), url("'+e.url+'")',f(!0)})):(document.body.style.backgroundImage="none",document.body.style.backgroundColor="#050505")}),[y]);var S=function(){i((new Date).toLocaleTimeString())};Object(n.useEffect)((function(){setInterval(S,1e3)}));var O=Object(l.b)().user;return p||"none"===y?r.a.createElement("div",{id:"bg"},r.a.createElement("div",{id:"titleandlogo"},r.a.createElement("img",{src:k.a,alt:"logo",id:"logo"}),r.a.createElement("span",{id:"title"},"ARMAMENTUM"),r.a.createElement("div",{id:"time"},r.a.createElement("h2",null,o)),r.a.createElement("div",{id:"options-box"},r.a.createElement("img",{src:O.picture,alt:"profile_picture",onClick:function(){var e=document.getElementById("options-list");u?e.style.display="none":(e.style.animation="slide-down 0.25s cubic-bezier(.08,.5,.66,1) forwards",e.style.display="block"),m(!u)}}))),r.a.createElement("div",{id:"holder"},r.a.createElement("div",{id:"options-list"},r.a.createElement("div",{onClick:function(){"wallpaper"===y?(localStorage.setItem("bg-type","none"),j("none")):(localStorage.setItem("bg-type","wallpaper"),j("wallpaper"))}},"wallpaper"===y?"No Wallpaper":"Random Wallpaper"),r.a.createElement("div",null,r.a.createElement(W,null)))),r.a.createElement("div",{id:"body"},r.a.createElement(E,null),r.a.createElement(A,null),r.a.createElement("div",{id:"widget-grid"},window.innerWidth>=1e3?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"left-1"},r.a.createElement(M,null),r.a.createElement(I,null),r.a.createElement(B,null),r.a.createElement(F,null),r.a.createElement(V,null),r.a.createElement(z,null)),r.a.createElement("div",{id:"right-1"},r.a.createElement(D,null),r.a.createElement(H,{user:O}),r.a.createElement(_,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"left-1"},r.a.createElement(M,null),r.a.createElement(I,null),r.a.createElement(H,{user:O}),r.a.createElement(B,null),r.a.createElement(F,null)),r.a.createElement("div",{id:"right-1"},r.a.createElement(_,null),r.a.createElement(D,null),r.a.createElement(V,null),r.a.createElement(z,null)))))):r.a.createElement(v,null)},K=function(e){var t=Object(l.b)(),a=t.isLoading,n=t.isAuthenticated;return a?r.a.createElement(v,null):n?r.a.createElement(G,null):r.a.createElement("div",{id:"login-box"},r.a.createElement("img",{id:"logo",src:u.a,alt:"Armamentum_logo"}),"Welcome to Armamentum!",r.a.createElement(s,null),r.a.createElement("span",{id:"details"},"Armamentum is a custom new tab made by Indrajit. It's one of his dream personal projects. ",r.a.createElement("a",{href:"https://thisisindrajit.github.io/portfolio",target:"_blank",rel:"noopener noreferrer"},"Click here")," to view his portfolio!"))};i.a.render(r.a.createElement(l.a,{domain:"dev-crg4pmj4.us.auth0.com",clientId:"KPXUmwO2B80UKf3AQIJqcUvCFrZ0pomS",redirectUri:window.location.href,useRefreshTokens:"true",audience:"https://armamentum-notes"},r.a.createElement(K,null)),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.cd5c8349.chunk.js.map