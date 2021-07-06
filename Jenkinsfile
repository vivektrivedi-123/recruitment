pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/vivektrivedi-123/recruitment.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm run build'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
