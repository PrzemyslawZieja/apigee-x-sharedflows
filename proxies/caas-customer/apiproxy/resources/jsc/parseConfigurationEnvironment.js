var tenant = context.getVariable("SocialLogin.tenant");
var env = context.getVariable("environment.name");
if(env.match(/.*prod.*/)){
    context.setVariable("SocialLogin.k8sEnvironment", "prod");
    context.setVariable("SocialLogin.apigeeEnvironment", "prod");
    context.setVariable("SocialLogin.tokenCalloutUrl", "api.emporix.io");
}else if (env.match(/.*stage.*/)){
    context.setVariable("SocialLogin.k8sEnvironment", "stage");
    context.setVariable("SocialLogin.apigeeEnvironment", "stage");
    context.setVariable("SocialLogin.tokenCalloutUrl", "api-stage.emporix.io");
}else{
    context.setVariable("SocialLogin.k8sEnvironment", "develop");
    context.setVariable("SocialLogin.apigeeEnvironment", "dev");
    context.setVariable("SocialLogin.tokenCalloutUrl", "api-develop.emporix.io");
}

context.setVariable("SocialLogin.scopes", "tenant=" + tenant);
print(context.getVariable('SocialLogin.scopes'))