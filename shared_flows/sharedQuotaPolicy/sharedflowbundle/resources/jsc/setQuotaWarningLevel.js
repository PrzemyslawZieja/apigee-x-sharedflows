const quotaCalloutResponse = context.getVariable("quotaCalloutResponse.content");
const quotaCalloutResponseObject = JSON.parse(quotaCalloutResponse);

const quotaAllowed = quotaCalloutResponseObject.quota_allowed_count;
const quotaAvailable = quotaCalloutResponseObject.quota_available_count;

const quotaPercentageUsed = quotaAvailable/quotaAllowed * 100;

print("Quota percentage used: " + quotaPercentageUsed)

if (quotaPercentageUsed === 50 ) {
    context.setVariable("quota_percent_reached", "50");
} else if (quotaPercentageUsed === 80) {
    context.setVariable("quota_percent_reached", "80");
}