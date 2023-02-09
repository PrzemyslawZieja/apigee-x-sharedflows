## deploy new revision for env
mvn clean install -Pdev-poc -Dfile=/Users/piotr.hajdukiewicz/Downloads/apigee-x-poc-374912-74509b86bac0.json -Dapitype=sharedflow


## delete proxy
mvn clean install -Pdev-poc -Dfile=/Users/piotr.hajdukiewicz/Downloads/apigee-x-poc-374912-74509b86bac0.json -Dapitype=sharedflow -Dapigee.options=clean
