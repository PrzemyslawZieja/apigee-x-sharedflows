import base64

flow.setVariable("basic_auth_passed", False)

if flow.getVariable("request.header.authorization") != None:
    authorization = flow.getVariable("request.header.authorization")
    auth_header = base64.decodestring(authorization.replace("Basic ", "", 1))
    auth_kvm = flow.getVariable("private.kvm_basic_auth")

    if auth_header == auth_kvm:
        flow.setVariable("basic_auth_passed", True)