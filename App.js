import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import PokemonList from './screens/PokemonList';
import SinglePokemon from './screens/SinglePokemon';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pokemons" component={PokemonList}
            options={() => ({
              headerShown: false
            })} />
          <Stack.Screen name="Pokemon" component={SinglePokemon}
            options={() => ({
              headerShown: false
            })} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

