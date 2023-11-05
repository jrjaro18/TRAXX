import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Card, CardBackground, Separator } from 'tamagui'
import { Ionicons, Entypo, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const Task_Prev_Card = ({ task, taskIndex, onComponentOpen, onTaskComplete, onTaskDelete, onTaskEdit, onSubTaskComplete, onSubTaskDelete }) => {
  const [extended, setExtended] = useState(false)
  const ref = useRef(null);
  console.log("task list item rendered")

  useEffect(() => {
    console.log('swipe')
    if (!task.opened) {
      ref.current.close();
    }
  }, [task.opened])

  const leftSwipe = () => {
    return (
      <TouchableOpacity className='flex flex-row justify-start items-center p-5 bg-emerald-200 mt-4'
        onPress={() => {
          onTaskComplete(taskIndex);
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
        <TouchableOpacity className='flex flex-row justify-start items-center p-5 bg-blue-200 mt-4'
          onPress={() => {
            ref.current.close();
          }}
        >
          <AntDesign name="edit" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-row justify-start items-center p-5 bg-red-200 mt-4'
          onPress={() => {
            ref.current.close();
            onTaskDelete(taskIndex);
          }}
        >
          <Ionicons name="trash-outline" size={28} color="red" />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <GestureHandlerRootView className="flex-1 mx-1">
      <Swipeable
        leftThreshold={100} rightThreshold={40} enabled={!extended && !(Platform.OS === 'ios')} renderRightActions={rightSwipe} renderLeftActions={leftSwipe} ref={ref} onSwipeableOpen={() => {
          onComponentOpen(taskIndex); 
        }}
      >
        <TouchableOpacity className='mt-4 relative'
          onPress={() => {
            console.log('triggered')
            setExtended(!extended);
          }}
        >
          <Card
            minHeight={'$9'}
            padded
            // elevationAndroid={5}
            // shadowColor={task.done ? 'gray' : 'red'}
            backgroundColor={task.done ? '#A9FFB8' : 'white'}
            borderRadius={"$1.5"}
          >
            <CardBackground
              backgroundColor={task.done ? 'rgb(110 231 183)' : 'white'}
              borderRadius={"$1"}
            />
            <View className='flex items-start flex-row justify-between'>
              {/* Task */}
              <View>
                <Text className='w-64 text-base text-justify tracking-wider text-blue-950'>
                  {task.title}
                </Text>
                <View className='flex flex-row justify-start gap-x-4 items-center'>
                  <Text className={task.done ? 'bg-white p-1 rounded-md text-xs mt-3 font-bold text-emerald-500 w-20 text-center' : 'text-xs p-1 rounded-md bg-neutral-800 mt-3 font-bold text-neutral-50 w-20 text-center'}>
                    {task.category}
                  </Text>
                  {
                    task.subtasks.length > 0 ? (
                      <Text className={task.done ? 'text-xs mt-3 font-bold text-emerald-500' : 'text-xs mt-3 font-bold text-neutral-300'}>
                        {task.subtasks.filter(subtask => subtask.done).length} out of {task.subtasks.length} Subtasks Completed
                      </Text>
                    ) : (
                      <Text className={task.done ? 'text-xs mt-3 font-bold text-emerald-500' : 'text-xs mt-3 font-bold text-neutral-300'}>
                        No Subtasks
                      </Text>
                    )
                  }
                </View>
              </View>
              {/* Date */}
              <View>
                <Text className='text-sm font-semibold text-gray-500 mt-1'>
                  {task.date}
                </Text>
              </View>
            </View>
            {
              extended && (
                <View className='mt-2'>
                  {
                    task.subtasks.map((subtask, index) => (
                      <View key={index} className='flex flex-row justify-between items-start'>
                        <TouchableOpacity className='flex flex-row items-start gap-x-2 pt-3'
                          onPress={() => {
                            onSubTaskComplete(taskIndex, index);
                          }}
                        >
                          <View className='pt-1'>
                            {
                              subtask.done ? (
                                <AntDesign name="checkcircle" size={22} color="black" />
                              ) : (
                                <Entypo name="circle" size={22} color="black" />
                              )
                            }
                          </View>
                          <Text className='text-base w-72'>
                            {subtask.title}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='mt-3 p-1 bg-gray-100 rounded-md'
                          onPress={() => {
                            onSubTaskDelete(taskIndex, index);
                          }}
                        >
                          <Feather name="trash" size={18} color="darkred" />
                        </TouchableOpacity>
                      </View>
                    ))
                  }
                  <Separator marginTop={24} borderColor={'black'} />
                  <View className='mt-1 flex flex-row justify-between'>
                    <View className='flex justify-between w-2/4'>
                      <TouchableOpacity className='flex w-40 flex-row justify-start items-center mt-3 p-2 bg-red-300'
                        onPress={() => {
                          ref.current.close();
                          onTaskDelete(taskIndex);
                        }}
                      >
                        <Feather name="trash" size={24} color="black" />
                        <Text className='text-base px-2'>
                          Delete Task
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className='flex w-40 flex-row justify-start items-center mt-2 p-2 bg-blue-200'>
                        <AntDesign name="edit" size={24} color="black" />
                        <Text className='text-base ml-2 px-2'>
                          Edit Task
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity className='flex flex-row justify-center items-center mt-3 w-2/4 bg-green-300'
                      onPress={() => {
                        onTaskComplete(taskIndex);
                      }}
                    >
                      <AntDesign name="check" size={20} color="black" />
                      <Text className='text-base px-2'>
                        {task.done ? 'Undone Task' : 'Complete Task'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }
          </Card>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView >
  )
}

export default Task_Prev_Card