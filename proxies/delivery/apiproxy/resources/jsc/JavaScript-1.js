
if(context.getVariable('response.content')){
var array = JSON.parse(context.getVariable('response.content'));

if (typeof Array.isArray === 'undefined') {
  Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
}
var isArray = Array.isArray(array)

if(isArray) {
    array.forEach(function(r){
        if(r.metadata !== null) {
            delete r.metadata;
        }
    });
}
context.setVariable('response.content', JSON.stringify(array));
}