[
    {
        "name": "apigeeCredentials",
        "entry": [
            {
                "name": "clientID",
                "value": std.extVar("clientID")
            },
            {
                "name": "clientSecret",
                "value": std.extVar("clientSecret")
            },
            {
                "name": "saasTokenKey",
                "value": std.extVar("saasTokenKey")
            }
        ]
    },
    {
        "name": "environmentVariables",
        "entry": [
            {
                "name": "basicAuth_username",
                "value": std.extVar("user")
            },
            {
                "name": "basicAuth_password",
                "value": std.extVar("password")
            }
        ]
    },
    {
        "name": "hubSpot",
        "entry": [
            {
                "name": "hubSpotSignature",
                "value": std.extVar("hubSpotSignature")
            }
        ]
    },
    {
        "name": "icecatVariables",
        "entry": [
            {
                "name": "basicAuth_password",
                "value": std.extVar("icecat_basicAuth_password")
            },
            {
                "name": "basicAuth_username",
                "value": std.extVar("basicAuth_username")
            }
        ]
    },
    {
        "name": "oktaBasicAuth",
        "entry": [
            {
                "name": "basicAuth",
                "value": std.extVar("okta_basicAuth")
            }
        ]
    },
    {
        "name": "socialLogin",
        "entry": [
            {
                "name": "aesIv",
                "value": std.extVar("aesIv")
            },
            {
                "name": "aesKey",
                "value": std.extVar("aesKey")
            },
            {
                "name": "tokenPublicKey",
                "value": std.extVar("tokenPublicKey")
            }
        ]
    },
    {
        "name": "backofficeRoles2Scopes",
        "entry": [
            {
                "name": "0oa1qvzni8XxBAxd90x7",
                "value": std.extVar("BA")
            },
            {
                "name": "0oa1qvzni8XxBMxd90x7",
                "value": std.extVar("BM")
            },
            {
                "name": "0oa1qvzni8XxBUxd90x7",
                "value": std.extVar("BU")
            },
            {
                "name": "0oa1qvzni8XxSUxd90x7",
                "value": std.extVar("SU")
            }
        ]
    },
    {
        "name": "oktaVariables",
        "entry": [
            {
                "name": "jwks_postfix",
                "value": std.extVar("jwks_postfix")
            },
            {
                "name": "trusted_domains",
                "value": std.extVar("trusted_domains")
            }
        ]
    }
]