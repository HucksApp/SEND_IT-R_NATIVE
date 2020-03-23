import React from 'react'
import { Text, View, ImageBackground, Icon } from 'react-native'

import { homeStyles }  from '../styles/home'
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
    return (
    <ImageBackground source={require('../assets/back1.jpg')} style={homeStyles.bckImg}>
      <View style={homeStyles.home}>
        <MaterialIcons name='restaurant-menu'/>
        <Text style={homeStyles.brand}> SEND IT </Text>
      </View>
    </ImageBackground>
    )
  };

  