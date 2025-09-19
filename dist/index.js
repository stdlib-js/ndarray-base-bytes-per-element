"use strict";var r=function(t,i){return function(){return i||t((i={exports:{}}).exports,i),i.exports}};var e=r(function(m,l){l.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var u=r(function(E,n){
var o=require('@stdlib/assert-is-string/dist').isPrimitive,a=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,s=e();function v(t){var i;return o(t)?s[t]||null:(i=t.byteLength,a(i)?i:null)}n.exports=v
});var f=u();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
