import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Card, CardBackground } from 'tamagui'
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

const Task_Prev_Card = (data) => {
  const task = data.data
  const [extended, setExtended] = useState(false)
  
  return (
    <View className='mt-4 relative'>
      <Card
        borderRadius={'$4.5'}
        minHeight={'$8'}
        padded
        elevation={2}
        shadowColor={task.done?'green':'lightgray'}
      >
        <CardBackground
          backgroundColor={task.done ? '$green5Light' : 'white'}
          borderRadius={'$3.5'}
        />
        <View className='flex items-start flex-row justify-between'>
          {/* Done */}
          <TouchableOpacity className={task.done ? ' rounded-full mt-1 p-1 bg-green-400' : 'rounded-full mt-1'}>
            {
              task.done ? (
                <MaterialIcons name="done" size={20} color="white" />
              ) : (
                <Entypo name="circle" size={29} color="rgb(229,231,235)" />
              )
            }
          </TouchableOpacity>
          {/* Task */}
          <View>
            <Text className='w-56 text-base text-justify tracking-wider text-blue-950'>
              {task.title}
            </Text>
            {
              task.subtasks.length > 0 && (
                <Text className={task.done?'text-xs mt-3 font-bold text-gray-400':'text-xs mt-3 font-bold text-gray-300'}>
                  + {task.subtasks.length} subtasks
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
        <TouchableOpacity className='absolute bottom-3 right-3'>
          <Ionicons name="chevron-down-outline" size={24} color="gray" />
        </TouchableOpacity>
      </Card>
    </View>
  )
}

export default Task_Prev_Card