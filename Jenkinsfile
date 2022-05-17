@Library('ceiba-jenkins-library') _

pipeline {
    agent any
    stages {
        stage('Static Code Analysis') {
            steps{
                sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:vetapp-wilfer.ciro', 
                sonarName:'CeibaADN-VetApp(wilfer.ciro)', 
                sonarPathProperties:'./sonar-project.properties')
            }
        }
        stage('NPM Install') {
            steps {
                echo "------------>Installing<------------"
                sh 'npm install'
            }
        }
        stage('Unit Testing') {
            steps {
                echo "------------>Performing unir test<------------"
                sh 'npm test'
            }
        }
        stage('e2e Testing') {
            steps {
                echo "------------>Testing e2e<------------"
                sh 'npm e2e'
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