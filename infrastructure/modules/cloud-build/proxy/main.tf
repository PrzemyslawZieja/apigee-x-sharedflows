resource "google_cloudbuild_trigger" "apigee-proxy-deploy-trigger" {
    name = "${var.proxy-name}-deploy-trigger"
    tags = ["terraform"]

    github {
        owner = "emporix"
        name  = "apigee-x-poc"

        push {
            branch = "^master$"
        }
    }

    filename = "test"
}