"use strict";var t=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var e=t(function(q,s){s.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var l=t(function(E,u){
var a=require('@stdlib/assert-is-string/dist').isPrimitive,o=require('@stdlib/assert-is-number/dist').isPrimitive,v=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,f=require('@stdlib/ndarray-base-dtype-enum2str/dist'),n=e();function m(i){var r;return a(i)?n[i]||null:o(i)?n[f(i)]||null:i&&(r=i.byteLength,v(r))?r:null}u.exports=m
});var c=l();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
