var env = context.getVariable("environment.name");
if (env.match(/.*prod.*/)) {
    context.setVariable("SessionContext.k8sEnvironment", "prod");
    context.setVariable("SessionContext.apigeeEnvironment", "prod");
} else if (env.match(/.*stage.*/)) {
    context.setVariable("SessionContext.k8sEnvironment", "stage");
    context.setVariable("SessionContext.apigeeEnvironment", "stage");
} else {
    context.setVariable("SessionContext.k8sEnvironment", "develop");
    context.setVariable("SessionContext.apigeeEnvironment", "develop");
}