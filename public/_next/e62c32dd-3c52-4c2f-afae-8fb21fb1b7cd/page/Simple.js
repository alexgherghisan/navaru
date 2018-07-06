module.exports=__NEXT_REGISTER_PAGE("/Simple",function(){return{page:webpackJsonp([3],{10:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(14),r=a.n(n)()().publicRuntimeConfig,i=(r.base,r.url,r.static)},14:function(e,t,a){e.exports=a(27)},259:function(e,t,a){e.exports=a(95)},39:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(96),c=a.n(i);t.default=function(e){var t=e.image;return r.a.createElement("i",{className:c.a.container},r.a.createElement("img",{src:t}))}},40:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(10),c=a(97),o=a.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return m(n,(a=n=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),Object.defineProperty(u(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{isLoading:!0,items:null,activeIndex:null,hoverIndex:null,isMenuOpened:!1}}),a))}var a,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),a=t,(c=[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(i.a,"/data/home.json")).then(function(e){return e.json()}).then(function(t){return e.setState({items:t.menu,activeIndex:0,isLoading:!1})})}},{key:"handleClick",value:function(e){this.setState({activeIndex:e});var t=this.props.onSelect;"function"==typeof t&&t(this.state.items[e].ref)}},{key:"handleHover",value:function(e){this.setState({hoverIndex:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.items,i=t.activeIndex,c=t.hoverIndex;return a?null:r.a.createElement("i",{className:o.a.container},n.map(function(t,a){return r.a.createElement("i",{key:a,ref:t.ref,className:i==a?o.a.item_active:c==a?o.a.item_active:o.a.item,onClick:function(){return e.handleClick(a)},onMouseEnter:function(){return e.handleHover(a)},onMouseLeave:function(){return e.handleHover(null)}},t.name)}))}}])&&s(a.prototype,c),l&&s(a,l),t}();t.default=f},41:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(98),c=a.n(i);t.default=function(e){var t=e.heading,a=e.image;return r.a.createElement("b",{className:c.a.container,style:{backgroundImage:"url(".concat(a,")")}},r.a.createElement("b",{className:c.a.gradient}),r.a.createElement("b",{className:c.a.heading},t))}},42:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(99),c=a.n(i);t.default=function(e){var t=e.heading,a=e.subheading,n=e.image,i=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("i",{className:c.a.subheading},a),r.a.createElement("b",{className:c.a.heading},t),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),i),r.a.createElement("b",{className:c.a.box})),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(n)}}),r.a.createElement("b",{className:c.a.gradient})))}},43:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(100),c=a.n(i);t.default=function(e){var t=e.heading,a=e.image,n=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.heading},t),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),n)),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("b",{className:c.a.gradient})))}},44:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(101),c=a.n(i);t.default=function(e){e.heading;var t=e.items;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.items},t.map(function(e,t){return r.a.createElement("b",{className:c.a.item,key:t},r.a.createElement("b",{className:c.a.blur,style:{backgroundImage:"url(".concat(e.icon.simple,")")}}),r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.item_heading},e.heading),r.a.createElement("b",{className:c.a.item_subheading},e.subheading)))})))}},45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(102),c=a.n(i);t.default=function(e){var t=e.heading,a=e.image,n=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.heading},t),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),n)),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(a)}},r.a.createElement("b",{className:c.a.gradient}))))}},46:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(103),c=a.n(i);t.default=function(e){var t=e.heading,a=e.items;return r.a.createElement("b",{className:c.a.container},r.a.createElement("i",{className:c.a.heading},t),r.a.createElement("b",{className:c.a.items},a.map(function(e,t){return r.a.createElement("b",{className:c.a.item,key:t},r.a.createElement("b",{className:c.a.preview,style:{backgroundImage:"url(".concat(e.image.simple,")")}}),r.a.createElement("b",{className:c.a.gradient}),r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.item_heading},e.heading)))})))}},47:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(104),c=a.n(i);t.default=function(e){var t=e.heading,a=e.image,n=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.heading},t),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),n)),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(a)}}),r.a.createElement("b",{className:c.a.gradient})))}},48:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(105),c=a.n(i);t.default=function(e){var t=e.heading,a=e.image,n=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.heading},t),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),n)),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(a)}}),r.a.createElement("b",{className:c.a.gradient})))}},95:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(39),c=a(40),o=a(41),l=a(42),s=a(43),m=a(44),u=a(45),f=a(46),d=a(47),b=a(48),p=a(141),g=a.n(p);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var N=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return v(n,(a=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),Object.defineProperty(y(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{selectedSectionRef:"intro",isMenuOpened:!1}}),a))}var a,p,E;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),a=t,(p=[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){return e.getWindowWidth()})}},{key:"getWindowWidth",value:function(){window.innerWidth>899&&this.setState({isMenuOpened:!1})}},{key:"toggleMenu",value:function(){this.setState({isMenuOpened:!this.state.isMenuOpened})}},{key:"handleScroll",value:function(e){var t=this;this.setState({isMenuOpened:!1,selectedSectionRef:e}),setTimeout(function(){window.scrollTo({top:t.refs[e].offsetTop,behavior:"smooth"})},300)}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.onClickBack,p=this.state.isMenuOpened,E="function"==typeof n?function(){return n()}:null;return r.a.createElement("b",{className:g.a.application},r.a.createElement("b",{className:g.a.header},r.a.createElement("i",{className:g.a.logo,style:{transform:"translateX(".concat(p?-15:0,"rem)")},onClick:E},r.a.createElement(i.default,{image:a.logo.simple})),r.a.createElement("i",{className:p?g.a.menu_icon_colored:g.a.menu_icon,onClick:function(){return e.toggleMenu()}},r.a.createElement("i",{className:g.a.bar_long}),r.a.createElement("i",{className:g.a.bar_short}),r.a.createElement("i",{className:g.a.bar})),r.a.createElement("i",{className:g.a.navigation,style:{transform:"translateX(".concat(p?0:15,"rem)")}},r.a.createElement(c.default,{onSelect:function(t){return e.handleScroll(t)}}))),r.a.createElement("b",{className:g.a.container,style:p?{transform:"translateX(-15rem)",overflow:"hidden",opacity:.5}:{transform:"translateX(0)",overflow:"visible",opacity:1}},r.a.createElement("b",{className:g.a.intro_section,ref:a.introSection.ref},r.a.createElement(o.default,{image:a.introSection.simple.image,heading:a.introSection.simple.heading})),r.a.createElement("b",{className:g.a.beginning_section,ref:a.beginningSection.ref},r.a.createElement(s.default,{heading:a.beginningSection.heading,description:a.beginningSection.description,image:a.beginningSection.image.simple})),r.a.createElement("b",{className:g.a.about_section,ref:a.aboutSection.ref},r.a.createElement(l.default,{heading:a.aboutSection.heading,subheading:a.aboutSection.subheading,description:a.aboutSection.description,image:a.aboutSection.image.simple})),r.a.createElement("b",{className:g.a.services_section,ref:a.servicesSection.ref},r.a.createElement("b",{className:g.a.gradient}),r.a.createElement(m.default,{heading:a.servicesSection.heading,items:a.servicesSection.items})),r.a.createElement("b",{className:g.a.clients_section,ref:a.clientsSection.ref},r.a.createElement(u.default,{heading:a.clientsSection.heading,image:a.clientsSection.image.simple,description:a.clientsSection.description})),r.a.createElement("b",{className:g.a.portfolio_section,ref:a.portfolioSection.ref},r.a.createElement(f.default,{heading:a.portfolioSection.heading,items:a.portfolioSection.items})),r.a.createElement("b",{className:g.a.web_section,ref:a.webSection.ref},r.a.createElement(d.default,{heading:a.webSection.heading,image:a.webSection.image.simple,description:a.webSection.description})),r.a.createElement("b",{className:g.a.frontend_section,ref:a.frontendSection.ref},r.a.createElement(b.default,{heading:a.frontendSection.heading,image:a.frontendSection.image.simple,description:a.frontendSection.description}))))}}])&&h(a.prototype,p),E&&h(a,E),t}();t.default=N}},[259]).default}});