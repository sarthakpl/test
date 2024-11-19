pipeline {
    agent any
    stages{
        stage("checkout code"){
            steps{
                echo "checkout the code"
                checkout scm "https://github.com/sarthakpl/test.git"
            }  
        }
    stage("build java files"){
        steps{
            echo "Building java files"
            sh ''' mkdir -p out
                javac -d out .java/ *.java
             '''
            }
       
        }
    stage("testing java files"){
        steps{
            echo "running java"
            sh 'java -cp out script'
            }
        
        }
    stage("package application"){
        steps{
            echo "packinging the project"
            sh '''
                mkdir -p dist
                zip -r dist/project.zip ./ *.html ./ *.css pics 
            '''
            }
        
        }
    stage("deploying application"){
        steps{
            echo "Deploying the application"
            sh 'cp *.html *.css pic/ * /var/www/html/'
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
}
