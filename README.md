# cypress-ui-api-framework

**PreCondition**
Should have Docker setup on your local machine

Requires Node.js v12+ to run.

**Installation guideline**

First install the dependencies and dev dependencies, and later start the server.

Steps to follow

1) clone the repository

2) cd cypress-ui-api-framework

3) npm install 

4) npm run chrometest

**Create Docker Image**
1) docker build -t cytest-dockerimage9 .

**Test with parallelly with docker**
1) Run  docker-compose  run <AnyService name>
eg -: docker-compose  run e2e-chrome   


**More details** -: https://docs.cypress.io/


