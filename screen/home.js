import React from 'react';

import { useState } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Alert, 
  StyleSheet,


} from 'react-native';

import Button from '../comp/button'
 




const Home = ({navigation}) => {

  function play(){
   
    console.log("go to play")
    navigation.navigate('Play')
}

function online(){
  alert("go to play")
  console.log("go to play")
  navigation.navigate('Online')
}

function settings(){
  alert("go to play")
  console.log("go to play")
 // navigation.navigate('Settings')
}

    
  return (
    <SafeAreaView>
      <View style={sty.cont}>
        <Button title='play' onClick={play} txtSty={sty.button}/>
        <Button title='online' onClick={online} txtSty={sty.button}/>
        <Button title='settings' onClick={settings} txtSty={sty.button}/>
      </View>

    </SafeAreaView>

  )
}

const sty = StyleSheet.create({
  button : {
    fontSize : 25,
    backgroundColor : "rgb(180,180,180)",
    marginLeft : 15,
    marginRight : 15,
    marginBottom: 5,
    borderRadius: 5,
    textAlign: 'center'
  },
  cont : {
    height : "100%",
    justifyContent : 'center'
  }

})

export default Home;