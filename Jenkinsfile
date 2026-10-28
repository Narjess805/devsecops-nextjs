kpipeline {
    agent any

    environment {
        SHA = "${env.GIT_COMMIT.take(7)}"
        IMAGE_PORTFOLIO = "devsecops-portfolio:${SHA}"
        IMAGE_API = "devsecops-api:${SHA}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du dépôt GitHub...'
            }
        }

        stage('Install') {
            steps {
                echo 'Installation des dépendances...'
                sh 'npm install --fetch-timeout=600000 --fetch-retries=5'
            }
        }

        stage('Build') {
            steps {
                echo "Construction de l'application Next.js..."
                sh 'npm run build'
            }
        }

        // ÉTAPES DE SÉCURITÉ
        stage('Security: Gitleaks') {
            steps {
                echo 'Scan des secrets...'
                sh 'gitleaks detect --source . --verbose --redact --exit-code 1'
            }
        }

        stage('Security: Semgrep') {
            steps {
                echo 'Analyse statique (SAST)...'
                sh 'semgrep scan --config auto .'
            }
        }

        stage('Security: npm audit') {
            steps {
                echo 'Audit des dépendances...'
                sh 'npm audit --audit-level=critical'
            }
        }
    }

    post {
        success {
            echo 'Pipeline terminé avec succès'
        }
        failure {
            echo 'Pipeline échoué'
        }
    }
}
