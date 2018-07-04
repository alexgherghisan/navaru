module.exports=__NEXT_REGISTER_PAGE("/complex",function(){return{page:webpackJsonp([0],{237:function(e,t,a){e.exports=a(238)},238:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),o=a(239),i=(a.n(o),a(240)),c=a.n(i),l=a(89),u=a(90),s=a(76),f=a(75),m=a(91);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return b(n,(a=n=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(v(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{data:null,isLoading:!0}}),a))}var a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),a=t,(o=[{key:"componentDidMount",value:function(){var e=this;fetch("/static/data/home.json").then(function(e){return e.json()}).then(function(t){e.setState({data:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data;return e.isLoading?null:r.a.createElement("b",{className:c.a.complex},r.a.createElement("b",{className:c.a.intro_section},r.a.createElement(l.default,{heading:t.introSection.complex.heading,image:t.introSection.complex.image,video:t.introSection.complex.video})),r.a.createElement("b",{className:c.a.navigation},r.a.createElement(u.default,{logo:t.logo.complex})),r.a.createElement("b",{className:c.a.beginning_section},r.a.createElement(s.default,{heading:t.beginningSection.heading,image:t.beginningSection.image.complex,description:t.beginningSection.description})),r.a.createElement("b",{className:c.a.beginning_section},r.a.createElement(f.default,{heading:t.aboutSection.heading,subheading:t.aboutSection.subheading,image:t.aboutSection.image.complex,description:t.aboutSection.description})),r.a.createElement("b",{className:c.a.Services_section},r.a.createElement(m.default,{heading:t.servicesSection.heading,items:t.servicesSection.items,image:t.servicesSection.image})))}}])&&p(a.prototype,o),i&&p(a,i),t}();t.default=h},239:function(e,t,a){e.exports=a(77)},39:function(e,t,a){var n=a(78),r=a(79),o=a(87);e.exports=function(e){return n(e)||r(e)||o()}},75:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),o=a(124),i=a.n(o);t.default=function(e){var t=e.heading,a=e.subheading,n=e.image,o=e.description;return r.a.createElement("b",{className:i.a.container},r.a.createElement("b",{className:i.a.to_left},r.a.createElement("img",{src:n}),r.a.createElement("b",{className:i.a.overlay}),r.a.createElement("b",{className:i.a.heading},t),r.a.createElement("b",{className:i.a.separator}),r.a.createElement("b",{className:i.a.subheading},a)),r.a.createElement("b",{className:i.a.to_right},r.a.createElement("b",{className:i.a.description},o)))}},76:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),o=a(125),i=a.n(o);t.default=function(e){var t=e.heading,a=e.image,n=e.description;return r.a.createElement("b",{className:i.a.container},r.a.createElement("img",{src:a,className:i.a.beginning_section_img}),r.a.createElement("b",{className:i.a.overlay}),r.a.createElement("b",{className:i.a.heading},t),r.a.createElement("b",{className:i.a.separator}),r.a.createElement("b",{className:i.a.description},n))}},77:function(e,t,a){"use strict";var n=a(3);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=b,t.default=void 0;var r=n(a(27)),o=n(a(39)),i=n(a(15)),c=n(a(6)),l=n(a(7)),u=n(a(16)),s=n(a(17)),f=n(a(0)),m=n(a(38)),d=n(a(88)),p=function(e){function t(){return(0,c.default)(this,t),(0,u.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return null}}]),t}(f.default.Component);function b(){return[f.default.createElement("meta",{charSet:"utf-8",className:"next-head"})]}Object.defineProperty(p,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{headManager:m.default.object}});var v=["name","httpEquiv","charSet","itemProp","property"],h=["article:tag"];var y=(0,d.default)(function(e){var t,a,n,i,c;return(t=e.map(function(e){return e.props.children}).map(function(e){return f.default.Children.toArray(e)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return f.default.Fragment&&t.type===f.default.Fragment?e.concat(f.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse()).concat.apply(t,(0,o.default)(b())).filter(function(e){return!!e}).filter((a=new r.default,n=new r.default,i=new r.default,c={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(a.has(e.key))return!1;a.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var t=0,o=v.length;t<o;t++){var l=v[t];if(e.props.hasOwnProperty(l))if("charSet"===l){if(i.has(l))return!1;i.add(l)}else{var u=e.props[l],s=c[l]||new r.default;if(s.has(u)&&-1===h.indexOf(u))return!1;s.add(u),c[l]=s}}}return!0})).reverse().map(function(e){var t=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";return f.default.cloneElement(e,{className:t})})},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(p);t.default=y},78:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},79:function(e,t,a){var n=a(80),r=a(84);e.exports=function(e){if(r(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}},80:function(e,t,a){e.exports=a(81)},81:function(e,t,a){a(14),a(82),e.exports=a(1).Array.from},82:function(e,t,a){"use strict";var n=a(11),r=a(2),o=a(22),i=a(64),c=a(65),l=a(34),u=a(83),s=a(45);r(r.S+r.F*!a(68)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,f,m=o(e),d="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,v=void 0!==b,h=0,y=s(m);if(v&&(b=n(b,p>2?arguments[2]:void 0,2)),void 0==y||d==Array&&c(y))for(a=new d(t=l(m.length));t>h;h++)u(a,h,v?b(m[h],h):m[h]);else for(f=y.call(m),a=new d;!(r=f.next()).done;h++)u(a,h,v?i(f,b,[r.value,h],!0):r.value);return a.length=h,a}})},83:function(e,t,a){"use strict";var n=a(8),r=a(25);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},84:function(e,t,a){e.exports=a(85)},85:function(e,t,a){a(26),a(14),e.exports=a(86)},86:function(e,t,a){var n=a(35),r=a(4)("iterator"),o=a(23);e.exports=a(1).isIterable=function(e){var t=Object(e);return void 0!==t[r]||"@@iterator"in t||o.hasOwnProperty(n(t))}},87:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},88:function(e,t,a){"use strict";var n=a(18),r=a(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==a&&"function"!=typeof a)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var r,p=new f.default;function b(n){r=e((0,s.default)(p)),v.canUseDOM?t.call(n,r):a&&(r=a(r))}var v=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,c.default)(t,[{key:"componentWillMount",value:function(){p.add(this),b(this)}},{key:"componentDidUpdate",value:function(){b(this)}},{key:"componentWillUnmount",value:function(){p.delete(this),b(this)}},{key:"render",value:function(){return m.default.createElement(n,null,this.props.children)}}],[{key:"peek",value:function(){return r}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=r;return r=void 0,p.clear(),e}}]),t}(m.Component);return Object.defineProperty(v,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"SideEffect(".concat((0,d.getDisplayName)(n),")")}),Object.defineProperty(v,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:n.contextTypes}),Object.defineProperty(v,"canUseDOM",{configurable:!0,enumerable:!0,writable:!0,value:"undefined"!=typeof window}),v}};var o=r(a(15)),i=r(a(6)),c=r(a(7)),l=r(a(16)),u=r(a(17)),s=r(a(39)),f=r(a(27)),m=n(a(0)),d=a(24)},89:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),o=a(126),i=a.n(o);t.default=function(e){var t=e.heading,a=(e.image,e.video);return r.a.createElement("b",{className:i.a.container},r.a.createElement("b",{className:i.a.video},r.a.createElement("video",{loop:!0,autoPlay:!0},r.a.createElement("source",{src:a})),r.a.createElement("b",{className:i.a.overlay})),r.a.createElement("b",{className:i.a.heading},t))}},90:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),o=a(127),i=a.n(o);t.default=function(e){var t=e.logo;return r.a.createElement("b",{className:i.a.nav},r.a.createElement("i",{className:i.a.logo},r.a.createElement("img",{src:t})),r.a.createElement("i",{className:i.a.nav_items},r.a.createElement("i",{className:i.a.nav_item},"About"),r.a.createElement("i",{className:i.a.nav_item},"Services"),r.a.createElement("i",{className:i.a.nav_item},"Clients"),r.a.createElement("i",{className:i.a.nav_item},"Portfolio"),r.a.createElement("i",{className:i.a.nav_item},"Contact")))}},91:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),o=a(128),i=a.n(o);t.default=function(e){e.heading;var t=e.items,a=e.image;return r.a.createElement("b",{className:i.a.container},r.a.createElement("b",{className:i.a.to_left},r.a.createElement("i",{className:i.a.items},t.map(function(e,t){return r.a.createElement("i",{className:i.a.item,key:t},r.a.createElement("i",{className:i.a.service},r.a.createElement("img",{src:e.icon.complex})),r.a.createElement("i",{className:i.a.content},r.a.createElement("i",{className:i.a.item_heading},e.heading),r.a.createElement("i",{className:i.a.item_subheading},e.subheading)))}))),r.a.createElement("b",{className:i.a.to_right},r.a.createElement("img",{src:a}),r.a.createElement("b",{className:i.a.overlay})))}}},[237]).default}});