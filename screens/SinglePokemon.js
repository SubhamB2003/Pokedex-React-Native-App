import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from "react-native-vector-icons";


const SinglePokemon = () => {

    const { params: { url } } = useRoute();
    const [pokemon, setPokemon] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const FetchPokemons = async () => {
            const res = await axios.get(`${url}`);
            setPokemon(res.data);
        }
        FetchPokemons();
    }, []);

    return (
        <>
            <View className="bg-white">
                <Image className="w-full h-96  object-fill top-0"
                    source={{ uri: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg` }} />
                <TouchableOpacity onPress={navigation.goBack}
                    className="absolute top-14 left-6 p-2 bg-black rounded-full">
                    <AntDesign name="arrowleft" color="#00CCBB" size={25} />
                </TouchableOpacity>
                <Text className="text-2xl font-extrabold absolute top-80 left-6 text-yellow-400">{pokemon?.name?.toUpperCase()}</Text>
            </View>

            <View className="bg-gray-50 px-7 py-5">
                <View className="flex-row justify-between">
                    <View>
                        <Text className="text-xl font-semibold text-center">Type</Text>
                        <Text className="text-base text-center">{pokemon?.types?.[0].type?.name}</Text>
                    </View>
                    <View>
                        <Text className="text-xl font-semibold text-center">Weight</Text>
                        <Text className="text-base text-center">{pokemon.weight}</Text>
                    </View>
                    <View>
                        <Text className="text-xl font-semibold text-center">Height</Text>
                        <Text className="text-base text-center">{pokemon.height}</Text>
                    </View>
                </View>
            </View>

            <Text className="text-center font-semibold text-3xl pt-4 text-green-400 bg-white">Abilities</Text>
            <ScrollView className="space-x-2 py-4 bg-gray-100 h-6 px-6"
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {pokemon?.abilities?.map((ability, i) =>
                    <View className="rounded-lg p-2 pr-4 border w-28 h-12 flex justify-center items-center" key={i}>
                        <Text className="text-base text-center">{ability?.ability?.name}</Text>
                    </View>
                )}
            </ScrollView>

            <Image className="w-24 h-24 rounded-full absolute bottom-6 ml-36"
                source={{ uri: "https://www.pngitem.com/pimgs/m/107-1075267_open-pokeball-png-pokemon-ball-open-png-transparent.png" }} />
        </>
    )
}

export default SinglePokemon