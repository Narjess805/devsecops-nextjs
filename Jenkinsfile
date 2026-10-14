pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo ' Récupération du dépôt GitHub...'
                git branch: 'main',
                    url: 'git@github.com:Narjess805/devsecops-nextjs.git'
            }
        }

        stage('Install') {
            steps {
                echo ' Installation des dépendances...'
                sh 'npm install --fetch-timeout=600000 --fetch-retries=5'
            }
        }

        stage('Build') {
            steps {
                echo ' Construction de l\'application Next.js...'
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo ' Pipeline terminé avec succès'
        }
        failure {
            echo ' Pipeline échoué'
        }
    }
}
