import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useRef } from 'react'
import TaskCategoryCard from '../components/TaskCategoryCard'
import { Ionicons } from '@expo/vector-icons';
import TaskPageContent from '../components/TaskPageContent';
import { Dimensions } from 'react-native';

const TaskScreen = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current
    const emptyPlaceholders = [{ empty: true, title: 1 }, ...cardData, { empty: true, title: 2 }];
    const width = Dimensions.get('window').width

    const item_size = 180
    return (
        <View className='flex-1 bg-neutral-800'>
            <View className='h-2/6 p-3'>
                <View className='flex flex-row justify-between items-center mb-4'>
                    <Text className='text-white font-light text-2xl tracking-wider'>
                        Categories
                    </Text>
                    <Text className='text-white font-extralight text-base tracking-wider'>
                        ({new Date().toLocaleDateString()}) - {days[new Date().getDay()]}
                    </Text>
                </View>
                <Animated.FlatList
                    data={emptyPlaceholders}
                    horizontal={true}
                    renderItem={({ item, index }) => {

                        if (item.empty) {
                            return <View style={{ width: (width - item_size) / 2 }} className="pr-4" />;
                        }

                        const inputRange = [
                            (index - 2) * item_size,
                            (index - 1) * item_size,
                            (index) * item_size,
                        ]

                        const translateY = scrollX.interpolate({
                            inputRange,
                            outputRange: [13, 10, 13]
                        })
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.3, 1, 0.3]
                        })
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.85, 1.01, 0.85]
                        })

                        return (
                            <Animated.View className='mr-4'
                                style={{
                                    transform: [{ translateY }, { scale }],
                                    opacity,
                                }}
                            >
                                <TaskCategoryCard card={item} />
                            </Animated.View>
                        );
                    }}
                    estimatedItemSize={cardData.length}
                    keyExtractor={item => item.title}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    snapToInterval={item_size}
                    snapToAlignment='start'
                    decelerationRate={0}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                />
            </View>
            <View className='bg-slate-100 rounded-t-3xl py-3 overflow-hidden flex-1 flex-grow'>
                <TaskPageContent />
            </View>
            <TouchableOpacity className='absolute bottom-2 right-4 bg-neutral-800 p-2 rounded-xl'>
                <Ionicons name="ios-add" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default TaskScreen

const cardData = [
    {
        title: 'TODAY',
        tasks: 10,
        progress: 0,
        image: require('../assets/icon.png')
    },
    {
        title: 'HOME',
        tasks: 5,
        progress: 0,
        image: require('../assets/bg-7.jpg')
    },
    {
        title: 'WORK',
        tasks: 3,
        progress: 25,
        image: require('../assets/bg-9.jpg')
    },
    {
        title: 'SHOPPING',
        tasks: 2,
        progress: 33,
        image: require('../assets/bg-11.jpg')
    },
    {
        title: 'STUDY',
        tasks: 1,
        progress: 70,
        image: require('../assets/bg-8.jpg')
    },
    {
        title: 'TRAVEL',
        tasks: 4,
        progress: 80,
        image: require('../assets/bg-13.jpg')
    },
    {
        title: 'HOBBIES',
        tasks: 2,
        progress: 100,
        image: require('../assets/icon.png')
    },
    {
        title: 'PERSONAL',
        tasks: 2,
        progress: 100,
        image: require('../assets/bg-13.jpg')
    },
    {
        title: 'FINANCE',
        tasks: 1,
        progress: 100,
        image: require('../assets/bg-9.jpg')
    },
    {
        title: 'SELF-GROWTH',
        tasks: 1,
        progress: 100,
        image: require('../assets/bg-7.jpg')
    },
    {
        title: 'OTHERS',
        tasks: 1,
        progress: 100,
        image: require('../assets/bg-13.jpg')
    },
]

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']