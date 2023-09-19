pipeline {
  agent any
  stages {
    stage('Build') {
      tools {
        nodejs "NodeJS"
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'npm preview'
      }
    }
  }
}
