import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';


const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView className="h-full">
            <View className="flex-1 items-center justify-center space-y-5">
                <Image className="w-full h-full object-cover"
                    source={{ uri: 'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg' }} />
                <Text className="font-bold text-3xl absolute text-yellow-400 top-8">Pokedex</Text>
                <Text className="font-bold text-base absolute text-gray-500 top-20">found pokemon details</Text>
                <View className="absolute space-x-4 flex-row bottom-52">
                    <TouchableOpacity onPress={() =>
                        navigation.navigate("Pokemons")}
                        className="w-20 h-10 bg-green-500 border-2 flex justify-center align-middle items-center rounded-lg">
                        <Text className="font-bold text-lg text-white">Go</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;