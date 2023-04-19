var tenant = context.getVariable("SocialLogin.tenant");
var env = context.getVariable("environment.name");
if(env == "prod"){
    context.setVariable("SocialLogin.k8sEnvironment", "prod");
    context.setVariable("SocialLogin.apigeeEnvironment", "prod");
}else if(env == "stage"){
    context.setVariable("SocialLogin.apigeeEnvironment", "stage");
    context.setVariable("SocialLogin.k8sEnvironment", "stage");
}else{
    context.setVariable("SocialLogin.apigeeEnvironment", "dev");
    context.setVariable("SocialLogin.k8sEnvironment", "develop");
}
context.setVariable("SocialLogin.scopes", "tenant=" + tenant + 
" customer.customerprofile_edit customer.customerprofile_view order.history_view order.order_readascustomer order.order_updateascustomerr coupon.coupon_redeem customer.consent_view customer.consent_manage");
