pipeline {
  agent any

  parameters {
    string(name: 'TEST_SUITE', defaultValue: 'Sanity', description: 'Which test suite to run')
    //string(name: 'ENVIRONMENT', defaultValue: 'local', description: 'Which environment to run tests against')
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

    stage('Run tests') {
      steps {
        script {
          def testCommand = 'npm run test'

          if (params.TEST_SUITE) {
            testCommand += ' --spec "cypress/integration/' + params.TEST_SUITE + '/*"'
          }

          if (params.ENVIRONMENT) {
            testCommand += ' --env environment=' + params.ENVIRONMENT
          }

          if (params.BROWSER) {
            testCommand += ' --browser' + params.BROWSER
          }

          sh testCommand
        }
      }
    }
  }
}