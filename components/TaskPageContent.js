import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, CardBackground } from 'tamagui'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const TaskPageContent = () => {
    return (
        <View>
            <View className='flex flex-row justify-between items-center mx-2'>
                <Text className='text-blue-950 font-light text-xl tracking-wider'>
                    Today
                </Text>
                <Text className='text-blue-950 text-sm tracking-wider'>
                    Remaining: 10
                </Text>
            </View>
            <View className='mt-4 relative'>
                <Card
                    borderRadius={'$4'}
                    minHeight={'$9'}
                    padded
                >
                    <CardBackground
                        backgroundColor={'white'}
                        borderRadius={'$3.5'}
                    />
                    <View className='flex items-start flex-row justify-between'>
                        {/* Done */}
                        <TouchableOpacity className='rounded-full p-1 bg-gray-200 mt-1'>
                            <MaterialIcons name="done" size={20} color="black" />
                        </TouchableOpacity>
                        {/* Task */}
                        <View>
                            <Text className='w-56 text-base text-justify tracking-wider text-blue-950'>
                                Buy Cake and Candles for Birthday.
                            </Text>
                        </View>
                        {/* Date */}
                        <View>
                            <Text className='text-sm font-semibold text-gray-500 mt-1'>
                                Nov 1
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity className='absolute bottom-3 right-3'>
                        <Ionicons name="chevron-down-outline" size={24} color="gray" />
                    </TouchableOpacity>
                </Card>
            </View>
            
            <View className='mt-4 relative'>
                <Card
                    borderRadius={'$4'}
                    padded
                >
                    <CardBackground
                        backgroundColor={'$green5Light'}
                        // backgroundColor={'white'}
                        borderRadius={'$3.5'}
                    />
                    <View className='flex items-start flex-row justify-between'>
                        {/* Done */}
                        <TouchableOpacity className='rounded-full p-1 bg-green-400 mt-1'>
                            <MaterialIcons name="done" size={20} color="white" />
                        </TouchableOpacity>
                        {/* Task */}
                        <View>
                            <Text className='w-56 text-base text-justify tracking-wider text-blue-950'>
                                Buy Cake and Candles for Birthday
                                and also buy some gifts for her.
                            </Text>
                        </View>
                        {/* Date */}
                        <View>
                            <Text className='text-sm font-semibold text-gray-700 mt-1'>
                                Nov 1
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity className='absolute bottom-3 right-3'>
                        <Ionicons name="chevron-down-outline" size={24} color="gray" />
                    </TouchableOpacity>
                </Card>
            </View>

            <View className='mt-4 relative'>
                <Card
                    borderRadius={'$4'}
                    padded
                >
                    <CardBackground
                        backgroundColor={'$green5Light'}
                        // backgroundColor={'white'}
                        borderRadius={'$3.5'}
                    />
                    <View className='flex items-start flex-row justify-between'>
                        {/* Done */}
                        <TouchableOpacity className='rounded-full p-1 bg-green-400 mt-1'>
                            <MaterialIcons name="done" size={20} color="white" />
                        </TouchableOpacity>
                        {/* Task */}
                        <View>
                            <Text className='w-56 text-base text-justify tracking-wider text-blue-950'>
                                Buy Cake and Candles for Birthday
                                and also buy some gifts for her.
                            </Text>
                        </View>
                        {/* Date */}
                        <View>
                            <Text className='text-sm font-semibold text-gray-700 mt-1'>
                                Nov 1
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity className='absolute bottom-3 right-3'>
                        <Ionicons name="chevron-down-outline" size={24} color="gray" />
                    </TouchableOpacity>
                </Card>
            </View>

            <View className="mb-10" />
        </View>
    )
}

export default TaskPageContent