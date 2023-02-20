var tenant = context.getVariable("request.header.tenant");
if (!tenant){
    tenant = context.getVariable("request.header.hybris-tenant"); //backward compability BO login
}

context.setVariable("request.header.k8s-develop-redirect", tenant.endsWith("dev") || tenant == "saasdev2");
