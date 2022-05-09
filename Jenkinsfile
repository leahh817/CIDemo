pipeline{
    agent any
        stages {
            stage('build') {
                // environment {
                //     CYPRESS_RECORD_KEY = credentials('cypress-record-key')
                // }
                steps {
                    sh 'npm i'
                }
            }
            stage('test') {
                steps {
                    sh "npm run test"
                }
            }
        }
}
