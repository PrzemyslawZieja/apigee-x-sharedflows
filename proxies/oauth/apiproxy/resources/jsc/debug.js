print("Displaying AT Custom Attributes");

var scope = context.getVariable('oauthv2accesstoken.AddHybrisSessionIdFromParam.scope');
var sessionId = context.getVariable('oauthv2accesstoken.AddHybrisSessionIdFromParam.sessionId');
var userId = context.getVariable('oauthv2accesstoken.AddHybrisSessionIdFromParam.userId');

print("AT scope: " + scope);
print("AT sessionId: " + sessionId);
print("AT userId: " + userId);