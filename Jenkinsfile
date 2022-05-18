@Library('ceiba-jenkins-library') _

pipeline {
    agent {
        label 'Slave_Induccion'
    }
    stages {
        stage('NPM Install') {
            steps {
                echo "------------>Installing<------------"
                sh 'npm install'
            }
        }
        stage('lint') {
            steps {
                echo "------------>Exec eslint<------------"
                sh 'npm run lint'
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