pipeline {
    agent {
        label 'NodeJS 14' // Use the Node.js installation configured in Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                sh 'echo check out'
                checkout scm // Checkout the source code
                sh 'ls' 
            }
        }
        stage('Build') {
            steps {
                sh 'npm install' // Install project dependencies
            }
        }
        // stage('Test') {
        //     steps {
        //         sh 'npm test' // Run tests
        //     }
        // }
        stage('Deploy') {
            steps {
                sh 'npm start'
                // Add deployment steps here (e.g., deploy to a server)
            }
        }
    }
}
