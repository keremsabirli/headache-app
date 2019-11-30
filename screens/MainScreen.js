import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import db from '../src/config';
const BLUE = '#0D5182';
const WHITE = '#F7F4EF';
const RED = '#C21D2D';
const PINK = '#F26678';
const LIGHTBLUE = '#0DAEBF';

export default class MainScreen extends Component {
    render() {
        return (
            <View>

            </View>
        )
    }
    state = {
        data: []
    };
    writeUserData() {
        db.ref('surveys')
    }
    writeSurveyData(data) {
        db.ref('/surveys').push({
            data
        }).then((data) => {
            // console.log('data ', data)
        }).catch((error) => {
            // console.log('error', error)
        })
    }
    readUserData() {
        db.ref('surveys/').once('value', function (snapshot) {
            this.setState({
                data: snapshot.val()
            });
            console.log(this.state.data);
        }.bind(this));
    }
    async componentDidMount() {
        await this.writeSurveyData('kerem');
        await this.readUserData();
        
    }
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: BLUE,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Sample Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }
    constructor(props) {
        super(props);
        this.state = { backgroundColor: WHITE };
    }
    onPressedNext() {

    }
}