import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView, Platform, Image, Dimensions, StatusBar, SafeAreaView } from "react-native";
import { Divider, Icon } from "react-native-elements";
import AppHeader from "./Components/AppHeader";
import { Scale } from "./Components/Dimension";
import CardComponent from "./Components/CardComponent";
import VideoPlayerCustom from "./Components/VideoPlayerCustom";
const { height, width } = Dimensions.get('screen')
import VideoPlayer from 'react-native-video-player';
const WelcomeScreen = ({ navigation }: any) => {
    const [subArray, setsubArray] = useState([])
    const [selectedBar, setselectedBar] = useState()
    const [selectedBarName, setselectedBarName] = useState('Course')
    const [barlist, setbarList] = useState([
        { name: 'About', key: 1 },
        { name: 'Course', key: 2 },
        { name: 'Reviews', key: 3 },
    ])

    const [Array, setArray] = useState([
        { name: 'Star1', key: 1 },
        { name: 'Star2', key: 2 },
        { name: 'Star3', key: 3 },
        { name: 'Star4', key: 4 },
        { name: 'Star5', key: 5 },
    ])
    const [cost, setCost] = useState('299.50')
    const [creator, setcreator] = useState('Robert Fox')
    const [host, sethost] = useState('AB Academy')

    const handleResult = (item: any) => {

        setsubArray(item[0].videos)
    }
    const renderItem = (item: any, index: any) => {

        return (
            <View>
                <CardComponent
                    title={item.title}
                    subtitle={item.subtitle}
                    index={index}
                    item={item}
                />
            </View>
        )
    }

    const Welcome = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://mocki.io/v1/66fd5448-62d9-492a-aaf1-25443d2d8b1a", requestOptions)
            .then(response => response.json())
            .then(result => handleResult(result.categories))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        Welcome()
    }, []);
    return (
        <>
            <MyStatusBar
                backgroundColor={'#fff'}
                barStyle="light-content"
            />
            <View style={styles.container}>

                <AppHeader
                    center={'Course Detail'}
                    left={
                        <View >
                            <Image style={styles.icon} resizeMode='contain' source={require('./assets/chevron.png')} />
                        </View>
                    }
                    right={
                        <View>
                            <Image style={styles.icon} resizeMode='contain' source={require('./assets/heart.png')} />
                        </View>

                    } />
                <View style={{ borderRadius: Scale(15) }}>
                    <View style={{margin:Scale(25)}}>
                    <VideoPlayer
                        video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        controls={true}
                        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"


                    />
                    </View>
                </View>
                <View>
                    <View style={{ marginHorizontal: Scale(20), paddingBottom: Scale(10) }}>
                        <Text style={styles.title}>Web Development Course</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', marginHorizontal: Scale(20), }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={styles.createdby}>4.8</Text>
                            <FlatList
                                data={Array}
                                horizontal
                                renderItem={({ item, index }) => (
                                    <View style={{ alignContent: 'center', bottom: Scale(5), justifyContent: 'center', alignSelf: 'center' }}>
                                        <Image style={styles.image} resizeMode='contain' source={item.status ? require('./assets/starfilled.png') : require('./assets/star-unfilled.png')} />
                                    </View>
                                )

                                }
                            />
                            <Text style={styles.noofReviewer}>(254)</Text>
                        </View>
                        <View>
                            <Text style={styles.dot}>.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ alignContent: 'center', bottom: Scale(3), justifyContent: 'center', alignSelf: 'center' }}>
                                <Image style={{ height: Scale(12), width: Scale(12) }} resizeMode='contain' source={require('./assets/clock.png')} />
                            </View>
                            <Text style={styles.noofReviewer}>1 hr 30 mins</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', marginHorizontal: Scale(20), paddingBottom: Scale(10) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={styles.createdby}>Created by</Text>
                            <Text style={styles.hostedby}>{creator}</Text>
                        </View>
                        <View>
                            <Text style={styles.dot}>.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={styles.createdby}>Hosted by</Text>
                            <Text style={styles.hostedby}>{host}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={barlist}
                        horizontal
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => {
                                setselectedBar(item)
                                setselectedBarName(item.name)
                            }}>
                                <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={[item === selectedBar ? styles.selectedbarText : styles.barText]}>{item.name}</Text>
                                    <Divider style={[item === selectedBar ? styles.selecteddivider : styles.divider]} />
                                </View>
                            </TouchableOpacity>
                        )

                        }
                    />
                </View>
                {selectedBarName === 'Course' ?
                    <View style={styles.scrollContainer}>
                        <View style={{ marginHorizontal: Scale(20), paddingBottom: Scale(10) }}>
                            <Text style={styles.title}>Course Content</Text>
                        </View>
                        <FlatList
                            data={subArray}
                            renderItem={({ item, index }) => renderItem(item, index)}
                        />


                    </View>
                    : null}
                {selectedBarName === 'About' ?
                    <View style={styles.scrollContainer}>
                        <View style={{ marginHorizontal: Scale(20), paddingBottom: Scale(10) }}>
                            <Text style={styles.title}>About</Text>
                            <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.noofReviewer}>Web Development course</Text>
                            </View>
                        </View>


                    </View>
                    : null}
                {selectedBarName === 'Reviews' ?
                    <View style={styles.scrollContainer}>
                        <View style={{ marginHorizontal: Scale(20), paddingBottom: Scale(10) }}>
                            <Text style={styles.title}>Reviews</Text>
                            <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.noofReviewer}>No Reviews Yet</Text>
                            </View>
                        </View>


                    </View>
                    : null}
                <View style={styles.bottomContainer}>
                    <View style={{ flex: 1, marginVertical: Scale(20), flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{
                            alignItems: 'center',
                            alignSelf: 'center',
                            alignContent: 'center',
                            marginLeft: Scale(40)
                        }}>
                            <Text style={styles.const}>${cost}</Text>
                        </View>
                        <TouchableOpacity style={styles.box}>
                            <Text style={styles.buyNow}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </>


    );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? Scale(0) : Scale(0)
