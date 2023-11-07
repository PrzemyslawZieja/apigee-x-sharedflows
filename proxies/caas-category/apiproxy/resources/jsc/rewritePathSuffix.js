if (context.flow == "TARGET_REQ_FLOW") {
    var tenant = context.getVariable('request.header.hybris-tenant')
    var url = "https://category-tree.k8s-stage.emporix.io/"
    context.setVariable("target.url", url)
}