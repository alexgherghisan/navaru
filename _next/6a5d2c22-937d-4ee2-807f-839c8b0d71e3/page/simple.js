module.exports=__NEXT_REGISTER_PAGE("/simple",function(){return{page:webpackJsonp([2],{242:function(e,a,t){e.exports=t(243)},243:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(93),r=t(94),l=t(89),s=t(90),o=t(95),m=t(91),u=t(96),d=t(97),b=t(92),g=t(244),f=t.n(g);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,a){return!a||"object"!==E(a)&&"function"!=typeof a?h(e):a}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return N(n,(t=n=N(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))),Object.defineProperty(h(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{data:null,isLoading:!0}}),t))}var t,g,E;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,n["Component"]),t=a,(g=[{key:"componentDidMount",value:function(){var e=this;fetch("/static/data/home.json").then(function(e){return e.json()}).then(function(a){e.setState({data:a,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.data;return e.isLoading?null:c.a.createElement("b",{className:f.a.container},c.a.createElement("b",{className:f.a.logo},c.a.createElement(i.default,{image:a.logo.simple})),c.a.createElement("b",{className:f.a.intro_section},c.a.createElement(r.default,{image:a.introSection.simple.image,heading:a.introSection.simple.heading})),c.a.createElement("b",{className:f.a.about_section},c.a.createElement(l.default,{heading:a.aboutSection.heading,subheading:a.aboutSection.subheading,description:a.aboutSection.description,image:a.aboutSection.image.simple})),c.a.createElement("b",{className:f.a.beginning_section},c.a.createElement(s.default,{heading:a.beginningSection.heading,description:a.beginningSection.description,image:a.beginningSection.image.simple})),c.a.createElement("b",{className:f.a.services_section},c.a.createElement(o.default,{heading:a.servicesSection.heading,items:a.servicesSection.items})),c.a.createElement("b",{className:f.a.clients_section},c.a.createElement(m.default,{heading:a.clientsSection.heading,image:a.clientsSection.image.simple,description:a.clientsSection.description})),c.a.createElement("b",{className:f.a.portfolio_section},c.a.createElement(u.default,{heading:a.portfolioSection.heading})),c.a.createElement("b",{className:f.a.web_section},c.a.createElement(d.default,{heading:a.webSection.heading,image:a.webSection.image.simple,description:a.webSection.description})),c.a.createElement("b",{className:f.a.frontend_section},c.a.createElement(b.default,{heading:a.frontendSection.heading,image:a.frontendSection.image.simple,description:a.frontendSection.description})))}}])&&p(t.prototype,g),E&&p(t,E),a}();a.default=v},89:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(123),r=t.n(i);a.default=function(e){var a=e.heading,t=e.subheading,n=e.image,i=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("i",{className:r.a.subheading},t),c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),i),c.a.createElement("b",{className:r.a.box})),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(n)}},c.a.createElement("b",{className:r.a.gradient}))))}},90:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(124),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),n)),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(t,")")}},c.a.createElement("b",{className:r.a.gradient}))))}},91:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(125),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),n),c.a.createElement("b",{className:r.a.box})),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(t)}},c.a.createElement("b",{className:r.a.gradient}))))}},92:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(126),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),n),c.a.createElement("b",{className:r.a.box})),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(t)}},c.a.createElement("b",{className:r.a.gradient}))))}},93:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(127),r=t.n(i);a.default=function(e){var a=e.image;return c.a.createElement("i",{className:r.a.container},c.a.createElement("img",{src:a}))}},94:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(128),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image;return c.a.createElement("b",{className:r.a.container,style:{backgroundImage:"url(".concat(t,")")}},c.a.createElement("b",{className:r.a.block},c.a.createElement("b",{className:r.a.heading},a)))}},95:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(129),r=t.n(i);a.default=function(e){var a=e.heading,t=e.items;return c.a.createElement("b",{className:r.a.container},c.a.createElement("i",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.items},t.map(function(e,a){return c.a.createElement("b",{className:r.a.item,key:a},c.a.createElement("b",{className:r.a.blur,style:{backgroundImage:"url(".concat(e.icon.simple,")")}}),c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.item_heading},e.heading),c.a.createElement("b",{className:r.a.item_subheading},e.subheading)))})))}},96:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(130),r=t.n(i);a.default=function(e){var a=e.heading;return c.a.createElement("b",{className:r.a.container},c.a.createElement("i",{className:r.a.heading},a))}},97:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),c=t.n(n),i=t(131),r=t.n(i);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return c.a.createElement("b",{className:r.a.container},c.a.createElement("b",{className:r.a.content},c.a.createElement("b",{className:r.a.heading},a),c.a.createElement("b",{className:r.a.description},c.a.createElement("i",{className:r.a.line}),n),c.a.createElement("b",{className:r.a.box})),c.a.createElement("b",{className:r.a.preview},c.a.createElement("b",{className:r.a.image,style:{backgroundImage:"url(".concat(t)}},c.a.createElement("b",{className:r.a.gradient}))))}}},[242]).default}});