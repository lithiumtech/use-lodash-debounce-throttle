(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/createCancelableHook.ts":function(e,n,t){"use strict";var c=t("./node_modules/react/index.js");function a(e,n){var t=Object(c.useRef)(void 0),a=Object(c.useRef)(void 0);return a.current&&n&&function(e,n){for(var t=0;t<n.length&&t<e.length;t++)if(!Object.is(e[t],n[t]))return!1;return!0}(n,a.current)?t.current:(t.current=e(),a.current=n,t.current)}function u(e,n){return function(t,u,r,o){var s=n(u,r).concat(o||[]),i=Object(c.useRef)(void 0),l=Object(c.useRef)(t);return l.current=t,a(function(){i.current&&i.current.cancel(),i.current=e(function(){return l.current&&l.current.apply(l,arguments)},u,r)},s),Object(c.useEffect)(function(){return function(){i.current&&i.current.cancel()}},[]),i.current}}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useStableMemo",filename:"src/use-stable-memo.ts"}}),"undefined"!==typeof Fn&&Fn&&Fn===Object(Fn)&&Object.isExtensible(Fn)&&Object.defineProperty(Fn,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fn",filename:"src/createCancelableHook.ts"}}),"undefined"!==typeof Cancelable&&Cancelable&&Cancelable===Object(Cancelable)&&Object.isExtensible(Cancelable)&&Object.defineProperty(Cancelable,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Cancelable",filename:"src/createCancelableHook.ts"}});n.a=u;u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createCancelableHook",filename:"src/createCancelableHook.ts"}})},"./src/use-debounce.mdx":function(e,n,t){"use strict";t.r(n);var c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),u=t("./node_modules/react/index.js"),r=t("./node_modules/@mdx-js/react/dist/index.es.js"),o=t("./node_modules/docz/dist/index.esm.js"),s=t("./node_modules/lodash-es/debounce.js"),i=t("./src/createCancelableHook.ts"),l=Object(i.a)(function(){return s.a.apply(void 0,arguments)},function(e,n){var t=[e];return n&&(t.push(n.leading),t.push(n.maxWait),t.push(n.trailing)),t}),b=l;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useDebounce",filename:"src/use-debounce.ts"}}),t.d(n,"default",function(){return m});var d={},f="wrapper";function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)(f,Object.assign({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"use-debounce"},"use-debounce"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const debouncedFn = useDebounce(func, [wait=0], [options={}])\n")),Object(r.b)(o.c,{__position:0,__code:"() => {\n  const [wait, setWait] = useState(500)\n  const debouncedChange = useDebounce(\n    value => {\n      console.log('debounced value', value)\n    },\n    wait,\n    { maxWait: 2000 },\n  )\n  return (\n    <div>\n      <input\n        type=\"text\"\n        onChange={e => {\n          debouncedChange(e.target.value)\n        }}\n      />\n      <button onClick={() => setWait(wait + 2000)}>add wait</button>\n      <div>wait: {wait}ms, max 2s</div>\n    </div>\n  )\n}",__scope:{props:this?this.props:t,Playground:o.c,useState:u.useState,useEffect:u.useEffect,useDebounce:b},mdxType:"Playground"},function(){var e=Object(u.useState)(500),n=Object(c.a)(e,2),t=n[0],a=n[1],o=b(function(e){console.log("debounced value",e)},t,{maxWait:2e3});return Object(r.b)("div",null,Object(r.b)("input",{type:"text",onChange:function(e){o(e.target.value)}}),Object(r.b)("button",{onClick:function(){return a(t+2e3)}},"add wait"),Object(r.b)("div",null,"wait: ",t,"ms, max 2s"))}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/use-debounce.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=src-use-debounce.b384c1c49671c0399172.js.map