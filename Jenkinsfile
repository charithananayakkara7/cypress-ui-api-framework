pipeline {
  agent {
    docker {
      image 'cypress/browsers:node14.16.0-chrome89-ff87'
      args '-u root'
    }
  }

  parameters {
    string(name: 'TEST_SUITE', defaultValue: 'Regression', description: 'Which test suite to run')
    string(name: 'ENVIRONMENT', defaultValue: 'api.openweathermap.org', description: 'Which environment to run tests against')
    string(name: 'BROWSER', defaultValue: 'chrome', description: 'Which browser to run tests against')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Start docker test') {
      steps {
        sh 'make test'
      }
    }
  }
}
