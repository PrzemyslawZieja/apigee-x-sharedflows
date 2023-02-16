resource "google_cloudbuild_trigger" "apigee-proxy-deploy-trigger" {
    name     = "${var.proxy-name}-deploy-trigger"
    tags     = ["terraform"]
    project  = var.project

    github {
        owner = "emporix"
        name  = "apigee-x-poc"

        push {
            branch = "^EO-283$"
        }
    }

    included_files = ["proxies/test_pz/**"]

    build {
        step {
            name = "gcr.io/google.com/cloudsdktool/cloud-sdk"
            args = [ "-c", "echo -n $$APIGEE_CD_KEY > key.json && pwd && ls -l" ]
            entrypoint = "/bin/bash"
            secret_env = ["APIGEE_CD_KEY"]
        }

        step {
            name = "maven:3.3-jdk-8"
            args = ["clean", "install", "-Pdev-poc", "-Dfile=../../key.json"]
            dir  = "proxies/test_pz"
            entrypoint = "mvn"
        }
    }
}