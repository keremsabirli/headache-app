import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {sendGridEmail} from 'react-native-sendgrid'
import db from '../src/config';
const BLUE = '#0D5182';
const WHITE = '#F7F4EF';
const RED = '#C21D2D';
const PINK = '#F26678';
const LIGHTBLUE = '#0DAEBF';


const SENDGRIDAPIKEY = "PUT API KEY HERE";
const FROMEMAIL = "sauheadache@sau.com";
const TOEMAIL = "keremsabirli15@gmail.com";
const SUBJECT = "Headache";
const defaultAnswers = {};

export default class SurveyCompletedScreen extends Component {
    componentDidMount(){
        const answers = this.props.navigation.getParam('surveyAnswers', defaultAnswers);
        console.log(answers);
        this.writeSurveyData(answers);
        this.sendEmailFunction(answers);
    }
    sendEmailFunction (data) {
        const sendRequest = sendGridEmail(SENDGRIDAPIKEY, TOEMAIL, FROMEMAIL, SUBJECT, JSON.stringify(data));
        sendRequest.then((response) => {
            console.log("Success")
        }).catch((error) =>{
            console.log(error)
        });
    }
    writeSurveyData(data) {
        db.ref('/surveys').push({
            data
        }).then((data)=>{
            console.log('data ', data)
        }).catch((error)=>{
            console.log('error', error)
        })
    }
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: BLUE,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Survey Results',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }
    render() {
        const answers = this.props.navigation.getParam('surveyAnswers', defaultAnswers);
        return (
            <View style={styles.background}>
                <View style={styles.container}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        maxHeight: '80%',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
});
