var response = {}
response['refresh_token'] = context.getVariable('oauthv2accesstoken.GenerateAccessTokenClient.refresh_token') 
response['refresh_token_expires_in'] = parseInt(context.getVariable('oauthv2accesstoken.GenerateAccessTokenClient.refresh_token_expires_in')) 
response['access_token'] = context.getVariable('oauthv2accesstoken.GenerateAccessTokenClient.access_token')
response['expires_in'] = parseInt(context.getVariable('oauthv2accesstoken.GenerateAccessTokenClient.expires_in'))
response['scope'] = context.getVariable('oauthv2accesstoken.GenerateAccessTokenClient.scope')

response['session_idle_time'] = 120
response['token_type'] = "Bearer"

if(context.getVariable("request.formparam.hybris-user-id") != null) {
    response['scopeInfo'] = "scopes will be recalculated by IAM during every request with this token"
}

context.setVariable("decoredResponse", JSON.stringify(response));