import React from 'react'
import { Text, View, Image } from 'react-native'

const ImagesExample = (imageUrl, ) => (
  <View>
    <Image 
      source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
      style = {{ width: 200, height: 200 }}
    />
    <Text>Beer pong</Text>
    <Text>Beer pong</Text>
    <Text>Beer pong</Text>
   </View>
)
export default ImagesExample