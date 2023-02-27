pipeline {
  agent any

  parameters {
    string(name: 'TEST_SUITE', defaultValue: 'Regression', description: 'Which test suite to run')
    string(name: 'ENVIRONMENT', defaultValue: 'qa', description: 'Which environment to run tests against')
    string(name: 'BROWSER', defaultValue: 'chrome', description: 'Which browser to run tests against')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Make') {
      steps {
        sh 'make test'
      }
    }
  }
}