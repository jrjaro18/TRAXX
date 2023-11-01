import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Card, CardBackground, ScrollView, Progress } from 'tamagui'
import { CardFooter } from '@tamagui/card'

const Task_Category_Card = (card) => {
    const { title, tasks, progress, image } = card.card
    return (
        <TouchableOpacity>
            <Card
                height={'$13'}
                width={'$13'}
                padded
                borderRadius={'$8'}
                overflow={'hidden'}
            >
                <CardBackground
                    borderRadius={'$5'}
                >
                    {/* blur the image */}
                    <ImageBackground
                        source={image}
                        style={{ flex: 1, opacity: 0.8 }}
                        resizeMode='cover'
                        blurRadius={0}
                    />
                </CardBackground>
                <View>
                    <View>
                        <Text className='tracking-wide text-base font-medium text-left text-slate-900'>
                            {title}
                        </Text>
                        <Text className='tracking-wider text-xs text-left text-blue-950 '>
                            {tasks} Tasks
                        </Text>
                    </View>
                </View>
                <CardFooter>
                    <View>
                        <Text className='text-blue-950 font-light text-sm tracking-wider'>
                            {progress}%
                        </Text>
                        <Progress size={'$2'} value={progress} height={'$0.5'} marginTop={'$2'} >
                            <Progress.Indicator animation="bouncy" backgroundColor={'$blue7Dark'} />
                        </Progress>
                    </View>
                </CardFooter>
            </Card>
        </TouchableOpacity>
    )
}

export default Task_Category_Card

