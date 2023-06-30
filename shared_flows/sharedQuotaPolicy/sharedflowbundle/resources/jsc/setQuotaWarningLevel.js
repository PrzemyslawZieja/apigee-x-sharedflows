var quotaCalloutResponse = context.getVariable("quotaCalloutResponse.content");
var quotaCalloutResponseObject = JSON.parse(quotaCalloutResponse);

var quotaAllowed = quotaCalloutResponseObject.quota_allowed_count;
var quotaAvailable = quotaCalloutResponseObject.quota_available_count;

var quotaPercentageUsed = quotaAvailable/quotaAllowed * 100;

print("Quota percentage used: " + quotaPercentageUsed)

if (quotaPercentageUsed === 50 ) {
    context.setVariable("quota_percent_reached", "50");
} else if (quotaPercentageUsed === 80) {
    context.setVariable("quota_percent_reached", "80");
}