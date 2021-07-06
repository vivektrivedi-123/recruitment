pipeline {
    agent any

    stages {
        stage('Npm install') {
            steps {
                sh 'sudo npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'sudo npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'copy -r /var/lib/jenkins/workspace/Node-Project/build/* /var/www/html/'
            }
        }
    }
}
