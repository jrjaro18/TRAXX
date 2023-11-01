import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'tamagui'
import Card_Tasks_1 from '../components/Card_Tasks_1'
import { Ionicons } from '@expo/vector-icons';
import TaskPageContent from '../components/TaskPageContent';

const TaskScreen = () => {
    return (
        <View className='flex-1 bg-neutral-900'>
            <View className='h-2/6 p-3'>
                <View className='flex flex-row justify-between items-center mb-4'>
                    <Text className='text-white font-light text-2xl tracking-wider'>
                        Categories
                    </Text>
                    <Text className='text-white font-extralight text-base tracking-wider'>
                        ({new Date().toLocaleDateString()}) - {days[new Date().getDay()]}
                    </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={0.0000001} className='flex flex-row gap-x-3 mt-1'>
                    {cardData.map((card, index) => (
                        <View key={index}>
                            <Card_Tasks_1 card={card} />
                        </View>
                    ))}
                </ScrollView>
            </View>
            <ScrollView className='bg-slate-100 rounded-t-3xl p-3 overflow-hidden'>
                <TaskPageContent />         
            </ScrollView>
            <TouchableOpacity className='absolute bottom-4 right-4 bg-neutral-800 p-2 rounded-xl'>
                <Ionicons name="ios-add" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default TaskScreen

const cardData = [
    {
        title: 'HOME',
        tasks: 5,
        progress: 0,
        image: require('../assets/bg-1.jpg')
    },
    {
        title: 'WORK',
        tasks: 3,
        progress: 25,
        image: require('../assets/bg-2.jpg')
    },
    {
        title: 'SHOPPING',
        tasks: 2,
        progress: 33,
        image: require('../assets/bg-4.jpg')
    },
    {
        title: 'STUDY',
        tasks: 1,
        progress: 70,
        image: require('../assets/bg-2.jpg')
    },
    {
        title: 'TRAVEL',
        tasks: 4,
        progress: 80,
        image: require('../assets/bg-1.jpg')
    },
    {
        title: 'HOBBIES',
        tasks: 2,
        progress: 100,
        image: require('../assets/bg-4.jpg')
    },
    {
        title: 'PERSONAL',
        tasks: 2,
        progress: 100,
        image: require('../assets/bg-2.jpg')
    },
    {
        title: 'FINANCE',
        tasks: 1,
        progress: 100,
        image: require('../assets/bg-1.jpg')
    },
    {
        title: 'SELF-GROWTH',
        tasks: 1,
        progress: 100,
        image: require('../assets/bg-4.jpg')
    },
    {
        title: 'OTHERS',
        tasks: 1,
        progress: 100,
        image: require('../assets/bg-1.jpg')
    }
]

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']