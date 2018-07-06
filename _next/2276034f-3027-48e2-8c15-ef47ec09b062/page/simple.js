module.exports=__NEXT_REGISTER_PAGE("/simple",function(){return{page:webpackJsonp([1],{252:function(e,a,t){e.exports=t(253)},253:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(76),r=t(87),s=t(88),l=t(83),o=t(84),m=t(89),u=t(85),d=t(90),b=t(91),g=t(86),f=t(254),p=t.n(f);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,a){return!a||"object"!==E(a)&&"function"!=typeof a?v(e):a}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return h(n,(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))),Object.defineProperty(v(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{data:null,isLoading:!0}}),t))}var t,f,E;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,n["Component"]),t=a,(f=[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(i.a,"/data/home.json")).then(function(e){return e.json()}).then(function(a){e.setState({data:a,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.data;return e.isLoading?null:c.a.createElement("b",{className:p.a.container},c.a.createElement("b",{className:p.a.logo},c.a.createElement(r.default,{image:a.logo.simple})),c.a.createElement("b",{className:p.a.intro_section},c.a.createElement(s.default,{image:a.introSection.simple.image,heading:a.introSection.simple.heading})),c.a.createElement("b",{className:p.a.beginning_section},c.a.createElement(o.default,{heading:a.beginningSection.heading,description:a.beginningSection.description,image:a.beginningSection.image.simple})),c.a.createElement("b",{className:p.a.about_section},c.a.createElement(l.default,{heading:a.aboutSection.heading,subheading:a.aboutSection.subheading,description:a.aboutSection.description,image:a.aboutSection.image.simple})),c.a.createElement("b",{className:p.a.services_section},c.a.createElement("b",{className:p.a.gradient}),c.a.createElement(m.default,{heading:a.servicesSection.heading,items:a.servicesSection.items})),c.a.createElement("b",{className:p.a.clients_section},c.a.createElement(u.default,{heading:a.clientsSection.heading,image:a.clientsSection.image.simple,description:a.clientsSection.description})),c.a.createElement("b",{className:p.a.portfolio_section},c.a.createElement(d.default,{heading:a.portfolioSection.heading})),c.a.createElement("b",{className:p.a.web_section},c.a.createElement(b.default,{heading:a.webSection.heading,image:a.webSection.image.simple,description:a.webSection.description})),c.a.createElement("b",{className:p.a.frontend_section},c.a.createElement(g.default,{heading:a.frontendSection.heading,image:a.frontendSection.image.simple,description:a.frontendSection.description})))}}])&&N(t.prototype,f),E&&N(t,E),a}();a.default=y},76:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(77),c=t.n(n)()().publicRuntimeConfig,i=(c.base,c.url,c.static)},77:function(e,a,t){e.exports=t(71)},83:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(127),r=t.n(i);a.default=function(e){var a=e.heading,t=e.subheading,n=e.image,i=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("i",{className:r.a.subheading},t),c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),i),c.a.createElement("b",{className:r.a.box})),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(n)}}),c.a.createElement("b",{className:r.a.gradient})))}},84:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(128),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),n)),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(t,")")}}),c.a.createElement("b",{className:r.a.gradient})))}},85:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(129),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),n)),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(t)}},c.a.createElement("b",{className:r.a.gradient}))))}},86:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(130),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),n)),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(t)}}),c.a.createElement("b",{className:r.a.gradient})))}},87:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(131),r=t.n(i);a.default=function(e){var a=e.image;return c.a.createElement("i",{className:r.a.container},c.a.createElement("img",{src:a}))}},88:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(132),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image;return c.a.createElement("b",{className:r.a.container,style:{backgroundImage:"url(".concat(t,")")}},c.a.createElement("b",{className:r.a.gradient}),c.a.createElement("b",{className:r.a.heading},a))}},89:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(133),r=t.n(i);a.default=function(e){e.heading;var a=e.items;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.items},a.map(function(e,a){return c.a.createElement("b",{className:r.a.item,key:a},c.a.createElement("b",{className:r.a.blur,style:{backgroundImage:"url(".concat(e.icon.simple,")")}}),c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.item_heading},e.heading),c.a.createElement("b",{className:r.a.item_subheading},e.subheading)))})))}},90:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(134),r=t.n(i);a.default=function(e){var a=e.heading;return c.a.createElement("b",{className:r.a.container},c.a.createElement("i",{className:r.a.heading},a))}},91:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(135),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),n)),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(t)}}),c.a.createElement("b",{className:r.a.gradient})))}}},[252]).default}});