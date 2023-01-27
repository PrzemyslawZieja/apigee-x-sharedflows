# ApiGee X migration POC

## Overview
This is a test installation of Apigee X. It utilizes Google's Evaluation license offering - hence it has significant limitations and will exist only for the next 60 days.
After that, the environment (Apigee instance + license) will be removed automaticaly by Google.

## Credentials
This terraform installation uses ```gcloud``` authorization to make changes to the infrastructure

## Applying changes
To init, plan, apply perform:
```bash
terraform init

terraform plan --var-file=./apigee-poc.tfvars

terraform apply --var-file=./apigee-poc.tfvars
```

## Recreating apigee x infrastructure
It's possible to recreate apigee project infrastructure using ```terraform destroy``` (not recommended though, this process has been tested to check the possibility to recreate all resources after a major failure)
To recreate the infrastructure:
```bash
# Destroy terraform resources
terraform destroy

# Below resources survive the destruction, it's necessary to import them back to the state to allow for uninterrupted recreate process
terraform import -var-file=./apigee-poc.tfvars 'module.apigee-x-core.module.kms-org-db.google_kms_key_ring.default[0]' 'projects/apigee-x-poc-374912/locations/europe-west1/keyRings/apigee-x-org'
terraform import -var-file=./apigee-poc.tfvars 'module.apigee-x-core.module.kms-inst-disk["euw1-instance"].google_kms_key_ring.default[0]' 'projects/apigee-x-poc-374912/locations/europe-west1/keyRings/apigee-euw1-instance'
terraform import -var-file=./apigee-poc.tfvars 'module.apigee-x-core.module.kms-inst-disk["euw1-instance"].google_kms_crypto_key.default["inst-disk"]' projects/apigee-x-poc-374912/locations/europe-west1/keyRings/apigee-euw1-instance/cryptoKeys/inst-disk
terraform import -var-file=./apigee-poc.tfvars 'module.apigee-x-core.module.kms-org-db.google_kms_crypto_key.default["org-db"]' projects/apigee-x-poc-374912/locations/europe-west1/keyRings/apigee-x-org/cryptoKeys/org-db
```

After that, it's required to UNSCHEDULE the destruction of the keys latest version inside each of the keyrings and RE-ENABLE these versions in the <a name="kms_gcp_console"></a>[Key Management Service](https://console.cloud.google.com/security/kms/keyrings?project=apigee-x-poc-374912) in the Google Cloud Platform Console.

# Apply the changes to recreate the infrastructure
terraform apply -var-file=./apigee-poc.tfvars
```
The process takes about 30-40 minutes to complete.

## Files and directories

| File/directory | Description |
|----------------|-------------|
| modules/ | terraform modules used in ```main.tf``` |
| proxies/ | proxy configuration files |
| apigee-poc.tfvars | terraform main configuration with environment specific values |
| main.tf | terraform definition of used modules |
| terraform.tf | terraform global configuration (state bucket etc.) |
| variables.tf | variables definition. These variables are passed down to the modules |

---
**NOTE**

 This repository is based on the https://github.com/apigee/terraform-modules/tree/main/modules/mig-l7xlb sample configuration.
 Below README is partialy taken from above mentioned repository.

---
<!-- BEGIN_TF_DOCS -->
## Providers

| Name |
|------|
| terraform |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_apigee-x-bridge-mig"></a> [apigee-x-bridge-mig](#module\_apigee-x-bridge-mig) | ./modules/apigee-x-bridge-mig | n/a |
| <a name="module_apigee-x-core"></a> [apigee-x-core](#module\_apigee-x-core) | ./modules/apigee-x-core | n/a |
| <a name="module_mig-l7xlb"></a> [mig-l7xlb](#module\_mig-l7xlb) | ./modules/mig-l7xlb | n/a |
| <a name="module_nip-development-hostname"></a> [nip-development-hostname](#module\_nip-development-hostname) | ./modules/nip-development-hostname | n/a |
| <a name="module_project"></a> [project](#module\_project) | github.com/terraform-google-modules/cloud-foundation-fabric//modules/project | v16.0.0 |
| <a name="module_vpc"></a> [vpc](#module\_vpc) | github.com/terraform-google-modules/cloud-foundation-fabric//modules/net-vpc | v16.0.0 |

## Resources

No resources.

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_apigee_envgroups"></a> [apigee\_envgroups](#input\_apigee\_envgroups) | Apigee Environment Groups. | <pre>map(object({<br>    environments = list(string)<br>    hostnames    = list(string)<br>  }))</pre> | `{}` | no |
| <a name="input_apigee_environments"></a> [apigee\_environments](#input\_apigee\_environments) | Apigee Environment Names. | `list(string)` | `[]` | no |
| <a name="input_apigee_instances"></a> [apigee\_instances](#input\_apigee\_instances) | Apigee Instances (only one for EVAL). | <pre>map(object({<br>    region       = string<br>    ip_range     = string<br>    environments = list(string)<br>  }))</pre> | `{}` | no |
| <a name="input_ax_region"></a> [ax\_region](#input\_ax\_region) | GCP region for storing Apigee analytics data (see https://cloud.google.com/apigee/docs/api-platform/get-started/install-cli). | `string` | n/a | yes |
| <a name="input_billing_account"></a> [billing\_account](#input\_billing\_account) | Billing account id. | `string` | `null` | no |
| <a name="input_exposure_subnets"></a> [exposure\_subnets](#input\_exposure\_subnets) | Subnets for exposing Apigee services | <pre>list(object({<br>    name               = string<br>    ip_cidr_range      = string<br>    region             = string<br>    secondary_ip_range = map(string)<br>  }))</pre> | `[]` | no |
| <a name="input_network"></a> [network](#input\_network) | VPC name. | `string` | n/a | yes |
| <a name="input_peering_range"></a> [peering\_range](#input\_peering\_range) | Peering CIDR range | `string` | n/a | yes |
| <a name="input_project_create"></a> [project\_create](#input\_project\_create) | Create project. When set to false, uses a data source to reference existing project. | `bool` | `false` | no |
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | Project id (also used for the Apigee Organization). | `string` | n/a | yes |
| <a name="input_project_parent"></a> [project\_parent](#input\_project\_parent) | Parent folder or organization in 'folders/folder\_id' or 'organizations/org\_id' format. | `string` | `null` | no |
| <a name="input_support_range"></a> [support\_range](#input\_support\_range) | Support CIDR range of length /28 (required by Apigee for troubleshooting purposes). | `string` | n/a | yes |

## Outputs

No outputs.
<!-- END_TF_DOCS -->
