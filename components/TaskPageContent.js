import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Separator } from 'tamagui'
import Task_Prev_Card from './Task_Prev_Card';
import { FlashList } from "@shopify/flash-list";

const TaskPageContent = () => {
    const [cardData, setCardData] = useState(data);

    const onComponentOpen = (index) => {
        let temp = [...cardData];
        temp.map((item, i) => {
            if (i === index) {
                item.opened = true;
                return item;
            } else {
                item.opened = false;
                return item;
            }
        })
        setCardData(temp);
    }
    return (
        <FlashList
            data={cardData}
            horizontal={false}
            renderItem={({ item, index }) => (
                <Task_Prev_Card task={item} index={index} onComponentOpen={onComponentOpen} />
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
const data = [
    {
        date: 'Nov 1',
        title: 'Buy Cake and Candles for Birthday',
        opened: false,
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
        title: 'Buy Cake and Candles for Birthday and also buy some gifts for friends and family.',
        opened: false,
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
        opened: false,
        subtasks: [],
        done: false,
    },
    {
        date: 'Nov 1',
        title: 'Prepare for the OS exam',
        opened: false,
        subtasks: [],
        done: true,
    },
    {
        date: 'Nov 1',
        title: 'Prepare for the ESE exam',
        opened: false,
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
