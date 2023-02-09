# Apigee X proxies
Based on: [maven apigee deploy plugin](https://github.com/apigee/apigee-deploy-maven-plugin/blob/hybrid/README.md)

Directory contains files with Apigee X proxies.

## Directory structure
Directory contains directories with proxies configuration (one directory per proxy).

In proxy directory there are:
1. pom.xml file needed for maven to deploy the proxy
```
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<parent>
		<artifactId>parent-proxies-pom</artifactId>
		<groupId>apigee</groupId>
		<version>1.0</version>
		<relativePath>../parent-proxies-pom.xml</relativePath>
	</parent>

	<modelVersion>4.0.0</modelVersion>
	<groupId>apigee</groupId>
	<artifactId> ##### proxy name #### </artifactId>
	<version>1.0</version>
	<name> #### proxy name #### </name>
	<packaging>pom</packaging>
</project>
```

2. apiproxy directory - directory with the proxy configuration (can be imported from apigee UI after manual configuration)


## Deploying proxy
Every deploy of the proxy generates its new revision (in the meaning of Apigee).

To deploy the proxy:
1. move to the proxy directory (this with pom.xml file)
2. Call:
```
mvn clean install -P<env> -Dfile=<location with gcp service account json key> -Dapigee.options=override

env - maven profile name configured in shared-pom.xml file (repo's root directory).

options:
override - (default) deploy the proxy and wait until it's deployed
async - deploy the proxy
clean - delete the proxy and all of its revisions
```


