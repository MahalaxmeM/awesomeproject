import {Dimensions} from 'react-native';
const {width, height, scale: deviceScale, fontScale} = Dimensions.get('window');
const baseWidth = 360;
const baseHeight = 700;
const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);
export const Scale = (size:any) => Math.ceil(size * scale);