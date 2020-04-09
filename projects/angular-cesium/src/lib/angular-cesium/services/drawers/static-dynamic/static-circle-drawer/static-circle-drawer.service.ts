import { Injectable } from '@angular/core';
import { CesiumService } from '../../../cesium/cesium.service';
import { StaticPrimitiveDrawer } from '../static-primitive-drawer/static-primitive-drawer.service';
import { CircleGeometry } from 'cesium';

/**
 *  This drawer is responsible for creating the static version of the circle component.
 */
@Injectable()
export class StaticCircleDrawerService extends StaticPrimitiveDrawer {
  constructor(cesiumService: CesiumService) {
    super(CircleGeometry, cesiumService);
  }
}
