(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{73:function(e,n,t){},74:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var a,r,o,i=t(0),c=t.n(i),l=t(10),s=t.n(l),d=t(15),p=t(6),h=t(7),u=t(9),g=t(8),m=t(4),b=t(5),f=b.a.div(a||(a=Object(m.a)(['\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  /*\n * \u0421\u0442\u0438\u043b\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 SearchForm\n */\n  .SearchForm {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n']))),x=t(1),j=function(e){Object(u.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={searchValue:""},e.handleInput=function(n){var t=n.target.value;e.setState({searchValue:t})},e.handleSabmit=function(n){n.preventDefault();var t=e.state.searchValue;e.props.onSearch(t),e.resetForm()},e.resetForm=function(){e.setState({searchValue:""})},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this.state.searchValue;return Object(x.jsx)("header",{className:"Searchbar",children:Object(x.jsx)(f,{children:Object(x.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSabmit,children:[Object(x.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(x.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(x.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleInput})]})})})}}]),t}(i.Component),v=function(e){var n=e.smallImageUrl,t=e.toggleModal;return Object(x.jsx)("li",{className:"ImageGalleryItem",onClick:function(){t(n)},children:Object(x.jsx)("img",{src:n,alt:"",className:"ImageGalleryItem-image"})})},O=b.a.div(r||(r=Object(m.a)(["\n  .ImageGallery {\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(\n      auto-fill,\n      minmax(calc(100% / 4 - 16px * 3), 1fr)\n    );\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .ImageGalleryItem {\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),y=function(e){var n=e.searchResalts,t=e.toggleModal;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(O,{children:Object(x.jsx)("ul",{className:"ImageGallery",children:n.map((function(e){var n=e.id,a=e.webformatURL;return Object(x.jsx)(v,{smallImageUrl:a,toggleModal:t},n)}))})})})},w=t(2),S=t.n(w),k=b.a.div(o||(o=Object(m.a)(["\n  .Button {\n    padding: 8px 16px;\n    border-radius: 2px;\n    background-color: #3f51b5;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    display: block;\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 18px;\n    line-height: 24px;\n    font-style: normal;\n    font-weight: 500;\n    width: 180px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2);\n\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .Button:hover,\n  .Button:focus {\n    background-color: #303f9f;\n  }\n"]))),I=function(e){var n=e.loadMore;return Object(x.jsx)(k,{children:Object(x.jsx)("button",{className:"Button",type:"button",onClick:n,children:"Load more"})})};I.propType={loadMore:S.a.func.isRequired};var M,R,F=I,L=t(29),U=t.n(L),N=b.a.div(M||(M=Object(m.a)(["\n  margin-right: auto;\n  margin-left: auto;\n"]))),z=function(e){Object(u.a)(t,e);var n=Object(g.a)(t);function t(){return Object(p.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(x.jsx)(N,{children:Object(x.jsx)(U.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),t}(i.Component),C=b.a.div(R||(R=Object(m.a)(["\n  .Overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 9999;\n  }\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),G=document.querySelector("#modal-root"),B=function(e){Object(u.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).closeModal=function(n){n.target!==n.currentTarget&&"Escape"!==n.code||e.props.toggleModal("")},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){var e=this.props.modalImgUrl;return Object(l.createPortal)(Object(x.jsx)(C,{children:Object(x.jsx)("div",{className:"Overlay",onClick:this.closeModal,children:Object(x.jsx)("div",{className:"Modal",children:Object(x.jsx)("img",{src:e,alt:""})})})}),G)}}]),t}(i.Component),E=t(12),V=t.n(E);V.a.defaults.baseURL="https://pixabay.com/api",V.a.defaults.params={key:"21043240-eb6fd9f55356396981a7f66ac"};var A=function(e,n){return V.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(n,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}))}))},q=(t(73),function(e){Object(u.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={filter:"",page:1,searchResalts:[],isLoading:!1,modalImg:""},e.onSearch=function(n){e.setState({filter:n,page:1,searchResalts:[]})},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.updateSearchResalt=function(){var n=e.state,t=n.page,a=n.filter;A(a,t).then((function(n){e.setState((function(e){return{searchResalts:[].concat(Object(d.a)(e.searchResalts),Object(d.a)(n)),isLoading:!1}}))})).catch((function(e){return console.log(e)}))},e.toggleModal=function(n){if(n){var t=e.state.searchResalts.find((function(e){return e.webformatURL===n}));e.setState({modalImg:t.largeImageURL})}else e.setState({modalImg:""})},e}return Object(h.a)(t,[{key:"componentDidUpdate",value:function(e,n){n.filter===this.state.filter&&n.page===this.state.page||(this.setState({isLoading:!0}),this.updateSearchResalt()),n.searchResalts!==this.state.searchResalts&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,n=e.searchResalts,t=e.isLoading,a=e.modalImg;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(j,{onSearch:this.onSearch}),a&&Object(x.jsx)(B,{toggleModal:this.toggleModal,modalImgUrl:a}),n.length>=1&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{searchResalts:n,toggleModal:this.toggleModal}),t?Object(x.jsx)(z,{}):Object(x.jsx)(F,{loadMore:this.onLoadMore})]}),t&&Object(x.jsx)(z,{})]})}}]),t}(i.Component));t(74),t(75);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(q,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.0685248c.chunk.js.map