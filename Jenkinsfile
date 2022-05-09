pipeline{
    agent {
        docker {
            image 'cypress/base:10'
        }
    }
        stages {
            stage('build and test') {
                environment {
                    CYPRESS_RECORD_KEY = credentials('cypress-example-kitchensink-record-key')
                }
                steps {
                    sh 'npm ci'
                    sh "npm run test:ci:record"
                }
            }
        }
}
