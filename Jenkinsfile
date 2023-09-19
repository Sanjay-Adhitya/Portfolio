pipeline {
  agent any
  stages {
    stage('Build') {
      tools {
        nodejs "Node18"
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'npm preview'
      }
    }
  }
}
