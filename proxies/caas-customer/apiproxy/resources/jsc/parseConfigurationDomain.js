context.setVariable("ConfigurationResponse.fullDomain", 
            "https://" + context.getVariable("ConfigurationResponse.domain") +"/");
print("Full domain", context.getVariable('ConfigurationResponse.fullDomain'))