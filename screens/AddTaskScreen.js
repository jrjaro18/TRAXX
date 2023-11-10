import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useMemo } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Select, LinearGradient, YStack, Sheet, Adapt, Separator, ScrollView } from 'tamagui';

const AddTaskScreen = () => {
    const navigation = useNavigation();
    const [cat, setCat] = React.useState('');
    const [subTask, setSubTask] = React.useState([]);
    console.log("add task screen rendered")
    return (
        <ImageBackground
            source={require('../assets/icon.png')}
            style={{flex: 1}}
            resizeMode={'cover'}
            blurRadius={50}
        >
            <ScrollView>
                <View className="p-2">
                    <View className=''>
                        <View className="flex flex-row items-center justify-center gap-x-10 mt-2">
                            <TouchableOpacity className="p-1 rounded-xl absolute top-1 left-0"
                                onPress={() => navigation.goBack()}
                            >
                                <Feather name="chevron-left" size={20} color="black" />
                            </TouchableOpacity>
                            <View className="">
                                <Text className="text-3xl font-light text-center">
                                    Add Task
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View className="mt-5">
                        <View>
                            <TextInput className="bg-slate-950 rounded-lg px-3 py-2 mt-2 text-white h-14 font-light"
                                placeholder="Task Title"
                                placeholderTextColor={'#9CA3AF'}
                                cursorColor={'#9CA3AF'}
                            />
                        </View>
                        <View className="mt-3">
                            <Select
                                id="food"
                                value={cat}
                                onValueChange={setCat}
                                disablePreventBodyScroll
                            >
                                <Select.Trigger iconAfter={(<Feather name="chevron-down" size={20} color="white" />)}
                                    backgroundColor={'rgb(2 6 23)'}
                                    borderRadius={8}
                                    height="$5"
                                    elevation={3}
                                >
                                    <Select.Value color='white' placeholder="Categories" />
                                </Select.Trigger>

                                <Adapt when="sm" platform="touch">
                                    <Sheet
                                        modal
                                        dismissOnSnapToBottom
                                        animationConfig={{
                                            type: 'spring',
                                            damping: 20,
                                            mass: 1.2,
                                            stiffness: 250,
                                        }}
                                    >
                                        <Sheet.Frame backgroundColor={'$blue1Dark'} borderRadius={10} top={'30%'}>
                                            <Sheet.ScrollView>
                                                <Adapt.Contents />
                                            </Sheet.ScrollView>
                                        </Sheet.Frame>
                                        <Sheet.Overlay
                                            animation="lazy"
                                            enterStyle={{ opacity: 0 }}
                                            exitStyle={{ opacity: 0 }}
                                        />
                                    </Sheet>
                                </Adapt>

                                <Select.Content zIndex={200000}>
                                    <Select.ScrollUpButton
                                        alignItems="center"
                                        justifyContent="center"
                                        position="relative"
                                        width="100%"
                                        height="$3"
                                        backgroundColor={'$blue10Light'}
                                    >
                                        <YStack zIndex={10}>
                                            <Feather name="chevron-up" size={20} color="white" />
                                        </YStack>
                                    </Select.ScrollUpButton>

                                    <Select.Viewport
                                        // to do animations:
                                        animation="quick"
                                        animateOnly={['transform', 'opacity']}
                                        enterStyle={{ o: 0, y: -10 }}
                                        exitStyle={{ o: 0, y: 10 }}

                                    >
                                        <Select.Group>
                                            <Select.Label
                                                fontSize="$4"
                                                backgroundColor={'$blue1Dark'}
                                                color={'white'}
                                                borderBottomColor={'$blue7Light'}
                                                borderBottomWidth={1}
                                            >Select Anyone of The Following Categories:</Select.Label>
                                            {/* for longer lists memoizing these is useful */}
                                            {useMemo(
                                                () =>
                                                    items.map((item, i) => {
                                                        return (
                                                            <Select.Item
                                                                debug="verbose"
                                                                index={i}
                                                                key={item}
                                                                value={item.toLowerCase()}
                                                                backgroundColor={'$blue1Dark'}
                                                            >
                                                                <Select.ItemText
                                                                    color={'$blue10Light'}
                                                                >{item}</Select.ItemText>
                                                                <Select.ItemIndicator marginLeft="auto">
                                                                    <Feather name="check" size={24} color="white" />
                                                                </Select.ItemIndicator>
                                                            </Select.Item>
                                                        )
                                                    }),
                                                [items]
                                            )}
                                        </Select.Group>
                                        {/* Native gets an extra icon */}

                                    </Select.Viewport>

                                    <Select.ScrollDownButton
                                        alignItems="center"
                                        justifyContent="center"
                                        position="relative"
                                        width="100%"
                                        height="$3"
                                    >
                                        <YStack zIndex={10}>
                                            <Feather name="chevron-down" size={20} color="white" />
                                        </YStack>
                                    </Select.ScrollDownButton>
                                </Select.Content>
                            </Select>
                        </View>
                        <View className="mt-2">
                            {
                                subTask.map((item, index) => {
                                    return (
                                        <View className="flex flex-row items-center gap-x-3" key={index}>
                                            <TextInput className="bg-blue-50 opacity-40 border border-gray-400 rounded-lg px-3 py-2 w-5/6 text-black h-12 font-light"
                                                placeholder="SubTask Title"
                                                placeholderTextColor={'black'}
                                                cursorColor={'#9CA3AF'}
                                                onChangeText={(text) => {
                                                    const newSubTask = [...subTask];
                                                    newSubTask[index] = text;
                                                    setSubTask(newSubTask);
                                                }}
                                            />
                                            <TouchableOpacity
                                                className='px-2 py-2 mt-2 h-14'
                                                onPress={() => {
                                                    const newSubTask = [...subTask];
                                                    newSubTask.splice(index, 1);
                                                    setSubTask(newSubTask);
                                                }}
                                            >
                                                <Text className='text-white text-center text-base pt-2 font-semibold'>
                                                    <Ionicons name="trash-outline" size={22} color="darkred" />
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <View className="mt-3">
                            <TouchableOpacity
                                className='bg-slate-950 rounded-lg px-3 py-2 mt-2 h-14'
                                onPress={() => setSubTask([...subTask, ''])}
                            >
                                <Text className='text-white text-center text-base pt-2 font-semibold'>
                                    Enter A SubTask
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className='flex flex-row justify-between items-center mt-2'>
                            <View>
                                <Separator
                                    width={150}
                                    borderColor={'black'}
                                />
                            </View>
                            <View>
                                <Text className='text-gray-900'>
                                    OR
                                </Text>
                            </View>
                            <View>
                                <Separator
                                    width={150}
                                    borderColor={'black'}
                                />
                            </View>
                        </View>
                        <View className="mt-1">
                            <TouchableOpacity
                                className='bg-slate-950 rounded-lg px-3 py-2 mt-2 h-14'
                                onPress={() => {
                                    console.log(subTask);
                                }}
                            >
                                <Text className='text-white text-center text-base pt-2 font-semibold'>
                                    Add Task
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default AddTaskScreen

const items = [
    'HOME',
    'WORK',
    'SHOPPING',
    'STUDY',
    'TRAVEL',
    'HOBBIES',
    'PERSONAL',
    'FINANCE',
    'SELF-GROWTH',
    'OTHERS',
]