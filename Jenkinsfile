@Library('ceiba-jenkins-library') _

pipeline {
    agent {
        label 'Slave_Induccion'
    }

    tools {
        nodejs "NodeJS14"
    }

    stages {
        stage('npm Install') {
            steps {
                echo "------------>Installing<------------"
                sh 'npm install'
            }
        }
        stage('Unit testing') {
            steps {
                echo '------------>Performing unit testing<------------'
                sh 'node -v'
                sh 'REACT_APP_HOST=http://example.com npm run test:coverage'
            }
        }
        stage('lint') {
            steps {
                echo "------------>Checking lint<------------"
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
                sh 'npm run build'
            }
        }
    }
}