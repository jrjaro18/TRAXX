import { View, Text } from 'react-native'
import React from 'react'
import { Separator } from 'tamagui'
import Task_Prev_Card from './Task_Prev_Card';
import { FlashList } from "@shopify/flash-list";

const TaskPageContent = () => {
    return (
        <FlashList
            data={cardData}
            horizontal={false}
            renderItem={({ item }) => (
                <Task_Prev_Card data={item} />
            )}
            estimatedItemSize={cardData.length}
            ListHeaderComponent={() => (
                <View className='flex flex-row justify-between items-center mx-2'>
                    <Text className='text-blue-950 font-light text-xl tracking-wider'>
                        Today
                    </Text>
                    <Text className='text-blue-950 text-sm tracking-wider'>
                        Remaining: 10
                    </Text>
                </View>
            )}
            ListFooterComponent={() => (
                <>
                    <Separator marginTop={24} borderColor={'lightgray'} />
                    <View className='p-3' />
                </>
            )}
            keyExtractor={item => item.title}
            scrollEventThrottle={100}
            showsVerticalScrollIndicator={false}
            decelerationRate="fast"
        />
    )
}

export default TaskPageContent

// title->str, description->str, subtasks->array=>{title->str, done->bool}, done->bool
const cardData = [
    {
        date: 'Nov 1',
        title: 'Buy Cake and Candles for Birthday',
        description: 'Buy Cake and Candles for Birthday and also buy some gifts for her.',
        subtasks: [
            {
                title: 'Buy a 500gm Cake',
                done: true,
            },
            {
                title: 'Buy 5 candles',
                done: false,
            },
            {
                title: 'Buy a gift',
                done: false,
            }
        ],
        done: false,
    },
    {
        date: 'Nov 1',
        title: 'Buy Cake and Candles for Birthday and also buy some gifts for her.',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subtasks: [
            {
                title: 'Buy a 500gm Cake',
                done: true,
            },
            {
                title: 'Buy 5 candles',
                done: false,
            },
            {
                title: 'Buy a gift',
                done: false,
            },
            {
                title: 'Decorate the house',
                done: false,
            },
            {
                title: 'Invite friends',
                done: false,
            },
            {
                title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                done: false,
            }
        ],
        done: false,
    },
    {
        date: 'Nov 1',
        title: 'Prepare for the DBMS exam',
        description: '',
        subtasks: [],
        done: false,
    },
    {
        date: 'Nov 1',
        title: 'Prepare for the OS exam',
        description: '',
        subtasks: [],
        done: true,
    },
    {
        date: 'Nov 1',
        title: 'Prepare for the ESE exam',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subtasks: [
            {
                title: 'Prepare for the LA exam',
                done: true,
            },
            {
                title: 'Prepare for the OS exam',
                done: true,
            }
        ],
        done: true,
    }
]
