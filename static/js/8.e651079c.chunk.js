(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[8],{102:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var r=n(67),i=n(17),a=n(18),c=n(20),o=n(19),s=n(0),u=n(58),l=n(61),h=(n(59),n(99)),f=n.n(h),v=n(1),b=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={reviews:[]},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.movieId;u.c(e).then((function(e){t.setState({reviews:Object(r.a)(e)})})).catch((function(t){l.b.error(t)}))}},{key:"render",value:function(){var t=this.state.reviews;return Object(v.jsxs)("div",{className:f.a.section,children:[Object(v.jsx)("h2",{className:f.a.title,children:"Reviews"}),0===t.length&&Object(v.jsx)("p",{children:"We don't have any reviews for this movie."}),Object(v.jsx)("ul",{className:f.a.container,children:0!==t.length&&t.map((function(t){var e=t.id,n=t.author,r=t.content;return Object(v.jsxs)("li",{children:[Object(v.jsxs)("p",{className:f.a.subtitle,children:["Author: ",n]}),Object(v.jsx)("p",{className:f.a.text,children:r})]},e)}))})]})}}]),n}(s.Component)},67:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return i}))},99:function(t,e,n){t.exports={section:"Reviews_section__2Xigh",title:"Reviews_title__3P2fw",container:"Reviews_container__vDn0B",subtitle:"Reviews_subtitle__hIZue",text:"Reviews_text__1n80N"}}}]);
//# sourceMappingURL=8.e651079c.chunk.js.map