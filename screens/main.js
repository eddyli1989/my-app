/* 首页 */

import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './product_details';

const Stack = createNativeStackNavigator();

const LeftContent = props => <Avatar.Icon {...props} icon="ski" />

const MyComponent = ({ navigation }) => (
    <Card style={styles.card} >
        <Card.Title title="飞驰吧少年" subtitle="滑雪少年营火热招募" left={LeftContent} />
        {/* <Card.Content>
            <Text variant="bodyMedium">追风吧，少年们</Text>
        </Card.Content> */}
        <Card.Cover style = {{ borderRadius: 1 }} source={{ uri: 'http://cq.people.com.cn/NMediaFile/2020/1214/LOCAL202012141011000472579888734.jpg' }} />
        <Card.Actions>
            <Button onPress={() => navigation.navigate('Profile')}>参加</Button>
        </Card.Actions>
    </Card>
);

export default function HomeScreen() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{ headerShown : false }} name="Home" component={MyComponent} />
            <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProductDetailsScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
    },
});