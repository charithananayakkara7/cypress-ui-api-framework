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


Need developement
1) Docker integration with jenkins for parallell test  (with parallell test as a arugument for command line interface)
2) Need development work related to volumes
3) Docker Hub and jenkins related stuff
4) Add firefox for parallell test
5) Move cypress-mocha test report file created in docker workspace to volumes
6) Move cypress test folder path  to docker file so no need to worry about create new image once adding new test


