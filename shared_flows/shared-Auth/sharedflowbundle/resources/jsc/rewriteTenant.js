  var scope = context.getVariable("scope");
  var hybrisClient = context.getVariable("request.header.hybris-client");
  if(hybrisClient.endsWith("-client")) {
      hybrisClient = hybrisClient.substring(0, hybrisClient.length-7);
      context.setVariable("request.header.hybris-client", hybrisClient);
  }else if(hybrisClient.endsWith("-test")) {
      hybrisClient = hybrisClient.substring(0, hybrisClient.length-3);
      context.setVariable("request.header.hybris-client", hybrisClient);
  }else if(hybrisClient.includes("_")) {
      hybrisClient = hybrisClient.replace("_", "-")
      context.setVariable("request.header.hybris-client", hybrisClient);
  }
  
  
 if(scope.includes("tenant=")){
     var beforeAfterTenant = scope.split("tenant=");
     //split the secondPart and make sure we throw away if there is anything behind 
     var tenant = beforeAfterTenant[1].split(" ")[0];
     context.setVariable("request.header.hybris-tenant", tenant);
     context.setVariable("request.header.tenant", tenant);
 } else {
     //throw Error?
     context.setVariable("request.header.hybris-tenant", "noTenant");
 }
