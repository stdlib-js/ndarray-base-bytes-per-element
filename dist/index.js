"use strict";var t=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(s){throw (i=0, s)}};};var e=t(function(E,a){a.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var l=t(function(P,u){
var o=require('@stdlib/assert-is-string/dist').isPrimitive,v=require('@stdlib/assert-is-number/dist').isPrimitive,f=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,m=require('@stdlib/ndarray-base-dtype-enum2str/dist'),n=e();function c(r){var i;return o(r)?n[r]||null:v(r)?n[m(r)]||null:r&&(i=r.byteLength,f(i))?i:null}u.exports=c
});var b=l();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
