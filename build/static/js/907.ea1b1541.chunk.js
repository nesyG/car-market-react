"use strict";(self.webpackChunkvehicle_react_project=self.webpackChunkvehicle_react_project||[]).push([[907],{444:function(e,r,t){t.d(r,{Pi:function(){return Q}});var n=t(98),o=t(791);if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var i=t(164);function a(e){e()}function c(e){return(0,n.Gf)(e)}var u="undefined"===typeof FinalizationRegistry?void 0:FinalizationRegistry;function s(e){return{reaction:e,mounted:!1,changedBeforeMount:!1,cleanAt:Date.now()+l}}var l=1e4;var f=function(e){var r="function"===typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};var d=u?function(e){var r=new Map,t=1,n=new e((function(e){var t=r.get(e);t&&(t.reaction.dispose(),r.delete(e))}));return{addReactionToTrack:function(e,o,i){var a=t++;return n.register(i,a,e),e.current=s(o),e.current.finalizationRegistryCleanupToken=a,r.set(a,e.current),e.current},recordReactionAsCommitted:function(e){n.unregister(e),e.current&&e.current.finalizationRegistryCleanupToken&&r.delete(e.current.finalizationRegistryCleanupToken)},forceCleanupTimerToRunNowForTests:function(){},resetCleanupScheduleForTests:function(){}}}(u):function(){var e,r=new Set;function t(){void 0===e&&(e=setTimeout(n,1e4))}function n(){e=void 0;var n=Date.now();r.forEach((function(e){var t=e.current;t&&n>=t.cleanAt&&(t.reaction.dispose(),e.current=null,r.delete(e))})),r.size>0&&t()}return{addReactionToTrack:function(e,n,o){var i;return e.current=s(n),i=e,r.add(i),t(),e.current},recordReactionAsCommitted:function(e){r.delete(e)},forceCleanupTimerToRunNowForTests:function(){e&&(clearTimeout(e),n())},resetCleanupScheduleForTests:function(){var t,n;if(r.size>0){try{for(var o=f(r),i=o.next();!i.done;i=o.next()){var a=i.value,c=a.current;c&&(c.reaction.dispose(),a.current=null)}}catch(u){t={error:u}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}r.clear()}e&&(clearTimeout(e),e=void 0)}}}(),p=d.addReactionToTrack,h=d.recordReactionAsCommitted,m=(d.resetCleanupScheduleForTests,d.forceCleanupTimerToRunNowForTests,!1);function v(){return m}var y=function(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a};function b(e){return"observer".concat(e)}var w=function(){};function g(){return new w}function T(e,r){if(void 0===r&&(r="observed"),v())return e();var t=y(o.useState(g),1)[0],i=y(o.useState(),2)[1],a=function(){return i([])},u=o.useRef(null);if(!u.current)var s=new n.le(b(r),(function(){l.mounted?a():l.changedBeforeMount=!0})),l=p(u,s,t);var f,d,m=u.current.reaction;if(o.useDebugValue(m,c),o.useEffect((function(){return h(u),u.current?(u.current.mounted=!0,u.current.changedBeforeMount&&(u.current.changedBeforeMount=!1,a())):(u.current={reaction:new n.le(b(r),(function(){a()})),mounted:!0,changedBeforeMount:!1,cleanAt:1/0},a()),function(){u.current.reaction.dispose(),u.current=null}}),[]),m.track((function(){try{f=e()}catch(r){d=r}})),d)throw d;return f}var R="function"===typeof Symbol&&Symbol.for,C=R?Symbol.for("react.forward_ref"):"function"===typeof o.forwardRef&&(0,o.forwardRef)((function(e){return null})).$$typeof,x=R?Symbol.for("react.memo"):"function"===typeof o.memo&&(0,o.memo)((function(e){return null})).$$typeof;function O(e,r){var t;if(x&&e.$$typeof===x)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(v())return e;var n=null!==(t=null===r||void 0===r?void 0:r.forwardRef)&&void 0!==t&&t,i=e,a=e.displayName||e.name;if(C&&e.$$typeof===C&&(n=!0,"function"!==typeof(i=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var c,u,s=function(e,r){return T((function(){return i(e,r)}),a)};return""!==a&&(s.displayName=a),e.contextTypes&&(s.contextTypes=e.contextTypes),n&&(s=(0,o.forwardRef)(s)),s=(0,o.memo)(s),c=e,u=s,Object.keys(c).forEach((function(e){k[e]||Object.defineProperty(u,e,Object.getOwnPropertyDescriptor(c,e))})),s}var k={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};var j;(j=i.unstable_batchedUpdates)||(j=a),(0,n.jQ)({reactionScheduler:j});var S=0;var P={};function _(e){return P[e]||(P[e]=function(e){if("function"===typeof Symbol)return Symbol(e);var r="__$mobx-react "+e+" ("+S+")";return S++,r}(e)),P[e]}function M(e,r){if(E(e,r))return!0;if("object"!==typeof e||null===e||"object"!==typeof r||null===r)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var o=0;o<t.length;o++)if(!Object.hasOwnProperty.call(r,t[o])||!E(e[t[o]],r[t[o]]))return!1;return!0}function E(e,r){return e===r?0!==e||1/e===1/r:e!==e&&r!==r}function $(e,r,t){Object.hasOwnProperty.call(e,r)?e[r]=t:Object.defineProperty(e,r,{enumerable:!1,configurable:!0,writable:!0,value:t})}var F=_("patchMixins"),U=_("patchedDefinition");function A(e,r){for(var t=this,n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];r.locks++;try{var a;return void 0!==e&&null!==e&&(a=e.apply(this,o)),a}finally{r.locks--,0===r.locks&&r.methods.forEach((function(e){e.apply(t,o)}))}}function N(e,r){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];A.call.apply(A,[this,e,r].concat(n))}}function z(e,r,t){var n=function(e,r){var t=e[F]=e[F]||{},n=t[r]=t[r]||{};return n.locks=n.locks||0,n.methods=n.methods||[],n}(e,r);n.methods.indexOf(t)<0&&n.methods.push(t);var o=Object.getOwnPropertyDescriptor(e,r);if(!o||!o[U]){var i=e[r],a=D(e,r,o?o.enumerable:void 0,n,i);Object.defineProperty(e,r,a)}}function D(e,r,t,n,o){var i,a=N(o,n);return(i={})[U]=!0,i.get=function(){return a},i.set=function(o){if(this===e)a=N(o,n);else{var i=D(this,r,t,n,o);Object.defineProperty(this,r,i)}},i.configurable=!0,i.enumerable=t,i}var q=n.so||"$mobx",B=_("isMobXReactObserver"),H=_("isUnmounted"),I=_("skipRender"),J=_("isForcingUpdate");function W(e){var r=e.prototype;if(e[B]){var t=X(r);console.warn("The provided component class ("+t+")\n                has already been declared as an observer component.")}else e[B]=!0;if(r.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==o.PureComponent)if(r.shouldComponentUpdate){if(r.shouldComponentUpdate!==G)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else r.shouldComponentUpdate=G;L(r,"props"),L(r,"state"),e.contextType&&L(r,"context");var n=r.render;if("function"!==typeof n){var i=X(r);throw new Error("[mobx-react] class component ("+i+") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.")}return r.render=function(){return this.render=v()?n:Y.call(this,n),this.render()},z(r,"componentDidMount",(function(){this[H]=!1,this.render[q]||o.Component.prototype.forceUpdate.call(this)})),z(r,"componentWillUnmount",(function(){if(!v()){var e=this.render[q];if(e)e.dispose(),this.render[q]=null;else{var r=X(this);console.warn("The reactive render of an observer class component ("+r+")\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.")}this[H]=!0}})),e}function X(e){return e.displayName||e.name||e.constructor&&(e.constructor.displayName||e.constructor.name)||"<component>"}function Y(e){var r=this;$(this,I,!1),$(this,J,!1);var t=X(this),i=e.bind(this),a=!1;return function e(){var c;a=!1;var u=null!=(c=e[q])?c:e[q]=function(){var e=new n.le(t+".render()",(function(){if(!a&&(a=!0,!0!==r[H])){var t=!0;try{$(r,J,!0),r[I]||o.Component.prototype.forceUpdate.call(r),t=!1}finally{$(r,J,!1),t&&(e.dispose(),r.render[q]=null)}}}));return e.reactComponent=r,e}(),s=void 0,l=void 0;if(u.track((function(){try{l=(0,n.$$)(!1,i)}catch(e){s=e}})),s)throw s;return l}}function G(e,r){return v()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==r||!M(this.props,e)}function L(e,r){var t=_("reactProp_"+r+"_valueHolder"),o=_("reactProp_"+r+"_atomHolder");function i(){return this[o]||$(this,o,(0,n.cp)("reactive "+r)),this[o]}Object.defineProperty(e,r,{configurable:!0,enumerable:!0,get:function(){var e=!1;return n.wM&&n.mJ&&(e=(0,n.wM)(!0)),i.call(this).reportObserved(),n.wM&&n.mJ&&(0,n.mJ)(e),this[t]},set:function(e){this[J]||M(this[t],e)?$(this,t,e):($(this,t,e),$(this,I,!0),i.call(this).reportChanged(),$(this,I,!1))}})}function Q(e){return!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"),Object.prototype.isPrototypeOf.call(o.Component,e)||Object.prototype.isPrototypeOf.call(o.PureComponent,e)?W(e):O(e)}if(!o.Component)throw new Error("mobx-react requires React to be available");if(!n.LO)throw new Error("mobx-react requires mobx to be available")}}]);
//# sourceMappingURL=907.ea1b1541.chunk.js.map