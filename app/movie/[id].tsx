import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Deatils = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie details : {id}</Text>
    </View>
  )
}

export default Deatils

const styles = StyleSheet.create({})