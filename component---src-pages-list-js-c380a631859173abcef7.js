(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return o});n(164),n(76),n(51);var a=n(0),r=n.n(a),i=n(154),o="2357789141";t.default=function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement("h2",null,"1994年"),r.a.createElement("ul",null,t.allMarkdownRemark.edges.map(function(e){var t=e.node,n=t.fileAbsolutePath.split("/").slice(-2).join("/");return n="/"+n.substring(0,n.lastIndexOf(".")),r.a.createElement("li",{key:t.id},r.a.createElement(i.Link,{to:n},t.frontmatter.title))})))}},152:function(e,t,n){"use strict";var a=n(39);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(169)),i=a(n(170)),o=a(n(7)),u=a(n(49)),s=a(n(50)),l=a(n(4)),c=a(n(0)),d=n(15),f=n(154);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/political-life/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(n);return c.default.createElement(d.Link,(0,i.default)({to:g,state:l,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),m(n,{state:l,replace:h})),!0}},v))},t}(c.default.Component);v.propTypes=(0,i.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var g=v;t.default=g;var m=function(e,t){window.___navigate(p(e),t)};t.navigate=m;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),y(e)}},153:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return v}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(152),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(24);n.d(t,"waitForRouteChange",function(){return l.c});var c=n(153),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var f=n(35);n.d(t,"parsePath",function(){return f.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(48),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},164:function(e,t,n){"use strict";var a=n(5),r=n(38),i=n(37),o=n(25),u=[].lastIndexOf,s=!!u&&1/[1].lastIndexOf(1,-0)<0;a(a.P+a.F*(s||!n(13)(u)),"Array",{lastIndexOf:function(e){if(s)return u.apply(this,arguments)||0;var t=r(this),n=o(t.length),a=n-1;for(arguments.length>1&&(a=Math.min(a,i(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in t&&t[a]===e)return a||0;return-1}})},169:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},170:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-list-js-c380a631859173abcef7.js.map