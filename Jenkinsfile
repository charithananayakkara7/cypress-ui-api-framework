pipeline {
  agent any
  parameters {
    string(name: 'TEST_SUITE', defaultValue: 'Regression', description: 'Which test suite to run')
    string(name: 'ENVIRONMENT', defaultValue: 'api.openweathermap.org', description: 'Which environment to run tests against')
    string(name: 'BROWSER', defaultValue: 'chrome', description: 'Which browser to run tests against')
  }
  options {
    ansiColor('xterm')
  }
  stages {
    stage('Deploying') {
      steps {
        checkout scm
      }
    }

    stage('Start test') {
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

    stage('Publish HTML Report') {

      steps {
        sh 'mkdir -p /var/lib/jenkins/workspace/e2e-test-automation/cypress/report'
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: '/workspace/e2e-test-automation/cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
      }
    }
  }
}
