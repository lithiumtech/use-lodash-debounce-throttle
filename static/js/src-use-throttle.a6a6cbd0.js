(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/createCancelableHook.ts":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");t.a=function(e,t){return function(n,o,u){var c=t(o,u),a=Object(r.useRef)(!1),s=Object(r.useRef)(n);return s.current=n,Object(r.useMemo)(function(){console.log("useMemo"),a.current&&(a.current.cancel(),a.current=e(n))},c),Object(r.useEffect)(function(){return function(){a.current&&a.current.cancel()}},[]),console.log("render"),a.current||(a.current=e(function(){return s.current&&s.current.apply(s,arguments)},o,u)),a.current}}},"./src/use-throttle.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),u=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),a=n("./node_modules/lodash/throttle.js"),s=n.n(a),l=n("./src/createCancelableHook.ts"),i=Object(l.a)(function(){return s.a.apply(void 0,arguments)},function(e,t){var n=[e];return t&&(n.push(t.leading),n.push(t.trailing)),n});function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return h});var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,b(t).call(this,e))).layout=null,n}var n,a,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=p(e,["components"]);return o.a.createElement(u.MDXTag,{name:"wrapper",components:t},o.a.createElement(u.MDXTag,{name:"h1",components:t,props:{id:"use-throttle"}},"use-throttle"),o.a.createElement(u.MDXTag,{name:"pre",components:t},o.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"const throttledFn = useThrottle(func, [wait=0], [options={}]);\n")),o.a.createElement(c.e,{__position:0,__code:"() => {\n  const debouncedChange = useThrottle(\n    v => {\n      console.log('throttled value', v)\n    },\n    500,\n    { leading: false },\n  )\n  return (\n    <input\n      type=\"text\"\n      onChange={e => {\n        debouncedChange(e.target.value)\n      }}\n    />\n  )\n}",__scope:{props:this?this.props:n,useState:r.useState,useEffect:r.useEffect,useThrottle:i}},function(){var e=i(function(e){console.log("throttled value",e)},500,{leading:!1});return o.a.createElement("input",{type:"text",onChange:function(t){e(t.target.value)}})}))}}])&&d(n.prototype,a),s&&d(n,s),t}()}}]);
//# sourceMappingURL=src-use-throttle.bb26ecf898719b1d414a.js.map