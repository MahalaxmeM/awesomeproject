import { Dimensions, Platform, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, ListItem, Badge, Avatar } from "react-native-elements";
import { Scale } from './Dimension'
const { height, width } = Dimensions.get('screen')

const CardComponent = (props: any) => {
    const [item, setItem] = useState([])
    const [isPlaying, setIsplaying] = useState(false)
    useEffect(() => {
        setItem(props?.item)
    }, []);


    return (
        <>
            <View style={{ paddingHorizontal: Scale(15) }}>
                <Card containerStyle={styles.card}>
                    <ListItem key={props?.index} containerStyle={{ paddingVertical: Scale(0), backgroundColor: '#fff', borderRadius: 15 }}>
                        <Badge value={props?.index}
                            textStyle={styles.badgecard}
                        />

                        <ListItem.Content style={styles.content}>
                            <ListItem.Title style={styles.title}>{props?.title}</ListItem.Title>
                            <ListItem.Subtitle style={styles.subtitle}>{props?.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        <TouchableOpacity onPress={() => setIsplaying(!isPlaying)}>
                            <Avatar size={Scale(40)} source={item === props?.item && isPlaying ? require('../assets/pause.png') : require('../assets/player.png')} />
                        </TouchableOpacity>
                    </ListItem>
                </Card>
            </View>
        </>

    );
};

export default CardComponent;

const styles = StyleSheet.create({
    ListItem: {
        backgroundColor: 'red'
    },
    title: {
        color: 'black',
        fontSize: Scale(11),
        fontWeight: '700',
    },
    subtitle: {
        marginTop: Scale(10),
        color: '#D3D3D3',
        fontSize: Scale(10),
    },
    index: {
        color: '#d8d8d8',
        fontSize: Scale(18),
    },
    content: {
        width: width,
        marginLeft: Scale(10)
    },
    card: {
        width: '100%',
        shadowOpacity: 0.4,
        elevation: 10,
        alignSelf: 'center',
        borderRadius: Scale(20),
        padding: Scale(20),
        shadowColor: '#d8d8d8',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 10,
        backgroundColor: '#fff',
        borderColor: 'transparent'
    },
    badgecard: {
        backgroundColor: '#fff',
        borderColor: 'transparent',
        color: '#d8d8d8',
        fontSize: Scale(22),
        height: Scale(50),
        marginTop:Scale(10)
    }
});
