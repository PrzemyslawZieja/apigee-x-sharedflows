var tenant = context.getVariable("SocialLogin.tenant");
var env = context.getVariable("environment.name");
if(env == "prod"){
    context.setVariable("SocialLogin.k8sEnvironment", "prod");
    context.setVariable("SocialLogin.apigeeEnvironment", "prod");
}else if(env == "stage"){
    context.setVariable("SocialLogin.k8sEnvironment", "stage");
    context.setVariable("SocialLogin.apigeeEnvironment", "stage");
} else {
    context.setVariable("SocialLogin.k8sEnvironment", "develop");
    context.setVariable("SocialLogin.apigeeEnvironment", "dev");
}
context.setVariable("SocialLogin.scopes", "tenant=" + tenant);
print(context.getVariable('SocialLogin.scopes'))