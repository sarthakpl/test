pipeline {
    agent any
    stages {
        stage("Checkout Code") {
            steps {
                echo "Checking out the code"
                // Correcting checkout syntax
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies using npm'
                // Run npm install to install any dependencies (if any)
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application'
                // Example of a build step if you have any build tools or bundling
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running unit tests'
                // Run any JavaScript tests (if any)
                // For example, with Jest:
                sh 'npm test'
            }
        }

        stage('Package Application') {
            steps {
                echo 'Packaging the application'
                // Create a zip of the project files
                sh '''
                    mkdir -p dist
                    zip -r dist/project.zip ./*.html ./*.css ./*.js pic
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application'
                // You can copy the files to your server or deploy them as needed
                sh 'cp *.html *.css *.js pic/ * /var/www/html/'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for errors.'
        }
    }
}

