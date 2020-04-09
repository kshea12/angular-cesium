import { Cartesian3 } from '../../angular-cesium/models/cartesian3';
import { Cartesian2 } from '../../angular-cesium/models/cartesian2';
import { Cartesian2 as CesiumCartesian2 } from 'cesium';
import { Cartesian3 as CesiumCartesian3 } from 'cesium';
import { LabelStyle as CesiumLabelStyle } from 'cesium';
import { Color, HeightReference, HorizontalOrigin, VerticalOrigin } from 'cesium';

export interface LabelStyle {
  show?: boolean;
  font?: string;
  style?: any;
  fillColor?: any;
  outlineColor?: any;
  backgroundColor?: any;
  backgroundPadding?: any;
  showBackground?: boolean;
  scale?: number;
  distanceDisplayCondition?: any;
  heightReference?: any;
  horizontalOrigin?: any;
  eyeOffset?: Cartesian3;
  position?: Cartesian3;
  pixelOffset?: Cartesian2;
  pixelOffsetScaleByDistance?: any;
  outlineWidth?: any;
  scaleByDistance?: any;
  translucencyByDistance?: any;
  verticalOrigin?: any;
  disableDepthTestDistance?: number;
}

export interface LabelProps {
  text: string;
  show?: boolean;
  font?: string;
  style?: any;
  fillColor?: any;
  outlineColor?: any;
  backgroundColor?: any;
  backgroundPadding?: any;
  showBackground?: boolean;
  scale?: number;
  distanceDisplayCondition?: any;
  heightReference?: any;
  horizontalOrigin?: any;
  eyeOffset?: Cartesian3;
  position?: Cartesian3;
  pixelOffset?: Cartesian2;
  pixelOffsetScaleByDistance?: any;
  outlineWidth?: any;
  scaleByDistance?: any;
  translucencyByDistance?: any;
  verticalOrigin?: any;
  disableDepthTestDistance?: number;
}

export const defaultLabelProps: LabelProps = {
  backgroundColor: new Color(0.165, 0.165, 0.165, 0.7),
  backgroundPadding: new CesiumCartesian2(25, 20),
  distanceDisplayCondition: undefined,
  fillColor: Color.WHITE,
  font: '30px sans-serif',
  heightReference: HeightReference.NONE,
  horizontalOrigin: HorizontalOrigin.LEFT,
  outlineColor: Color.BLACK,
  outlineWidth: 1.0,
  pixelOffset: CesiumCartesian2.ZERO,
  pixelOffsetScaleByDistance: undefined,
  scale: 1.0,
  scaleByDistance: undefined,
  show: true,
  showBackground: false,
  style: CesiumLabelStyle.FILL,
  text: '',
  translucencyByDistance: undefined,
  verticalOrigin: VerticalOrigin.BASELINE,
  eyeOffset: CesiumCartesian3.ZERO,
  disableDepthTestDistance: 0,
};
