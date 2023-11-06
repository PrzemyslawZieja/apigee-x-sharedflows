import base64
import hashlib


flow.setVariable("hubspot_signature_passed", False)
if flow.getVariable("request.header.X-HubSpot-Signature") != None:
    signature = flow.getVariable("request.header.X-HubSpot-Signature")
    client_secret = flow.getVariable("private.kvm_hubspot_signature")
    request_body = flow.getVariable("request.content")
    source_string = client_secret + request_body
    result = hashlib.sha256(source_string).hexdigest()
    if signature == result:
        flow.setVariable("hubspot_signature_passed", True)