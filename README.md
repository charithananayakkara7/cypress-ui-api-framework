# cypress-ui-api-framework

**PreCondition**

Should have Windows Docker setup on your local machine

Requires Node.js v12+ to run.

**Installation guideline**

First install the dependencies and dev dependencies, and later start the server.

Steps to follow

1) Clone the repository

2) cd cypress-ui-api-framework

3) npm install 

4) npm run chrometest

**Create Docker Image**

1) Run docker build -t <any new docker  image name> .
 
 eg -: docker build -t cytest-dockerimage9 .
 
 **Cross browser testing with parallelly with docker**
 
1) Run "docker-compose  run up"

 eg -: docker-compose  run up   

**Test with parallelly with chrome/firefox/electron**
 
1) Run "docker-compose  run <Any Service name>"

 eg 1 -: docker-compose  run e2e-chrome   
 eg 2 -: docker-compose  run e2e-electron

**More details** -: https://docs.cypress.io/


