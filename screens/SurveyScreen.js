import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../res/validColors';

const BLUE = '#0D5182';
const WHITE = '#F7F4EF';
const RED = '#e2325b';
const Peach = '#ffdab9';
const DarkStrongBlue = '#1c0f45';
const Yeni = '#4337b3';


const survey = [
    {
        questionType: 'Info',
        questionText: 'Bu bir baş ağrısı anketidir.'
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Sigara kullanıyor musunuz?',
        questionId: 'sigara',
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
            'Alkol kullanıyor musunuz?',
        questionId: 'alkol',
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
            'Çay, kahve, meşrubat vb. tüketiyor musunuz?',
        questionId: 'icecekler',
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
        questionType: 'TextInput',
        questionText: 'Diğer Alışkanlıklar?',
        questionId: 'digerAliskanliklar',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Geçmişte yaşadığınız sağlık sorunlarını seçiniz.',
        questionId: 'saglikSorunlari',
        questionSettings: {
            maxMultiSelect: 7,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Epilepsi (sara)',
                value: 'epilepsi'
            },
            {
                optionText: 'Astım',
                value: 'astim'
            },
            {
                optionText: 'Şeker Hastalığı',
                value: 'sekerHastaligi'
            },
            {
                optionText: 'Yüksek Tansiyon',
                value: 'yuksekTansiyon'
            },
            {
                optionText: 'Boyun Fıtığı/Ağrısı',
                value: 'boyunFitigi'
            },
            {
                optionText: 'Sinüzit',
                value: 'sinuzit'
            },
            {
                optionText: 'Mide Rahatsızlığı',
                value: 'mideRahatsizligi'
            }
        ]
    },

    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Geçmişte yaşadığınız sağlık sorunlarını seçiniz.',
        questionId: 'saglikSorunlari',
        questionSettings: {
            maxMultiSelect: 7,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Ameliyat',
                value: 'ameliyat'
            },
            {
                optionText: 'Troid Bezi Hastalığı(guatr)',
                value: 'troidBezi'
            },
            {
                optionText: 'Anemi(kansızlık)',
                value: 'anemi'
            },
            {
                optionText: 'Unutkanlık',
                value: 'unutkanlik'
            },
            {
                optionText: 'Uykusuzluk',
                value: 'uykusuzluk'
            },
            {
                optionText: 'Horlama',
                value: 'horlama'
            },
            {
                optionText: 'Depresyon',
                value: 'depresyon'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Geçmişte yaşadığınız sağlık sorunlarını seçiniz.',
        questionId: 'saglikSorunlari',
        questionSettings: {
            maxMultiSelect: 7,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Vitamin Eksikliği',
                value: 'vitaminEksikligi'
            },
            {
                optionText: 'Polinöropati',
                value: 'polinöropati'
            },
            {
                optionText: 'Tremor(ellerde titreme)',
                value: 'tremor'
            },
            {
                optionText: 'Diş Hastalıkları',
                value: 'disHastaliklari'
            },
            {
                optionText: 'Dış Gıcırdatması(uykuda)',
                value: 'disGicirdatmasi'
            },
            {
                optionText: 'Göz Bozukluğu',
                value: 'gozBozuklugu'
            },
            {
                optionText: 'Glokom(Göz Tansiyonu)',
                value: 'glokom'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Geçmişte yaşadığınız sağlık sorunlarını seçiniz.',
        questionId: 'saglikSorunlari',
        questionSettings: {
            maxMultiSelect: 7,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Romatizmal Hastalıklar',
                value: 'romatizmalHastalilar'
            },
            {
                optionText: 'Böbrek Taşı',
                value: 'bobrekTasi'
            },
            {
                optionText: 'Menenjit',
                value: 'menenjit'
            },
            {
                optionText: 'Kalp Hastalığı(kalp yetmezliği, ritm bozukluğu, ileti bozukluğu vb.)',
                value: 'kalpHastaligi'
            },
            {
                optionText: 'Kontipasyon(kanbızlık)',
                value: 'kontipssyon'
            },
            {
                optionText: 'Alerji(ilaçlar dahil)',
                value: 'alerji'
            },
            {
                optionText: 'Hepatit(sarılık)',
                value: 'horlam'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Bugün için mevcut olan sağlık sorunlarınız seçiniz.',
        questionId: 'saglikSorunlari',
        questionSettings: {
            maxMultiSelect: 7,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Epilepsi (sara)',
                value: 'epilepsi'
            },
            {
                optionText: 'Astım',
                value: 'astim'
            },
            {
                optionText: 'Şeker Hastalığı',
                value: 'sekerHastaligi'
            },
            {
                optionText: 'Yüksek Tansiyon',
                value: 'yuksekTansiyon'
            },
            {
                optionText: 'Boyun Fıtığı/Ağrısı',
                value: 'boyunFitigi'
            },
            {
                optionText: 'Sinüzit',
                value: 'sinuzit'
            },
            {
                optionText: 'Mide Rahatsızlığı',
                value: 'mideRahatsizligi'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Bugün için mevcut olan sağlık sorunlarınız seçiniz.',
        questionId: 'mevcutSaglikSorunlari',
        questionSettings: {
            maxMultiSelect: 7,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Ameliyat',
                value: 'ameliyat'
            },
            {
                optionText: 'Troid Bezi Hastalığı(guatr)',
                value: 'troidBezi'
            },
            {
                optionText: 'Anemi(kansızlık)',
                value: 'anemi'
            },
            {
                optionText: 'Unutkanlık',
                value: 'unutkanlik'
            },
            {
                optionText: 'Uyukusuzluk',
                value: 'uykusuzluk'
            },
            {
                optionText: 'Horlama',
                value: 'horlama'
            },
            {
                optionText: 'Depresyon',
                value: 'depresyon'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Bugün için mevcut olan sağlık sorunlarınız seçiniz.',
        questionId: 'mevcutSaglikSorunlari',
        questionSettings: {
            maxMultiSelect: 7,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Vitamin Eksikliği',
                value: 'vitaminEksikligi'
            },
            {
                optionText: 'Polinöropati',
                value: 'polinöropati'
            },
            {
                optionText: 'Tremor(ellerde titreme)',
                value: 'tremor'
            },
            {
                optionText: 'Diş Hastalıkları',
                value: 'disHastaliklari'
            },
            {
                optionText: 'Dış Gıcırdatması(uykuda)',
                value: 'disGicirdatmasi'
            },
            {
                optionText: 'Göz Bozukluğu',
                value: 'gozBozuklugu'
            },
            {
                optionText: 'Glokom(Göz Tansiyonu)',
                value: 'glokom'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Bugün için mevcut olan sağlık sorunlarınız seçiniz.',
        questionId: 'mevcutSaglikSorunlari',
        questionSettings: {
            maxMultiSelect: 7,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Romatizmal Hastalıklar',
                value: 'romatizmalHastalilar'
            },
            {
                optionText: 'Böbrek Taşı',
                value: 'bobrekTasi'
            },
            {
                optionText: 'Menenjit',
                value: 'menenjit'
            },
            {
                optionText: 'Kalp Hastalığı(kalp yetmezliği, ritm bozukluğu, ileti bozukluğu vb.)',
                value: 'kalpHastaligi'
            },
            {
                optionText: 'Kontipasyon(kanbızlık)',
                value: 'kontipssyon'
            },
            {
                optionText: 'Alerji(ilaçlar dahil)',
                value: 'alerji'
            },
            {
                optionText: 'Hepatit(sarılık)',
                value: 'horlam'
            }
        ]
    },
    {
        questionType: 'TextInput',
        questionText: 'Bu hastalıklardan biri veya birkaçı mevcut ise ve bu hastalıklar için ilaç kullanılıyorsa, kullanılan ilaçların isimlerini yazınız.',
        questionId: 'ilac',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'NumericInput',
        questionText: 'Baş ağrılarınız ilk başladığında kaç yaşındaydınız?',
        questionId: 'basladigiYas',
        placeholderText: '',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Daha önce baş ağrılarınız nedeniyle doktora gittiniz mi?',
        questionId: 'doktoraGitmek',
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
        questionType: 'TextInput',
        questionText: 'Baş ağrınız için hangi tanı(lar) koyuldu?',
        questionId: 'tanilar',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'TextInput',
        questionText: 'Baş ağrınız için hangi tetkikler yapıldı? (örneğin; beyin filmi, kan tetkiki vb)',
        questionId: 'tetkikler',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'TextInput',
        questionText: 'Bugüne kadar baş ağrınız için ne gibi tedaviler aldınız ? (örneğin; ilaç, botulinum toksini, akupunktur, masaj, fizik tedavi, bitkisel ilaçlar, alternatif tedaviler…)',
        questionId: 'tedaviler',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'TextInput',
        questionText: 'Bugüne kadar görmüş olduğunuz tedavilerden en fazla hangisinden faydalandınız?',
        questionId: 'tedaviFayda',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'TextInput',
        questionText: 'Baş ağrısı nedeniyle muayene olduğunuz doktor(ların) uzmanlık alan(lar)ı neydi?',
        questionId: 'basladigiYas',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Aşağıda adı geçen baş ağrısı ile ilgili ilaçları daha önce kullanılmış ve faydalı olmuşsa seçilmelidir.',
        questionId: 'faydaliIlaclar',
        questionSettings: {
            maxMultiSelect: 6,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Dideral / Beloc / Tensinor',
                value: 'Dideral'
            },
            {
                optionText: 'Topamax / Xamate',
                value: 'Topamax'
            },
            {
                optionText: 'Sibelium',
                value: 'sibelium'
            },
            {
                optionText: 'Depakin / Convulex / Valposim',
                value: 'depakin'
            },
            {
                optionText: 'Laroxyl',
                value: 'laroxyl'
            },
            {
                optionText: 'Sandomigran',
                value: 'sandomigran'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Aşağıda adı geçen baş ağrısı ile ilgili ilaçları daha önce kullanılmış ve faydalı olmuşsa seçilmelidir.',
        questionId: 'faydaliIlaclar',
        questionSettings: {
            maxMultiSelect: 6,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Maxalt',
                value: 'maxalt'
            },
            {
                optionText: 'Zomig',
                value: 'zomig'
            },
            {
                optionText: 'İmigran',
                value: 'imigran'
            },
            {
                optionText: 'Avmigran',
                value: 'avmigran'
            },
            {
                optionText: 'Aspirin',
                value: 'aspirin'
            },
            {
                optionText: 'Vermidon/Parol/ Termalgine/Minoset',
                value: 'vermidon'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Aşağıda adı geçen baş ağrısı ile ilgili ilaçları daha önce kullanılmış ve faydalı olmuşsa seçilmelidir.',
        questionId: 'faydaliIlaclar',
        questionSettings: {
            maxMultiSelect: 6,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Relpax',
                value: 'relpax'
            },

            {
                optionText: 'Majezik',
                value: 'majezik'
            },
            {
                optionText: 'Apranax',
                value: 'apranax'
            },
            {
                optionText: 'Sirdalud',
                value: 'sirdalud'
            },
            {
                optionText: 'Antidepresanlar',
                value: 'antidepresanlar'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Aşağıda adı geçen baş ağrısı ile ilgili ilaçları daha önce kullanılmış ve faydalı ol(ma)mışsa seçilmelidir.',
        questionId: 'faysizliIlaclar',
        questionSettings: {
            maxMultiSelect: 6,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Dideral / Beloc / Tensinor',
                value: 'Dideral'
            },
            {
                optionText: 'Topamax / Xamate',
                value: 'Topamax'
            },
            {
                optionText: 'Sibelium',
                value: 'sibelium'
            },
            {
                optionText: 'Depakin / Convulex / Valposim',
                value: 'depakin'
            },
            {
                optionText: 'Laroxyl',
                value: 'laroxyl'
            },
            {
                optionText: 'Sandomigran',
                value: 'sandomigran'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Aşağıda adı geçen baş ağrısı ile ilgili ilaçları daha önce kullanılmış ve faydalı ol(ma)mışsa seçilmelidir.',
        questionId: 'faysizliIlaclar',
        questionSettings: {
            maxMultiSelect: 6,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Maxalt',
                value: 'maxalt'
            },
            {
                optionText: 'Zomig',
                value: 'zomig'
            },
            {
                optionText: 'İmigran',
                value: 'imigran'
            },
            {
                optionText: 'Avmigran',
                value: 'avmigran'
            },
            {
                optionText: 'Aspirin',
                value: 'aspirin'
            },
            {
                optionText: 'Vermidon/Parol/ Termalgine/Minoset',
                value: 'vermidon'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Aşağıda adı geçen baş ağrısı ile ilgili ilaçları daha önce kullanılmış ve faydalı ol(ma)mışsa seçilmelidir.',
        questionId: 'faysizliIlaclar',
        questionSettings: {
            maxMultiSelect: 6,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Relpax',
                value: 'relpax'
            },

            {
                optionText: 'Majezik',
                value: 'majezik'
            },
            {
                optionText: 'Apranax',
                value: 'apranax'
            },
            {
                optionText: 'Sirdalud',
                value: 'sirdalud'
            },
            {
                optionText: 'Antidepresanlar',
                value: 'antidepresanlar'
            }
        ]
    },
    {
        questionType: 'TextInput',
        questionText: 'Baş ağrılarınız genellikle tek taraflı mı olur, çift taraflı mı?',
        questionId: 'basAgrisiTarafi',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'TextInput',
        questionText: 'Baş ağrılarınız hangi niteliktedir? (örneğin; zonklayıcı, künt, mengene ile sıkılır gibi vb.)?',
        questionId: 'basAgrisiNitelikleri',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'TextInput',
        questionText: 'Baş ağrınızın şiddeti genellikle ne derecededir? (eğer işinize konsantrasyonunuzu engelliyorsa orta; ağrı sırasında hiçbir şey yapamıyorsanız, şiddetli olarak sınıflandırınız)?',
        questionId: 'basAgrisiSiddeti',
        placeholderText: 'Buraya yazınız.',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Merdiven çıkmak, koşmak gibi aktiviteler baş ağrınızı arttırır mı?',
        questionId: 'kosmakArttirirMi',
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
            'Baş ağrınıza iştahsızlık eşlik eder mi?',
        questionId: 'istahsizlik',
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
            'Baş ağrınıza bulantı ve/veya kusma eşlik eder mi?',
        questionId: 'bulanti',
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
            'Baş ağrınız sırasında ışık ağrınızı arttırır mı ya da, baş ağrınız sırasında loş/karanlık bir ortam tercih eder misiniz?',
        questionId: 'azIsik',
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
            'Baş ağrınız sırasında, daha önce rahatsız etmeyecek derecedeki sesler sizi rahatsız eder mi ya da baş ağrınız sırasında sessiz bir ortamı tercih eder misiniz?',
        questionId: 'azSes',
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
            'Aşağıda baş ağrısını tetikleyen bir faktör varsa, seçilmelidir.',
        questionId: 'tetikleyenFaktor',
        questionSettings: {
            maxMultiSelect: 6,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Adet Dönemi',
                value: 'adetDonemi'
            },
            {
                optionText: 'Stres',
                value: 'stres'
            },
            {
                optionText: 'Öğün Atlamak/Geciktirmek',
                value: 'ogunAtlamak'
            },
            {
                optionText: 'Az Uyumak',
                value: 'azUyumak'
            },
            {
                optionText: 'Çok Uyumak',
                value: 'cokUyumak'
            },
            {
                optionText: 'Parlak/Yanıp-Sönen Işıklar',
                value: 'parlakIsik'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Aşağıda baş ağrısını tetikleyen bir faktör varsa, seçilmelidir.',
        questionId: 'tetikleyenFaktor',
        questionSettings: {
            maxMultiSelect: 6,
            minMultiSelect: -1,
        },
        options: [
            {
                optionText: 'Televizyon/Video Oyunları',
                value: 'televizyon'
            },
            {
                optionText: 'Keskin Kokular',
                value: 'kokular'
            },
            {
                optionText: 'Fizik Egzersiz',
                value: 'egzersiz'
            },
            {
                optionText: 'Hava Şartları (lodos vb)',
                value: 'havaSartlari'
            },
            {
                optionText: 'Alkol',
                value: 'alkol'
            },
            {
                optionText: 'Yiyecekler (örneğin; çikolata)',
                value: 'yiyecekler'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Cinsiyetinizi Seçiniz.',
        questionId: 'cinsiyet',
        options: [
            {
                optionText: 'KADIN',
                value: 'kadin'
            },
            {
                optionText: 'ERKEK',
                value: 'erkek'
            }
        ]
    }
];
//Ekranin ust kismi
export default class SurveyScreen extends Component {
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
        this.state = { backgroundColor: WHITE };
    }

    onSurveyFinished(answers) {
        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }
        if (answersAsObj.cinsiyet.value == 'kadin'){
            this.props.navigation.navigate('SurveyScreenWoman', {surveyAnswers: answersAsObj})
        }
        else {
            this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj });
        }
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
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
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