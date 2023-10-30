import { View, Text, TouchableOpacity, ImageBackground, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card, CardBackground, CardFooter, Image, Separator, Progress } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
  const [pressedZen, setPressedZen] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timer, setTimer] = useState(null)
  const [soundPlayed, setSoundPlayed] = useState(false);

  const togglePressedZen = () => {
    setPressedZen(!pressedZen);
    if (!pressedZen) {
      setTimer(setInterval(() => {
        setElapsedTime((prevElapsedTime) => {
          const newElapsedTime = prevElapsedTime + 1;
          return newElapsedTime;
        });
      }, 1000));
    } else {
      setElapsedTime(0);
      clearInterval(timer)
      setSoundPlayed(false);
      stopSound();
    }
  };

  const [sound, setSound] = useState();

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/audio-3.mp3')
      );
      setSound(sound);
    }

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playSound = async () => {
    if (sound) {
      try {
        // Play the sound and set it to loop
        await sound.playAsync({ shouldPlay: true, isLooping: true });
      } catch (error) {
        console.log('Error playing sound:', error);
      }
    }
  };

  const stopSound = async () => {
    if (sound) {
      try {
        // Stop the sound
        await sound.stopAsync();
      } catch (error) {
        console.log('Error stopping sound:', error);
      }
    }
  };

  const toggleSound = () => {
    if (sound) {
      if (soundPlayed) {
        stopSound();
      } else {
        playSound();
      }
      setSoundPlayed(!soundPlayed);
    }
  }


  return (
    <TamaguiProvider config={config}>
      <View className='flex-1 bg-[#fffbfb] px-3 pt-2'>
        <Card
          height={'$15'}
          borderRadius="$6"
          marginTop="$3"
          padded
          elevate
          elevation={6}
          shadowColor={'$green7Dark'}
        >
          <CardBackground
          >
            <LinearGradient
              colors={['#00d2ff', '#6DD5FA', '#FFFFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1, borderRadius: 10 }}
            />
          </CardBackground>
          <View className='flex'>
            <View className='flex items-center mb-1'>
              <Text className='text-black text-sm font-normal'>
                Your TRAXX Card - #309498
              </Text>
            </View>
            <View className='mt-2 flex flex-row mx-1 items-center justify-between'>
              <Text className='text-black text-sm tracking-wider font-light'>
                Tasks Completed:
              </Text>
              <Text className='text-black text-lg font-light tracking-wide'>200</Text>
            </View>
            <View className='mt-2 flex flex-row mx-1 items-center justify-between'>
              <Text className='text-black text-sm tracking-wider  font-light'>
                Average Daily Tasks Completed:
              </Text>
              <Text className='text-black text-lg font-light tracking-wide'>12.5</Text>
            </View>
            <View className='mt-2 flex flex-row mx-1 items-center justify-between'>
              <Text className='text-black text-sm tracking-wider font-light'>
                Time Spent Concentrating:
              </Text>
              <Text className='text-black text-lg font-light tracking-wide'>100+ hrs</Text>
            </View>
          </View>
          <Separator marginVertical={12} borderColor={'black'} />
          <CardFooter>
            <View className='flex-1'>
              <Text className='text-black text-right text-xs font-normal tracking-wide'>
                issued by TRAXX
              </Text>
            </View>
          </CardFooter>
        </Card>
        <View>
          <Card
            height={'$8'}
            borderRadius="$6"
            marginTop="$3"
            padding="$2"
            elevate
            elevation={6}
            shadowColor={'$green7Dark'}
          >
            <CardBackground
              borderRadius="$5"
            >
              <LinearGradient
                colors={['#6DD5FA', '#FFFFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, borderRadius: 6 }}
              />
            </CardBackground>
            <View className='flex'>
              <View className='flex flex-row items-center gap-x-4 pb-3'>
                <Text className='text-black tracking-wide font-light'>
                  Today's Tasks Remaining:
                </Text>
                <Text className='text-black text-2xl font-light tracking-wide'>10</Text>
              </View>
              <View className='flex flex-row justify-between items-center'>
                <Progress size={'$2'} value={40} width={'88%'}>
                  <Progress.Indicator animation="bouncy" backgroundColor={'$blue8Dark'} />
                </Progress>
                <Text className='text-black text-xs'>
                  33%
                </Text>
              </View>
            </View>
          </Card>
        </View>
        <View className='flex flex-row gap-x-2 justify-center'>
          <TouchableOpacity className='mt-4 flex bg-blue-950 p-3 rounded-xl'
            onPress={togglePressedZen}
            style={
              {
                width: pressedZen ? '82%' : '100%',
              }
            }
          >
            <Text className='text-white text-lg text-center tracking-wider'>
              {
                (!pressedZen) ? (
                  "Start Zen"
                ) : (
                  "Stop Zen"
                )
              }
            </Text>
          </TouchableOpacity>

          {
            (!pressedZen) ? (
              null
            ) : (
              <TouchableOpacity
                className='mt-4 p-3 rounded-full bg-blue-950'
                onPress={toggleSound}
              >
                {
                  (!soundPlayed) ? (
                    <AntDesign name="play" size={27} color="white" />
                  ) : (
                    <AntDesign name="pausecircle" size={27} color="white" />
                  )
                }
              </TouchableOpacity>
            )
          }
        </View>
        {
          (!pressedZen) ? (
            null
          ) : (<>
            <View className='bg-blue-50 h-80 w-full mt-4 rounded-3xl overflow-hidden mx-auto'>
              <ImageBackground
                source={require('../assets/spinner-4.gif')}
                className='h-80 items-center justify-center rounded-full'
                resizeMode='cover'
              >
                <Text className='text-blue-950 text-2xl font-medium text-center tracking-wider'>
                  {
                    elapsedTime < 60 ? (
                      elapsedTime + " secs"
                    ) : (
                      Math.floor(elapsedTime / 60) + " mins" + " " + (elapsedTime % 60) + " secs"
                    )
                  }
                </Text>
              </ImageBackground>
            </View>
          </>
          )
        }
        <View className='mt-4'>

        </View>
      </View>
    </TamaguiProvider>
  )
}

export default HomeScreen
