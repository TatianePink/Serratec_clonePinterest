import React, { useState } from 'react';
import { View, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions, Text, Alert, TextInput, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import styles from '../../styles/styles';
// import Pin from "./Login"
// import Login from "./Login"
import style from './style';

interface Pin {
  id: string;
  image: any;
}

const pins: Pin[] = [
  { id: '1', image: require('../../assets/pin1.png') },
  { id: '2', image: require('../../assets/pin2.png') },
  { id: '3', image: require('../../assets/pin3.png') },
  { id: '4', image: require('../../assets/pin4.png') },
  { id: '5', image: require('../../assets/pin5.png') },
  { id: '6', image: require('../../assets/pin6.png') },
  { id: '7', image: require('../../assets/pin7.png') },
  { id: '8', image: require('../../assets/pin8.png') },
  { id: '9', image: require('../../assets/pin9.png') },
];

const Login = () => {
  const renderItem = ({ item }: { item: Pin }) => (
    <View style={style.pinContainer}>
      <Image source={item.image} style={style.pinImage} />
    </View>
  );

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log('Pegando informações', email, password);
  };

  return (
    <View style={style.container}>
     
      <FlatList
        data={pins}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={style.pinGrid}
      />
    <View style={style.fundoContainer}></View> 
    <View style={style.loginContainer}>
        <Image source={require("../../assets/logopinterest.png")} style={style.image} />
        <Text style={style.title}>Bem-vindo(a) ao</Text>
        <Text style={style.title}> Pinterest</Text>

        <TextInput
          style={style.input}
          placeholder="Endereço de email"
          placeholderTextColor="#aaa"
          onChangeText={setEmail}
          value={email}
        />

        <TouchableOpacity style={style.buttonPrimary} onPress={handleLogin}>
          <Text style={style.buttonPrimaryText}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonFacebook}>
          <Icon name="facebook" size={20} color="#fff" />
          <Text style={style.buttonFacebookText}>Continuar com o Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonGoogle}>
          <Icon name="google" size={20} color="#fff" />
          <Text style={style.buttonGoogleText}>Continuar com o Google</Text>
        </TouchableOpacity>


        <Text style={style.termosText}>
          Ao continuar, você concorda com os{' '}
          <Text style={style.linkText} onPress={() => Linking.openURL('https://www.pinterest.com/terms')}>
            Termos de Serviço
          </Text>{' '}
          do Pinterest e confirma que leu a nossa{' '}
          <Text style={style.linkText} onPress={() => Linking.openURL('https://www.pinterest.com/privacy')}>
            Política de Privacidade
          </Text>.{' '}
          <Text style={style.linkText} onPress={() => Linking.openURL('https://www.pinterest.com/data')}>
            Aviso na coleta de informações
          </Text>.
        </Text>
        </View>

      </View>
  // </View>
  );
};



export default Login;
