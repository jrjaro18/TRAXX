import { View, Text, LayoutAnimation } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import Task_Prev_Card from './Task_Prev_Card';
import { FlashList } from "@shopify/flash-list";


const TaskPageContent = () => {
    console.log("here")
    const [cardData, setCardData] = useState(data);
    const list = useRef(null);

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

    const onTaskComplete = (index) => {
        // Clone the original array
        let temp = [...cardData];
        // Toggle the 'done' property of the task at the specified index
        temp[index].done = !temp[index].done;
        if(temp[index].done) {
            temp[index].subtasks.map((item) => {
                item.done = true;
                return item;
            })
        }
        // Sort the tasks so that completed tasks appear at the end
        temp.sort((a, b) => a.done - b.done);
        // Update the state to trigger a re-render
        setCardData(temp);
        list.current?.prepareForLayoutAnimationRender();
        // After removing the item, we can start the animation.
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    const onTaskDelete = (index) => {
        // Clone the original array
        let temp = [...cardData];
        // Remove the task at the specified index
        temp.splice(index, 1);
        // Update the state to trigger a re-render
        setCardData(temp);
        list.current?.prepareForLayoutAnimationRender();
        // After removing the item, we can start the animation.
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    const onSubTaskComplete = (taskIndex, subtaskIndex) => {
        // Clone the original array
        let temp = [...cardData];
        // Toggle the 'done' property of the task at the specified index
        temp[taskIndex].subtasks[subtaskIndex].done = !temp[taskIndex].subtasks[subtaskIndex].done;
        if(!temp[taskIndex].subtasks.every(item => item.done)) {
            temp[taskIndex].done = false;
        }
        // Sort the tasks so that completed tasks appear at the end
        temp[taskIndex].subtasks.sort((a, b) => a.done - b.done);
        // Update the state to trigger a re-render
        setCardData(temp);
    }

    const onSubTaskDelete = (taskIndex, subtaskIndex) => {
        // Clone the original array
        let temp = [...cardData];
        // Remove the task at the specified index
        temp[taskIndex].subtasks.splice(subtaskIndex, 1);
        // Update the state to trigger a re-render
        setCardData(temp);
        list.current?.prepareForLayoutAnimationRender();
        // After removing the item, we can start the animation.
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    return (
        <FlashList
            data={cardData}
            ref={list}
            horizontal={false}
            renderItem={({ item, index }) => (
                <Task_Prev_Card task={item} taskIndex={index} 
                onComponentOpen={onComponentOpen} 
                onTaskComplete={onTaskComplete} 
                onTaskDelete={onTaskDelete}
                onSubTaskComplete={onSubTaskComplete}
                onSubTaskDelete={onSubTaskDelete}
                />
            )}
            estimatedItemSize={cardData.length}
            ListHeaderComponent={() => (
                <View className='flex flex-row justify-between items-center mx-3'>
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
        category: 'Self Growth',
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
        category: 'Home',
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
        category: 'Study',
        opened: false,
        subtasks: [],
        done: false,
    },
    {
        date: 'Nov 1',
        title: 'Prepare for the OS exam',
        opened: false,
        category: 'Study',
        subtasks: [],
        done: true,
    },
    {
        date: 'Nov 1',
        title: 'Prepare for the ESE exam',
        category: 'Study',
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
    },
    {
        date: 'Nov 1',
        title: 'Prepare for the MSE exam',
        category: 'Study',
        opened: false,
        subtasks: [],
        done: true,
    },
    {
        date: 'Nov 1',
        title: 'Prepare for the DSA exam',
        category: 'Study',
        opened: false,
        subtasks: [],
        done: true,
    }
]
