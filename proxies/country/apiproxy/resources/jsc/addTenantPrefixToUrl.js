if(context.getVariable('proxy.pathsuffix').startsWith('/countries')) {
   
    var tenant = context.getVariable('request.header.hybris-tenant')
    var env = context.getVariable('environment.name')
    var url = "https://country-v2.k8s-stage.emporix.io/" + tenant
    
    if(env.match(/.*prod.*/)) {
        url = "https://country-v2.k8s-prod.emporix.io/" + tenant
    } else if (env.match(/.*dev.*/)) {
        url = "https://country-v2.k8s-develop.emporix.io/" + tenant  
    }
    url = url + context.getVariable('proxy.pathsuffix')
    context.setVariable("target.url", url)
}