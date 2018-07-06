module.exports=__NEXT_REGISTER_PAGE("/complex",function(){return{page:webpackJsonp([2],{13:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(18),r=t.n(n)()().publicRuntimeConfig,c=(r.base,r.url,r.static)},18:function(e,a,t){e.exports=t(37)},241:function(e,a,t){e.exports=t(242)},242:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(13),o=t(79),i=t(80),l=t(76),s=t(75),m=t(82),u=t(77),f=t(83),b=t(84),d=t(78),p=t(243),g=t.n(p);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,a){return!a||"object"!==E(a)&&"function"!=typeof a?y(e):a}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var _=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return v(n,(t=n=v(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(c))),Object.defineProperty(y(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{data:null,isLoading:!0}}),t))}var t,p,E;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,n["Component"]),t=a,(p=[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(c.a,"/data/home.json")).then(function(e){return e.json()}).then(function(a){e.setState({data:a,isLoading:!1})})}},{key:"render",value:function(){var e=this,a=this.state,t=a.data;return a.isLoading?null:r.a.createElement("b",{className:g.a.complex},r.a.createElement("b",{className:g.a.intro_section},r.a.createElement(o.default,{heading:t.introSection.complex.heading,image:t.introSection.complex.image,video:t.introSection.complex.video})),r.a.createElement("b",{className:g.a.navigation},r.a.createElement(i.default,{onSelect:function(a){return e.handleScroll(a)}})),r.a.createElement("b",{className:g.a.beginning_section},r.a.createElement(l.default,{heading:t.beginningSection.heading,image:t.beginningSection.image.complex,description:t.beginningSection.description})),r.a.createElement("b",{className:g.a.beginning_section},r.a.createElement(s.default,{heading:t.aboutSection.heading,subheading:t.aboutSection.subheading,image:t.aboutSection.image.complex,description:t.aboutSection.description})),r.a.createElement("b",{className:g.a.Services_section},r.a.createElement(m.default,{heading:t.servicesSection.heading,items:t.servicesSection.items,image:t.servicesSection.image})),r.a.createElement("b",{className:g.a.Clients_section},r.a.createElement(u.default,{heading:t.clientsSection.heading,image:t.clientsSection.image.complex,description:t.clientsSection.description})),r.a.createElement("b",{className:g.a.Portfolio_section},r.a.createElement(f.default,{items:t.portfolioSection.items})),r.a.createElement("b",{className:g.a.Web_section},r.a.createElement(b.default,{heading:t.webSection.heading,image:t.webSection.image.complex,description:t.webSection.description})),r.a.createElement("b",{className:g.a.Frontend_section},r.a.createElement(d.default,{heading:t.frontendSection.heading,image:t.frontendSection.image.complex,description:t.frontendSection.description})))}}])&&h(t.prototype,p),E&&h(t,E),a}();a.default=_},38:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(81),o=t.n(c);a.default=function(e){var a=e.image;return r.a.createElement("i",{className:o.a.logo},r.a.createElement("img",{src:a}))}},75:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(121),o=t.n(c);a.default=function(e){var a=e.heading,t=e.subheading,n=e.image,c=e.description;return r.a.createElement("b",{className:o.a.container,style:{backgroundImage:"url(".concat(n,")")}},r.a.createElement("b",{className:o.a.to_left},r.a.createElement("b",{className:o.a.heading},a),r.a.createElement("b",{className:o.a.separator}),r.a.createElement("b",{className:o.a.subheading},t)),r.a.createElement("b",{className:o.a.to_right},r.a.createElement("b",{className:o.a.corner_top_left}),r.a.createElement("b",{className:o.a.corner_bottom_left}),r.a.createElement("b",{className:o.a.overlay}),r.a.createElement("b",{className:o.a.description},c)))}},76:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(122),o=t.n(c);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return r.a.createElement("b",{className:o.a.container,style:{backgroundImage:"url(".concat(t)}},r.a.createElement("b",{className:o.a.overlay}),r.a.createElement("b",{className:o.a.heading},a),r.a.createElement("b",{className:o.a.separator}),r.a.createElement("b",{className:o.a.description},n))}},77:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(123),o=t.n(c);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return r.a.createElement("b",{className:o.a.container,style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("b",{className:o.a.to_left},r.a.createElement("b",{className:o.a.heading},a)),r.a.createElement("b",{className:o.a.to_right},r.a.createElement("b",{className:o.a.corner_top_left}),r.a.createElement("b",{className:o.a.corner_bottom_left}),r.a.createElement("b",{className:o.a.overlay}),r.a.createElement("b",{className:o.a.description},n)))}},78:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(124),o=t.n(c);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return r.a.createElement("b",{className:o.a.container,style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("b",{className:o.a.to_left},r.a.createElement("b",{className:o.a.heading},a)),r.a.createElement("b",{className:o.a.to_right},r.a.createElement("b",{className:o.a.corner_top_left}),r.a.createElement("b",{className:o.a.corner_bottom_left}),r.a.createElement("b",{className:o.a.overlay}),r.a.createElement("b",{className:o.a.description},n)))}},79:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(125),o=t.n(c);a.default=function(e){var a=e.heading,t=(e.image,e.video);return r.a.createElement("b",{className:o.a.container},r.a.createElement("b",{className:o.a.video},r.a.createElement("video",{loop:!0,autoPlay:!0},r.a.createElement("source",{src:t})),r.a.createElement("b",{className:o.a.overlay})),r.a.createElement("b",{className:o.a.heading},a))}},80:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(13),o=t(126),i=t.n(o),l=t(38);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,a){return!a||"object"!==s(a)&&"function"!=typeof a?f(e):a}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return u(n,(t=n=u(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(c))),Object.defineProperty(f(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{data:null,isLoading:!0,items:null,activeIndex:null,hoverIndex:null}}),t))}var t,o,s;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,n["Component"]),t=a,(o=[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(c.a,"/data/home.json")).then(function(e){return e.json()}).then(function(a){return e.setState({data:a,items:a.menu,activeIndex:0,isLoading:!1})})}},{key:"handleClick",value:function(e){this.setState({activeIndex:e});var a=this.props.onSelect;"function"==typeof a&&a(this.state.items[e].ref)}},{key:"handleHover",value:function(e){this.setState({hoverIndex:e})}},{key:"render",value:function(){var e=this,a=this.state,t=a.isLoading,n=a.items,c=a.activeIndex,o=a.hoverIndex,s=a.data;return t?null:r.a.createElement("b",{className:i.a.nav},r.a.createElement(l.default,{image:s.logo.complex}),r.a.createElement("i",{className:i.a.nav_items},n.map(function(a,t){return r.a.createElement("i",{key:t,ref:a.ref,style:{backgroundImage:"url(".concat(a.image,")")},className:c==t?i.a.nav_item_active:o==t?i.a.nav_item_hover:i.a.nav_item,onClick:function(){return e.handleClick(t)},onMouseEnter:function(){return e.handleHover(t)},onMouseLeave:function(){return e.handleHover(null)}},r.a.createElement("i",{className:i.a.index},t+1),r.a.createElement("i",{className:i.a.text},a.name))})))}}])&&m(t.prototype,o),s&&m(t,s),a}();a.default=b},82:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(127),o=t.n(c);a.default=function(e){var a=e.heading,t=e.items,n=e.image;return r.a.createElement("b",{className:o.a.container,style:{backgroundImage:"url(".concat(n,")")}},r.a.createElement("b",{className:o.a.to_left},r.a.createElement("i",{className:o.a.items},r.a.createElement("b",{className:o.a.corner_top_right}),r.a.createElement("b",{className:o.a.corner_bottom_right}),r.a.createElement("b",{className:o.a.overlay}),t.map(function(e,a){return r.a.createElement("i",{className:o.a.item,key:a},r.a.createElement("i",{className:o.a.service},r.a.createElement("img",{src:e.icon.complex})),r.a.createElement("i",{className:o.a.content},r.a.createElement("i",{className:o.a.item_heading},e.heading),r.a.createElement("i",{className:o.a.item_subheading},e.subheading)))}))),r.a.createElement("b",{className:o.a.to_right},r.a.createElement("b",{className:o.a.heading},a)))}},83:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(128),o=t.n(c);a.default=function(){return r.a.createElement("b",{className:o.a.container},r.a.createElement("b",{className:o.a.heading},"Portfolio"),r.a.createElement("b",{className:o.a.separator}),r.a.createElement("b",{className:o.a.items},r.a.createElement("b",{className:o.a.item}," ")))}},84:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(129),o=t.n(c);a.default=function(e){var a=e.heading,t=e.image,n=e.description;return r.a.createElement("b",{className:o.a.container,style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("b",{className:o.a.to_left},r.a.createElement("b",{className:o.a.corner_top_right}),r.a.createElement("b",{className:o.a.corner_bottom_right}),r.a.createElement("b",{className:o.a.overlay}),r.a.createElement("b",{className:o.a.description},n)),r.a.createElement("b",{className:o.a.to_right},r.a.createElement("b",{className:o.a.heading},a)))}}},[241]).default}});