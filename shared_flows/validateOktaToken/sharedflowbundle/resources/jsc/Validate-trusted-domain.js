var jwks_host = context.getVariable('jwks.host')
var trusted_domains = context.getVariable('trusted_domains')
var jwt_isValid = false;
var should_validate_token = true;
if (trusted_domains.includes(jwks_host)) {
    jwt_isValid = true;
} 
var aud = context.getVariable('jwt.decode-JWT.claim.audience');
var iss = context.getVariable('jwt.decode-JWT.claim.issuer');
if (aud === iss){
    context.setVariable('app_name', "okta-auth")
} else {
    context.setVariable('app_name', aud.slice(7, -1))
}
context.setVariable('jwt_isValid', jwt_isValid);
context.setVariable('jwks.kid', context.getVariable('jwt.decode-JWT.header.kid'));
