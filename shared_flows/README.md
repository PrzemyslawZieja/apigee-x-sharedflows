# Apigee X shared flows
Based on: [maven apigee deploy plugin](https://github.com/apigee/apigee-deploy-maven-plugin/blob/hybrid/README.md)

Directory contains files with Apigee X shared flows.

## Directory structure
Directory contains directories with shared flows configurations (one directory per shared flow).

In shared flow directory there are:
1. pom.xml file needed for maven to deploy the proxy
```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>parent-sharedflow-pom</artifactId>
        <groupId>apigee</groupId>
        <version>1.0</version>
        <relativePath>../parent-sharedflow-pom.xml</relativePath>
    </parent>

    <modelVersion>4.0.0</modelVersion>
    <groupId>apigee</groupId>
    <artifactId>##### shared flow name #### </artifactId>
    <version>1.0</version>
    <name>##### shared flow name #### </name>
    <packaging>pom</packaging>
</project>
```

2. sharedflowbundle directory - directory with the shared flow configuration (can be imported from apigee UI after manual configuration)


## Deploying sharedflow
Every deploy of the shared flow generates its new revision (in the meaning of Apigee).

To deploy the shared flow:
1. move to the shared flow directory (this with pom.xml file)
2. Call:
```
mvn clean install -P<env> -Dfile=<location with gcp service account json key> -Dapigee.options=<option> -Dapitype=sharedflow

env - maven profile name configured in shared-pom.xml file (repo's root directory).

options:
override - (default) deploy the shared flow and wait until it's deployed
async - deploy the shared flow
clean - delete the shared flow and all of its revisions
```
