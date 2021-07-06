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
                sh 'cd /var/lib/jenkins/workspace/Node-Project/build && 'cp -r * /var/www/html/'
            }
        }
    }
}
