import React, { useRef, useState } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Dimensions,
    ActivityIndicator,
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import { Scale } from './Dimension';
const screen = Dimensions.get('window');

interface myProps {
    loading: boolean;
    thumbnail?: any;
    videoUri?: any;
    containerStyle?: any;
}

export default function VideoPlayerCustom(props: myProps) {

    const [videoBuffering, setVideoBuffering] = useState(true)
    let videoPlayerRef = useRef(null); // ref => { current: null }

    const VIDEO_QUALITY = ['320p', '480p', '720p', '180p']

    return (
        <TouchableWithoutFeedback
            // onPress={this.events.onScreenTouch}
            style={styles.container}
        >
            <View style={styles.container}>

                {videoBuffering ?
                    <View style={styles.loaderView}>
                        <ActivityIndicator
                            animating
                            color={"blue"}
                            size="large"
                        />
                    </View> : null
                }
                <VideoPlayer
                    {...props}
                    ref={videoPlayerRef}
                    loop={false}
                    controls={false}
                    onPlayPress={() => console.log('kksbxsJBCC')}
                    playInBackground={false}
                    error={() => alert('Somethig Went Wrong...!!!')}
                    IsQualityArray={'320p'}
                    autoConnectionStatus={() => { setVideoBuffering(true) }}
                    IsAutoConnectionStatus={() => setVideoBuffering(true)}
                    onLoadStart={() => { setVideoBuffering(true) }}
                    onReadyForDisplay={() => { setVideoBuffering(false) }}
                    video={props.videoUri}
                    onHideControls={() => console.log('VIDEO Hide ARR ===>>>>')}
                    onTouchMove={(event: any) => { console.log('Video onTOuch Move ==>>>', event) }}
                    onMagicTap={() => { console.log('Video onMagicTap ==>>>') }}
                    customStyles={{
                        controls: {
                            backgroundColor: 'transparent'
                        },
                        seekBarProgress: {
                            backgroundColor: 'blue'
                        }, seekBarKnob: {
                            backgroundColor: 'blue'
                        }
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: '#000',
        flex: 1,
        // height: screen.height / 5,
        borderRadius: Scale(20),
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
    loaderView: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataFoundView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    noDatFoundTxt: {
        alignSelf: 'center',
        marginTop: Scale(20),
        marginBottom: Scale(20),
        fontSize: Scale(15),
        color: 'black',
        fontWeight: '700'
    }
})