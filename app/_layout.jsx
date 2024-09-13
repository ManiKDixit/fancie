import { StyleSheet, Text, View , LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const RootLayout = () => {
  LogBox.ignoreAllLogs();
  return (
   <Stack>
    <Stack.Screen name='index' options={{headerShown:false}} />
    <Stack.Screen name='onboarding' options={{headerShown:false}} />
    
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />
        <Stack.Screen name="item" options={{headerShown:false}} />

  
   </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})