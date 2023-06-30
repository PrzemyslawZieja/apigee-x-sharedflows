var local_call = context.getVariable("client.local");

if (local_call) {
    context.setVariable("message_quota_weight", "1");
} else {
    context.setVariable("message_quota_weight", "0");
}