pipeline{
    agent{
        label 'docker_10'
    }
    triggers{
        pollSCM '* * * * *'
    }
    options{
        timestamps ()
        disableConcurrentBuilds()
    }
    stages{
        stage('Checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/dev']], extensions: [], userRemoteConfigs: [[credentialsId: 'ssh-key', url: 'git@github.com:vivektrivedi-123/recruitment.git']]])
            }
        }
        stage('Build'){
            agent{
                docker{image 'recruitment:latest'
                       reuseNode true
                       args '-u 1000 -v $WORKSPACE:/app -w /app'
                }
            }
            steps{
                sh label: '', script: '''
                sudo npm i
                sudo npm run build
                sudo zip -r build.zip build
                '''
            }
        }
        stage('Deploy'){
            steps{
                sh '''
                cd build
                sudo chown -R 1000:1000 *
                sudo cp -r * /var/www/html
                '''
            }
        }
        stage('Artifacts'){
            steps{
                archiveArtifacts 'build.zip'
            }
        }
    }
}
