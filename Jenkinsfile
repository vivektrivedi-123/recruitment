pipeline {
    agent any

    stages {
        stage('Npm install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build -prod'
            }
        }
        stage('Deploy') {
            steps {
                sh 'sudo cp -r /var/lib/jenkins/workspace/Node-Project/* /var/www/html'
            }
        }
    }
}
