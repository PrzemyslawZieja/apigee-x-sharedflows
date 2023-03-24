var sessionId = context.getVariable("oauthv2accesstoken.ExtractAnonymousTokenInfo.accesstoken.sessionId");
context.setVariable("SessionContext.sessionId", sessionId);
var refreshPath = "anonymous/" + sessionId + "/refresh";
context.setVariable("SessionContext.path", refreshPath);