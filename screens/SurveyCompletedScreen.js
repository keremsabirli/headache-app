import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import db from '../src/config';
const BLUE = '#0D5182';
const WHITE = '#F7F4EF';
const RED = '#C21D2D';
const PINK = '#F26678';
const LIGHTBLUE = '#0DAEBF';

const defaultAnswers = { favoriteColor: 'nothing', favoriteNumber: '0', favoritePet: 'nothing' };

export default class SurveyCompletedScreen extends Component {
    componentDidMount(){
        const answers = this.props.navigation.getParam('surveyAnswers', defaultAnswers);
        this.writeSurveyData(answers);
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
                backgroundColor: WHITE,
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
                    <ScrollView>
                        <Text style={styles.questionText}>The results are in!</Text>
                        <Text style={styles.questionText}>Your favorite color: {answers.favoriteColor}</Text>
                        <Text style={styles.questionText}>Your favorite number: {answers.favoriteNumber}</Text>
                        <Text style={styles.questionText}>Your favorite pet: {answers.favoritePet.value}</Text>
                        <Text style={styles.questionText}>Your favorite foods: {answers.favoriteFoods[0].value} and {answers.favoriteFoods[1].value}</Text>
                        <Text style={styles.questionText}>How you relax: {answers.relax[0].value} and {answers.relax[1].value}</Text>
                        <Text style={styles.questionText}>When confronted with a radio button you picked: {answers.radio.value}</Text>
                        <Text style={styles.questionText}>When given a default you chose: the {answers.singleDefault.value}</Text>
                        <Text style={styles.questionText}>When given a multiple defaults you chose: the {answers.multipleDefaults[0].value} and the {answers.multipleDefaults[1].value}</Text>
                        
                    </ScrollView>
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
        backgroundColor: BLUE,
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