import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card, CardBackground, CardFooter, Image, Separator, Progress } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { BarChart } from "react-native-gifted-charts";
import { useKeepAwake } from 'expo-keep-awake';
import { FlashList } from '@shopify/flash-list/dist';
import TaskStatCard from '../components/TaskStatCard';

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

  useKeepAwake();

  return (
    <ScrollView className='flex-1 bg-white px-3 pt-2'>
      {/* TRAXX CARD */}
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
            colors={['#FFFFFF', '#83EAF1', '#63CFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, borderRadius: 10 }}
          />
        </CardBackground>
        <View className='flex'>
          <View className='flex items-center mb-1'>
            <Text className='text-blue-950'>
              Your TRAXX Card - #309498
            </Text>
          </View>
          <View className='mt-2 flex flex-row mx-1 items-center justify-between'>
            <Text className='text-blue-950 text-sm tracking-wider font-light'>
              Tasks Completed:
            </Text>
            <Text className='text-blue-950 text-lg font-light tracking-wide'>200</Text>
          </View>
          <View className='mt-2 flex flex-row mx-1 items-center justify-between'>
            <Text className='text-blue-950 text-sm tracking-wider  font-light'>
              Average Daily Tasks Completed:
            </Text>
            <Text className='text-blue-950 text-lg font-light tracking-wide'>12.5</Text>
          </View>
          <View className='mt-2 flex flex-row mx-1 items-center justify-between'>
            <Text className='text-blue-950 text-sm tracking-wider font-light'>
              Time Spent Concentrating:
            </Text>
            <Text className='text-blue-950 text-lg font-light tracking-wide'>100+ hrs</Text>
          </View>
        </View>
        <Separator marginVertical={12} borderColor={'black'} />
        <CardFooter>
          <View className='flex-1'>
            <Text className='text-blue-950 text-right text-xs font-normal tracking-wide'>
              issued by TRAXX
            </Text>
          </View>
        </CardFooter>
      </Card>

      {/* REMAINING TASK CARD */}

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
              colors={['#FFFFFF', '#83EAF1', '#63CFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1, borderRadius: 6 }}
            />
          </CardBackground>
          <View className='flex'>
            <View className='flex flex-row items-center gap-x-4 pb-3'>
              <Text className='text-blue-950 tracking-wide font-light'>
                Today's Tasks Remaining:
              </Text>
              <Text className='text-blue-950 text-2xl font-light tracking-wide'>10</Text>
            </View>
            <View className='flex flex-row justify-between items-center'>
              <Progress size={'$2'} value={40} width={'88%'}>
                <Progress.Indicator animation="bouncy" backgroundColor={'$blue7Dark'} />
              </Progress>
              <Text className='text-blue-950 text-xs'>
                33%
              </Text>
            </View>
          </View>
        </Card>
      </View>

      {/* ZEN BUTTON AND STUFF */}
      <View>
        <View className='flex flex-row gap-x-2 justify-center items-center'>
          <TouchableOpacity className='mt-4 flex bg-sky-950 p-3 rounded-xl'
            onPress={togglePressedZen}
            style={
              {
                width: pressedZen ? '86%' : '97%',
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
              <TouchableOpacity className='mt-4'
                onPress={toggleSound}
              >
                {
                  (!soundPlayed) ? (
                    <AntDesign name="play" size={32} color="rgb(8 47 73)" />
                  ) : (
                    <AntDesign name="pausecircle" size={32} color="rgb(8 47 73)" />
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
      </View>

      <Separator horizontal marginVertical={'$2.5'} backgroundColor={'rgb(23,37,84)'} className='mx-auto w-11/12 mt-5' />

      {/* WEEKLY PROGRESS CHART */}
      <View className='mt-2 bg-[#ECF7FF] rounded-xl pt-3 pb-10 mx-auto overflow-hidden w-full flex justify-center'>
        <Text className='text-xl text-center font-normal text-blue-950 tracking-wide'>
          Your Weekly Progress
        </Text>
        <View>
          <BarChart
            barWidth={24}
            barBorderRadius={4}
            frontColor="lightgray"
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
            isAnimated={false}
            animationDuration={0}
            showFractionalValues={false}
            maxValue={18}
            noOfSections={3}
            height={175}
            backgroundColor="transparent"
            rulesColor={'gray'}
            rulesType='dashed'
          />
        </View>
      </View>

      {/* STATS CARD SET */}
      <View className='mt-4'>
        <FlashList
          data={cardDetails}
          horizontal={true}
          renderItem={({ item }) => (
            <View className='mr-2'>
              <TaskStatCard cardDetail={item} />
            </View>
          )}
          estimatedItemSize={cardDetails.length}
          keyExtractor={item => item.title}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          snapToInterval={292}
          snapToAlignment='start'
          decelerationRate={0}
        />
      </View>

      <View className='mb-8' />
    </ScrollView>
  )
}

export default HomeScreen

const barData = [
  { value: 10, label: 'M' },
  { value: 5, label: 'T', frontColor: '#177AD5' },
  { value: 4, label: 'W', frontColor: '#177AD5' },
  { value: 5, label: 'T' },
  { value: 12, label: 'F', frontColor: '#177AD5' },
  { value: 1, label: 'S' },
  { value: 0, label: 'S' },
];

const cardDetails = [
  {
    title: 'Number of Tasks Completed this Month',
    value: '40',
  },
  {
    title: 'Number of Tasks Completed this Year',
    value: '99+',
  },
  {
    title: 'Number of Hours Spent Concentrating this Month',
    value: '99+',
  }

]