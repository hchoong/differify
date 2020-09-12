!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Differify=t():r.Differify=t()}(this,(function(){return function(r){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)e.d(n,o,function(t){return r[t]}.bind(null,o));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=5)}([function(r,t){function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}
/*!
 * Copyright(c) 2020 Fabian Roberto Orue <fabianorue@gmail.com>
 * BSD Licensed
 */r.exports.isArray=function(r){return r&&Array.isArray(r)},r.exports.isObject=function(r){return r&&!Array.isArray(r)&&"object"===e(r)},r.exports.isValidString=function(r){return r&&"string"==typeof r&&r.length>0},r.exports.has=function(r,t){return r.hasOwnProperty?r.hasOwnProperty(t):void 0!==r[t]}},function(r,t){
/*!
 * Copyright(c) 2020 Fabian Roberto Orue <fabianorue@gmail.com>
 * BSD Licensed
 */
r.exports.buildDiff=function(r,t,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{original:r,current:t,status:e,changes:n}},r.exports.buildDeepDiff=function(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return{_:r,status:t,changes:e}}},function(r,t){
/*!
 * Copyright(c) 2020 Fabian Roberto Orue <fabianorue@gmail.com>
 * BSD Licensed
 */
r.exports={REFERENCE:"REFERENCE",DIFF:"DIFF",STRING:"STRING"}},function(r,t){
/*!
 * Copyright(c) 2020 Fabian Roberto Orue <fabianorue@gmail.com>
 * BSD Licensed
 */
r.exports={ADDED:"ADDED",DELETED:"DELETED",MODIFIED:"MODIFIED",EQUAL:"EQUAL"}},function(r,t,e){
/*!
 * Copyright(c) 2020 Fabian Roberto Orue <fabianorue@gmail.com>
 * BSD Licensed
 */
var n=e(3),o=e(1),i=o.buildDiff,u=o.buildDeepDiff,a=e(0).has;r.exports.valueRefEqualityComparator=function(r,t){return r===t?i(r,t,n.EQUAL):i(r,t,n.MODIFIED,1)},r.exports.dateComparator=function(r,t){return r.getTime()===t.getTime()?i(r,t,n.EQUAL):i(r,t,n.MODIFIED,1)},r.exports.arraySimpleComparator=function(r,t){return r.length===t.length&&JSON.stringify(r)===JSON.stringify(t)?i(r,t,n.EQUAL):i(r,t,n.MODIFIED,1)},r.exports.JSONStringComparator=function(r,t){return JSON.stringify(r)===JSON.stringify(t)?i(r,t,n.EQUAL):i(r,t,n.MODIFIED,1)},r.exports.toStringComparator=function(r,t){return r.toString()===t.toString()?i(r,t,n.EQUAL):i(r,t,n.MODIFIED,1)},r.exports.getConfiguredOrderedDeepArrayComparator=function(r){return function(t,e){var o,a,f=0;t.length>e.length||t.length===e.length?(o=t,a=e,f=-1):(o=e,a=t,f=1);var c,l=[],p=0;for(c=0;c<a.length;++c)l.push(r(t[c],e[c])),p+=l[c].changes||0;if(-1===f)for(;c<o.length;++c)l.push(i(t[c],null,n.DELETED,1)),++p;else if(1===f)for(;c<o.length;++c)l.push(i(null,e[c],n.ADDED,1)),++p;return u(l,p>0?n.MODIFIED:n.EQUAL,p)}},r.exports.getConfiguredUnorderedDeepArrayComparator=function(r){return function(t,e){var o;o=t.length>=e.length?t:e;var a,f,c,l,p,s,y=Object.create(null),g=[],b=0,d=[];for(a=0;a<o.length;++a)a<t.length&&(void 0!==(f=y[l=JSON.stringify(t[a])])?((c=g[f]).a=t[a],s=r(c.a,c.b),d[f]=void 0!==s._?i(c.a,c.b,s.status,s.changes):s,--b,delete y[l]):(g.push({a:t[a],b:null}),d.push(i(t[a],null,n.DELETED,1)),++b,y[l]=g.length-1)),a<e.length&&(void 0!==(f=y[p=JSON.stringify(e[a])])?((c=g[f]).b=e[a],s=r(c.a,c.b),d[f]=void 0!==s._?i(c.a,c.b,s.status,s.changes):s,--b,delete y[p]):(g.push({b:e[a],a:null}),y[p]=g.length-1,d.push(i(null,e[a],n.ADDED,1)),++b));return u(d,b>0?n.MODIFIED:n.EQUAL,b)}},r.exports.getConfiguredDeepObjectComparator=function(r){return function(t,e){var o={},f=0,c=0,l=0;for(var p in t)a(t,p)&&(++f,a(e,p)?o[p]=r(t[p],e[p]):o[p]=i(t[p],null,n.DELETED,1),l+=o[p].changes);for(var s in e)a(e,s)&&(++c,a(t,s)||(o[s]=i(null,e[s],n.ADDED,1),l+=o[s].changes));return 0===f&&0===c?u(null,n.EQUAL,l):u(o,l>0?n.MODIFIED:n.EQUAL,l)}}},function(r,t,e){function n(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function o(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?n(Object(e),!0).forEach((function(t){i(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function i(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function u(r){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}
/*!
 * Copyright(c) 2020 Fabian Roberto Orue <fabianorue@gmail.com>
 * BSD Licensed
 */var a=e(0).isArray,f=e(1).buildDiff,c=e(6),l=e(2),p=e(3),s=e(4).valueRefEqualityComparator,y=e(7),g=Symbol("invalid"),b=y();var d=function(r,t){if(a(r)){for(var e,n=[],o=0;o<r.length;o++)(e=t(r[o]))!==g&&n.push(e);return n}if("object"===u(r)){var i,f={};for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(i=t(r[c]))!==g&&(f[c]=i);return f}return t(r)},D=function r(t){return t._?d(t._,r):t.status===p.DELETED?t.original:t.current},m=function r(t){return t._?d(t._,r):t.status===p.ADDED?t.current:t.original},E=function(r){return function t(e){return e._&&e.changes>0?d(e._,t):e.status===p.EQUAL?g:r(e)}},h=function(r){var t=r===p.DELETED?"original":"current",e=r===p.EQUAL;return function n(o){return o._&&(e||o.changes>0)?d(o._,n):o.status===r?o[t]:g}},O=function(r){return r.mode.object===l.DIFF&&r.mode.array===l.DIFF},v=function(r){if("string"==typeof r){var t=r.toUpperCase().trim();return-1!==Object.values(p).indexOf(t)?t:null}return null},S=function(r){return r&&"original"in r&&"current"in r&&"status"in r};function I(r){this.config=new c(r),b.configure(this.config)}I.prototype.setConfig=function(r){this.config=new c(r),b.configure(this.config)},I.prototype.getConfig=function(){return{compareArraysInOrder:this.config.compareArraysInOrder,mode:o({},this.config.mode)}},I.prototype.compare=function(r,t){return function(r,t){var e=u(r);if(e!==u(t))return f(r,t,p.MODIFIED,1);var n=b.getComparatorByType(e);return n?n(r,t):s(r,t)}(r,t)},I.prototype.applyLeftChanges=function(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r&&r._&&O(this.config)?d(r._,t?E(m):m):S(r)?r.original:null},I.prototype.applyRightChanges=function(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r&&r._&&O(this.config)?d(r._,t?E(D):D):S(r)?r.current:null},I.prototype.filterDiffByStatus=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.MODIFIED,e=v(t);if(e&&r){if(r._&&O(this.config))return d(r._,h(t));if(S(r)&&r.status===e)return r}return null},r.exports=I},function(r,t,e){var n=e(2),o=e(0),i=o.isObject,u=o.isValidString;r.exports=function(r){if(this.compareArraysInOrder=!0,this.mode={array:n.DIFF,object:n.DIFF,function:n.REFERENCE},i(r)&&("boolean"==typeof r.compareArraysInOrder&&(this.compareArraysInOrder=r.compareArraysInOrder),i(r.mode))){var t=Object.values(n);if(u(r.mode.array)){var e=r.mode.array.toUpperCase();-1!==t.indexOf(e)&&(this.mode.array=e)}if(u(r.mode.object)){var o=r.mode.object.toUpperCase();-1!==t.indexOf(o)&&(this.mode.object=o)}if(u(r.mode.function)){var a=r.mode.function.toUpperCase();a!==n.REFERENCE&&a!==n.STRING||(this.mode.function=a)}}}},function(r,t,e){function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}
/*!
 * Copyright(c) 2020 Fabian Roberto Orue <fabianorue@gmail.com>
 * BSD Licensed
 */var o=e(1),i=o.buildDiff,u=o.buildDeepDiff,a=e(2),f=e(3),c=e(4),l=c.valueRefEqualityComparator,p=c.arraySimpleComparator,s=c.dateComparator,y=c.toStringComparator,g=c.getConfiguredOrderedDeepArrayComparator,b=c.getConfiguredUnorderedDeepArrayComparator,d=c.getConfiguredDeepObjectComparator,D=c.JSONStringComparator;r.exports=function(){var r={string:null,number:null,function:null,object:null},t={};function e(t,e){if(t===e)return i(t,e,f.EQUAL);var o=n(t);if(o!==n(e))return i(t,e,f.MODIFIED,1);var u=r[o];return u?u(t,e):l(t,e)}function o(r,e){var n=Object.prototype.toString.call(r);if(n===Object.prototype.toString.call(e)){var o=t[n];return o?o(r,e):l(r,e)}return i(r,e,f.MODIFIED,1)}return{multipleComparatorSelector:e,deepComparatorSelector:o,getComparatorByType:function(t){return r[t]},configure:function(n){var i={};i[a.DIFF]=d(e),i[a.REFERENCE]=function(r,t){var e=l(r,t);return u(null,e.status,e.changes)},i[a.STRING]=function(r,t){var e=D(r,t);return u(null,e.status,e.changes)};var f={};f[a.DIFF]=n.compareArraysInOrder?g(e):b(e),f[a.REFERENCE]=function(r,t){var e=l(r,t);return u(null,e.status,e.changes)},f[a.STRING]=function(r,t){var e=p(r,t);return u(null,e.status,e.changes)};var c={};c[a.REFERENCE]=l,c[a.STRING]=y,r.string=l,r.number=l,r.boolean=l,r.function=c[n.mode.function],r.object=o,t["[object Array]"]=f[n.mode.array],t["[object Date]"]=s,t["[object Object]"]=i[n.mode.object]}}}}]).default}));