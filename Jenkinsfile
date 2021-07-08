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
                sh 'sudo cp -r /var/lib/jenkins/workspace/Recruitment/build/* /var/www/html/'
            }
        }
    }
}
