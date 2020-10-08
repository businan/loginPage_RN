import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const App = () => {
  const [textMail, setText] = useState('');
  const [textPassword, setPass] = useState('');
  
  const [visible, setVisibility] = React.useState(false);
  const [secure, setSecureText] = React.useState(false);

  const icon = !visible ? 'eye-slash' : 'eye';

  const pass = !secure ? true : false;

  const showAlert = () =>{
    
    if((textPassword===state.password) && (textMail===state.username)){
      Alert.alert(
       'Sitemize Hosgeldiniz ' + textMail
    )
    }else{
      Alert.alert(
        'Sifreniz veye Parolaniz hatali Lutfen tekrar deneyin...' 
     )
    }
    
 };
 state = {
  username: 'Demo',
  password: 'Demo'
};

  return (
    
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('./img/shopingCar.png')}
            resizeMode="contain"
          />
        </View>

        <TextInput
          style={styles.textInputArea}
          placeholder="E-posta giriniz"
          keyboardType="email-address"
          value={textMail}
          onChangeText={(value) => setText(value)}
          
          
        />
        <KeyboardAwareScrollView>
        <View style={{flex: 1, flexDirection:'row', justifyContent:'center',}}>
          <TextInput
            style={styles.textInputArea}
            placeholder="Sifre giriniz"
            value={textPassword}
            secureTextEntry={pass}
            onChangeText={(value) => setPass(value)}
            
            
          />
          <Icon
            name={icon}
            color={'#000'}
            onPress={() => {
              setVisibility(!visible)
              setSecureText(!secure)
            }}
            style={styles.icons}
            size={24}
          />
        </View>
        </KeyboardAwareScrollView>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setText('');
              setPass('');
              showAlert();
            }}>
            <Text style={styles.buttonText}>Giris Yap</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Kayit Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#e85d04',
  },
  logoView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 250,
    height: 150,
  },
  textInputArea: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderWidth: 0,
    alignSelf:'center',
    marginTop:30,
    padding: 10,
    borderRadius: 10,
    fontSize:20,
    
  },
  buttonView: {
    flex: 3,
    // backgroundColor:'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0096c7',
    padding: 15,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  icons: {
    marginLeft:-15,
    position:'absolute',
    right:60,
    top:42,
    
  },
});

export default App;
