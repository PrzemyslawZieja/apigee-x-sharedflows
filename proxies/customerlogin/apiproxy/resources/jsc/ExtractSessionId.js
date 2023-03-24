var header_hybris_session_id = context.getVariable("request.header.hybris-session-id");
var query_param_hybris_session_id = context.getVariable("request.queryparam.hybris-session-id");
var header_session_id = context.getVariable("request.header.session-id");
var query_param_session_id = context.getVariable("request.queryparam.session-id");
var session_id = null;
if(query_param_hybris_session_id !== null){
    session_id = query_param_hybris_session_id;
}else if(header_hybris_session_id !== null){
    session_id = header_hybris_session_id;
}else if(query_param_session_id !== null){
    session_id = query_param_session_id;
}else if(header_session_id !== null){
    session_id = header_session_id;
}

if (session_id !== null){
    context.setVariable("request.header.sessionId", session_id);
    context.setVariable("SessionContext.sessionId", session_id);
}

var tenant = context.getVariable("request.queryparam.tenant");
print(tenant);
if (tenant === null){
    var hybris_tenant =  context.getVariable("request.queryparam.hybris-tenant");
    context.setVariable("tenant", hybris_tenant);
}else{
    context.setVariable("tenant", tenant);
}