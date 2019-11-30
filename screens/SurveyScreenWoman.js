import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../res/validColors';

const BLUE = '#0D5182';
const WHITE = '#F7F4EF';
const RED = '#e2325b';
const Peach ='#ffdab9';
const DarkStrongBlue='#1c0f45';
const Yeni='#4337b3';


const survey = [
    {
        questionType: 'SelectionGroup',
        questionText:
            'Bebek emziriyor musunuz?',
        questionId: 'bebekEmzirmek',
        options: [
            {
                optionText: 'EVET',
                value: 'evet'
            },
            {
                optionText: 'HAYIR',
                value: 'HAYIR'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Gebe misiniz?',
        questionId: 'gebe',
        options: [
            {
                optionText: 'EVET',
                value: 'evet'
            },
            {
                optionText: 'HAYIR',
                value: 'HAYIR'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Hamileliği Düşünüyor musunuz?',
        questionId: 'hamilelikDusunmek',
        options: [
            {
                optionText: 'EVET',
                value: 'evet'
            },
            {
                optionText: 'HAYIR',
                value: 'HAYIR'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Doğum Kontrol İlacı kullanıyor musunuz?',
        questionId: 'dogumKontrolIlaci',
        options: [
            {
                optionText: 'EVET',
                value: 'evet'
            },
            {
                optionText: 'HAYIR',
                value: 'HAYIR'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Ağrılarınız Özellikle Adet Döneminde Yoğunlaşıyor mu?',
        questionId: 'adetDonemi',
        options: [
            {
                optionText: 'EVET',
                value: 'evet'
            },
            {
                optionText: 'HAYIR',
                value: 'HAYIR'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Her Adet Döneminizde Baş ağrınız Oluyor mu?',
        questionId: 'herAdet',
        options: [
            {
                optionText: 'EVET',
                value: 'evet'
            },
            {
                optionText: 'HAYIR',
                value: 'HAYIR'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Adet kanaması ile baş ağrının başlaması arasındaki zamansal ilişkiyi belirtmek için ağrının arttığı zamanı işaretleyiniz.',
        questionId: 'saglikSorunlari',
        questionSettings: {
            maxMultiSelect: 5,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Kanamadan 2 gün önce',
                value: 'epilepsi'
            },
            {
                optionText: 'Kanamadan 1 gün önce',
                value: 'astim'
            },
            {
                optionText: 'Kanama ile eş zamanlı',
                value: 'sekerHastaligi'
            },
            {
                optionText: 'Kanamadan 1 gün sonra',
                value: 'yuksekTansiyon'
            },
            {
                optionText: 'Kanamadan 2 gün sonra',
                value: 'boyunFitigi'
            }    
    ]
},
{
    questionType: 'Info',
    questionText: 'Anketi Görüntüle!'
},
];
//Ekranin ust kismi
export default class SurveyScreen extends Component {
    componentDidMount(){
        const answers = this.props.navigation.getParam('surveyAnswers', this.previousAnswers);
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
  //Arkaplan
    constructor(props) {
        super(props);
        this.state = { backgroundColor: WHITE};
        this.previousAnswers =  {};
    }

    onSurveyFinished(answers) {
        const infoQuestionsRemoved = [
            ...this.previousAnswers,
            ...answers
        ];
        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }
        this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj });
    }

    /**
     *  Cevaplardan sonra cagirilir
     */
    onAnswerSubmitted(answer) {
        switch (answer.questionId) {
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        }
    }
    //Onceki Butonu
    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10}}>
                <Button
                    color={Yeni}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={BLUE}
                    title={'Önceki'}
                />
            </View>
        );
    }
    //Sonraki Butonu
    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={Yeni}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={BLUE}
                    title={'Sonraki'}
                />
            </View>
        );
    }
    //Bitir
    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Bitir'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={BLUE}
                />
            </View>
        );
    }
//Evet Hayir butonu
    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? Yeni : RED}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, placeholder, value, onBlur) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={3}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    onBlur={onBlur}
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value, onBlur) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            keyboardType={'numeric'}
            onBlur={onBlur}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: WHITE,
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: WHITE,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5
    },

    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: WHITE,
        alignContent: 'flex-end',
    },

    background: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 500,
        height: '100%',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});