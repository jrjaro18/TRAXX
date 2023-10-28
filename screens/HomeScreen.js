import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Card, CardBackground, CardFooter, Image, Separator, Progress } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'

const HomeScreen = () => {
  const [count, setCount] = useState(0)
  return (
    <TamaguiProvider config={config}>
      <View className='flex-1 bg-[#0A0A0A] p-3'>
        <View>
          <Card
            height={'$15'}
            borderRadius="$6"
            marginTop="$3"
            padded
          >
            <CardBackground
            >
              <Image
                resizeMode="cover"
                borderRadius="$4"
                source={{
                  height: '100%',
                  uri: require('../assets/bg-3.jpg')
                }}
              />
            </CardBackground>
            <View className='flex'>
              <View className='flex items-center mb-1'>
                <Text className='text-white text-sm font-light'>
                  Your TAXX Card - #309498
                </Text>
              </View>
              <View className='mt-2 flex flex-row mx-1 items-center justify-between'>
                <Text className='text-white text-sm tracking-wider font-extralight'>
                  Tasks Completed:
                </Text>
                <Text className='text-white text-xl font-light tracking-wide'>200</Text>
              </View>
              <View className='mt-2 flex flex-row mx-1 items-center justify-between'>
                <Text className='text-white text-sm tracking-wider  font-extralight'>
                  Average Daily Tasks Completed:
                </Text>
                <Text className='text-white text-xl font-light tracking-wide'>12.5</Text>
              </View>
              <View className='mt-2 flex flex-row mx-1 items-center justify-between'>
                <Text className='text-white text-sm tracking-wider font-extralight'>
                  Time Spent Concentrating:
                </Text>
                <Text className='text-white text-xl font-light tracking-wide'>100+ hrs</Text>
              </View>
            </View>
            <Separator marginVertical={12} borderColor={'white'} />
            <CardFooter>
              <View className='flex-1'>
                <Text className='text-white text-right text-xs font-medium tracking-wide'>
                  issued by TAXX
                </Text>
              </View>
            </CardFooter>
          </Card>
        </View>
        <View>
          <Card
            height={'$8'}
            borderRadius="$6"
            marginTop="$3"
            padding="$2"
          >
            <CardBackground
              borderRadius="$5"
            >
              <LinearGradient
                colors={['#000', 'gray']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, borderRadius: 6 }}
              />
            </CardBackground>
            <View className='flex'>
              <View className='flex flex-row items-center gap-x-4 pb-3'>
                <Text className='text-white tracking-wide font-light'>
                  Today's Tasks Remaining:
                </Text>
                <Text className='text-white text-2xl font-light tracking-wide'>10</Text>
              </View>
              <View className='flex flex-row justify-between items-center'>
                <Progress size={'$2'} value={40} width={'88%'}>
                  <Progress.Indicator animation="bouncy" />
                </Progress>
                <Text className='text-white text-xs'>
                  33%
                </Text>
              </View>
            </View>
          </Card>
        </View>
        <TouchableOpacity className='mt-4 flex bg-[#262625d7] p-4 rounded-xl'>
          <Text className='text-white text-lg text-center tracking-wider'>
            Start Concentrating
          </Text>
        </TouchableOpacity>
      </View>
    </TamaguiProvider>
  )
}

export default HomeScreen