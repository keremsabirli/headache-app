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
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            users: {}
        }
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
    render() {
        const { isLoaded, users } = this.state;
        console.log(users);
        if(isLoaded){
            console.log(this.state.users)
            return (
                <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.loginScreenContainer}>
                            <View style={styles.loginFormView}>
                                <Text style={styles.logoText}>Giriş Yap</Text>
                                <TextInput
                                    placeholder="Username"
                                    placeholderColor={WHITE}
                                    style={styles.loginFormTextInput}
                                />
                                <TextInput
                                    placeholder="Password"
                                    placeholderColor={WHITE}
                                    style={styles.loginFormTextInput}
                                    secureTextEntry={true}
                                />
                                <View style={styles.buttonContainer}>
                                    <Button
                                        buttonStyle={styles.loginButton}
                                        onPress={() => this.onLoginPress()}
                                        title="Giriş Yap"
                                    />
                                    <Button
                                        buttonStyle={styles.loginButton}
                                        onPress={() => this.onSignupPress()}
                                        title="Kayıt Ol"
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            );
        }
        else {
            return <View></View>
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    onLoginPress() {
    }

    getUserData = () => {
        var recentPostsRef = db.ref('/users');
        recentPostsRef.once('value').then(snapshot => {
            this.setState({
                users: snapshot.val(),
                isLoaded: true
            });
        });
    }
    onSignupPress() {
        this.props.navigation.navigate('SignUpScreen');
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