pipeline {
    agent any

    stages {
        stage('Npm install') {
            steps {
                bat 'npm i'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                bat 'xcopy %WORKSPACE% C:\\inetpub\\wwwroot'
            }
        }
    }
}
