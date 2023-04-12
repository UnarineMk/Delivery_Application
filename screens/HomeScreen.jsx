import { View, Text, StatusBar} from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-200">
      <Text>Open up on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen