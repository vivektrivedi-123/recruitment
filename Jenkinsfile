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
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'sudo cp -r /var/lib/jenkins/workspace/Pipeline-Testing/build/* /var/www/html'
            }
        }
    }
}
