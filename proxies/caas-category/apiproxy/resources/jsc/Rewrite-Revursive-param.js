var recursiveParam = context.getVariable('request.queryparam.recursive')
var withSubcategoriesParam = context.getVariable('request.queryparam.withSubcategories')
context.removeVariable("request.queryparam.recursive")
if(recursiveParam !== null && withSubcategoriesParam === null){
    context.setVariable("request.queryparam.withSubcategories", recursiveParam)
}
