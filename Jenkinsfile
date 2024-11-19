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

        stage("Build Java Files") {
            steps {
                echo "Building Java files"
                // Fixed sh block for correct directory handling
                sh '''
                    mkdir -p out
                    javac -d out .java/*.java
                '''
            }
        }

        stage("Testing Java Files") {
            steps {
                echo "Running Java tests"
                // Ensure the correct Java class is called
                sh 'java -cp out script'
            }
        }

        stage("Package Application") {
            steps {
                echo "Packaging the project"
                // Corrected zip command syntax
                sh '''
                    mkdir -p dist
                    zip -r dist/project.zip ./*.html ./*.css pic
                '''
            }
        }

        stage("Deploying Application") {
            steps {
                echo "Deploying the application"
                // Fixed directory path for deploying application
                sh 'cp *.html *.css pic/* /var/www/html/'
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

