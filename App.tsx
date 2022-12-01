import { NavigationContainer } from '@react-navigation/native';
import React, {type PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/Screens/Welcome';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'welcome', headerShown: false}}
        
        />
       
      </Stack.Navigator>
  </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  logoText: {
    fontSize: 42,
    letterSpacing: 2,
    fontWeight: "bold",
    color: "#323441",
    marginTop: 15
  },
  logoView: {
    flex: 1
    },
  image: {
    width:Dimensions.get("screen").width, 
    height:Dimensions.get("screen").height
  }
});

export default App;
