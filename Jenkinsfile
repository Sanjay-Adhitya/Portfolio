pipeline {
  agent any
    
  tools {nodejs "NodeJS 14"}
      stages {
        stage('Build') {
          steps {
            sh 'npm install'
            sh 'npm run build'
            sh 'npm preview'
          }
      }
  }
}
