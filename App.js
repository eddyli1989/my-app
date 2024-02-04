import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PaperProvider } from 'react-native-paper';
import  HomeScreen from './screens/main'

const Tab = createBottomTabNavigator();

// add icon to tab
function MyTabs() {
    return (
        <NavigationContainer tabBarOptions={{
            activeTintColor: 'tomato', //当前项目激活后的颜色
            inactiveTintColor: 'gray', //未激活的颜色
        }}>

            <Tab.Navigator>

                <Tab.Screen name="首页" component={HomeScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" color={color} size={size} / >
                    ),
                    }}
                />

                <Tab.Screen name="社区" component={SocialScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="aperture-outline" color={color} size={size} />
                    ),
                }} />

                <Tab.Screen name="我的" component={SettingsScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-outline" color={color} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function SocialScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>社区!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>我!</Text>
        </View>
    );
}

export default function App() {
  return (
      <PaperProvider>
      <View>
        <StatusBar backgroundColor="blue" barStyle='light-content' />
        </View>
          <MyTabs />
        </PaperProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
