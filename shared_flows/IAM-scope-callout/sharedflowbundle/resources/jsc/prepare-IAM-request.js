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
    context.setVariable("IAM.k8sEnvironment", "stage");
    context.setVariable("IAM.apigeeEnvironment", "stage");
}else{
    context.setVariable("IAM.apigeeEnvironment", "dev");
    context.setVariable("IAM.k8sEnvironment", "develop");
}
