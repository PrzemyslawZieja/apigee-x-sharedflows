var scope = context.getVariable("request.formparam.scope");

if(scope !== null && !scope.includes("tenant=")) {
 var defaultTenant =  context.getVariable("verifyapikey.Match-Client-With-App.tenant");
 if(defaultTenant !== null) {
    var scopes = scope + " tenant=" + defaultTenant;
    context.setVariable("request.formparam.scope", scopes);
 }
}

print("test1");