const APPBAR_HEIGHT = Platform.OS === 'ios' ? height * 0.06 : height * 0

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[statusBarStyle.statusBar, { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
    </View>
)

const statusBarStyle = StyleSheet.create({
    statusBar: {
        height: APPBAR_HEIGHT,
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        color: '#000'
    },
    scrollContainer: {
        flex: 1,
        marginTop: Scale(15)
    },
    title: {
        color: 'black',
        fontSize: Scale(14),
        fontWeight: '700',
    },
    createdby: {
        color: 'black',
        fontSize: Scale(10),
        fontWeight: '700',
        marginRight: Scale(3)
    },
    noofReviewer: {
        color: '#d8d8d8',
        fontSize: Scale(10),
        fontWeight: '700',
        marginLeft: Scale(3)
    },
    hostedby: {
        color: '#A020F0',
        fontSize: Scale(10),
        marginRight: Scale(3)
    },
    barText: {
        color: '#d8d8d8',
        fontSize: Scale(12),
    },
    selectedbarText: {
        color: '#A020F0',
        fontSize: Scale(12),
    },
    image: {
        height: Scale(10),
        width: Scale(10),

    },
    icon: {
        height: Scale(30),
        width: Scale(30),

    },
    dot: {
        color: '#000',
        fontSize: Scale(15),
        fontWeight: 'bold',
        bottom: Scale(10),
        marginHorizontal: Scale(5)

    },
    box: {
        paddingHorizontal: Scale(20),
        backgroundColor: '#A020F0',
        borderRadius: Scale(10),
        marginRight: Scale(20)
    },
    const: {
        color: 'black',
        fontSize: Scale(20),
        fontWeight: '700',
    },
    buyNow: {
        marginVertical: Scale(15),
        marginHorizontal: Scale(30),
        color: '#fff',
        fontSize: Scale(12),
        fontWeight: '600',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1000,
        bottom: Platform.OS === 'ios' ? '10%' : '8%',
        shadowColor: '#d8d8d8',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,


    },
    divider: {
        marginVertical: Scale(10),
        backgroundColor: '#d8d8d8',
        height: Scale(0.2),
        width: '100%',
        opacity: 0.2
    },
    selecteddivider: {
        marginVertical: Scale(10),
        backgroundColor: '#A020F0',
        height: Scale(2),
        width: '100%',
        opacity: 1
    },
    bottomtabContainer: {
        alignSelf: 'flex-end'
    }
})
export default WelcomeScreen;