var userId = context.getVariable("accesstoken.userId");
if (userId === null || userId=== undefined || userId === ""){
    userId = null;
}
context.setVariable("IAM.userId", userId);