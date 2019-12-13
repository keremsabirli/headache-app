import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

import db from '../src/config';

const BLUE = '#0D5182';
const WHITE = '#F7F4EF';
const RED = '#e2325b';
const Peach = '#ffdab9';
const DarkStrongBlue = '#1c0f45';
const Yeni = '#4337b3';

const defaultEmail = {};
export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            backgroundColor: WHITE
        };
    }
    componentDidMount(){
    }
    render() {
        const email = this.props.navigation.getParam('LoginScreen', defaultEmail);
        console.log(email);
            return (
                <View>
                    <Text style={styles.logoText}>
                        {/* {email} */}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button
                        style={styles.loginButton}
                        title="Ankete geç"
                        onPress={() => this.props.navigation.navigate('SurveyScreen')}
                        />
                    </View>
                </View>
            )
    }
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: Yeni,
                height: 45,
                elevation: 15,
            },
            headerTintColor: '#fff',
            headerTitle: 'Baş Ağrısı Takip Uygulaması',
            headerTitleStyle: {
                flex: 2,
            }
        };
    }

}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerView: {
        flex: 1,
    },
    loginScreenContainer: {
        flex: 1,
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
    },
    loginFormView: {
        flex: 1
    },
    loginFormTextInput: {
        borderWidth: 1,
        borderColor: Yeni,
        backgroundColor: WHITE,
        borderRadius: 5,
        padding: 10,
        textAlignVertical: 'center',
        margin: 10,
    },
    loginButton: {
        backgroundColor: Yeni,
        borderRadius: 5,
        height: 200,
        minWidth: 100,
        alignSelf: 'center',
        marginTop: 10,
    }
});