/*! For license information please see 26.c58b7d26.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,h=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var o=n(16),r=n(104);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},104:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},107:function(e,t,n){var o,r,i;i=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r={},i={},a={},s={};function u(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return!1;return 1}function c(e,t){u(e,(function(e){return t(e),1}))}function l(t,n,o){t=t.push?t:[t];var d=n&&n.call,f=d?n:o,h=d?t.join(""):n,m=t.length;function w(e){return e.call?e():r[e]}function y(){if(!--m)for(var e in r[h]=1,f&&f(),a)u(e.split("|"),w)&&!c(a[e],w)&&(a[e]=[])}return setTimeout((function(){c(t,(function t(n,o){return null===n?y():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),s[n]?(h&&(i[h]=1),2==s[n]?y():setTimeout((function(){t(n,!0)}),0)):(s[n]=1,h&&(i[h]=1),void p(n,y)))}))}),0),l}function p(e,r){var i,a=n.createElement("script");a.onload=a.onerror=a.onreadystatechange=function(){a.readyState&&!/^c|loade/.test(a.readyState)||i||(a.onload=a.onreadystatechange=null,i=1,s[e]=2,r())},a.async=1,a.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(a,o.lastChild)}return l.get=p,l.order=function(e,t,n){!function o(r){r=e.shift(),e.length?l(r,o):l(r,t,n)}()},l.path=function(t){e=t},l.urlArgs=function(e){t=e},l.ready=function(e,t,n){e=e.push?e:[e];var o,i=[];return!c(e,(function(e){r[e]||i.push(e)}))&&u(e,(function(e){return r[e]}))?t():(o=e.join("|"),a[o]=a[o]||[],a[o].push(t),n&&n(i)),l},l.done=function(e){l([null],e)},l},e.exports?e.exports=i():void 0===(r="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r)},151:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(!0!=!!e||!e)},r=function(e,t){return Object.hasOwnProperty.call(e,t)},i=function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")};t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(a,s,u){for(var c=arguments.length,l=Array(3<c?c-3:0),p=3;p<c;p++)l[p-3]=arguments[p];return o(t,a,s,u)?r(a,s)?e.apply(void 0,[a,s,u].concat(l)):i(a,s,u,n):e.apply(void 0,[a,s,u].concat(l))}}},153:function(e,t,n){var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return i}.call(t,n,t,e))||(e.exports=o)}()},154:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return C}));var a=n(151),s=n.n(a);function u(e,t){return!t||"object"!==s()(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=n(28);function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(l.a)(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n(0),h=n.n(f),m=n(1),w=n.n(m),y=n(152),g=n.n(y),b=n(153),v=n.n(b),O="https://platform.twitter.com/widgets.js";d(function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){var t=this,n=this.props.onLoad;this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e).then((function(e){t.setState({isLoading:!1}),n&&n(e)}))}},{key:"componentDidMount",value:function(){var e=this;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"embedContainer"}))}}]),t}(f.Component),"propTypes",{sourceType:w.a.oneOf(["profile","likes","list","collection","url","widget"]).isRequired,screenName:g()(w.a.string,(function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)})),userId:g()(w.a.number,(function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)})),ownerScreenName:g()(w.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),slug:g()(w.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),id:g()(w.a.oneOfType([w.a.number,w.a.string]),(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType})),url:g()(w.a.string,(function(e){return"url"===e.sourceType})),widgetId:g()(w.a.string,(function(e){return"widget"===e.sourceType})),options:w.a.object,autoHeight:w.a.bool,theme:w.a.oneOf(["dark","light"]),linkColor:w.a.string,borderColor:w.a.string,noHeader:w.a.bool,noFooter:w.a.bool,noBorders:w.a.bool,noScrollbar:w.a.bool,transparent:w.a.bool,lang:w.a.string,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),d(function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"embedContainer"}))}}]),t}(f.Component),"propTypes",{url:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),d(function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"embedContainer"}))}}]),t}(f.Component),"propTypes",{screenName:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),d(function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"embedContainer"}))}}]),t}(f.Component),"propTypes",{tag:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),d(function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"embedContainer"}))}}]),t}(f.Component),"propTypes",{screenName:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var C=function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"renderWidget",value:function(){var e=this,t=this.props.onLoad;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){e.renderWidget()}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"embedContainer"}))}}]),t}(f.Component);d(C,"propTypes",{tweetId:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),d(function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"shareMoment"}))}}]),t}(f.Component),"propTypes",{momentId:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),d(function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"embedContainer"}))}}]),t}(f.Component),"propTypes",{id:w.a.number.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),d(function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"embedContainer"}))}}]),t}(f.Component),"propTypes",{id:w.a.string.isRequired,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),d(function(e){function t(e){var n;return o(this,t),(n=u(this,c(t).call(this,e))).state={isLoading:!0},n}return p(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n(107)(O,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return h.a.createElement(h.a.Fragment,null,e&&t,h.a.createElement("div",{ref:"embedContainer"}))}}]),t}(f.Component),"propTypes",{username:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func})}}]);