import { Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Header, } from "react-native-elements";
import { Scale } from './Dimension'
const { height, width } = Dimensions.get('screen')

const AppHeader = (props: any) => {
  return (
    <View>
    <MyStatusBar
        backgroundColor={'#fff'}
        barStyle="light-content"
      />

      <Header
        leftComponent={
          <View style={styles.row}>
            <TouchableOpacity onPress={props.back}>
              {props.left}
            </TouchableOpacity>
          </View>
        }
        centerComponent={
          <Text style={styles.referals}>
            {props.center}
          </Text>
        }
        rightComponent={
          props.right
        }

        containerStyle={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', backgroundColor: "#fff", borderBottomColor: "#fff" }}
      />
    </View>
  );
};

export default AppHeader;
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
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    width: '250%'
  },
  referals: {
    fontSize: Scale(14),
    marginLeft: Scale(9),
    color: "#000"
  },
});
