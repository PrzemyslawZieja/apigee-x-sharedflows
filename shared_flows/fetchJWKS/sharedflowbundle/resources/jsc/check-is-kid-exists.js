var kid = context.getVariable('jwks.kid');
var cached = JSON.parse(context.getVariable('jwks_cached_response'));

var kid_hit = false;
if (cached && cached.keys) {
    kid_hit = cached.keys.some(function (key) {
        return key.kty === "RSA" && key.kid == kid
    });
}
context.setVariable('cache_hit', kid_hit);