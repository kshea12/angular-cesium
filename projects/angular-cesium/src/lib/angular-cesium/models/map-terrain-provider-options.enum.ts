import {
  ArcGISTiledElevationTerrainProvider,
  CesiumTerrainProvider,
  EllipsoidTerrainProvider,
  GoogleEarthEnterpriseTerrainProvider,
  VRTheWorldTerrainProvider,
  createWorldTerrain
} from 'cesium';

export enum MapTerrainProviderOptions {
  CesiumTerrain = CesiumTerrainProvider,
  ArcGISTiledElevation = ArcGISTiledElevationTerrainProvider,
  GoogleEarthEnterprise = GoogleEarthEnterpriseTerrainProvider,
  VRTheWorld = VRTheWorldTerrainProvider,
  Ellipsoid = EllipsoidTerrainProvider,
  WorldTerrain = createWorldTerrain
}
