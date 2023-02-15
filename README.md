# Apigee X
Repository with Apigee X code for its provisioning (terraform) and deploying its configuration (maven plugin).

## Repository contents
1. infrastructure - directory with terraform code needed to provision Apigee X in Google Cloud Platform
2. configuration - directory with Apigee X configuration files (kvm, flowhooks etc.)
3. proxies, shared_flows - directory with Apigee X proxies and shared flows code

There are READMEs.MD in each of above directories with details.

## shared-pom.xml file
File with Apigee X envs configuration, used by maven plugin for deploying the proxies, shared flows and configuration.