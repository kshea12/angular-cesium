import {
  ArcGisMapServerImageryProvider,
  WebMapTileServiceImageryProvider,
  WebMapServiceImageryProvider,
  SingleTileImageryProvider,
  Scene,
  BingMapsImageryProvider,
  GoogleEarthEnterpriseMapsProvider,
  MapboxImageryProvider,
  UrlTemplateImageryProvider,
} from 'cesium';

export enum MapLayerProviderOptions {
  ArcGisMapServer = ArcGisMapServerImageryProvider,
  WebMapTileService = WebMapTileServiceImageryProvider,
  MapTileService = Scene.createTileMapServiceImageryProvider,
  WebMapService = WebMapServiceImageryProvider,
  SingleTileImagery = SingleTileImageryProvider,
  OpenStreetMap = Scene.createOpenStreetMapImageryProvider,
  BingMaps = BingMapsImageryProvider,
  GoogleEarthEnterpriseMaps = GoogleEarthEnterpriseMapsProvider,
  MapBox = MapboxImageryProvider,
  UrlTemplateImagery = UrlTemplateImageryProvider,
  OFFLINE = null,
}
