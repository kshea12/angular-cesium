import { Injectable } from '@angular/core';
import { CesiumService } from '../../../cesium/cesium.service';
import { PrimitivesDrawerService } from '../../primitives-drawer/primitives-drawer.service';
import { PolylineCollection } from 'cesium'

/**
 *  This drawer is responsible for creating the dynamic version of the polyline component.
 */
@Injectable()
export class DynamicPolylineDrawerService extends PrimitivesDrawerService {
  constructor(cesiumService: CesiumService) {
    super(PolylineCollection, cesiumService);
  }
}
