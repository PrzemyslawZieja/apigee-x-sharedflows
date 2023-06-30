var quotaCalloutResponse = context.getVariable("quotaCalloutResponse.content");
var quotaCalloutResponseObject = JSON.parse(quotaCalloutResponse);

var quotaAllowed = quotaCalloutResponseObject.quota-allowed-count;
var quotaAvailable = quotaCalloutResponseObject.quota-available-count;

var quotaPercentageUsed = quotaAvailable/quotaAllowed * 100;

print(quotaPercentageUsed)

if (quotaPercentageUsed === 50 ) {
    context.setVariable("quota_percent_reached", "50");
} else if (quotaPercentageUsed === 80) {
    context.setVariable("quota_percent_reached", "80");
}