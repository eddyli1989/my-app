/* 活动详情页面 */

import { StyleSheet, View, Image } from 'react-native';
import * as React from 'react';
import {Divider, Text } from 'react-native-paper';

const MyComponent = () => (
    <View style={styles.container}>
        <Image style={styles.imageView} source={{ uri: 'http://s8aeddyni.hn-bkt.clouddn.com/ski1.jpg' }} />
        <Divider />
        <Text>飞驰吧少年🏂滑雪少年营火热招募中，惊喜价429元（原价598）</Text>
        <Text style ={{color:'red'}}>￥429</Text>
        <View style={{ flexDirection: 'row' }}>
            <Text >报名：2024/02/04 00:00 - 2024/02/08 23:59</Text>
            <Text >地址：西安热血奇迹</Text>
        </View>
        <Divider />
    </View>
);

export default function ProductDetailsScreen() {
    return (
        <View>
            < MyComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
    }
});
