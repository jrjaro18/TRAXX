import { View, Text } from 'react-native'
import { Card, CardBackground, CardFooter, Image, Separator, Progress } from 'tamagui'
import React from 'react'

const TaskStatCard = ({cardDetail}) => {
    // console.log(cardDetail)
    return (
        <View>
            <View>
                <Card
                    height={'$11.5'}
                    width={'$20'}
                    borderRadius="$6"
                    padded
                >
                    <CardBackground
                        borderRadius="$5"
                        backgroundColor={'#ECF7FF'}
                    />
                    <View>
                        <Text className='text-blue-950 text-lg font-light tracking-wide'>
                            {cardDetail.title}
                        </Text>
                        <View className='flex flex-row justify-between items-center'>

                            <Image
                                source={require('../assets/traxx.png')}
                                className=' h-14 w-14'
                                resizeMode='contain'

                            />
                            <Text className='text-blue-950 text-5xl font-light tracking-wide mt-2 p-2'>
                                {cardDetail.value}
                            </Text>
                        </View>
                    </View>
                </Card>
            </View>
        </View>
    )
}

export default TaskStatCard