# Apigee X configuration
Based on: [maven config apigee plugin](https://github.com/apigee/apigee-config-maven-plugin/blob/hybrid/README.md)

Directory contains files with Apigee X configuration (kvms, flowhooks etc.)

## Directory structure
"env" directory contains Apigee configuration for environments. Every directory has its own directory. IMPORTANT: env dir name must be the same as env name in shared-pom.xml

For example if we want to have configuration for develop, stage and prod envs, directory structure should be:
```
  ├── env
  │   ├── develop
  │   │   ├── < json files with configuration >
  │   ├── stage
  │   │   ├── < json files with configuration >
  │   ├── prod
  │   │   ├── < json files with configuration >
```

## Deploying configuration
Apigee configuration plugin can load (every configuration has its json file, see [docs](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest) for files structure):
| Configuration | file                       |
|---------------|----------------------------|
| keyvaluemaps  | kvm.json                   |
| targetservers | targetServers.json         |
| flowhooks     | flowhooks.json             |
| apiproducts   | apiProducts.json (org dir) |
| developers    | developers.json (org dir)  |
| apps          | developerApps.json         |
| reports       | reports.json               |
| references    | references.json            |
| keystores     | keystores.json             |
| aliases       | aliases.json               |


In order to deploy the configuration:
1. asure you are in "configuration" directory
2. call:
```
mvn install -P<env> -Dfile=<location with gcp service account json key> -Dapigee.config.options=<command> -Dapigee.config.dir=.

env - maven profile name configured in shared-pom.xml file (repo's root directory).

Commands:
none   - No action (default)
create - Create when not found. Pre-existing config is NOT updated even if it is different.
update - Update when found; create when not found, updates individual entries for kvms. Refreshes all config to reflect json files in env dir.
delete - Delete all config for env, listed in its dir.
sync   - Delete and recreate.
```
