pipeline {
    agent any

    stages {
        stage('Npm install') {
            steps {
                echo '%WORKSPACE%'
                //bat 'npm i'
            }
        }
        stage('Build') {
            steps {
                //bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                //echo '%WORKSPACE%'
                //bat 'xcopy %WORKSPACE%\\build C:\inetpub\wwwroot'
            }
        }
    }
}
