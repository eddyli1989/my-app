/* 活动详情页面 */

import { StyleSheet, View, Image } from 'react-native';
import * as React from 'react';
import {Divider, Text } from 'react-native-paper';

const Details = () => (
    <View style={styles.container}>
        <Image style={styles.imageView} source={{ uri: 'http://s8aeddyni.hn-bkt.clouddn.com/ski1.jpg',}} />
        <Text>飞驰吧少年🏂滑雪少年营火热招募中，惊喜价429元（原价598）</Text>
        <Divider />
        <Text style ={{color:'red'}}>￥429</Text>
        <Divider />
        <View style={{ alignItems: 'stretch' }} >
            <Text  >
            {`
⏱️ 报名:2024/02/04 00:00 - 2024/02/08 23:59
📍 地址:西安热血奇迹
            `}
            </Text>
        </View>
       
    </View>
);

export default function ProductDetailsScreen() {
    return (
        <View>
            <Details />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch ',
    },
    imageView: {
        resizeMode:'contain',
        height: '65%',
        width: '100%'
    }
});
