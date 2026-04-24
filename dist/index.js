"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=m(function(b,s){
var v=require('@stdlib/assert-is-integer-array/dist').primitives,d=require('@stdlib/assert-is-empty-collection/dist'),f=require('@stdlib/assert-is-integer/dist').isPrimitive,l=require('@stdlib/assert-is-plain-object/dist'),g=require('@stdlib/assert-is-ndarray-like/dist'),n=require('@stdlib/assert-has-own-property/dist'),o=require('@stdlib/ndarray-base-rot90/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function q(e,r){var a,t;if(!g(e))throw new TypeError(i('null4f',e));if(a=[-2,-1],t=1,arguments.length>1){if(!l(r))throw new TypeError(i('null2V',r));if(n(r,"k")){if(!f(r.k))throw new TypeError(i('null8M',"k",r.k));t=r.k}if(n(r,"dims")){if(!v(r.dims)&&!d(r.dims))throw new TypeError(i('nullHk',"dims",r.dims));a=r.dims}}return o(e,a,t,!1)}s.exports=q
});var w=u();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
