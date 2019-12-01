import React, { Component } from 'react';
import {
    Keyboard,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Alert,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import db from '../src/config';
import { Button } from 'react-native-elements';

const BLUE = '#0D5182';
const WHITE = '#F7F4EF';
const RED = '#e2325b';
const Peach = '#ffdab9';
const DarkStrongBlue = '#1c0f45';
const Yeni = '#4337b3';

const appId = '1047121222092614';

export default class LoginScreen extends Component {
    state = {};
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
    render() {
        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.logoText}>Kayıt Ol</Text>
                            <TextInput
                                placeholder="Mail Adresi"
                                style={styles.loginFormTextInput}
                                onChangeText={(value) => this.setState({mail: value})}
                                value={this.state.mail}
                            >
                            </TextInput>
                            <TextInput
                                placeholder="Username"
                                style={styles.loginFormTextInput}
                                onChangeText={(value) => this.setState({username: value})}
                                value={this.state.username}
                            />
                            <TextInput
                                placeholder="Password"
                                placeholderColor={WHITE}
                                style={styles.loginFormTextInput}
                                secureTextEntry={true}
                                onChangeText={(value) => this.setState({password: value})}
                                value={this.state.password}
                            />
                            <View style={styles.buttonContainer}>
                                <Button
                                    buttonStyle={styles.loginButton}
                                    onPress={() => this.onSignUpPress()}
                                    title="Kayıt Ol"
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
    onSignUpPress() {
        const mail = this.state.mail;
        const username = this.state.username;
        const password = this.state.password;
        if(mail && username && password) {
            db.ref('/users').push({
                mail,
                username,
                password
            });
            this.props.navigation.navigate('LoginScreen');
        }
        else {
            this.props.navigation.navigate('SignUpScreen');
        }
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
        height: 45,
        minWidth: 50,
        alignSelf: 'center',
        marginTop: 10,
    }
});