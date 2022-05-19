@Library('ceiba-jenkins-library') _

pipeline {
    agent {
        label 'Slave_Induccion'
    }

    tools {
        nodejs "NodeJS14"
    }

    stages {
        stage('NPM Install') {
            steps {
                echo "------------>Installing<------------"
                sh 'npm install'
            }
        }
        stage('Unit testing') {
            steps {
                echo '------------>Performing unit testing<------------'
                sh 'node -v'
                sh 'npm run test'
            }
        }
        stage('e2e testing') {
            steps {
                echo '------------>Performing e2e testing with cypress<------------'
                sh 'npm run cypress'
            }
        }
        stage('Static Code Analysis') {
            steps {
                echo '------------>Static code analysis<------------'
                sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:vetapp-wilfer.ciro', 
                sonarName:'"CeibaADN-VetApp(wilfer.ciro)"', 
                sonarPathProperties:'./sonar-project.properties')
            }
        }
        stage('build') {
            steps {
                echo "------------>Building<------------"
                sh 'npm build'
            }
        }
    }
}