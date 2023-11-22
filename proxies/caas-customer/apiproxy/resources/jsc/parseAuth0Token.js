print(context.getVariable("private.aesKey"))
print(context.getVariable("private.aesIv"))
print(context.getVariable("private.tokenPublicKey"))
print("clientSecret=" + context.getVariable('private.clientSecret'))
print("clientId=" + context.getVariable('private.clientId'))

print(context.getVariable("SocialLogin.session"))