import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Card, CardBackground } from 'tamagui'
import { Ionicons, Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const Task_Prev_Card = ({ task, index, onComponentOpen }) => {

  const [extended, setExtended] = useState(false)
  const ref = useRef(null);

  useEffect(() => {
    console.log('swipe')
    if (!task.opened) {
      ref.current.close();
    }
  },[task.opened])

  const leftSwipe = () => {
    return (
      <TouchableOpacity className='flex flex-row justify-start items-center p-5 rounded-xl mr-1 bg-green-200 mt-5'
        onPress={() => {
          ref.current.close();
        }}
      >
        <MaterialIcons name="done" size={28} color="green" />
      </TouchableOpacity>
    )
  }

  const rightSwipe = () => {
    return (
      <View className='flex flex-row'>
        <TouchableOpacity className='flex flex-row justify-start items-center p-5 rounded-l-xl ml-1 bg-blue-200 mt-4'
          onPress={() => {
            ref.current.close();
          }}
        >
          <AntDesign name="edit" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-row justify-start items-center p-5 rounded-r-xl bg-red-200 mt-4'
          onPress={() => {
            ref.current.close();
          }}
        >
          <Ionicons name="trash-outline" size={28} color="red" />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <GestureHandlerRootView className="flex-1">
      <Swipeable renderRightActions={rightSwipe} renderLeftActions={leftSwipe} ref={ref} onSwipeableOpen={() => {
        onComponentOpen(index);
      }}>
        <TouchableOpacity className='mt-4 relative'
          onPress={() => { 
              console.log('triggered')   
            }}
        >
          <Card
            borderRadius={'$4.5'}
            minHeight={'$9'}
            padded
            // elevation={1}
            shadowColor={task.done ? 'gray' : 'lightgray'}
            backgroundColor={task.done ? '#A9FFB8' : 'white'}
          >
            <CardBackground
              backgroundColor={task.done ? '#A9FFB8' : 'white'}
              borderRadius={'$3.5'}
            />
            <View className='flex items-start flex-row justify-between'>
              {/* Task */}
              <View>
                <Text className='w-64 text-base text-justify tracking-wider text-blue-950'>
                  {task.title}
                </Text>
                {
                  task.subtasks.length > 0 && (
                    <Text className={task.done ? 'text-xs mt-3 font-bold text-blue-300' : 'text-xs mt-3 font-bold text-neutral-300'}>
                      {task.subtasks.filter(subtask => subtask.done).length} out of {task.subtasks.length} Subtasks Completed
                    </Text>
                  )
                }
              </View>
              {/* Date */}
              <View>
                <Text className='text-sm font-semibold text-gray-500 mt-1'>
                  {task.date}
                </Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

export default Task_Prev_Card