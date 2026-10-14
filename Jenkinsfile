pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Récupération du dépôt GitHub...'
                git branch: 'main',
                    url: 'git@github.com:Narjess805/devsecops-nextjs.git'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline terminé avec succès'
        }
        failure {
            echo '❌ Pipeline échoué'
        }
    }
}
