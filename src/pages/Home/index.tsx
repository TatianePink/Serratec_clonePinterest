import React from 'react';
import { View, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import  from '../../styles/styles';
// import { styles } from "./style";
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
  { id: '10', image: require('../../assets/pin10.png') },
];

const Home = () => {
  const renderItem = ({ item }: { item: Pin }) => (
    <View style={style.pinContainer}>
      <Image source={item.image} style={style.pinImage} />
      {/* <Icon name="ellipsis-h" size={30} color="#fff"   alignItems: 'left' /> */}
      <Icon name="ellipsis-h" size={15} color="#fff" style={style.iconOptions} /> 

    </View>
  );

  return (
    <View style={style.container}>
      <View style={style.navBar2}>
        <TouchableOpacity style={style.navButton}>
          <Text style={style.navButtonText2}>Tudo</Text>
          <Icon name="minus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={pins}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={style.pinGrid}
      />

      <View style={style.navBarBottom}>
        <TouchableOpacity style={style.navButton}>
          <Icon name="home" size={30} color="#fff" />
          <Text style={style.navButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.navButton}>
          <Icon name="search" size={30} color="#999" />
          <Text style={style.navButtonText}>Pesquisar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.navButton}>
          <Icon name="plus" size={30} color="#fff" />
          <Text style={style.navButtonText}>criar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.navButton}>
          <Icon name="comment" size={30} color="#fff" />
          <Text style={style.navButtonText}>Notificaçao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.navButton}>
          <Icon name="user" size={30} color="#fff" />
          <Text style={style.navButtonText}>Salvos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Home;