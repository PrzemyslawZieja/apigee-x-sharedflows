var host = context.getVariable("jwt.decode-JWT.claim.issuer");
var auth_id= context.getVariable("jwks.auth_id")
if(host && host.includes("dev")){
    var id = auth_id + "_dev";
    context.setVariable('cache.env', "dev");
    context.setVariable('cache.auth_id', id);
}else if(host && host.includes("stage")){
    var id = auth_id + "_stage";
    context.setVariable('cache.env', "stage");
    context.setVariable('cache.auth_id', id);
}else{
    context.setVariable('cache.auth_id', auth_id);
}
