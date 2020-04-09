import { Injectable } from '@angular/core';
import { CesiumService } from '../../cesium/cesium.service';
import { PrimitivesDrawerService } from '../primitives-drawer/primitives-drawer.service';
import { BillboardCollection } from 'cesium'

/**
 *  This drawer is responsible for drawing billboards as primitives.
 *  This drawer is more efficient than BillboardDrawerService when drawing dynamic billboards.
 */
@Injectable()
export class BillboardPrimitiveDrawerService extends PrimitivesDrawerService {
  constructor(cesiumService: CesiumService) {
    super(BillboardCollection, cesiumService);
  }
}
