var tenant = context.getVariable("request.header.tenant");
if(tenant === null){
    tenant = context.getVariable("jwt.verify-JWT-token.claim.tn");
}
context.setVariable("IAM.tenant", tenant);
var userId = context.getVariable("IAM.userId");
if(userId === null){
    userId = context.getVariable("jwt.verify-JWT-token.claim.uid");
}
context.setVariable("IAM.userId", userId);
var env = context.getVariable("environment.name");
if(env == "prod"){
    context.setVariable("IAM.k8sEnvironment", "prod");
    context.setVariable("IAM.apigeeEnvironment", "prod");
}else if(env == "stage"){
    context.setVariable("IAM.apigeeEnvironment", "stage");
    if(tenant == "saasdev2" || tenant == "mpreisdev"){
        context.setVariable("request.header.k8s-stage-redirect", true);
        context.setVariable("IAM.k8sEnvironment", "stage");
    }else{
        context.setVariable("request.header.k8s-stage-redirect", false);
        context.setVariable("IAM.k8sEnvironment", "stage");
    }
}else{
    context.setVariable("IAM.apigeeEnvironment", "dev");
    if(tenant == "saasdev2" || tenant == "mpreisdev"){
        context.setVariable("request.header.k8s-develop-redirect", true);
        context.setVariable("IAM.k8sEnvironment", "develop");
    }else{
        context.setVariable("request.header.k8s-develop-redirect", false);
        context.setVariable("IAM.k8sEnvironment", "stage");
    }
}
