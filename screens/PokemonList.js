import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, View } from 'react-native';
import CardContainer from '../components/CardContainer';

const PokemonList = () => {

    const [query, setQuery] = useState("");
    const [pokeball, setPokeball] = useState(false);

    const handleSearch = (value) => {
        setQuery(value);
    }

    return (
        <SafeAreaView className="px-2 mb-10 mt-10">
            <View className="h-full">
                <View className="flex space-y-4 pb-3">
                    <Text className="text-2xl font-extrabold text-center">List of Pokemons</Text>
                    <TextInput placeholder='Search your pokemon...'
                        className="px-4 py-2 w-[90%] border rounded-lg mx-5"
                        onChangeText={handleSearch} value={query} />
                </View>

                <View>
                    <CardContainer query={query} />
                </View>
            </View>

            <View className="mx-10">
                <View className="flex items-center absolute bottom-0 px-28 py-2 rounded-xl border bg-slate-50">
                    <Image className="w-20 h-20 rounded-full"
                        source={{ uri: "https://i.pinimg.com/originals/09/da/92/09da926c2b94d95008a9e3b2f60bfdd3.png" }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PokemonList