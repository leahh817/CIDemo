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
                steps {
                    sh "npm run test"
                }
            }
        }
}
