import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuotesListScreen from './src/components/QuotesListScreen';
import GetQuoteScreen from './src/components/GetQuoteScreen';
import 'react-native-get-random-values';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Get Quote" component={GetQuoteScreen} />
        <Stack.Screen name="Saved Quotes" component={QuotesListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
