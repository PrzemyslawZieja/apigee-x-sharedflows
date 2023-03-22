var tenant = context.getVariable("tenant");
var env = context.getVariable("environment.name");
if(env == "prod"){
    context.setVariable("SessionContext.k8sEnvironment", "prod");
    context.setVariable("SessionContext.apigeeEnvironment", "prod");
}else{
    context.setVariable("SessionContext.apigeeEnvironment", "dev");
    if(tenant == "saasdev2" || tenant == "mpreisdev"){
        context.setVariable("request.header.k8s-develop-redirect", true);
        context.setVariable("SessionContext.k8sEnvironment", "develop");
    }else{
        context.setVariable("request.header.k8s-develop-redirect", false);
        context.setVariable("SessionContext.k8sEnvironment", "stage");
    }
}