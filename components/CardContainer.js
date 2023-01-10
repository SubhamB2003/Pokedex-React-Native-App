import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const CardContainer = ({ query }) => {

    const [pokemons, setPokemons] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const FetchPokemons = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
            setPokemons(res.data.results);
        }
        FetchPokemons();
    }, []);

    useLayoutEffect(() => {

    }, [pokemons]);

    return (
        <>
            {pokemons.length === 0 &&
                <View className="flex justify-center align-middle items-center pt-4">
                    <Text className="text-center text-xl font-semibold text-gray-500">Loading...</Text>
                </View>
            }
            <ScrollView className="mx-4 pb-5 pt-2" showsVerticalScrollIndicator={false}>
                {pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(query.toLowerCase())).map((pokemon) => {
                    return (
                        <TouchableOpacity className="flex-row space-x-5 items-center mb-4 border rounded-xl p-1" key={pokemon.name}
                            onPress={() => navigation.navigate("Pokemon", { url: pokemon.url })}>
                            <Image className="w-28 h-28 object-cover rounded-l-xl"
                                source={{ uri: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg` }} />
                            <Text className="text-xl font-semibold flex-wrap">{pokemon.name.toUpperCase()}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </>
    )
}

export default CardContainer